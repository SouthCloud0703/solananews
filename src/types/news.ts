export interface NewsArticle {
  id: string;
  title: string;
  titleJa?: string;
  content: string;
  contentJa?: string;
  summary: string;
  summaryJa?: string;
  author: string;
  source: string;
  sourceUrl: string;
  publishedAt: string;
  updatedAt?: string;
  category: NewsCategory;
  tags: string[];
  imageUrl?: string;
  readingTime: number;
  importance: 'low' | 'medium' | 'high' | 'critical';
  sentiment: 'positive' | 'negative' | 'neutral';
  relatedTokens?: string[];
  isTranslated: boolean;
}

export interface NewsCategory {
  id: string;
  name: string;
  nameJa: string;
  description?: string;
  descriptionJa?: string;
  color?: string;
  icon?: string;
}

export interface NewsSource {
  id: string;
  name: string;
  website: string;
  rssUrl?: string;
  apiUrl?: string;
  credibilityScore: number;
  language: 'en' | 'ja' | 'multi';
  updateFrequency: 'realtime' | 'hourly' | 'daily';
  isActive: boolean;
}

export interface TrendingTopic {
  id: string;
  keyword: string;
  keywordJa?: string;
  mentions24h: number;
  mentionsChange24h: number;
  sentiment: 'positive' | 'negative' | 'neutral';
  relatedArticles: string[];
  category: string;
  lastUpdated: string;
}

export interface Newsletter {
  id: string;
  title: string;
  titleJa: string;
  content: string;
  publishedAt: string;
  articles: string[];
  marketSummary: string;
  marketSummaryJa: string;
  weeklyHighlights: string[];
  weeklyHighlightsJa: string[];
  subscribers: number;
}