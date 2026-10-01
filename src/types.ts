export interface PackagePlan {
  id: string;
  name: string;
  description: string;
  price: string;
  meals: string;
  features: string[];
  popular?: boolean;
  badge?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Benefit {
  id: string;
  iconName: string; // Will map to Lucide icons
  title: string;
  description: string;
  colSpan?: string;
  bgClass?: string;
  iconBgClass?: string;
  iconColorClass?: string;
  avgKcalBadge?: boolean;
}

export interface UserFormData {
  fullName: string;
  phone: string;
  address: string;
  notes: string;
  dietaryRestrictions: string[];
  spiceLevel: 'tidak pedas' | 'sedang' | 'pedas';
  goal: 'weight_loss' | 'muscle_gain' | 'healthy_lifestyle';
}
