import { PackagePlan, Testimonial, FAQItem, Benefit } from './types';

export const benefitsData: Benefit[] = [
  {
    id: 'ingredients',
    iconName: 'Salad',
    title: 'Fresh Ingredients Every Day',
    description: 'We source directly from local organic farms daily to ensure peak nutritional value and vibrant taste in every bite.',
    colSpan: 'md:col-span-2',
    bgClass: 'bg-white',
    iconBgClass: 'bg-emerald-50',
    iconColorClass: 'text-emerald-600',
  },
  {
    id: 'shipping',
    iconName: 'Truck',
    title: 'Free Shipping',
    description: 'Available for all orders within the city area. Quick and reliable delivery.',
    colSpan: 'md:col-span-1',
    bgClass: 'bg-emerald-800 text-white',
    iconBgClass: 'bg-white/10',
    iconColorClass: 'text-white',
  },
  {
    id: 'chefs',
    iconName: 'ChefHat',
    title: 'Expert Chefs',
    description: 'Meals designed and cooked by experienced chefs focused on healthy culinary techniques.',
    colSpan: 'md:col-span-1',
    bgClass: 'bg-white',
    iconBgClass: 'bg-teal-50',
    iconColorClass: 'text-teal-600',
  },
  {
    id: 'nutrition',
    iconName: 'Dumbbell',
    title: 'Measured Nutrition',
    description: 'Every meal comes with a detailed breakdown of macronutrients and total calories.',
    colSpan: 'md:col-span-2',
    bgClass: 'bg-slate-100',
    iconBgClass: 'bg-emerald-600',
    iconColorClass: 'text-white',
    avgKcalBadge: true,
  },
];

export const packagesData: PackagePlan[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    description: 'Perfect for a week-long trial',
    price: 'Rp199k',
    meals: '5 Meals',
    features: [
      '1 Meal per day',
      'Basic Nutrition Guide',
      'Daily Delivery',
    ],
  },
  {
    id: 'healthy',
    name: 'Healthy Package',
    description: 'Our best value for consistent results',
    price: 'Rp379k',
    meals: '10 Meals',
    features: [
      '2 Meals per day',
      'Full Macronutrient Log',
      'Personalized Goal Tracking',
      'Free Priority Shipping',
    ],
    popular: true,
    badge: 'Most Popular',
  },
  {
    id: 'premium',
    name: 'Premium Package',
    description: 'The ultimate lifestyle change',
    price: 'Rp699k',
    meals: '20 Meals',
    features: [
      'Complete Daily Fuel',
      'Chef Consultation',
      'Exclusive Menu Access',
    ],
  },
];

export const testimonialsData: Testimonial[] = [
  {
    quote: '"Lost 5 kg in 2 months. The food is delicious and I never feel like I\'m on a restrictive diet."',
    name: 'Rina K.',
    role: 'Office Manager',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9gtgB4InowlZz3WSCj0snmCsAZwC02iMHtcnbY3mnqRwdB9QXOMkfYB10vGUMvNCGY3Vmdi1Ewl8bojgX_IatzDLefUweEgXj_JCKguW5HruAk4yB1GxKAc2wqptaNXMm6Fdo6G6vkwOCAnoqb7rzAIXNM8mnLwbOqh79txH3-e0MPxWHBDduYzrbkxSfmSW5e1G_U6bovXocjTj6Nui8_LAt9ZrosRNeqO5df7BE8O2fx0MGsLppcgJhnJW2kndFWPt3uDZdADk',
  },
  {
    quote: '"Practical for office workers. Just reheat for 2 minutes and you have a chef-quality lunch at your desk."',
    name: 'Andi S.',
    role: 'Tech Lead',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA92eaE5xsmOJFbfhvS2HVWz-TO4JAj5CU1cFGCVHhe4Ay656ZywjD2WUwNT_uWrxa3tNwErEUehctYzUD29svr-PXwWafyYBkVUzXpBDrQttEIQd2G9vlo4EViQhOBoQXc0ckNhKiSEK-bPJOITk2kAjZpT7VmmoQ1NriT9H_Npmk_cFj7iU4TOI2KrYSxn9SqUOOqGk4tP5BzVyipPaTi2rztY9WNQjKXrHXolRFVg8gvSW9I3xZaBPUKeboQH9-A9ZwuFGSnEds',
  },
  {
    quote: '"The portions are just right, the taste is delicious, and the delivery is always on time. Highly recommended!"',
    name: 'Sarah J.',
    role: 'Fitness Coach',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_1uxnxiSd-Tg40O9gVlBii_6FAPkcdBsNKFCdFPAQhKWQR9pu8B5wQMps5CtG144fZkxk4v5zwGrxuwDTw2hpv0nogYHqHl7D4F-3A-p-ngeeoPlfp2gZv0dGnidM8lhZ4gTl_iyMQlH9hkXtpvfmTGWSVRPzO_NXCtZ6k_nCAypCg8zw_Qf8qkrfcKP8Q4IA6zGprejz7nLLZUOOBX6gSp2E88dBr1yb46GSQRkmC9Ir0NKCCSPFaSvp9lIKT-pwiBagvnQJhdI',
  },
];

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Does the menu change daily?',
    answer: 'Yes, we offer a rotating menu designed by our culinary team that changes daily to ensure variety and prevent taste boredom. You\'ll receive a monthly schedule upon subscribing.',
  },
  {
    id: 'faq-2',
    question: 'Can I request non-spicy food?',
    answer: 'Absolutely. When filling out your data, you can specify dietary restrictions, allergies, and preference for spice levels. We tailor each meal to your needs.',
  },
  {
    id: 'faq-3',
    question: 'Are there monthly packages available?',
    answer: 'Yes, we offer both 2-week and 4-week subscription plans with significant discounts compared to daily orders. Contact us on WhatsApp for specialized enterprise pricing.',
  },
];
