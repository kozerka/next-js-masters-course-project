import { Suspense } from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { FaShoppingBag } from "react-icons/fa";
import Link from "next/link";
import { Navigation } from "@/ui/molecules/Navigation";
import { Cart } from "@/ui/molecules/Cart";
import { Search } from "@/ui/atoms/Search";

export const Header = () => (
	<header>
		<div className="w-full items-center justify-center justify-between border border-gray-200 bg-gray-50 px-24 py-6 lg:flex ">
			<div className="flex-1">
				<Link href="/" className="flex items-center justify-center font-bold lg:justify-start">
					<FaShoppingBag size={32} fill="#5F1181" />
					<span className="ml-2 hidden text-2xl md:inline">
						best{" "}
						<span className="text-gradient bg-text-gradient font-extrabold uppercase">shop</span>{" "}
						ever
					</span>
				</Link>
			</div>
			<Navigation />
			<article className="mt-2 flex flex-col items-center gap-8 lg:flex-row">
				<div className="text-extrabold order-4 mx-auto flex items-center gap-2 whitespace-nowrap rounded-lg border-2 border-black p-2 hover:bg-secondary hover:text-white">
					<SignedIn>
						<UserButton userProfileMode="navigation" userProfileUrl="/user-profile" />
					</SignedIn>
					<SignedOut>
						<SignInButton />
					</SignedOut>
				</div>
				<div className=" flex-none gap-2 px-2 lg:flex">
					<Suspense>
						<Cart />
					</Suspense>
				</div>
			</article>
		</div>
		<div className="mx-auto w-[450px] px-11 py-4 ">
			<Suspense>
				<h2 className="mb-3 text-center text-xl font-bold">Search for our products</h2>
				<Search />
			</Suspense>
		</div>
	</header>
);
