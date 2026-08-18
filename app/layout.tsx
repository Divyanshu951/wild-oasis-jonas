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
    <html lang="en">
      <body
        className={`${josefinSans.className} bg-primary relative flex min-h-screen flex-col text-white/80 antialiased`}
      >
        <Header />

        <div className="grid flex-1 px-8 py-12">
          <main className="mx-auto w-full max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
