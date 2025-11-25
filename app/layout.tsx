import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BaseStyle Lab",
    description: "Transform your images into Base-style masterpieces.",
    manifest: "/manifest.json",
    other: {
        "fc:frame": "vNext",
        "fc:miniapp": "v1",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#0ea5a1" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
