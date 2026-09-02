import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/portfolio/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bui Cao Nguyen — AI Engineer Portfolio',
  description:
    'AI Engineer specializing in Enterprise Multi-Agent Systems, Advanced RAG Pipelines & High-Performance Data Platforms.',
  keywords: [
    'AI Engineer',
    'Bui Cao Nguyen',
    'Multi-Agent Systems',
    'LangGraph',
    'PEV Loop',
    'RAG Pipelines',
    'HyDE',
    'DuckDB WASM',
    'Snowflake',
    'AWS',
    'Machine Learning',
    'Data Engineering',
    'FastAPI',
    'Docker',
    'Python',
    'Power BI',
  ],
  openGraph: {
    type: 'website',
    title: 'Bui Cao Nguyen — AI Engineer Portfolio',
    description:
      'AI Engineer specializing in Enterprise Multi-Agent Systems, Advanced RAG Pipelines & High-Performance Data Platforms.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bui Cao Nguyen — AI Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bui Cao Nguyen — AI Engineer Portfolio',
    description:
      'AI Engineer specializing in Enterprise Multi-Agent Systems, Advanced RAG Pipelines & High-Performance Data Platforms.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var stored = localStorage.getItem('portfolio-theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = stored || (prefersDark ? 'dark' : 'light');
                if (theme === 'dark') document.documentElement.classList.add('dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
