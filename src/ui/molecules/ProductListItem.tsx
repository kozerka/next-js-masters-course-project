import { CardImage } from "@/ui/atoms/CardImage";
import { CardDescription } from "@/ui/atoms/CardDescription";
import { type ProductsListItemFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductsListItemFragment;
};

export const ProductListItem = ({ product }: ProductListItemProps): JSX.Element => (
	<li className="relative rounded-xl border bg-white p-4">
		<CardImage id={product.id} alt={product?.name} src={product.images[0]?.url || ""} />

		<CardDescription product={product} />
	</li>
);
