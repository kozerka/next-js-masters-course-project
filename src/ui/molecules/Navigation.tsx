import { type Route } from "next";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { routes } from "@/const/routes";
import { getListOfCategories } from "@/api/categories";

export const Navigation = async () => {
	const categories = await getListOfCategories();

	const mappedCategories = categories.data.map((category) => ({
		label: category.name,
		href: `/categories/${category.slug}/1`,
	}));

	const mergedRoutes = [...routes, ...mappedCategories];
	return (
		<nav>
			<article className=" flex flex-col justify-center gap-2 lg:flex-row">
				{mergedRoutes.map((route) => (
					<ActiveLink exact={route.label === "Home"} key={route.label} href={route.href as Route}>
						<div className="text-center">{route.label}</div>
					</ActiveLink>
				))}
			</article>
		</nav>
	);
};
