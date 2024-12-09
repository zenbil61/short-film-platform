import MainHeader from '@/partials/Headers/MainHeader';
import Container from '@/ui/container';
import { Inter } from 'next/font/google';
import '@/styles/normalize.css';
import '@/styles/reset.css';
import '@/styles/global.scss';
import './layout.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Container full>
          <MainHeader />
        </Container>
        <main>{children}</main>
      </body>
    </html>
  );
}
