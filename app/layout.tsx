import type { Metadata } from "next";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "vowvolume.studio";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
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
          url: `${origin}/og.png`,
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
      images: [`${origin}/og.png`],
    },
  };
}

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
