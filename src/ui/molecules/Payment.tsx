import { handlePaymentAction } from "@/actions/cart";

export const Payment = () => (
	<form action={handlePaymentAction}>
		<button
			type="submit"
			className="btn btn-secondary mt-4 w-full rounded-md py-1 text-white transition-colors hover:bg-gray-700 disabled:cursor-wait"
		>
			Pay
		</button>
	</form>
);
