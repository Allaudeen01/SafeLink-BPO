import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
}

export interface PricingPlan {
  name: string;
  priceDesc: string;
  features: string[];
  cta: string;
  popular?: boolean;
  idealFor: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
}