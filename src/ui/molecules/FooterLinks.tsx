import Link from "next/link";
import { type Route } from "next";
import { type AppRoute } from "@/types/route";

const LegalLinks: AppRoute[] = [
	{
		href: "regulations" as Route,
		label: "Shop Regulations",
	},
	{
		href: "terms-of-use" as Route,
		label: "Terms of use",
	},
	{
		href: "cookies-policy" as Route,
		label: "Cookies Policy",
	},
];

export const FooterLinks = () => (
	<div className="mt-16 flex flex-col gap-8 xl:col-span-2 xl:mt-0">
		<div className="md:flex md:flex-row md:justify-between">
			<div className="mt-10 md:mt-0">
				<div className="flex gap-4">
					<h3 className="text-sm font-semibold leading-6 text-gray-900">Regulations</h3>
				</div>
				<ul role="list" className="mt-6 space-y-4 md:flex md:space-x-4 md:space-y-0">
					{LegalLinks.map((route) => (
						<li key={route.href}>
							<Link
								className="flex items-center gap-4 text-sm leading-6 text-gray-600 hover:text-gray-900"
								href={route.href}
							>
								{route.label}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	</div>
);
