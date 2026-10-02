import './globals.css';
import { Inter } from 'next/font/google';
import { Header, Footer } from '../components/ui';
import Track from '../components/Track';
import { SITE } from '../lib/data';

const inter = Inter({ subsets: ['latin'], display: 'swap' });
export const metadata = { metadataBase: new URL(SITE) };
export const viewport = { themeColor: '#00110d' };

export default function RootLayout({ children }) {
  return (
    <html lang="en"><body className={inter.className}>
      <a className="skip" href="#main">Skip to content</a>
      <Header /><main id="main">{children}</main><Footer /><Track />
    </body></html>
  );
}
