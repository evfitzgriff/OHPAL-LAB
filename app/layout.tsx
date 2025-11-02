import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OHPAL Lab",
  description: "Community-led One Health for resilient pastoral futures",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
