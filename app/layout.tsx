import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./global.css";

export const dynamic = 'force-dynamic'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const IbmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: '--font-ibm-flex-serif'

})

export const metadata: Metadata = {
  title: "Next Bank",
  description: "The Next modern banking platform for everyone",
  icons: {
    icon: '/icons/logo.svg'
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${IbmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
