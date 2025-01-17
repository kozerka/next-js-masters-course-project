import { type Route } from "next";
import { Pagination } from "@/ui/molecules/Pagination";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCategoryProductsBySlug } from "@/api/categories";

type CategoriesNamePageProps = {
	params: {
		name: string;
		page: string;
	};
};

export const generateMetadata = async ({ params }: CategoriesNamePageProps) => {
	const category = await getCategoryProductsBySlug(params.name);
	if (!category) return { title: "Category" };
	return {
		title: category.name,
		description: category.description,
		openGraph: {
			title: category.name,
			description: category.description,
		},
	};
};

export default async function CategoriesNamePage({ params }: CategoriesNamePageProps) {
	const category = await getCategoryProductsBySlug(params.name);

	if (!category || category.products.length === 0) return <p>No products found.</p>;

	const take = 4;
	const pageNumber = params.page ? Number(params.page[0]) : 1;
	const totalPages = Math.ceil(category.products.length / take);

	// frontend pagination
	const slicedProducts = category.products.slice((pageNumber - 1) * take, pageNumber * take);

	return (
		<section>
			<div className="mb-4">
				<h1 className="mb-4 w-fit  text-2xl font-extrabold ">{category.name}</h1>
			</div>
			<ProductList products={slicedProducts} />
			<Pagination
				pageNumber={pageNumber}
				totalPages={totalPages}
				url={`/categories/${params.name}` as Route}
			/>
		</section>
	);
}
