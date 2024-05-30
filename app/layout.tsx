import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const plexoMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["300"] });
export const metadata: Metadata = {
  title: "Viraj Kawa",
  description: "Portfolio website v2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plexoMono.className}>{children}</body>
    </html>
  );
}
