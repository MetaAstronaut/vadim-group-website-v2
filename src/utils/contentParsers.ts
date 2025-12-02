import headerContent from '@/content/partials/header.md?raw';
import footerContent from '@/content/partials/footer.md?raw';
import homeContent from '@/content/pages/home.md?raw';
import homeRepairsContent from '@/content/pages/home-repairs.md?raw';
import marineRVContent from '@/content/pages/marine-rv.md?raw';
import yaml from 'js-yaml';

// --- HELPER FUNCTIONS ---

function extractSection(content: string, marker: string): string {
  const parts = content.split('---');
  const section = parts.find(p => p.includes(marker));
  return section ? section.trim() : '';
}

function parseList(content: string): string[] {
  return content.match(/^- (.*)/gm)?.map(line => line.replace(/^- /, '').trim()) || [];
}

function findLine(text: string, start: string) {
  return text.split('\n').find(l => l.startsWith(start))?.replace(start, '').trim() || '';
}

function findParagraph(text: string) {
  return text.split('\n').find(l => !l.startsWith('#') && !l.startsWith('-') && l.trim().length > 0 && !l.startsWith('>'))?.trim() || '';
}

// --- HEADER TYPES & PARSER ---

export interface HeaderData {
  brand: {
    name: string;
    logoAlt: string;
    href: string;
  };
  nav: Array<{
    name: string;
    href: string;
  }>;
  cta: {
    label: string;
    subLabel: string;
    href: string;
    type: string;
    sticky: boolean;
    showOnScroll: boolean;
    showWhatsappIcon: boolean;
  };
  mobileMenu: {
    enabled: boolean;
    hamburgerIcon: boolean;
    closeIcon: boolean;
    overlay: boolean;
  };
}

export function getHeaderData(): HeaderData {
  const parts = headerContent.split(/^## \[(.*?)\]/m);
  const data: any = {};
  
  for (let i = 1; i < parts.length; i += 2) {
    const key = parts[i];
    const rawYaml = parts[i+1].replace(/---/g, '');
    try {
        data[key] = yaml.load(rawYaml);
    } catch (e) {
        console.error(`Failed to parse header section ${key}`, e);
    }
  }
  
  return {
    brand: {
        name: data.brand?.name || "The Vadim Group",
        logoAlt: data.brand?.['logo-alt'] || "Logo",
        href: data.brand?.href || "/",
    },
    nav: data.nav?.items || [],
    cta: {
        label: data.cta?.label || "Contact",
        subLabel: data.cta?.subLabel || "",
        href: data.cta?.href || "#",
        type: data.cta?.type || "button",
        sticky: data.cta?.sticky ?? true,
        showOnScroll: data.cta?.['show-on-scroll'] ?? true,
        showWhatsappIcon: data.cta?.['show-whatsapp-icon'] ?? false,
    },
    mobileMenu: {
        enabled: data['mobile-menu']?.enabled ?? true,
        hamburgerIcon: data['mobile-menu']?.['hamburger-icon'] ?? true,
        closeIcon: data['mobile-menu']?.['close-icon'] ?? true,
        overlay: data['mobile-menu']?.overlay ?? true,
    }
  };
}

// --- FOOTER TYPES & PARSER ---

export interface FooterData {
  brand: {
    logoAlt: string;
    tagline: string;
  };
  quickLinks: {
    title: string;
    items: Array<{ name: string; href: string }>;
  };
  contact: {
    title: string;
    whatsappLabel: string;
    whatsappHref: string;
    emailLabel: string;
    emailHref: string;
    serviceArea: string[];
    hours: string;
  };
  social: {
    title: string;
    items: Array<{ name: string; href: string; icon: string }>;
  };
  legal: {
    title: string;
    items: Array<{ name: string; href: string }>;
    copyrightTemplate: string;
  };
}

export function getFooterData(): FooterData {
  const parts = footerContent.split(/^## \[(.*?)\]/m);
  const data: any = {};
  
  for (let i = 1; i < parts.length; i += 2) {
    const key = parts[i];
    const rawYaml = parts[i+1].replace(/---/g, '');
    try {
        data[key] = yaml.load(rawYaml);
    } catch (e) {
        console.error(`Failed to parse footer section ${key}`, e);
    }
  }

  return {
    brand: {
      logoAlt: data.brand?.['logo-alt'] || "The Vadim Group",
      tagline: data.brand?.tagline || "",
    },
    quickLinks: {
      title: data['quick-links']?.title || "Quick Links",
      items: data['quick-links']?.items || [],
    },
    contact: {
      title: data.contact?.title || "Contact",
      whatsappLabel: data.contact?.['whatsapp-label'] || "WhatsApp",
      whatsappHref: data.contact?.['whatsapp-href'] || "#",
      emailLabel: data.contact?.['email-label'] || "Email",
      emailHref: data.contact?.['email-href'] || "#",
      serviceArea: data.contact?.['service-area'] || [],
      hours: data.contact?.hours || "",
    },
    social: {
      title: data.social?.title || "Follow Us",
      items: data.social?.items || [],
    },
    legal: {
      title: data.legal?.title || "Legal",
      items: data.legal?.items || [],
      copyrightTemplate: data.legal?.['copyright-template'] || "© The Vadim Group",
    },
  };
}

// --- HOME PAGE PARSER ---

export interface HomePageData {
  seo: { title: string; description: string; keywords: string; ogTitle: string; ogDescription: string; ogImage: string; };
  hero: { title: string; subtitle: string; description: string; features: string[]; ctaText: string; };
  whyChooseUs: { tag: string; title: string; description: string; bullets: string[]; closing: string; };
  services: { tag: string; title: string; description: string; items: Array<{ title: string; description: string; features: Array<{ category?: string; items: string[] }>; linkText: string; linkHref: string; footerNote?: string; }>; };
  process: { tag: string; title: string; steps: Array<{ title: string; description: string }>; };
  reviews: { tag: string; title: string; intro: string; items: Array<{ quote: string; author: string }>; };
  about: { tag: string; title: string; quote: string; description: string; promiseTitle: string; promiseItems: string[]; closing: string; };
  faq: { tag: string; title: string; items: Array<{ question: string; answer: string }>; closing: string; };
  cta: { tag: string; title: string; description: string; whatsappText: string; whatsappLink: string; emailText: string; emailLink: string; footerText: string; footerSubtext: string; };
}

export function getHomePageData(): HomePageData {
  const parts = homeContent.split(/^---$/m);
  const attributes = yaml.load(parts[1]) as any;
  const body = parts.slice(2).join('---');
  const sections = body.split('---').map(s => s.trim());

  // 0: Hero
  const heroSection = sections[0];
  const heroTitle = findLine(heroSection, '# ');
  const heroSubtitle = findLine(heroSection, '## ');
  const heroDesc = findParagraph(heroSection);
  const heroFeatures = parseList(heroSection);
  const heroCta = heroSection.split('\n').find(l => l.includes('Get a free estimate'))?.replace(/\*\*/g, '').trim() || '';

  // 1: Why Choose Us
  const whySection = sections[1];
  const whyTag = findLine(whySection, '### ');
  const whyTitle = findLine(whySection, '## ');
  const whyDesc = findParagraph(whySection);
  const whyBullets = parseList(whySection);
  const whyClosing = whySection.split('\n').reverse().find(l => l.trim().length > 0 && !l.startsWith('-'))?.trim() || '';

  // 2: Services
  const servicesSection = sections[2];
  const servicesTag = findLine(servicesSection, '### ');
  const servicesTitle = findLine(servicesSection, '# ');
  const servicesDesc = findParagraph(servicesSection);
  const serviceItemsRaw = servicesSection.split(/^## /m).slice(1);
  const serviceItems = serviceItemsRaw.map(raw => {
    const lines = raw.split('\n');
    const title = lines[0].trim();
    const description = lines.find(l => !l.startsWith('[') && !l.startsWith('-') && !l.startsWith('**') && l.trim().length > 0 && l !== title)?.trim() || '';
    
    // Parse features with categories
    const features: Array<{ category?: string; items: string[] }> = [];
    let currentCategory: string | undefined;
    let currentItems: string[] = [];
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        // Save previous category if exists
        if (currentCategory || currentItems.length > 0) {
          features.push({ category: currentCategory, items: currentItems });
        }
        // Start new category
        currentCategory = trimmed.replace(/\*\*/g, '').trim();
        currentItems = [];
      } else if (trimmed.startsWith('-')) {
        currentItems.push(trimmed.replace(/^- /, '').trim());
      }
    }
    // Save last category
    if (currentCategory || currentItems.length > 0) {
      features.push({ category: currentCategory, items: currentItems });
    }
    
    const linkLine = lines.find(l => l.trim().startsWith('['));
    const linkText = linkLine?.match(/\[(.*?)\]/)?.[1] || '';
    const linkHref = linkLine?.match(/\((.*?)\)/)?.[1] || linkLine?.match(/\{#?(.*?)\}/)?.[1]?.replace(/^/, '#') || '';
    
    // Get footer note if exists (text after link)
    const linkLineIndex = lines.findIndex(l => l.trim().startsWith('['));
    const footerNote = linkLineIndex >= 0 && lines[linkLineIndex + 2] 
      ? lines[linkLineIndex + 2].trim() 
      : undefined;
    
    return { title, description, features, linkText, linkHref, footerNote };
  });

  // 3: Process
  const processSection = sections[3];
  const processTag = findLine(processSection, '### ');
  const processTitle = findLine(processSection, '## ');
  const processSteps = processSection.match(/\d+\.\s\*\*(.*?)\*\*\s+([\s\S]*?)(?=(?:\d+\.\s\*\*|$))/g)?.map(step => {
    const [_, title, desc] = step.match(/\d+\.\s\*\*(.*?)\*\*\s+([\s\S]*)/) || [];
    return { title: title?.trim() || '', description: desc?.trim() || '' };
  }) || [];

  // 4: Reviews
  const reviewsSection = sections[4];
  const reviewsTag = findLine(reviewsSection, '### ');
  const reviewsTitle = findLine(reviewsSection, '## ');
  const reviewsIntro = findParagraph(reviewsSection);
  const reviewsItems = reviewsSection.match(/"([\s\S]*?)"\s+[-—]\s+\*\*(.*?)\*\*/g)?.map(item => {
    const [_, quote, author] = item.match(/"([\s\S]*?)"\s+[-—]\s+\*\*(.*?)\*\*/) || [];
    return { quote: quote?.trim().replace(/\n/g, ' ') || '', author: author?.trim() || '' };
  }) || [];

  // 5: About
  const aboutSection = sections[5];
  const aboutTag = findLine(aboutSection, '### ');
  const aboutTitle = findLine(aboutSection, '## ');
  const aboutQuote = findLine(aboutSection, '> ').replace(/\*\*/g, '').replace(/_/g, '');
  const aboutDesc = aboutSection.split('>')[1]?.split('###')[0]?.trim().split('\n').filter(l => l.trim().length > 0).slice(1).join(' ') || '';
  const aboutPromiseTitle = findLine(aboutSection.split('### Our Promise')[1] || '', '### ');
  const aboutPromiseItems = parseList(aboutSection);
  const aboutClosing = aboutSection.split('\n').reverse().find(l => l.trim().length > 0 && !l.startsWith('-'))?.trim() || '';

  // 6: FAQ
  const faqSection = sections[6];
  const faqTag = findLine(faqSection, '### ');
  const faqTitle = findLine(faqSection, '## ');
  const faqItems = faqSection.match(/\*\*(.*?)\*\*\n([\s\S]*?)(?=(?:\*\*|If you don't|$))/g)?.map(item => {
    const lines = item.split('\n');
    return { question: lines[0].replace(/\*\*/g, '').trim(), answer: lines.slice(1).join(' ').trim() };
  }) || [];
  const faqClosing = faqSection.split('\n').reverse().find(l => l.trim().startsWith('If you don\'t see'))?.trim() || '';

  // 7: CTA
  const ctaSection = sections[7];
  const ctaTag = findLine(ctaSection, '### ');
  const ctaTitle = findLine(ctaSection, '## ').replace(/\[(.*?)\]\(.*?\)/, '');
  const ctaDesc = findParagraph(ctaSection);
  const ctaWhatsappLine = ctaSection.match(/\[(.*?)\]\((.*?)\)/);
  const ctaEmailLine = ctaSection.match(/\[(.*?)\]\(mailto:(.*?)\)/);
  const ctaFooterLines = ctaSection.split('**Send a message and photos').pop()?.trim().split('\n') || [];

  return {
    seo: {
      title: attributes.title || '',
      description: attributes.description || '',
      keywords: attributes.keywords || '',
      ogTitle: attributes['og:title'] || '',
      ogDescription: attributes['og:description'] || '',
      ogImage: attributes['og:image'] || '',
    },
    hero: { title: heroTitle, subtitle: heroSubtitle, description: heroDesc, features: heroFeatures, ctaText: heroCta },
    whyChooseUs: { tag: whyTag, title: whyTitle, description: whyDesc, bullets: whyBullets, closing: whyClosing },
    services: { tag: servicesTag, title: servicesTitle, description: servicesDesc, items: serviceItems },
    process: { tag: processTag, title: processTitle, steps: processSteps },
    reviews: { tag: reviewsTag, title: reviewsTitle, intro: reviewsIntro, items: reviewsItems },
    about: { tag: aboutTag, title: aboutTitle, quote: aboutQuote, description: aboutDesc, promiseTitle: aboutPromiseTitle, promiseItems: aboutPromiseItems, closing: aboutClosing },
    faq: { tag: faqTag, title: faqTitle, items: faqItems, closing: faqClosing },
    cta: {
      tag: ctaTag,
      title: ctaTitle.replace(/\[.*?\]/, '').trim(),
      description: ctaDesc,
      whatsappText: ctaWhatsappLine?.[1] || "Get Free Estimate via WhatsApp",
      whatsappLink: ctaWhatsappLine?.[2] || "#",
      emailText: ctaEmailLine?.[1] || "info@thevadimgroup.com",
      emailLink: ctaEmailLine?.[0] || "#",
      footerText: "Send a message and photos via WhatsApp to get a free, no-pressure estimate.",
      footerSubtext: ctaFooterLines[0] || "",
    }
  };
}

// --- HOME REPAIRS PAGE PARSER ---

export interface HomeRepairsPageData {
  seo: { title: string; description: string; keywords: string; ogTitle: string; ogDescription: string; ogImage: string; };
  hero: { title: string; description: string; };
  services: { 
    tag: string; 
    title: string; 
    description: string; 
    categories: Array<{ 
      title: string; 
      brief: string; 
      preview: string;
      subcategories: Array<{ 
        title: string; 
        items: string[]; 
      }>; 
    }> 
  };
  education: { tag: string; title: string; description: string; causesTitle: string; causes: string[]; costTitle: string; costDesc: string; };
  maintenance: { tag: string; title: string; description: string; tasks: { monthly: string[]; quarterly: string[]; annual: string[]; periodic: string[]; } };
  whyChooseUs: { tag: string; title: string; description: string; bullets: Array<{ title: string; description: string }>; };
  reviews: { tag: string; title: string; items: Array<{ quote: string; author: string }>; };
  projects: { tag: string; title: string; items: Array<{ title: string; description: string }> };
  process: { tag: string; title: string; description: string; steps: Array<{ title: string; description: string }> };
  faq: { tag: string; title: string; items: Array<{ question: string; answer: string }> };
  cta: { tag: string; title: string; description: string; whatsappText: string; whatsappLink: string; emailText: string; emailLink: string; };
}

export function getHomeRepairsPageData(): HomeRepairsPageData {
  const parts = homeRepairsContent.split(/^---$/m);
  const attributes = yaml.load(parts[1]) as any;
  const body = parts.slice(2).join('---');
  const sections = body.split('---').map(s => s.trim());

  // 0: Hero
  const heroSection = sections[0];
  const heroTitle = findLine(heroSection, '# ');
  const heroDesc = findParagraph(heroSection);

  // 1: Services
  const servicesSection = sections[1];
  const servicesTag = findLine(servicesSection, '### ');
  const servicesTitle = findLine(servicesSection, '# ');
  const servicesDesc = findParagraph(servicesSection);
  
  // Parse categories with subcategories (new accordion structure)
  const servicesCategories = servicesSection.split(/^## /m).slice(1).map((raw, index) => {
    const lines = raw.split('\n');
    const title = lines[0].trim();
    const brief = lines.find(l => !l.startsWith('-') && !l.startsWith('###') && !l.startsWith('**') && l.trim().length > 0 && l !== title)?.trim() || '';
    
    // Parse subcategories (### headings)
    const subcategories: Array<{ title: string; items: string[] }> = [];
    let currentSubcategory: { title: string; items: string[] } | null = null;
    
    for (const line of lines) {
      if (line.startsWith('### ')) {
        // Save previous subcategory if exists
        if (currentSubcategory) {
          subcategories.push(currentSubcategory);
        }
        // Start new subcategory
        currentSubcategory = { 
          title: line.replace('### ', '').trim(), 
          items: [] 
        };
      } else if (line.trim().startsWith('-') && currentSubcategory) {
        currentSubcategory.items.push(line.replace(/^- /, '').trim());
      }
    }
    
    // Save last subcategory
    if (currentSubcategory && currentSubcategory.items.length > 0) {
      subcategories.push(currentSubcategory);
    }
    
    // Generate preview text - short keywords for readability
    let preview = '';
    
    if (index === 0) { // Interior Repairs & Drywall Services
      preview = 'Drywall • Ceiling • Painting • Trim';
    } else if (index === 1) { // Kitchen & Bathroom Repairs
      preview = 'Plumbing • Cabinets • Tile • Fixtures';
    } else if (index === 2) { // Structural & Safety Repairs
      preview = 'Wood Rot • Subfloor • Framing • Foundation';
    } else if (index === 3) { // Exterior Home Repairs
      preview = 'Fence • Deck • Siding • Doors';
    } else if (index === 4) { // Water Damage Repairs
      preview = 'Drywall • Moisture • Leak Repairs • Restoration';
    }
    
    return { title, brief, preview, subcategories };
  });

  // 2: Priority Services (new section - not parsed, handled directly in component)
  // This section is read directly by PriorityServicesSection component from markdown
  
  // 3: Education
  const educationSection = sections[3];
  const eduTag = findLine(educationSection, '### ');
  const eduTitle = findLine(educationSection, '# ');
  // Get description - everything between title and "The Cost of Waiting"
  const eduDescMatch = educationSection.split(eduTitle)[1]?.split('**The Cost of Waiting:**')[0];
  const eduDesc = eduDescMatch?.trim() || findParagraph(educationSection);
  const eduCausesTitle = "Common Reasons Homes Need Repairs";
  const eduCauses = educationSection.match(/\d+\.\s\*\*(.*?)\*\*\s*-\s*(.*)/g)?.map(l => l.replace(/^\d+\.\s/, '').trim()) || [];
  const eduCostTitle = "The Cost of Waiting:";
  const eduCostDesc = educationSection.split('**The Cost of Waiting:**')[1]?.split('**Common Reasons')[0]?.trim() || "";

  // 4: Maintenance
  const maintSection = sections[4];
  const maintTag = findLine(maintSection, '### ');
  const maintTitle = findLine(maintSection, '# ');
  const maintDesc = findParagraph(maintSection);
  const extractTasks = (header: string) => {
    const block = maintSection.split(`**${header}**`)[1];
    if (!block) return [];
    const tasks = [];
    const lines = block.split('\n');
    for (const line of lines) {
        if (line.trim() === '') continue;
        if (line.trim().startsWith('**')) break;
        if (line.trim().startsWith('-')) tasks.push(line.replace(/^- /, '').trim());
    }
    return tasks;
  };
  const monthly = extractTasks('Monthly Tasks:');
  const quarterly = extractTasks('Quarterly Tasks:');
  const annual = extractTasks('Annual Tasks:');
  const periodic = extractTasks('Every 2-3 Years:');

  // 5: Why Choose Us
  const whySection = sections[5];
  const whyTag = findLine(whySection, '### ');
  const whyTitle = findLine(whySection, '# ');
  const whyDescription = findParagraph(whySection);
  // Parse bullets with bold titles: "**Title** — Description"
  const whyBulletsRaw = parseList(whySection);
  const whyBullets = whyBulletsRaw.map(bullet => {
    const match = bullet.match(/\*\*(.*?)\*\*\s*[-—]\s*(.*)/);
    if (match) {
      return { title: match[1].trim(), description: match[2].trim() };
    }
    return { title: bullet, description: '' };
  });

  // 6: Reviews
  const reviewsSection = sections[6];
  const reviewsTag = findLine(reviewsSection, '### ');
  const reviewsTitle = findLine(reviewsSection, '## ');
  const reviewsItems = reviewsSection.match(/> "([\s\S]*?)"\s+>\s+—\s+\*\*(.*?)\*\*/g)?.map(item => {
    const [_, quote, author] = item.match(/> "([\s\S]*?)"\s+>\s+—\s+\*\*(.*?)\*\*/) || [];
    return { quote: quote?.trim().replace(/\n/g, ' ') || '', author: author?.trim() || '' };
  }) || [];

  // 7: Projects
  const projectsSection = sections[7];
  const projectsTag = findLine(projectsSection, '### ');
  const projectsTitle = findLine(projectsSection, '# ');
  const projectsItemsRaw = projectsSection.split('**').slice(1);
  const projectsItems: Array<{title: string, description: string}> = [];
  for (let i = 0; i < projectsItemsRaw.length; i += 2) {
      if (projectsItemsRaw[i+1]) {
          projectsItems.push({
              title: projectsItemsRaw[i].trim(),
              description: projectsItemsRaw[i+1].trim()
          });
      }
  }

  // 8: Process
  const processSection = sections[8];
  const processTag = findLine(processSection, '### ');
  const processTitle = findLine(processSection, '# ');
  const processDesc = findParagraph(processSection);
  const processSteps = processSection.match(/\d+\.\s\*\*(.*?)\*\*\s+[-—]\s+(.*)/g)?.map(step => {
    const [_, title, desc] = step.match(/\d+\.\s\*\*(.*?)\*\*\s+[-—]\s+(.*)/) || [];
    return { title: title?.trim() || '', description: desc?.trim() || '' };
  }) || [];

  // 9: FAQ
  const faqSection = sections[9];
  const faqTag = findLine(faqSection, '### ');
  const faqTitle = findLine(faqSection, '# ');
  const faqItems = faqSection.match(/\*\*(.*?)\*\*\s*\n([\s\S]*?)(?=(?:\*\*|$))/g)?.map(item => {
    const lines = item.split('\n');
    return { question: lines[0].replace(/\*\*/g, '').trim(), answer: lines.slice(1).join(' ').trim() };
  }) || [];

  // 10: CTA
  const ctaSection = sections[10];
  const ctaTag = findLine(ctaSection, '### ');
  const ctaTitle = findLine(ctaSection, '# ');
  const ctaDesc = findParagraph(ctaSection);
  const ctaWhatsappLine = ctaSection.match(/\[(.*?)\]\((.*?)\)/);
  const ctaEmailLine = ctaSection.match(/\[(.*?)\]\(mailto:(.*?)\)/);

  return {
    seo: {
      title: attributes.title || '',
      description: attributes.description || '',
      keywords: attributes.keywords || '',
      ogTitle: attributes['og:title'] || '',
      ogDescription: attributes['og:description'] || '',
      ogImage: attributes['og:image'] || '',
    },
    hero: { title: heroTitle, description: heroDesc },
    services: { tag: servicesTag, title: servicesTitle, description: servicesDesc, categories: servicesCategories },
    education: { tag: eduTag, title: eduTitle, description: eduDesc, causesTitle: eduCausesTitle, causes: eduCauses, costTitle: eduCostTitle, costDesc: eduCostDesc },
    maintenance: { tag: maintTag, title: maintTitle, description: maintDesc, tasks: { monthly, quarterly, annual, periodic } },
    whyChooseUs: { tag: whyTag, title: whyTitle, description: whyDescription, bullets: whyBullets },
    reviews: { tag: reviewsTag, title: reviewsTitle, items: reviewsItems },
    projects: { tag: projectsTag, title: projectsTitle, items: projectsItems },
    process: { tag: processTag, title: processTitle, description: processDesc, steps: processSteps },
    faq: { tag: faqTag, title: faqTitle, items: faqItems },
    cta: {
      tag: ctaTag,
      title: ctaTitle,
      description: ctaDesc,
      whatsappText: ctaWhatsappLine?.[1] || "Get Free Estimate via WhatsApp",
      whatsappLink: ctaWhatsappLine?.[2] || "#",
      emailText: ctaEmailLine?.[1] || "info@thevadimgroup.com",
      emailLink: ctaEmailLine?.[0] || "#",
    }
  };
}

// --- MARINE & RV PAGE PARSER ---

export interface MarineRVPageData {
  seo: { title: string; description: string; keywords: string; ogTitle: string; ogDescription: string; ogImage: string; };
  hero: { title: string; description: string; subtitle: string; };
  services: { tag: string; title: string; description: string; categories: Array<{ title: string; description: string; features: string[]; }>; };
  emergency: { tag: string; title: string; description: string; priorityDescription: string; features: string[]; footer: string; };
  whyMatters: { tag: string; title: string; description: string; challenges: string[]; };
  maintenance: { tag: string; title: string; description: string; tasks: { monthly: string[]; quarterly: string[]; seasonal: string[]; annual: string[]; }; };
  whyChooseUs: { tag: string; title: string; bullets: string[]; };
  reviews: { tag: string; title: string; items: Array<{ quote: string; author: string }>; };
  projects: { tag: string; title: string; items: Array<{ title: string; description: string }> };
  process: { tag: string; title: string; description: string; steps: Array<{ title: string; description: string }>; };
  faq: { tag: string; title: string; items: Array<{ question: string; answer: string }> };
  cta: { tag: string; title: string; description: string; whatsappText: string; whatsappLink: string; emailText: string; emailLink: string; };
}

export function getMarineRVPageData(): MarineRVPageData {
  const parts = marineRVContent.split(/^---$/m);
  const attributes = yaml.load(parts[1]) as any;
  const body = parts.slice(2).join('---');
  const sections = body.split('---').map(s => s.trim());

  // 0: Hero
  const heroSection = sections[0];
  const heroTitle = findLine(heroSection, '# ');
  const heroSubtitle = findLine(heroSection, '## ');
  const heroDesc = findParagraph(heroSection); // "Boats and recreational vehicles..."

  // 1: Services
  const servicesSection = sections[1];
  const servicesTag = findLine(servicesSection, '### ');
  const servicesTitle = findLine(servicesSection, '# ');
  const servicesDesc = findParagraph(servicesSection);
  const servicesCategories = servicesSection.split(/^## /m).slice(1).map(raw => {
    const lines = raw.split('\n');
    const title = lines[0].trim();
    const description = lines.find(l => !l.startsWith('-') && l.trim().length > 0 && l !== title && !l.startsWith('*'))?.trim() || '';
    const features = lines.filter(l => l.trim().startsWith('-')).map(l => l.replace(/^- /, '').trim());
    return { title, description, features };
  });

  // 2: Emergency
  const emergencySection = sections[2];
  const emergencyTag = findLine(emergencySection, '### ');
  const emergencyTitle = findLine(emergencySection, '# ');
  const emergencyDesc = findParagraph(emergencySection); // "When a boat or RV..."
  const emergencyPriorityDesc = emergencySection.split('We prioritize urgent repairs')[1]?.split('We can help with:')[0]?.trim() || "";
  const emergencyFeatures = parseList(emergencySection);
  const emergencyFooter = emergencySection.split('Emergency cases are handled with priority scheduling')[1]?.trim().replace(/—/, '').trim() || "";

  // 3: Why It Matters
  const mattersSection = sections[3];
  const mattersTag = findLine(mattersSection, '### ');
  const mattersTitle = findLine(mattersSection, '# ');
  const mattersDesc = findParagraph(mattersSection);
  const mattersChallenges = parseList(mattersSection);

  // 4: Maintenance
  const maintSection = sections[4];
  const maintTag = findLine(maintSection, '### ');
  const maintTitle = findLine(maintSection, '# ');
  const maintDesc = findParagraph(maintSection);
  const extractTasks = (header: string) => {
    const block = maintSection.split(`**${header}**`)[1];
    if (!block) return [];
    const tasks = [];
    const lines = block.split('\n');
    for (const line of lines) {
        if (line.trim() === '') continue;
        if (line.trim().startsWith('**')) break;
        if (line.trim().startsWith('-')) tasks.push(line.replace(/^- /, '').trim());
    }
    return tasks;
  };
  const monthly = extractTasks('Monthly Tasks:');
  const quarterly = extractTasks('Quarterly Tasks:');
  const seasonal = extractTasks('Seasonal Tasks:');
  const annual = extractTasks('Annual Tasks:');

  // 5: Why Choose Us
  const whySection = sections[5];
  const whyTag = findLine(whySection, '### ');
  const whyTitle = findLine(whySection, '# ');
  const whyBullets = parseList(whySection);

  // 6: Reviews
  const reviewsSection = sections[6];
  const reviewsTag = findLine(reviewsSection, '### ');
  const reviewsTitle = findLine(reviewsSection, '## ');
  const reviewsItems = reviewsSection.match(/> "([\s\S]*?)"\s+>\s+—\s+\*\*(.*?)\*\*/g)?.map(item => {
    const [_, quote, author] = item.match(/> "([\s\S]*?)"\s+>\s+—\s+\*\*(.*?)\*\*/) || [];
    return { quote: quote?.trim().replace(/\n/g, ' ') || '', author: author?.trim() || '' };
  }) || [];

  // 7: Projects
  const projectsSection = sections[7];
  const projectsTag = findLine(projectsSection, '### ');
  const projectsTitle = findLine(projectsSection, '# ');
  const projectsItemsRaw = projectsSection.split('**').slice(1);
  const projectsItems: Array<{title: string, description: string}> = [];
  for (let i = 0; i < projectsItemsRaw.length; i += 2) {
      if (projectsItemsRaw[i+1]) {
          projectsItems.push({
              title: projectsItemsRaw[i].trim(),
              description: projectsItemsRaw[i+1].trim()
          });
      }
  }

  // 8: Process
  const processSection = sections[8];
  const processTag = findLine(processSection, '### ');
  const processTitle = findLine(processSection, '# ');
  const processDesc = findParagraph(processSection);
  const processSteps = processSection.match(/\d+\.\s\*\*(.*?)\*\*\s+[-—]\s+(.*)/g)?.map(step => {
    const [_, title, desc] = step.match(/\d+\.\s\*\*(.*?)\*\*\s+[-—]\s+(.*)/) || [];
    return { title: title?.trim() || '', description: desc?.trim() || '' };
  }) || [];

  // 9: FAQ
  const faqSection = sections[9];
  const faqTag = findLine(faqSection, '### ');
  const faqTitle = findLine(faqSection, '# ');
  const faqItems = faqSection.match(/\*\*(.*?)\*\*\s*\n([\s\S]*?)(?=(?:\*\*|$))/g)?.map(item => {
    const lines = item.split('\n');
    return { question: lines[0].replace(/\*\*/g, '').trim(), answer: lines.slice(1).join(' ').trim() };
  }) || [];

  // 10: CTA
  const ctaSection = sections[10];
  const ctaTag = findLine(ctaSection, '### ');
  const ctaTitle = findLine(ctaSection, '# ');
  const ctaDesc = findParagraph(ctaSection);
  const ctaWhatsappLine = ctaSection.match(/\[(.*?)\]\((.*?)\)/);
  const ctaEmailLine = ctaSection.match(/\[(.*?)\]\(mailto:(.*?)\)/);

  return {
    seo: {
      title: attributes.title || '',
      description: attributes.description || '',
      keywords: attributes.keywords || '',
      ogTitle: attributes['og:title'] || '',
      ogDescription: attributes['og:description'] || '',
      ogImage: attributes['og:image'] || '',
    },
    hero: { title: heroTitle, subtitle: heroSubtitle, description: heroDesc },
    services: { tag: servicesTag, title: servicesTitle, description: servicesDesc, categories: servicesCategories },
    emergency: { tag: emergencyTag, title: emergencyTitle, description: emergencyDesc, priorityDescription: emergencyPriorityDesc, features: emergencyFeatures, footer: emergencyFooter },
    whyMatters: { tag: mattersTag, title: mattersTitle, description: mattersDesc, challenges: mattersChallenges },
    maintenance: { tag: maintTag, title: maintTitle, description: maintDesc, tasks: { monthly, quarterly, seasonal, annual } },
    whyChooseUs: { tag: whyTag, title: whyTitle, bullets: whyBullets },
    reviews: { tag: reviewsTag, title: reviewsTitle, items: reviewsItems },
    projects: { tag: projectsTag, title: projectsTitle, items: projectsItems },
    process: { tag: processTag, title: processTitle, description: processDesc, steps: processSteps },
    faq: { tag: faqTag, title: faqTitle, items: faqItems },
    cta: {
      tag: ctaTag,
      title: ctaTitle,
      description: ctaDesc,
      whatsappText: ctaWhatsappLine?.[1] || "Get Free Estimate via WhatsApp",
      whatsappLink: ctaWhatsappLine?.[2] || "#",
      emailText: ctaEmailLine?.[1] || "info@thevadimgroup.com",
      emailLink: ctaEmailLine?.[0] || "#",
    }
  };
}
