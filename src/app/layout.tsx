import clsx from 'clsx';
import { Metadata, Viewport } from 'next';
import { Providers } from './providers';
import { Main } from '@/components/Main';
import { fontSans } from '@/config/fonts';
import { siteConfig } from '@/config/site';
import '@/styles/globals.css';

export const metadata: Metadata = {
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { color: 'white', media: '(prefers-color-scheme: light)' },
    { color: 'black', media: '(prefers-color-scheme: dark)' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers
          themeProps={{ attribute: 'class', children, defaultTheme: 'dark' }}
        >
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}
