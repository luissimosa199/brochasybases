import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brochas y Bases | Maquillaje",
  description:
    "Todo lo que necesitas saber antes de comprar articulos para maquillaje",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const pathname = headersList.get("x-pathname");

  const excludedRoutes = ["/register", "/login", "/admin"];
  const excludeLayout = excludedRoutes.some(
    (route) => pathname === route || pathname?.startsWith(route)
  );

  return (
    <html lang="es">
      <body className={inter.className}>
        {!excludeLayout && <Header />}
        {children}
        {!excludeLayout && <Footer />}
      </body>
    </html>
  );
}
