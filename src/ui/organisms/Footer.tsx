import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FooterLinks } from "@/ui/molecules/FooterLinks";

export const Footer = () => {
	return (
		<footer className="footer bg-gray-200  p-10 text-base-content">
			<aside>
				<span className="flex items-center font-bold">
					<FaShoppingBag size={32} />
					<span className="ml-2 text-xl">
						best <span className="text-secondary">shop </span>ever
					</span>
				</span>

				<p>
					{" "}
					&copy; {new Date().getFullYear()} Project from NextJS Masters Course. All rights reserved.
				</p>
			</aside>

			<FooterLinks />
		</footer>
	);
};
