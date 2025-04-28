import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProviderWrapper } from "./providers/ClerkProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Panel",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProviderWrapper>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProviderWrapper>
  );
}
