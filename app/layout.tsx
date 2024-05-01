// import { Navbar } from "@nextui-org/navbar";
import clsx from "clsx";
import StarsCanvas from "components/StarsBackground/starsbg";
import { Navbar } from "components/navbar";
import { fontSans } from "config/fonts";
import { siteConfig } from "config/site";
import Head from 'next/head';
import React from "react";
import "styles/globals.css";
import { Providers } from "./providers";


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
				<StarsCanvas />
			  </main>
			</div>
		  </Providers>
		</body>
	  </html>
	);
  }
