import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Cormorant_Garamond,
  DM_Sans,
} from "next/font/google";
import "./globals.css";

const condensed = Barlow_Condensed({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteOrigin =
  process.env.URL ?? process.env.DEPLOY_PRIME_URL ?? "https://vowvolume.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: "Vow / Volume — Wedding Films + DJ Experiences",
    template: "%s — Vow / Volume",
  },
  description:
    "Cinematic wedding films and room-moving DJ experiences, created as one seamless story.",
  openGraph: {
    title: "Vow / Volume",
    description:
      "Wedding films + DJ experiences. Film the feeling. Score the night.",
    type: "website",
    images: [
      {
        url: new URL("/og.png", siteOrigin).toString(),
        width: 1920,
        height: 1005,
        alt: "Vow / Volume — Wedding Films + DJ Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vow / Volume",
    description:
      "Wedding films + DJ experiences. Film the feeling. Score the night.",
    images: [new URL("/og.png", siteOrigin).toString()],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${condensed.variable} ${serif.variable} ${sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
