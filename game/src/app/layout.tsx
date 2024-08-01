import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from '@/contexts/Providers';
import Dom from '@/components/dom';
import Header from '@/config';

const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-slate-950">
      <Header />
      <body className={inter.className}>
        <Providers>
          <Dom>{children}</Dom>
        </Providers>
      </body>
    </html>
  );
}
