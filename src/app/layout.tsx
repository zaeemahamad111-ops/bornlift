import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BornLift - Engineered for the 0.1%",
  description: "Elite tactical equipment for high-output human performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-on-surface font-body-md selection:bg-[#C0FF00] selection:text-black antialiased custom-scrollbar overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
