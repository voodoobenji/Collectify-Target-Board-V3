import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Collectify Target Guide",
  description: "Live daily target guide",
  icons: {
    icon: "/COLLECTIFY_LOGO.png",
    shortcut: "/COLLECTIFY_LOGO.png",
    apple: "/COLLECTIFY_LOGO.png",
  },
  openGraph: {
    title: "Collectify Target Guide",
    description: "Live daily target guide",
    images: ["/COLLECTIFY_LOGO.png"],
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem('collectify_theme');if(t!=='light'&&t!=='dark'){t=(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="scanline min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
