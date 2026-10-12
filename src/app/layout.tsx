import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/common/ScrollToTop';
import { CursorTrail } from '@/components/common/CursorTrail';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/siteConfig';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-mono-custom',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://alishbaqadir.com'),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.headline,
  keywords: [
    'Digital Marketer',
    'Growth Strategist',
    'Content Strategy',
    'Social Media Marketing',
    'Brand Positioning',
    'Market Research',
    'Alpha Brackets',
    'Hostelo',
    'Alishba Qadir',
  ],
  authors: [{ name: siteConfig.name, url: 'https://alishbaqadir.com' }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alishbaqadir.com',
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.headline,
    siteName: `${siteConfig.name} Portfolio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.headline,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: ['/favicon.svg'],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${playfair.variable} ${jakarta.variable} ${spaceGrotesk.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-[#fd5b38] selection:text-white bg-[#09090b] text-[#fafafa] relative overflow-x-hidden">
        {/* Cinematic Red Noir Ambient Starfield & Grid */}
        <div aria-hidden="true" className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
          <div className="absolute top-0 left-0 w-[1px] h-[1px] bg-transparent stars-1 animate-[animStar_70s_linear_infinite] text-white/30" />
          <div className="absolute top-0 left-0 w-[2px] h-[2px] bg-transparent stars-2 animate-[animStar_110s_linear_infinite] text-white/20" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
        </div>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <CursorTrail />
      </body>
    </html>
  );
}
