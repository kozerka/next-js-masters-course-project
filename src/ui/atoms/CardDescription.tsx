import Link from "next/link";
import { type ProductsListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils/intl";
import { Rating } from "@/ui/atoms/Rating";

type CardDescriptionProps = {
	product: ProductsListItemFragment;
};

export const CardDescription = ({ product }: CardDescriptionProps): JSX.Element => (
	<div className="mt-2 flex flex-col ">
		<div className="m-2">
			<Link href={`/product/${product.id}`}>
				<h3 role="heading" className="font-semibold">
					{product.name}
				</h3>
			</Link>
			{product.categories && (
				<div className="badge badge-primary btn-outline badge-lg border-2">
					{product.categories.map((category) => category.name).join(", ")}
				</div>
			)}
			<div className="my-2">
				<Rating rating={product.rating || 0} />
			</div>
		</div>
		<div>
			{product.price && (
				<div
					data-testid="product-price"
					className="badge badge-lg badge-dark badge-outline bg-secondary absolute right-0 top-0 m-4 border-2 border-black text-white "
				>
					{formatMoney(product.price / 100)}
				</div>
			)}
		</div>
	</div>
);
