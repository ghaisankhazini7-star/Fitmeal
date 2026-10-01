import React from 'react';
import { Quote } from 'lucide-react';
import { testimonialsData } from '../data';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Happy Healthy Members
          </h2>
          <p className="font-sans text-slate-600 max-w-2xl mx-auto text-base">
            Real stories from people who transformed their lives with FitMeal.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50/50 hover:bg-slate-50 border-l-4 border-emerald-600 p-8 rounded-[32px] relative flex flex-col justify-between shadow-md shadow-slate-100/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote icon watermark in the top right */}
              <Quote className="h-12 w-12 text-emerald-600/10 absolute top-6 right-8 pointer-events-none" />

              <p className="font-sans text-base text-slate-700 italic leading-relaxed mb-8">
                {item.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md bg-slate-200">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-display font-bold text-sm text-slate-900 leading-tight">
                    {item.name}
                  </p>
                  <p className="font-sans text-xs text-slate-500 uppercase font-semibold tracking-wider">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
