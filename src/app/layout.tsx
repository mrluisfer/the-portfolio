import { ThemeProvider } from '@/components/theme-provider';
import '@/styles/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Varela_Round } from 'next/font/google';

const varelaRound = Varela_Round({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-varela-round',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={varelaRound.variable}>
      <body className={varelaRound.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

