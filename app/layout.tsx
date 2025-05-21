import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bolt Hackathon Rules",
  description:
    "World’s Largest Hackathon presented by Bolt (the “Hackathon”) Official Rules",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Bolt Hackathon Rules",
    description:
      "World’s Largest Hackathon presented by Bolt (the “Hackathon”) Official Rules",
    images: [
      {
        url: "https://res.cloudinary.com/ddjsyskef/image/upload/v1747845448/public/bigtw3yulolo98wlhr6k.png",
        width: 1200,
        height: 630,
        alt: "Bolt Hackathon Rules Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolt Hackathon Rules",
    description:
      "World’s Largest Hackathon presented by Bolt (the “Hackathon”) Official Rules",
    images: [
      "https://res.cloudinary.com/ddjsyskef/image/upload/v1747845448/public/bigtw3yulolo98wlhr6k.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
