import { Suspense } from "react";
import { type Metadata } from "next";
import { getListOfCategories } from "@/api/categories";
import { Loader } from "@/ui/atoms/Loader";
import { CategoryList } from "@/ui/organisms/CategoryList";

export const metadata: Metadata = {
	title: "Categories",
	description: "List of all categories",
	openGraph: {
		title: "Categories",
		description: "List of all categories",
	},
};

// export async function generateStaticParams() {
// 	const categories = await getListOfCategories();
// 	const paths = categories.data.map((category) => ({
// 		params: { name: category.slug },
// 	}));
// 	return paths;
// }

export default async function CategoriesPage() {
	const categoriesList = await getListOfCategories();
	if (!categoriesList || categoriesList.data.length === 0) return <p>No categories found.</p>;

	return (
		<section>
			<h1 className="mb-4 w-fit  p-1.5 text-2xl font-extrabold ">Categories</h1>
			<Suspense key="categories" fallback={<Loader />}>
				<CategoryList categories={categoriesList.data} />
			</Suspense>
		</section>
	);
}
