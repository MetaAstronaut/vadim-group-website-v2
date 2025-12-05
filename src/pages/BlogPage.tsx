import * as React from "react";
import { useState, useMemo } from "react";
import { Helmet } from 'react-helmet-async';
import { 
  BookOpen, 
  Clock, 
  Tag, 
  Mail,
  Filter,
  CheckCircle2
} from "lucide-react";

import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { getBlogPageData, BlogArticle } from "@/utils/contentParsers";

export const BlogPage = () => {
  const data = useMemo(() => getBlogPageData(), []);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success'>('idle');

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = ['All', ...new Set(data.articles.map(a => a.category))];
    return uniqueCategories;
  }, [data.articles]);

  // Filter articles by category
  const filteredArticles = useMemo(() => {
    if (selectedCategory === 'All') return data.articles;
    return data.articles.filter(a => a.category === selectedCategory);
  }, [selectedCategory, data.articles]);

  // Handle email subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message
    // In production, this would send to an API endpoint
    setSubscribeStatus('success');
    setEmail('');
    setTimeout(() => setSubscribeStatus('idle'), 5000);
  };

  return (
    <Layout>
      <Helmet>
        <title>{data.seo.title}</title>
        <meta name="description" content={data.seo.description} />
        <meta name="keywords" content={data.seo.keywords} />
        <meta property="og:title" content={data.seo.ogTitle} />
        <meta property="og:description" content={data.seo.ogDescription} />
        <meta property="og:image" content={data.seo.ogImage} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={data.seo.canonical} />
      </Helmet>

      {/* --- HERO SECTION - Compact --- */}
      <Section className="bg-brand-primary text-white py-16 md:py-20">
        <Container className="max-w-4xl">
          <div className="text-center space-y-4">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-brand-accent/20 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-brand-accent" />
              </div>
            </div>

            {/* Title */}
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              {data.hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-brand-accent font-medium mb-4">
              {data.hero.subtitle}
            </p>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {data.hero.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* --- COMING SOON BANNER --- */}
      <Section className="bg-brand-accent/10 py-8">
        <Container className="max-w-4xl">
          <div className="flex items-start gap-4 text-center md:text-left">
            <div className="hidden md:block">
              <Tag className="h-6 w-6 text-brand-accent mt-1" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-brand-primary mb-2">
                {data.comingSoonTitle}
              </h2>
              <p className="text-text-secondary">
                {data.comingSoonDescription}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* --- CATEGORY FILTERS --- */}
      <Section className="bg-surface-subtle py-4 sticky top-20 z-40 border-b border-border-light shadow-sm">
        <Container>
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <Filter className="h-5 w-5 text-text-muted shrink-0" />
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 py-2 rounded-md font-medium text-sm whitespace-nowrap
                    transition-all duration-200
                    ${selectedCategory === category
                      ? 'bg-brand-accent text-brand-primary shadow-sm'
                      : 'bg-white text-text-secondary hover:bg-brand-accent/10 hover:text-brand-primary border border-border-light'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* --- ARTICLES GRID --- */}
      <Section className="bg-surface py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredArticles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>

          {/* No results message */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-secondary text-lg">
                No articles found in this category.
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* --- CONTACT SECTION --- */}
      <Section className="bg-surface-subtle py-12 md:py-16 border-y border-border-light">
        <Container className="max-w-3xl">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-brand-primary">
              Have a Specific Question?
            </h2>
            <p className="text-text-secondary text-base md:text-lg">
              If you need immediate advice or have a repair question, contact us at{' '}
              <a 
                href={`mailto:${data.contactEmail}`}
                className="text-brand-accent hover:text-brand-accent-hover font-medium transition-colors"
              >
                {data.contactEmail}
              </a>
              {' '}or reach out via{' '}
              <a
                href="https://wa.me/your-number"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:text-brand-accent-hover font-medium transition-colors"
              >
                Facebook Messenger
              </a>
              .
            </p>
            <p className="text-sm text-text-muted">
              {data.contactInfo}
            </p>
          </div>
        </Container>
      </Section>

      {/* --- EMAIL SUBSCRIPTION --- */}
      <Section className="bg-brand-primary text-white py-16 md:py-20">
        <Container className="max-w-2xl">
          <div className="text-center space-y-6">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-brand-accent/20 flex items-center justify-center">
                <Mail className="h-7 w-7 text-brand-accent" />
              </div>
            </div>

            {/* Title */}
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              {data.subscribeTitle}
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-300 max-w-xl mx-auto">
              {data.subscribeInfo}
            </p>

            {/* Subscription Form */}
            {subscribeStatus === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-3 text-green-400">
                  <CheckCircle2 className="h-6 w-6" />
                  <p className="font-medium">
                    Thank you! We'll notify you when new articles are published.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col md:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="
                      flex-1 px-4 py-3 rounded-md
                      bg-white text-brand-primary
                      border border-border-light
                      focus:outline-none focus:ring-2 focus:ring-brand-accent
                      placeholder:text-text-muted
                    "
                  />
                  <Button
                    type="submit"
                    className="
                      bg-brand-accent hover:bg-brand-accent-hover
                      text-brand-primary font-semibold
                      h-12 px-6
                      transition-all duration-300
                      whitespace-nowrap
                    "
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            )}
          </div>
        </Container>
      </Section>
    </Layout>
  );
};

// Article Card Component
interface ArticleCardProps {
  article: BlogArticle;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const isComingSoon = article.status.toLowerCase().includes('coming soon');

  return (
    <div
      className={`
        relative group
        bg-white rounded-lg overflow-hidden
        border-2 border-border-light
        shadow-sm hover:shadow-lg
        transition-all duration-300
        ${isComingSoon ? 'hover:border-brand-accent/40' : 'hover:border-brand-accent'}
        flex flex-col h-full
      `}
    >
      {/* Coming Soon Overlay Badge */}
      {isComingSoon && (
        <div className="absolute top-4 right-4 z-10">
          <Badge 
            variant="accent" 
            className="text-xs font-semibold px-3 py-1 shadow-sm"
          >
            Coming Soon
          </Badge>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category Badge */}
        <div className="mb-4">
          <Badge 
            variant="outline" 
            className="text-xs font-medium border-brand-accent/30 text-brand-accent"
          >
            {article.category}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-bold text-brand-primary mb-3 leading-tight group-hover:text-brand-accent transition-colors duration-300">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4 flex-1">
          {article.description}
        </p>

        {/* Footer - Reading Time */}
        <div className="flex items-center gap-2 text-text-muted text-sm pt-4 border-t border-border-light">
          <Clock className="h-4 w-4" />
          <span>{article.readingTime}</span>
        </div>
      </div>

      {/* Hover Effect Overlay for Coming Soon */}
      {isComingSoon && (
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
};

