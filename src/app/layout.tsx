import type { Metadata } from "next";
import "./globals.css";
import { satoshiRegular } from "./fonts";

export const metadata: Metadata = {
  title: "Frontend Test CID",
  description: "Test de desarrollo frontend para la empresa CID.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={satoshiRegular.className}>{children}</body>
    </html>
  );
}
