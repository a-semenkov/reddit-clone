export const metadata = {
  title: 'Reddit-clone',
  description: 'Reddit-like app',
};

import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-main',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={nunito.className}>
      <body>{children}</body>
    </html>
  );
}
