import "../styles/globals.css";
import type { Metadata } from "next";

const siteName = "TacTec";
const domain = "https://tactec.club";
const ogImage = `${domain}/images/og.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title: {
    default: "TacTec — Revolutionising Football Club Management",
    template: "%s | TacTec",
  },
  description:
    "One platform for operations, medical, tactics, reporting, communication, and more — built for modern football clubs.",
  applicationName: siteName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: domain,
    title: "TacTec — Revolutionising Football Club Management",
    description:
      "Unified platform for football operations: medical, tactics, reporting, comms, and more.",
    siteName,
    images: [{ url: ogImage, width: 1200, height: 630, alt: "TacTec Preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TacTec — Revolutionising Football Club Management",
    description:
      "Unified platform for football operations: medical, tactics, reporting, comms, and more.",
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
