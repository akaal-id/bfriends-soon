import type { Metadata } from "next";
import { Belleza, Pontano_Sans } from "next/font/google";
import "./globals.css";


const belleza = Belleza({
  weight: "400",
  variable: "--font-belleza",
  subsets: ["latin"],
});

const pontanoSans = Pontano_Sans({
  weight: "400",
  variable: "--font-pontano-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B Friends | Kerobokan Wellness Center | Opening 2026",
  description: "A wellness journey that begins with becoming a friend to yourself. Join B Friends in Kerobokan, Bali. Gym, Spa, and Community. Opening 2026.",
  keywords: ["wellness", "gym", "spa", "bali", "kerobokan", "b friends", "recovery", "health", "fitness", "community"],
  authors: [{ name: "B Friends" }],
  openGraph: {
    title: "B Friends | Kerobokan Wellness Center",
    description: "A wellness journey that begins with becoming a friend to yourself. Opening soon in 2026.",
    url: "https://bfriends.id", // Placeholder URL, update when deployed
    siteName: "B Friends",
    images: [
      {
        url: "/images/icons/logo-bfriends hor.png",
        width: 1200,
        height: 630,
        alt: "B Friends Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B Friends - Kerobokan Wellness Center",
    description: "A wellness journey that begins with becoming a friend to yourself. Opening soon in 2026.",
    images: ["/images/icons/logo-bfriends hor.png"],
  },
  icons: {
    icon: "/images/icons/B-logo.png",
    apple: "/images/icons/B-logo.png",
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
        className={` ${belleza.variable} ${pontanoSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
