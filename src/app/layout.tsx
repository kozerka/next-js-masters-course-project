import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/ui/organisms/Header";
import { Footer } from "@/ui/organisms/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "NextJS 14 masters",
	description: "Shopify - Course application",
	metadataBase: new URL("https://nextjs14masters.com"),
};

export default function RootLayout({
	children,
	sidebar,
}: Readonly<{
	children: React.ReactNode;
	sidebar: React.ReactNode;
}>): JSX.Element {
	return (
		<ClerkProvider>
			<html lang="en" data-theme="lofi">
				<body className={inter.className}>
					<Header />
					<main className="mx-8 my-8 sm:mx-24">{children}</main>

					<Footer />
					{sidebar}
				</body>
			</html>
		</ClerkProvider>
	);
}
