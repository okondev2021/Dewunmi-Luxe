import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dewunmi Luxe Stitches — Lagos • Haute Couture',
  description: 'Private salon and bespoke tailoring house based in Victoria Island, Lagos. Meticulous architectural silhouettes, ancestral Nigerian hand-craftsmanship, and uncompromising textile provenance.',
  openGraph: {
    title: 'Dewunmi Luxe Stitches — Lagos • Haute Couture',
    description: 'Where art meets your fabrics. Hand-crafted bespoke tailoring & haute couture in Victoria Island, Lagos.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dewunmi Luxe Stitches — Lagos • Haute Couture',
    description: 'Where art meets your fabrics. Hand-crafted bespoke tailoring & haute couture in Victoria Island, Lagos.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300..500,0..1,0"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#131313] text-[#e5e2e1] antialiased selection:bg-[#b8975a] selection:text-[#131313]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

