import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Navigation } from "./components/navigation";
import { Slider } from "./components/slider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Like Bike Shop",
  description: "Like Bike Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* Header */}
        <Header />
        {/* Navigation */}
        <Navigation />

        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
