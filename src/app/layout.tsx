import type { Metadata, Viewport } from "next";
import "./globals.css";
import { DialKitProvider } from "./dialkit-provider";

const metadataBase = new URL(
  process.env.VERCEL_URL != null
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000",
);

export const metadata: Metadata = {
  metadataBase,
  title: "Dither Playground",
  description:
    "Upload a logo and watch it come alive as interactive dithered particles. Hover to push, click to explode.",
  icons: {
    icon: "/cal-icon.png",
    shortcut: "/cal-icon.png",
    apple: "/cal-icon.png",
  },
  openGraph: {
    title: "Dither Playground",
    description:
      "Upload a logo and watch it come alive as interactive dithered particles. Hover to push, click to explode.",
    images: [{ url: "/cal-icon.png", width: 512, height: 512, alt: "Dither Playground" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dither Playground",
    description:
      "Upload a logo and watch it come alive as interactive dithered particles. Hover to push, click to explode.",
    images: ["/cal-icon.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DialKitProvider>{children}</DialKitProvider>
      </body>
    </html>
  );
}
