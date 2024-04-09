import NextImage from "next/image";
import Link from "next/link";

type CardImageProps = {
	id: string;
	src: string;
	alt: string;
};

export const CardImage = ({ id, alt, src }: CardImageProps): JSX.Element => (
	<Link href={`/product/${id}`}>
		<div className="relative aspect-square overflow-hidden rounded-xl">
			<NextImage
				width={150}
				height={150}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-4 mix-blend-multiply transition-transform"
			/>
		</div>
	</Link>
);
