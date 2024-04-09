type BadgeProps = {
	value: string | number;
};

export const Badge = ({ value }: BadgeProps) => (
	<span className="py-0.25 badge border-2 border-black bg-secondary px-1.5 text-xs font-medium text-white">
		{value}
	</span>
);
