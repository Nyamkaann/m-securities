import { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: 'M Securities',
  description: 'M Securities is a leading financial services company in Mongolia providing secure, reliable, and flexible investment solutions.',
  keywords: 'M Securities, investment, trading, broker, Mongolia, stock market, financial services',
  authors: [{ name: 'M Securities' }],
  creator: 'M Securities',
  publisher: 'M Securities',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://msecurities.mn',
    siteName: 'M Securities',
    title: 'M Securities - Your Trusted Investment Partner',
    description: 'Professional securities trading and investment services in Mongolia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'M Securities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M Securities - Your Trusted Investment Partner',
    description: 'Professional securities trading and investment services in Mongolia',
    images: ['/twitter-image.jpg'],
  },
};

export default defaultMetadata; 