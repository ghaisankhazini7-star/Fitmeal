import React, { useState } from 'react';
import {
  X, Check, Phone, MapPin, User, ChefHat, Dumbbell,
  ArrowLeft, ArrowRight, MessageSquare, Send, Copy, Sparkles, AlertCircle
} from 'lucide-react';
import { PackagePlan } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: PackagePlan | null;
  onPlanChange: (plan: PackagePlan) => void;
  allPlans: PackagePlan[];
}

export default function OrderModal({
  isOpen,
  onClose,
  selectedPlan,
  onPlanChange,
  allPlans,
}: OrderModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  
  // Contact Info state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  
  // Dietary Preferences state
  const [goal, setGoal] = useState<'Weight Loss' | 'Muscle Gain' | 'Healthy Lifestyle'>('Healthy Lifestyle');
  const [allergies, setAllergies] = useState<string[]>([]);
  const [spiceLevel, setSpiceLevel] = useState<'Tidak Pedas' | 'Sedang' | 'Pedas'>('Sedang');

  // Simulated Chat state for Step 4
  const [isCopied, setIsCopied] = useState(false);
  const [isSimulatingSend, setIsSimulatingSend] = useState(false);
  const [isSentSuccessfully, setIsSentSuccessfully] = useState(false);

  if (!isOpen || !selectedPlan) return null;

  const allergyOptions = ['No Seafood', 'No Nuts', 'Vegetarian Only', 'Gluten-Free', 'No Dairy'];

  const toggleAllergy = (allergy: string) => {
    if (allergies.includes(allergy)) {
      setAllergies(allergies.filter((item) => item !== allergy));
    } else {
      setAllergies([...allergies, allergy]);
    }
  };

  // Compile message text for WhatsApp
  const compileWhatsAppMessage = () => {
    const formattedAllergies = allergies.length > 0 ? allergies.join(', ') : 'None';
    return `Halo FitMeal! Saya ingin memesan paket catering sehat:

📋 DETAIL PESANAN
----------------------------------
Paket: *${selectedPlan.name}* (${selectedPlan.meals} - ${selectedPlan.price})
Goal Kesehatan: *${goal}*
Dietary / Alergi: *${formattedAllergies}*
Tingkat Kepedasan: *${spiceLevel}*

👤 DATA PENGIRIMAN
----------------------------------
Nama Lengkap: *${name}*
No. WhatsApp: *${phone}*
Alamat Pengiriman: *${address}*
Catatan Khusus: *${notes || '-'}*

Mohon konfirmasi pesanan saya untuk langkah pembayaran berikutnya. Terima kasih!`;
  };

  const handleCopyText = () => {
    const message = compileWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleOpenWhatsApp = () => {
    const message = encodeURIComponent(compileWhatsAppMessage());
    const whatsappUrl = `https://wa.me/628123456789?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noreferrer');
  };

  const handleSimulateCheckout = () => {
    setIsSimulatingSend(true);
    setTimeout(() => {
      setIsSimulatingSend(false);
      setIsSentSuccessfully(true);
      setStep(4);
    }, 1800);
  };

  const isStep1Valid = name.trim() !== '' && phone.trim() !== '' && address.trim() !== '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      />

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white w-full max-w-2xl rounded-[36px] shadow-2xl overflow-hidden border border-emerald-100 z-10 flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 font-bold">
              Step {step} of 4
            </div>
            <div>
              <h3 className="font-display font-bold text-slate-800 text-base sm:text-lg">
                {step === 1 && 'Delivery & Contact Details'}
                {step === 2 && 'Custom Nutrition Options'}
                {step === 3 && 'WhatsApp Message Preview'}
                {step === 4 && 'Order Sent Successfully!'}
              </h3>
              <p className="font-sans text-xs text-slate-500">
                {step === 1 && 'Fill out your delivery information'}
                {step === 2 && 'Customize ingredients and spices'}
                {step === 3 && 'Confirm message details and submit'}
                {step === 4 && 'Your healthy transformation begins!'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal content area with scrollbar */}
        <div className="p-6 overflow-y-auto flex-grow space-y-6">
          {/* Progress Indicator */}
          {step <= 3 && (
            <div className="flex items-center gap-2 mb-2 shrink-0">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                    s === step
                      ? 'bg-emerald-600 w-2/5'
                      : s < step
                      ? 'bg-emerald-500/60'
                      : 'bg-slate-100'
                  }`}
                />
              ))}
            </div>
          )}

          {/* STEP 1: CONTACT DETAILS */}
          {step === 1 && (
            <div className="space-y-4">
              {/* Select Package Choice Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Selected Meal Package</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {allPlans.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => onPlanChange(plan)}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                        selectedPlan.id === plan.id
                          ? 'border-emerald-600 bg-emerald-50/40 text-emerald-950 ring-2 ring-emerald-500/20'
                          : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="font-display font-bold text-sm block">{plan.name}</span>
                      <span className="font-sans text-xs font-semibold text-emerald-700 mt-2">{plan.price} / {plan.meals}</span>
                    </button>
                  ))}
                </div>
              </div>

              <hr className="border-slate-100 my-4" />

              {/* Form Input fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-emerald-600" /> Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                    <Phone className="h-3.5 w-3.5 text-emerald-600" /> WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 08123456789"
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-emerald-600" /> Shipping Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Provide full address (street name, apartment, building, block, city)"
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">
                    Delivery Note / Request (Optional)
                  </label>
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. Please leave at lobby front desk"
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: NUTRITION OPTIONS */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Fitness Goal */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <Dumbbell className="h-4 w-4 text-emerald-600" /> Fitness Goal
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(['Weight Loss', 'Muscle Gain', 'Healthy Lifestyle'] as const).map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setGoal(g)}
                      className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                        goal === g
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dietary / Allergies */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-3 flex items-center gap-1.5">
                  <ChefHat className="h-4 w-4 text-emerald-600" /> Dietary Restrictions / Allergies
                </label>
                <div className="flex flex-wrap gap-2">
                  {allergyOptions.map((allergy) => {
                    const active = allergies.includes(allergy);
                    return (
                      <button
                        key={allergy}
                        type="button"
                        onClick={() => toggleAllergy(allergy)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                          active
                            ? 'bg-teal-50 border-teal-500 text-teal-800'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {active && <Check className="h-3.5 w-3.5" />}
                        {allergy}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Spice Level */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-3">
                  Spice Preference
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['Tidak Pedas', 'Sedang', 'Pedas'] as const).map((spice) => (
                    <button
                      key={spice}
                      type="button"
                      onClick={() => setSpiceLevel(spice)}
                      className={`py-3 px-4 rounded-xl border text-sm font-semibold transition-all ${
                        spiceLevel === spice
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {spice}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PREVIEW & CONFIRM */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-emerald-50 rounded-2xl p-4 flex gap-3 text-emerald-800 text-sm border border-emerald-100">
                <Sparkles className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="font-sans">
                  Your customized FitMeal package is compiled into a text draft below. Click **Order via WhatsApp** or **Simulate Order** to finalize.
                </p>
              </div>

              {/* Message Box mock */}
              <div className="relative">
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={handleCopyText}
                    className="flex items-center gap-1 text-xs font-semibold bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors shadow-sm active:scale-95"
                  >
                    <Copy className="h-3.5 w-3.5" />
                    {isCopied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="bg-slate-900 text-slate-200 font-mono text-xs p-5 rounded-2xl overflow-x-auto whitespace-pre-wrap max-h-60 border border-slate-800 leading-relaxed shadow-inner">
                  {compileWhatsAppMessage()}
                </pre>
              </div>
            </div>
          )}

          {/* STEP 4: SUCCESS SIMULATION SCREEN */}
          {step === 4 && (
            <div className="text-center py-12 px-4 space-y-6 flex flex-col items-center">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-2 shadow-inner">
                <Check className="h-10 w-10 stroke-[3]" />
              </div>
              <div className="max-w-md space-y-2">
                <h4 className="font-display font-extrabold text-2xl text-slate-900">Order Sent Successfully!</h4>
                <p className="font-sans text-slate-600 text-sm leading-relaxed">
                  Terima kasih, **${name}**! Kami telah menerima simulasi pesanan Anda untuk paket **${selectedPlan.name}**. 
                </p>
              </div>

              {/* Small Order Invoice Summary Card */}
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 w-full max-w-sm text-left space-y-3 shadow-inner">
                <div className="flex justify-between items-center pb-2 border-b border-slate-200/60">
                  <span className="font-sans text-xs font-bold text-slate-500 uppercase tracking-wide">Meal Prep Package</span>
                  <span className="font-sans text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">{selectedPlan.name}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-sans">Goal</span>
                  <span className="text-slate-800 font-sans font-semibold">{goal}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-sans">Spiciness</span>
                  <span className="text-slate-800 font-sans font-semibold">{spiceLevel}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-500 font-sans">Recipient</span>
                  <span className="text-slate-800 font-sans font-semibold">{name} ({phone})</span>
                </div>
                <div className="flex justify-between items-center text-sm pt-2 border-t border-slate-200/60">
                  <span className="font-display font-bold text-slate-800">Total Price</span>
                  <span className="font-display font-bold text-emerald-700 text-lg">{selectedPlan.price}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3 w-full max-w-sm justify-center">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-sans font-semibold py-3 px-6 rounded-xl shadow-md transition-colors active:scale-95"
                >
                  Done &amp; Close
                </button>
                <button
                  type="button"
                  onClick={handleOpenWhatsApp}
                  className="w-full border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-sans font-semibold py-3 px-6 rounded-xl transition-colors active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Open in WA
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer with Action Controls */}
        {step <= 3 && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center shrink-0">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep((prev) => (prev - 1) as any)}
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors py-2 px-3"
              >
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
            ) : (
              <div /> // Spacer
            )}

            <div className="flex gap-2">
              {step === 3 ? (
                <>
                  <button
                    type="button"
                    disabled={isSimulatingSend}
                    onClick={handleSimulateCheckout}
                    className="bg-slate-800 hover:bg-slate-900 disabled:bg-slate-400 text-white font-sans font-semibold py-2.5 px-5 rounded-xl transition-all shadow-md flex items-center gap-1.5 active:scale-95"
                  >
                    {isSimulatingSend ? (
                      <span className="flex items-center gap-1.5">
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Simulate Send
                        <Sparkles className="h-4 w-4" />
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={handleOpenWhatsApp}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold py-2.5 px-5 rounded-xl transition-all shadow-lg shadow-emerald-600/10 flex items-center gap-1.5 active:scale-95"
                  >
                    Order via WA
                    <Send className="h-4 w-4" />
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  disabled={step === 1 && !isStep1Valid}
                  onClick={() => setStep((prev) => (prev + 1) as any)}
                  className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-sans font-semibold py-2.5 px-6 rounded-xl transition-all shadow-md flex items-center gap-1.5 active:scale-95"
                >
                  Next
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
