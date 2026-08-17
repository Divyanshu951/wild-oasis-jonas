import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

// const outfit = Outfit({
//   subsets: ["latin"],
// });

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // title: "The wild oasis",
  title: {
    template: "%s - The wild oasis",
    default: "The wild oasis",
  },
  description: "A website for booking cabins",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${josefinSans.className} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="mx-auto max-w-7xl">{children}</main>
      </body>
    </html>
  );
}
