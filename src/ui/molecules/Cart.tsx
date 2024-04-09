import { Suspense } from "react";
import { IoMdCart } from "react-icons/io";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { Badge } from "@/ui/atoms/Badge";
import { getCartById } from "@/api/cart";
import { Loader } from "@/ui/atoms/Loader";

export const Cart = async () => {
	const cart = await getCartById();
	const quantity = cart?.items.reduce((acc, item) => acc + item.quantity, 0) || 0;

	return (
		<ActiveLink className="relative" activeClassName="" href="/cart">
			<IoMdCart size={36} color="black" />
			<Suspense key="headerQuantity" fallback={<Loader />}>
				<div className="absolute bottom-[-5px] left-4">
					<Badge value={quantity} />
				</div>
			</Suspense>
		</ActiveLink>
	);
};
