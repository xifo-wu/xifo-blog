import './globals.css';
import '@/lib/highlight/light.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import PageContainer from '@/components/PageContainer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Xifo Blog',
  description: 'Xifo 博客网站，折腾笔记，以及一些没啥用的代码片段，项目等',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="zh-Hans">
      <body className="bg-slate-50 dark:bg-slate-950">
        <Providers>
          <PageContainer>
            <Header />
            <div className="container mx-auto">{children}</div>
          </PageContainer>
        </Providers>
      </body>
    </html>
  );
}
