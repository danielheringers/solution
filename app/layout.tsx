import "@/styles/globals.css";
import Head from 'next/head'; 
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

// export const metadata: Metadata = {
// 	title: {
// 		default: siteConfig.name,
// 		template: `%s - ${siteConfig.name}`,
// 	},
// 	description: siteConfig.description,
// 	themeColor: [
// 		{ media: "(prefers-color-scheme: light)", color: "white" },
// 		{ media: "(prefers-color-scheme: dark)", color: "black" },
// 	],
// 	icons: {
// 		icon: "/favicon.ico",
// 		shortcut: "/favicon-16x16.png",
// 		apple: "/apple-touch-icon.png",
// 	},
// };

export default function RootLayout({
	children,
  }: {
	children: React.ReactNode;
  }) {
	return (
	  <html lang="en" suppressHydrationWarning>
		<Head>
		  <title>{siteConfig.name}</title>
		  <meta name="description" content={siteConfig.description} />
		  <meta name="theme-color" content="white" media="(prefers-color-scheme: light)" />
		  <meta name="theme-color" content="black" media="(prefers-color-scheme: dark)" />
		  <link rel="icon" href="/favicon.ico" />
		  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
		  <link rel="shortcut icon" href="/favicon-16x16.png" />
		</Head>
		<body
		  className={clsx(
			"min-h-screen bg-background font-sans antialiased",
			fontSans.variable
		  )}
		>
		  <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
			<div className="relative flex flex-col h-screen hide-scrollbar overflow-auto">
			  <Navbar />
			  <main className="container mx-auto max-w-7xl px-6 flex-grow hide-scrollbar ">
				{children}
			  </main>
			  <footer className="w-full flex items-center justify-center ">
				<Link
				  isExternal
				  className="flex items-center gap-1 text-current"
				  href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
				  title="nextui.org homepage"
				>
				  <span className="text-default-600">Powered by</span>
				  <p className="text-primary">Seidor</p>
				</Link>
			  </footer>
			</div>
		  </Providers>
		</body>
	  </html>
	);
  }
