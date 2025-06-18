export interface LocalizedContent {
  en: string;
  ja: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  nameJa?: string;
  avatar?: string;
  preferences: UserPreferences;
  subscription: SubscriptionTier;
  createdAt: string;
  lastLoginAt: string;
}

export interface UserPreferences {
  language: 'en' | 'ja';
  timezone: string;
  currency: 'USD' | 'JPY';
  notifications: NotificationSettings;
  interests: string[];
  displayMode: 'light' | 'dark' | 'auto';
}

export interface NotificationSettings {
  email: boolean;
  push: boolean;
  priceAlerts: boolean;
  newsDigest: boolean;
  weeklyReport: boolean;
}

export interface SubscriptionTier {
  tier: 'free' | 'premium' | 'enterprise';
  features: string[];
  expiresAt?: string;
}

export interface Translation {
  id: string;
  originalText: string;
  translatedText: string;
  fromLanguage: 'en' | 'ja';
  toLanguage: 'en' | 'ja';
  confidence: number;
  translator: 'human' | 'ai';
  translatedAt: string;
  translatedBy?: string;
}

export interface Alert {
  id: string;
  userId: string;
  type: 'price' | 'news' | 'volume' | 'custom';
  condition: AlertCondition;
  isActive: boolean;
  triggerCount: number;
  lastTriggeredAt?: string;
  createdAt: string;
}

export interface AlertCondition {
  symbol?: string;
  priceThreshold?: number;
  direction?: 'above' | 'below';
  keywords?: string[];
  category?: string;
}

export interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
  timestamp: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}