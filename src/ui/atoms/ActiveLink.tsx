"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { type Route } from "next";

type ActiveLinkProps = {
	activeClassName?: string;
	className?: string;
	children: React.ReactNode;
	href: Route;
	exact?: boolean;
};

export const ActiveLink = ({
	activeClassName = "border-secondary border-b-[3px] font-bold",
	className = "px-4 py-2 transition-all duration-300 hover:text-secondary hover:font-bold",
	children,
	exact = false,
	href,
	...props
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href as string);

	return (
		<Link
			href={href as Route}
			className={clsx(className, { [activeClassName]: isActive })}
			aria-current={isActive ? "page" : undefined}
			{...props}
		>
			{children}
		</Link>
	);
};
