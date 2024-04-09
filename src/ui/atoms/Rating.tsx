import { Star } from "lucide-react";

type RatingProps = {
	rating: number;
	isAvgTextVisible?: boolean;
};

export const Rating = ({ rating, isAvgTextVisible = true }: RatingProps) => {
	const renderStars = () => {
		return Array.from({ length: 5 }, (_, index) => (
			<Star
				key={index}
				fill={index < Math.round(rating) ? "#ffb300" : "#fff"}
				size="20"
				stroke="#120202"
			/>
		));
	};

	return (
		<div className="flex flex-wrap items-center text-center">
			{renderStars()}
			{isAvgTextVisible && (
				<span data-testid="product-rating" className="ml-4 flex-shrink-0">
					{rating.toFixed(1)} / 5
				</span>
			)}
		</div>
	);
};
