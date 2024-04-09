"use client";
import { useTransition } from "react";
import { FaTrash } from "react-icons/fa6";
import { removeItemFromCart } from "@/actions/cart";

type RemoveButtonProps = {
	cartId: string;
	productId: string;
};

export const RemoveButton = ({ cartId, productId }: RemoveButtonProps) => {
	const [isPending, startTransition] = useTransition();
	return (
		<button
			className="text-red disabled:text-slate-400"
			disabled={isPending}
			onClick={() => {
				startTransition(async () => {
					await removeItemFromCart(cartId, productId);
				});
			}}
		>
			<FaTrash size={22} color="red" />
		</button>
	);
};
