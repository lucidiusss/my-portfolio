import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/app/components/Header";
import ContentWrapper from "./components/ContentWrapper";

const inter = Inter();

export const metadata: Metadata = {
  title: "Nikita Isaev - Junior Frontend Developer",
  description: "Nikita Isaev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}  antialiased`}>
        <ThemeProvider attribute="class">
          <ContentWrapper>
            <Header />
            {children}
          </ContentWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
