"use client";
import { useFormStatus } from "react-dom";
import { addProductToCartAction } from "@/actions/cart";

type Props = {
	productId: string;
};

export const AddToCartButton = ({ productId }: Props) => {
	const { pending } = useFormStatus();

	return (
		<form className="mt-8 flex justify-end gap-4" action={() => addProductToCartAction(productId)}>
			<input type="hidden" name="productId" value={productId} />
			<button
				data-testid="add-to-cart-button"
				disabled={pending}
				className="btn btn-secondary mt-4 w-full rounded-md py-1 text-white transition-colors hover:bg-gray-700 disabled:cursor-wait"
			>
				Add to cart
			</button>
		</form>
	);
};
