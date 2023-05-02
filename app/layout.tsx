import React from "react";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import '@/styles/globals.scss';
import { Inter } from 'next/font/google';
import Navigation from "@/components/Navigation";
import { Metadata } from "next";

interface RootLayoutProps {
	children : React.ReactNode
};

const inter = Inter({ subsets: ['latin'] });

const RootLayout : ({ children } : RootLayoutProps) => JSX.Element = ({ children }) => {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ClerkProvider>
					<Navigation />

					{children}
				</ClerkProvider>
			</body>
		</html>
	)
};
export default RootLayout;