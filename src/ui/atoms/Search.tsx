"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { useDebounce } from "@/utils/useDebounce";

export const Search = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const urlQueryParamValue = searchParams.get("query")?.toString();
	const [searchValue, setSearchValue] = useState<string>(urlQueryParamValue ?? "");
	const debouncedSearch = useDebounce(searchValue);

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(event.target.value);
		if (event.target.value.length === 0) {
			router.push("/products");
		}
	};

	useEffect(() => {
		if (debouncedSearch) {
			router.push(`/search?query=${debouncedSearch}`);
		}
	}, [debouncedSearch, router]);

	return (
		<div className="flex h-10 items-center justify-around gap-2 rounded-md border-2 border-secondary bg-white">
			<input
				className=" rounded-md p-1 text-sm outline-none"
				type="search"
				placeholder="Search..."
				value={searchValue}
				onChange={handleInputChange}
			/>
			<FaSearch size={20} />
		</div>
	);
};
