import React from 'react';
import { ShoppingCart, FileText, MessageCircleCode, CheckSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function Journey() {
  const steps = [
    {
      id: 1,
      icon: ShoppingCart,
      title: 'Select Package',
      description: 'Choose the plan that fits your goals.',
      hasConnector: true,
    },
    {
      id: 2,
      icon: FileText,
      title: 'Fill in Data',
      description: 'Enter your address and preferences.',
      hasConnector: true,
    },
    {
      id: 3,
      icon: MessageCircleCode,
      title: 'WhatsApp Confirm',
      description: 'Finalize details with our team.',
      hasConnector: true,
    },
    {
      id: 4,
      icon: CheckSquare,
      title: 'Meal Delivery',
      description: 'Enjoy fresh meals at your doorstep.',
      hasConnector: false,
    },
  ];

  return (
    <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-16">
          How to Start Your Journey
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group flex flex-col items-center"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 bg-emerald-600 rounded-[24px] flex items-center justify-center text-white mb-6 shadow-lg shadow-emerald-600/10 group-hover:rotate-6 transition-transform duration-300">
                <step.icon className="h-9 w-9" />
              </div>

              {/* Text */}
              <h4 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-2">
                {step.title}
              </h4>
              <p className="font-sans text-sm text-slate-500 max-w-xs leading-relaxed">
                {step.description}
              </p>

              {/* Desktop Connecting Line */}
              {step.hasConnector && (
                <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] right-[calc(-50%+40px)] border-t-2 border-dashed border-slate-300 -z-10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
