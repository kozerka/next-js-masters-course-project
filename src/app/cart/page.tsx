import { getCartById } from "@/api/cart";
import { CartProductList } from "@/ui/organisms/CartProductList";
import { Payment } from "@/ui/molecules/Payment";
import { formatMoney } from "@/utils/intl";

export default async function CartPage() {
	const cart = await getCartById();

	if (!cart || !cart.items.length) {
		return <p>add some products</p>;
	}

	const total = cart.items.reduce((acc, item) => acc + item.quantity * item.product.price, 0);
	return (
		<section className="flex h-full flex-col items-center justify-between gap-8">
			<h1 className="mb-4 w-fit text-2xl font-extrabold">Your Order</h1>
			<h1 className="mb-4 w-fit text-2xl font-extrabold text-secondary">#{cart.id}</h1>
			<div className="flex flex-col gap-8 lg:flex-row ">
				<article className="flex w-full flex-col">
					<CartProductList cart={cart} isDescription />
				</article>
			</div>
			<div className="flex  w-full flex-col   ">
				<div className="flex items-center justify-between font-semibold">
					<p>Total:</p>
					<span>{formatMoney(total / 100)}</span>
				</div>
				<Payment />
			</div>
		</section>
	);
}
