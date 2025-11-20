import * as React from "react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { parseMarkdown, type ParsedMarkdown, type PageFrontmatter } from "@/utils/markdownParser";

interface PageTemplateProps {
  markdownContent: string;
  children: (props: { frontmatter: PageFrontmatter; content: string }) => React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
  className?: string;
}

/**
 * A flexible wrapper component that parses markdown content, sets up SEO,
 * and provides the parsed data to its children via a render prop.
 */
export const PageTemplate = ({ 
  markdownContent, 
  children,
  hideHeader,
  hideFooter,
  className 
}: PageTemplateProps) => {
  const parsedData = React.useMemo(() => {
    try {
      return parseMarkdown(markdownContent);
    } catch (error) {
      console.error("Failed to parse markdown content:", error);
      // Return minimal safe fallback to prevent crash
      return {
        frontmatter: { title: "Error Loading Page" },
        content: "There was an error loading this page content."
      };
    }
  }, [markdownContent]);
  
  const { frontmatter, content } = parsedData;

  return (
    <>
      <SEO 
        title={frontmatter.title}
        description={frontmatter.description}
        keywords={frontmatter.keywords}
        ogTitle={frontmatter['og:title']}
        ogDescription={frontmatter['og:description']}
        ogImage={frontmatter['og:image']}
        ogType={frontmatter['og:type']}
        canonical={frontmatter.canonical}
      />
      
      <Layout 
        hideHeader={hideHeader} 
        hideFooter={hideFooter}
        className={className}
      >
        {children({ frontmatter, content })}
      </Layout>
    </>
  );
};
