import { Suspense } from "react";
import { getPaginatedListOfProductsBySearch } from "@/api/products";
import { Loader } from "@/ui/atoms/Loader";
import { ProductList } from "@/ui/organisms/ProductList";

type SearchPageProps = {
	searchParams: {
		query: string;
	};
};

export async function generateMetadata({ searchParams }: SearchPageProps) {
	return {
		title: `Search results for: ${searchParams.query}`,
		description: `Search results for: ${searchParams.query}`,
	};
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
	const products = await getPaginatedListOfProductsBySearch(searchParams.query);

	if (!products || products.data.length === 0) return <p>No products found.</p>;

	return (
		<section>
			<h1 className="mb-4 w-fit text-2xl font-extrabold ">
				Search results for: &quot;{searchParams.query}&quot;
			</h1>
			<Suspense key="searchPage" fallback={<Loader />}>
				<ProductList products={products.data} />
			</Suspense>
		</section>
	);
}
