import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Lora } from 'next/font/google';
import Navigation from './components/Navigation';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair'
});

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora'
});

export const metadata: Metadata = {
  title: 'Cigale Restauration - Traiteur Gastronomique Provençal',
  description: 'Service traiteur gastronomique spécialisé en cuisine provençale pour vos événements. Mariages, événements privés et professionnels de 10 à 200 personnes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${lora.variable}`}>
      <body className="font-lora">
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}