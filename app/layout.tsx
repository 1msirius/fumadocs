import "katex/dist/katex.css";
import "./global.css";
import type { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { baseUrl } from "@/utils/metadata";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next/types";
// import { SiteBanner } from "@/components/banner";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "OpenDeepLearning",
    template: "%s | OpenDeepLearning",
  },
  description:
    "Courses, code, news, research, and community for building AI-powered products",
  openGraph: {
    images: "/banner.png",
    title: "OpenDeepLearning",
    description:
      "Courses, code, news, research, and community for building AI-powered products.",
    url: baseUrl,
    siteName: "OpenDeepLearning",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "@ODL_AI",
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex flex-col min-h-screen">
        {/* <SiteBanner /> */}
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
