import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dev Deepak — Developer Portfolio',
  description: 'Personal portfolio of Dev Deepak — developer building modern web experiences.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
