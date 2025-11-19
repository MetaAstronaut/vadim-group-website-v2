import matter from 'gray-matter';

export interface PageFrontmatter {
  title?: string;
  description?: string;
  keywords?: string;
  'og:title'?: string;
  'og:description'?: string;
  'og:image'?: string;
  'og:type'?: string;
  canonical?: string;
}

export interface ParsedMarkdown {
  frontmatter: PageFrontmatter;
  content: string;
}

/**
 * Parse markdown file content and extract frontmatter
 */
export function parseMarkdown(markdownContent: string): ParsedMarkdown {
  const { data, content } = matter(markdownContent);
  
  return {
    frontmatter: data as PageFrontmatter,
    content: content.trim()
  };
}

/**
 * Get base URL for production
 */
export function getBaseUrl(): string {
  return import.meta.env.PROD 
    ? 'https://thevadimgroup.com'
    : 'http://localhost:5173';
}