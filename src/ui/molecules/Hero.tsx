import React from "react";
import Link from "next/link";

import { type Route } from "next";

export const Hero = () => {
	return (
		<section className="mb-20 w-full rounded-lg bg-gray-200">
			<div className="mx-auto grid max-w-screen-2xl p-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
				<div className="mr-auto place-self-center lg:col-span-7">
					<h1 className="text-dark mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl">
						Unleash Your Style! <span className="bg-text-gradient text-gradient">Unique </span>{" "}
						T-Shirts and Accessories for{" "}
						<span className="bg-text-gradient text-gradient">Every Occasion</span>
					</h1>
					<p className="mb-6 max-w-2xl font-light text-gray-700 md:text-lg lg:mb-8 lg:text-xl ">
						Discover the perfect blend of comfort, creativity, and expression with our handpicked
						collection.
					</p>
					<Link href={"/products/1" as Route} className="btn btn-outline border-2 ">
						Get started
						<svg
							className="-mr-1 ml-2 h-5 w-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
					</Link>
				</div>
				<div className="hidden lg:col-span-5 lg:mt-0 lg:flex"></div>
			</div>
		</section>
	);
};
