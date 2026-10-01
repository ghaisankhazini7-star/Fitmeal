import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqsData } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function Faq() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-slate-50/50 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-slate-600">
            Have questions about FitMeal? Find answers here.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq) => {
            const isOpen = activeId === faq.id;
            
            return (
              <div
                key={faq.id}
                className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 group focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span className="font-sans font-semibold text-slate-800 text-sm sm:text-base group-hover:text-emerald-700 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-6 pt-0 font-sans text-slate-600 text-sm sm:text-base border-t border-slate-100 bg-slate-50/30 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
