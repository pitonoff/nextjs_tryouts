import { TheHeader } from '@/components/TheHeader';
import './globals.css';
import type { Metadata } from 'next';
import { TheFooter } from '@/components/TheFooter';

export const metadata: Metadata = {
  title: 'Тайтл',
  description: 'Generated under weed influence',
}
 const styles = {
    body: {
      display: 'flex',
      minHeight: '100vh',
    },
    main: {
      flex: 1,
    },
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

 
 
  return (
    <html lang="en">
      <body style={styles.body}>
         <TheHeader />
         <main style={styles.main}>
            {children}
         </main>
         <TheFooter />
      </body>
    </html>
  )
}
