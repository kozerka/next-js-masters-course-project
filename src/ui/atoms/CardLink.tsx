import { type Route } from "next";

import Link from "next/link";

type CardLinkProps = {
	href: Route;
	name: string;
};

export const CardLink = ({ href, name }: CardLinkProps) => (
	<li>
		<Link className="relative" href={href}>
			<div className=" hover:bg-bg-gradient rounded-xl  border-2 border-black py-16 hover:text-white">
				<h2 className="  transform  text-center font-bold transition-all  md:text-3xl">{name}</h2>
			</div>
		</Link>
	</li>
);
