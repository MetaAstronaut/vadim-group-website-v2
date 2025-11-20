import yaml from 'js-yaml';

export interface PageFrontmatter {
  title?: string;
  description?: string;
  keywords?: string;
  'og:title'?: string;
  'og:description'?: string;
  'og:image'?: string;
  'og:type'?: string;
  canonical?: string;
  [key: string]: any;
}

export interface ParsedMarkdown {
  frontmatter: PageFrontmatter;
  content: string;
}

/**
 * Parse markdown file content and extract frontmatter using browser-safe methods.
 * Replaces gray-matter to avoid Node.js Buffer dependencies.
 */
export function parseMarkdown(markdownContent: string): ParsedMarkdown {
  // Guard clause for non-string inputs
  if (typeof markdownContent !== 'string') {
    console.warn('parseMarkdown received non-string content:', markdownContent);
    return {
      frontmatter: {},
      content: String(markdownContent || '')
    };
  }

  try {
    // Normalize newlines
    const content = markdownContent.replace(/\r\n/g, '\n');
    
    // Check for frontmatter block
    const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
    const match = content.match(frontmatterRegex);

    if (match) {
      const frontmatterRaw = match[1];
      const bodyContent = match[2];

      const frontmatter = yaml.load(frontmatterRaw) as PageFrontmatter;

      return {
        frontmatter: frontmatter || {},
        content: bodyContent.trim()
      };
    }

    // No frontmatter found
    return {
      frontmatter: {},
      content: content.trim()
    };
  } catch (error) {
    console.error("Error parsing markdown:", error);
    return {
      frontmatter: {},
      content: markdownContent
    };
  }
}

/**
 * Get base URL for production
 */
export function getBaseUrl(): string {
  return import.meta.env.PROD 
    ? 'https://thevadimgroup.com'
    : 'http://localhost:5173';
}