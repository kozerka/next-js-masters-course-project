import Link from "next/link";
import { type CategoriesListItemFragment } from "@/gql/graphql";

type CategoryListItemProps = {
	category: CategoriesListItemFragment;
};

export const CategoryListItem = ({ category }: CategoryListItemProps): JSX.Element => {
	return (
		<li>
			<Link
				className="flex h-48 w-full items-center justify-center rounded-lg border-2 border-black bg-gray-100 text-center text-2xl font-extrabold shadow-md hover:bg-bg-gradient hover:text-white"
				href={`/categories/${category.slug}/1`}
			>
				{category.name}
			</Link>
		</li>
	);
};
