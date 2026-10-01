import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Packages from './components/Packages';
import Journey from './components/Journey';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import OrderModal from './components/OrderModal';
import { packagesData } from './data';
import { PackagePlan } from './types';
import { Globe, Mail, Phone, ArrowUp } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<PackagePlan | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectPlan = (plan: PackagePlan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const handleOrderNowClick = () => {
    // Default to the Healthy Package (index 1) or first item
    const defaultPlan = packagesData.find(p => p.popular) || packagesData[0];
    setSelectedPlan(defaultPlan);
    setIsModalOpen(true);
  };

  const handleViewMenuClick = () => {
    const section = document.getElementById('packages');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/20 text-slate-800 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900 scroll-smooth">
      {/* Navigation Header */}
      <Header onOrderClick={handleOrderNowClick} />

      {/* Main Content Layout */}
      <main className="pt-4">
        {/* Hero Section */}
        <Hero
          onOrderClick={handleOrderNowClick}
          onViewMenuClick={handleViewMenuClick}
        />

        {/* Bento Grid - Why Choose Us */}
        <Benefits />

        {/* Pricing Packages */}
        <Packages onSelectPlan={handleSelectPlan} />

        {/* Journey Step Guide */}
        <Journey />

        {/* Happy Healthy Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <Faq />

        {/* Final Call to Action Block */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-emerald-800 rounded-[48px] py-16 px-8 sm:px-16 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-900/10">
            {/* Elegant Background radial overlay pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Ready to Live Healthier?
              </h2>
              <p className="font-sans text-base sm:text-lg text-emerald-50 max-w-xl mx-auto leading-relaxed opacity-90">
                Start a healthy diet today with FitMeal and feel the difference in your energy and wellness.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleOrderNowClick}
                  className="bg-white hover:bg-slate-50 text-emerald-800 font-display font-extrabold text-base sm:text-lg px-10 py-5 rounded-full shadow-2xl transition-all duration-200 active:scale-95 inline-flex items-center gap-2"
                >
                  Order Now via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-slate-100 text-slate-800 border-t border-slate-200/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            {/* Branding Column */}
            <div className="md:col-span-5 space-y-6">
              <span className="text-display text-2xl font-extrabold text-emerald-700 tracking-tight">
                Fit<span className="text-emerald-500">Meal</span>
              </span>
              <p className="font-sans text-sm text-slate-500 leading-relaxed max-w-sm">
                The leading healthy meal prep delivery service in the city. Committed to fresh ingredients and expert nutrition.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50 flex items-center justify-center text-slate-500 hover:text-emerald-600 transition-all shadow-sm"
                  aria-label="Website"
                >
                  <Globe className="h-4 w-4" />
                </a>
                <a
                  href="mailto:support@fitmeal.com"
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50 flex items-center justify-center text-slate-500 hover:text-emerald-600 transition-all shadow-sm"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="tel:+628123456789"
                  className="w-10 h-10 rounded-full border border-slate-200 hover:border-emerald-600 hover:bg-emerald-50 flex items-center justify-center text-slate-500 hover:text-emerald-600 transition-all shadow-sm"
                  aria-label="Phone"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-emerald-700 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#why-us" className="font-sans text-sm text-slate-500 hover:text-emerald-600 transition-colors">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="#packages" className="font-sans text-sm text-slate-500 hover:text-emerald-600 transition-colors">
                    Packages
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="font-sans text-sm text-slate-500 hover:text-emerald-600 transition-colors">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="md:col-span-4">
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-emerald-700 mb-6">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="font-sans text-sm text-slate-500 hover:text-emerald-600 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="font-sans text-sm text-slate-500 hover:text-emerald-600 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#faq" className="font-sans text-sm text-slate-500 hover:text-emerald-600 transition-colors">
                    Contact Us / FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright bar */}
          <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="font-sans text-xs text-slate-400">
              &copy; 2026 FitMeal. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="font-sans text-xs font-semibold text-slate-400">Healthy Living</span>
              <span className="font-sans text-xs font-semibold text-slate-400">Premium Quality</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all z-40 active:scale-95"
        aria-label="Back to Top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>

      {/* Interactive Order Step Dialog */}
      <AnimatePresence>
        {isModalOpen && (
          <OrderModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            selectedPlan={selectedPlan}
            onPlanChange={(plan) => setSelectedPlan(plan)}
            allPlans={packagesData}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
