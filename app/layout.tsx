import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlobBackground from "@/components/BlobBackground";

const robotoMono = localFont({
  src: "../assets/Roboto_Mono/RobotoMono-VariableFont_wght.ttf",
  variable: "--font-roboto-mono",
  display: "swap",
});

const roboto = localFont({
  src: "../assets/Roboto/Roboto-VariableFont_wdth,wght.ttf",
  variable: "--font-roboto",
  display: "swap",
});

const ubuntu = localFont({
  src: "../assets/Roboto,Ubuntu/Ubuntu/Ubuntu-Regular.ttf",
  variable: "--font-ubuntu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ilham Asyari — Personal Portfolio",
  description:
    "Professional portfolio of Ilham Asyari — Web Developer & IT Business Analyst",
  openGraph: {
    title: "Ilham Asyari — Personal Portfolio",
    description:
      "Professional portfolio of Ilham Asyari — Web Developer & IT Business Analyst",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${robotoMono.variable} ${roboto.variable} ${ubuntu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-mono">
        <BlobBackground />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
