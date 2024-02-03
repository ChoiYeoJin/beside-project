import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "키키",
  description: "모아 보는 단축키",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ... other meta tags ... */}
        <link
          rel="apple-touch-icon"
          href="/icons/pwa-icons/logo_color_192x192.png"
        />
        <link
          rel="apple-touch-startup-image"
          href="/icons/pwa-icons/splash_screen.png"
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        />
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        ></meta>
        <meta name="theme-color" content="#33C481" />
      </head>
      <body className={inter.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
