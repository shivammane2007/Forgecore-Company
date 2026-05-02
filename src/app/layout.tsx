import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FORGECORE Technologies — Enterprise Infrastructure Systems',
  description: 'Global provider of distributed computing infrastructure, AI systems architecture, and enterprise-grade data platforms for multinational corporations and government institutions.',
  keywords: 'enterprise infrastructure, distributed systems, AI architecture, data platforms, industrial computing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main className="pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
