import { type Route } from "next";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

type PaginationProps = {
	pageNumber: number;
	totalPages: number;
	url: Route;
};
export const Pagination = ({ pageNumber = 1, totalPages, url }: PaginationProps) => (
	<article aria-label="pagination" className="mt-12 flex w-full items-center justify-center gap-8">
		<ActiveLink
			className=""
			activeClassName=""
			href={pageNumber === 1 ? `${url}` : (`${url}/${pageNumber - 1}` as Route)}
		>
			<FaArrowAltCircleLeft size={24} color="black" />
		</ActiveLink>
		<div className="flex gap-4 rounded-lg px-4 font-bold text-secondary">
			{Array.from({ length: totalPages }, (_, i) => (
				<ActiveLink
					activeClassName={i === pageNumber - 1 ? "bg-black rounded-full text-white" : ""}
					key={i}
					href={i === 0 ? `${url}` : (`${url}/${i + 1}` as Route)}
				>
					{i + 1}
				</ActiveLink>
			))}
		</div>
		<ActiveLink
			className=""
			activeClassName=""
			href={
				pageNumber === totalPages
					? (`${url}/${totalPages}` as Route)
					: (`${url}/${pageNumber + 1}` as Route)
			}
		>
			<FaArrowAltCircleRight size={24} color="black" />
		</ActiveLink>
	</article>
);
