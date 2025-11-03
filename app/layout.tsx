import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FloatingWhatsApp from "@/components/Whatsapp";

const inter = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900"
});

const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 200 300 400 500 600 700 800 900"
});

export const metadata: Metadata = {
  title: "VoltSol",
  description: "Your gateway to seamless solar energy solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.className} antialiased`}
      >
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
