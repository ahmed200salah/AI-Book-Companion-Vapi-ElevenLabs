import type { Metadata } from "next";
import { IBM_Plex_Serif, Mona_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const monaSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-mona-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "bookified",
  description: "Transform your books with ai conversations. upload your book and start chatting with it using voice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSerif.variable} ${monaSans.variable} relative font-sans h-full antialiased `}
    >
      <body className="min-h-full flex flex-col">
        <Navbar/>
        {children}</body>
    </html>
  );
}
