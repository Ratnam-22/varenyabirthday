import type { Metadata } from 'next';
import { cormorantGaramond, playfairDisplay, inter, caveat } from './fonts';
import { siteConfig } from '@/config/site';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ExperienceProvider } from '@/providers/ExperienceProvider';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${playfairDisplay.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen bg-[#0a0a0f] text-[#fdfbf7] antialiased">
        <ErrorBoundary>
          <ExperienceProvider>{children}</ExperienceProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
