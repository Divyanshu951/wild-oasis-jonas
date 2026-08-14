import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Logo from "@/components/Logo";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The wild oasis",
  description: "A website for booking cabins",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${outfit.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navigation />
        <header>
          <Logo />
        </header>
        <main>{children}</main>
        <footer>Copyright by the wild oasis</footer>
      </body>
    </html>
  );
}
