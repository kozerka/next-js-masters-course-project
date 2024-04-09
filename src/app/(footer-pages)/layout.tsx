export default function FooterPageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <section className="mx-auto max-w-2xl p-12">{children}</section>;
}
