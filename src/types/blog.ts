export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  imageType: 'cooling' | 'vectors' | 'datacenter' | 'generator' | 'almanac' | 'privacy';
  content: string[];
}
