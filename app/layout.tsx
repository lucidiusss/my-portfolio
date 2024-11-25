import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "@/app/components/Header";
import ContentWrapper from "./components/ContentWrapper";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

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
        <NextTopLoader
          color="#247bff"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #247bff,0 0 5px #247bff"
          zIndex={1600}
          showAtBottom={false}
        />
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
