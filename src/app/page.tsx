import { type Metadata } from "next";
import { Suspense } from "react";
import { getCollectionsList } from "@/api/collections";
import { getPaginatedListOfProducts } from "@/api/products";
import { CollectionList } from "@/ui/organisms/CollectionList";
import { ProductList } from "@/ui/organisms/ProductList";
import { Loader } from "@/ui/atoms/Loader";
import { Hero } from "@/ui/molecules/Hero";

export const metadata: Metadata = {
	title: "Next.js 14 Masters - Home",
	description: "Welcome to the best shop ever!",
	openGraph: {
		title: "Next.js 14 Masters - Home",
		description: "Welcome to the best shop ever!",
	},
};

export default async function HomePage() {
	const products = await getPaginatedListOfProducts(8, 0);
	const collections = await getCollectionsList();

	if (!products || products.data.length === 0) return <p>No products found.</p>;
	if (!collections || collections.data.length === 0) return <p>No collections found.</p>;

	return (
		<section>
			<Hero />
			<h1 className="text-gradient mb-20   mb-4  bg-text-gradient text-center text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
				Check our New collections
			</h1>
			<CollectionList collections={collections.data} />
			<Suspense key="productsListHome" fallback={<Loader />}>
				<ProductList products={products.data} />
			</Suspense>
		</section>
	);
}
