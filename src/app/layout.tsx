import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Members Only Photography",
  description: "A collaborative platform for photography needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body suppressHydrationWarning className="antialiased font-jost">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
