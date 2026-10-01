import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import { packagesData } from '../data';
import { PackagePlan } from '../types';
import { motion } from 'motion/react';

interface PackagesProps {
  onSelectPlan: (plan: PackagePlan) => void;
}

export default function Packages({ onSelectPlan }: PackagesProps) {
  return (
    <section id="packages" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Choose Your Package
          </h2>
          <p className="font-sans text-slate-600 max-w-xl mx-auto text-base">
            Flexible plans designed for your goals and lifestyle.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {packagesData.map((pkg, idx) => {
            const isPopular = pkg.popular;
            
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'border-4 border-emerald-600 bg-white shadow-2xl scale-105 z-10 md:-translate-y-2'
                    : 'border border-slate-200 bg-slate-50/50 hover:border-emerald-500 hover:bg-white shadow-md hover:shadow-xl'
                }`}
              >
                {/* Popular Ribbon / Badge */}
                {isPopular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white font-sans font-bold text-xs px-6 py-2 rounded-full uppercase tracking-widest shadow-md flex items-center gap-1">
                    <Award className="h-3.5 w-3.5" />
                    {pkg.badge || 'Most Popular'}
                  </div>
                )}

                <div>
                  {/* Plan Meta */}
                  <div className="mb-6">
                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">
                      {pkg.name}
                    </h3>
                    <p className="font-sans text-sm text-slate-500">
                      {pkg.description}
                    </p>
                  </div>

                  {/* Price info */}
                  <div className="mb-8 flex items-baseline gap-1.5">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-emerald-700">
                      {pkg.price}
                    </span>
                    <span className="font-sans text-slate-500 font-medium">
                      / {pkg.meals}
                    </span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 fill-emerald-100" />
                        <span className="font-sans text-sm text-slate-700 font-medium leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Select Button */}
                <button
                  onClick={() => onSelectPlan(pkg)}
                  className={`w-full py-4 px-6 rounded-2xl font-sans font-bold text-sm transition-all duration-200 active:scale-98 ${
                    isPopular
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30'
                      : 'border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50'
                  }`}
                >
                  Select Package
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
