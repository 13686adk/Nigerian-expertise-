import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Nigeria Service Export Gateway", description: "Nigerian expertise, matched to the world." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
