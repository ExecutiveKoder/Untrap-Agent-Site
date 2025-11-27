import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Untrap - AI-Powered MSP Billing Classification",
  description: "Automatically identify out-of-scope work and recover lost revenue with AI-powered ticket classification for MSPs.",
  keywords: "MSP, billing, AI classification, out-of-scope work, revenue recovery, ticket classification",
  authors: [{ name: "Untrap" }],
  openGraph: {
    title: "Untrap - AI-Powered MSP Billing Classification",
    description: "Automatically identify out-of-scope work and recover lost revenue with AI-powered ticket classification for MSPs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
