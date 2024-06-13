import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "~/shared/lib/db";
import { WithProviders } from "./providers";
import { Toaster } from "~/shared/ui/sonner";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Podmanage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <WithProviders>{children}</WithProviders>
        <Toaster />
      </body>
    </html>
  );
}
