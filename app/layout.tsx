import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Mettyerng - ក្រុមអ្នកស្រឡាញ់សង្គម',
    template: '%s | Mettyerng'
  },
  description: 'ក្រុមអ្នកស្រឡាញ់សង្គម - Khmer community organization dedicated to education, culture, and social development',
  keywords: ['Khmer', 'Cambodia', 'Community', 'Education', 'Culture', 'Social Development'],
  authors: [{ name: 'Mettyerng Organization' }],
  creator: 'Mettyerng',
  openGraph: {
    type: 'website',
    locale: 'km_KH',
    url: 'https://mettyerng.org',
    title: 'Mettyerng - ក្រុមអ្នកស្រឡាញ់សង្គម',
    description: 'Khmer community organization dedicated to education, culture, and social development',
    siteName: 'Mettyerng',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mettyerng - ក្រុមអ្នកស្រឡាញ់សង្គម',
    description: 'Khmer community organization dedicated to education, culture, and social development',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="km" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}