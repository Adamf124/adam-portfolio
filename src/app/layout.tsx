import type { Metadata } from "next";
import { Instrument_Serif, Archivo, Space_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adam Ferguson — Full-Stack Developer",
  description:
    "Adam Ferguson, Atlanta-based full-stack developer. I design and build fast, considered software — pairing full-stack craft with an AI-native process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${archivo.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
