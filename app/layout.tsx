import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PDB66",
  description: "PROJECT PKRU DATABASE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <div
            className="sticky
         top-0 z-10"
          >
            <Navbar />
          </div>
          <div>{children}</div>
          <div className="bg-cyan-900">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
