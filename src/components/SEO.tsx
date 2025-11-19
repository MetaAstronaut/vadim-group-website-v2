import { Helmet } from 'react-helmet-async';
import { getBaseUrl } from '@/utils/markdownParser';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export function SEO({
  title = 'Expert Home, Marine & RV Repairs | The Vadim Group Orlando',
  description = 'Professional repair services in Orlando. European craftsmanship, transparent pricing, fast response. Home, marine, RV repairs. Licensed and insured.',
  keywords = 'home repair orlando, marine repair orlando, rv repair orlando, emergency repairs',
  ogTitle,
  ogDescription,
  ogImage = '/og-home.jpg',
  ogType = 'website',
  canonical
}: SEOProps) {
  const baseUrl = getBaseUrl();
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={fullOgImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={fullOgImage} />
    </Helmet>
  );
}