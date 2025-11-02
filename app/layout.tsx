import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sustainability Intelligence Hub",
  description: "AI-powered insights on sustainability, development, and innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
