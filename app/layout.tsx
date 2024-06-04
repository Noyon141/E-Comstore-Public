import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { PreviewModal } from "@/components/preview-modal";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Public e-commerce store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <PreviewModal />
        {children}
        <Footer />
      </body>
    </html>
  );
}
