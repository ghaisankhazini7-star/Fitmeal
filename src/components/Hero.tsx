import React from 'react';
import { Bolt, ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOrderClick: () => void;
  onViewMenuClick: () => void;
}

export default function Hero({ onOrderClick, onViewMenuClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-emerald-50/20 via-white to-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Text Column */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <span className="inline-flex self-start px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-sans font-semibold text-xs uppercase tracking-wider mb-6">
              🌱 Fresh &amp; Healthy Daily
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Eat Healthy Without the <span className="text-emerald-600 block sm:inline">Hassle</span>
            </h1>
            <p className="font-sans text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Enjoy healthy, delicious, and nutritious food delivered straight to your home or office. We take the guesswork out of eating well.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOrderClick}
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-sans font-semibold px-8 py-4 rounded-full shadow-xl shadow-emerald-700/25 hover:shadow-emerald-700/40 transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
              >
                Order Now
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={onViewMenuClick}
                className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-sans font-semibold px-8 py-4 rounded-full transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
              >
                View Menu
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Image Column */}
        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative"
          >
            {/* Ambient Background Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-emerald-100/40 rounded-full blur-3xl"></div>

            {/* Main Image Frame */}
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white bg-white">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdj3w3C3pOcBjpmoUSS1AM5K73fBEzrMH9ruEuXcX3U_WpztqzQrMUr0WNLpXF_Pscw_Fw0REby7-hui1uJ0VYrD90cmzP7NZqc8rkuh68BgFgTErDtpQXzf6mQRf3ixlXrBNlVaBVsnX3Kou3m5LGf-G5ZgaPsVcz7Mfs1xHIxAQs9gvLo4wLT1YzL_qNqKCbpTlYI7cXjzeDHy45cIf1KHymuMXZRHqsUZm409Xsfaufj7_e5jfbLIiRcX8HKMe-_uXW1wbKumM"
                alt="FitMeal Heathy Meal Prep"
                className="w-full h-auto object-cover aspect-[4/3] hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Info Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-6 -left-4 sm:-left-8 bg-white p-5 rounded-3xl shadow-xl border border-emerald-50 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center shadow-inner">
                <Bolt className="h-6 w-6 fill-emerald-500 text-emerald-600" />
              </div>
              <div>
                <p className="font-sans font-medium text-xs text-slate-500 uppercase tracking-wider">Instant Energy</p>
                <p className="font-display font-bold text-lg text-slate-800 leading-tight">100% Nutritious</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
