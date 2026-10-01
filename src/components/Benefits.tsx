import React, { useState } from 'react';
import { Salad, Truck, ChefHat, Dumbbell, ChevronDown, ChevronUp, Calculator } from 'lucide-react';
import { benefitsData } from '../data';
import { motion, AnimatePresence } from 'motion/react';

const iconMap: Record<string, React.ComponentType<any>> = {
  Salad: Salad,
  Truck: Truck,
  ChefHat: ChefHat,
  Dumbbell: Dumbbell,
};

export default function Benefits() {
  const [showCalculator, setShowCalculator] = useState(false);
  
  // Calorie Calculator State
  const [weight, setWeight] = useState(65);
  const [height, setHeight] = useState(170);
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState<'male' | 'female'>('female');
  const [activity, setActivity] = useState('1.375'); // Light exercise
  const [goal, setGoal] = useState<'lose' | 'maintain' | 'gain'>('maintain');
  const [calcResult, setCalcResult] = useState<number | null>(null);

  const calculateCalories = () => {
    // Harris-Benedict Equation
    let bmr = 0;
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    const tdee = bmr * parseFloat(activity);
    
    let target = tdee;
    if (goal === 'lose') target -= 400;
    if (goal === 'gain') target += 400;
    
    setCalcResult(Math.round(target));
  };

  return (
    <section id="why-us" className="py-20 bg-slate-50/50 px-4 sm:px-6 lg:px-8 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Why Choose FitMeal?
          </h2>
          <p className="font-sans text-slate-600 max-w-2xl mx-auto text-base">
            We combine nutritional science with culinary art to bring you the best meal prep experience.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {benefitsData.map((benefit) => {
            const IconComp = iconMap[benefit.iconName] || Salad;
            const isWhiteText = benefit.bgClass?.includes('text-white');
            
            return (
              <motion.div
                key={benefit.id}
                whileHover={{ y: -8 }}
                onClick={() => {
                  if (benefit.avgKcalBadge) {
                    setShowCalculator(!showCalculator);
                  }
                }}
                className={`p-8 rounded-[32px] border ${
                  benefit.bgClass?.includes('bg-emerald-800')
                    ? 'bg-emerald-800 text-white border-transparent shadow-lg shadow-emerald-800/10'
                    : 'bg-white text-slate-800 border-slate-100 shadow-md shadow-slate-100/40'
                } ${benefit.colSpan || ''} flex flex-col justify-between group cursor-pointer transition-all duration-300 relative overflow-hidden`}
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105 ${
                      benefit.bgClass?.includes('bg-emerald-800')
                        ? 'bg-white/10 text-white'
                        : benefit.iconBgClass || 'bg-emerald-50 text-emerald-600'
                    }`}
                  >
                    <IconComp className="h-7 w-7" />
                  </div>
                  
                  <h3 className={`font-display text-xl sm:text-2xl font-bold mb-3 ${isWhiteText ? 'text-white' : 'text-slate-900'}`}>
                    {benefit.title}
                  </h3>
                  <p className={isWhiteText ? 'text-emerald-100/90' : 'text-slate-600'}>
                    {benefit.description}
                  </p>
                </div>

                {benefit.avgKcalBadge && (
                  <div className="mt-8 flex items-center justify-between">
                    <span className="text-emerald-600 font-sans font-semibold text-xs tracking-wider flex items-center gap-1.5 bg-emerald-50 px-4 py-1.5 rounded-full hover:bg-emerald-100 transition-colors">
                      <Calculator className="h-4 w-4" />
                      {showCalculator ? 'Hide Calculator' : 'Try Calorie Calculator'}
                    </span>
                    <div className="hidden sm:flex w-24 h-24 rounded-full border-4 border-dashed border-emerald-300/60 items-center justify-center bg-emerald-50/50">
                      <div className="text-center">
                        <span className="block text-lg font-bold text-emerald-700">500+</span>
                        <span className="text-[10px] uppercase font-bold tracking-tight text-emerald-600/80">Kcal Avg.</span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Collapsible Calorie Calculator */}
        <AnimatePresence>
          {showCalculator && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-emerald-100 shadow-xl max-w-3xl mx-auto my-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                    <Calculator className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-slate-800">Measured Nutrition Calculator</h4>
                    <p className="font-sans text-xs text-slate-500">Calculate your daily caloric needs and choose the right FitMeal plan</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Left Controls */}
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setGender('female')}
                        className={`flex-1 py-2.5 rounded-xl font-sans font-semibold text-sm border transition-all ${
                          gender === 'female'
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        Female
                      </button>
                      <button
                        type="button"
                        onClick={() => setGender('male')}
                        className={`flex-1 py-2.5 rounded-xl font-sans font-semibold text-sm border transition-all ${
                          gender === 'male'
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        Male
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5">Age (Years)</label>
                        <input
                          type="number"
                          value={age}
                          onChange={(e) => setAge(parseInt(e.target.value) || 0)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5">Height (cm)</label>
                        <input
                          type="number"
                          value={height}
                          onChange={(e) => setHeight(parseInt(e.target.value) || 0)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1.5">Weight (kg)</label>
                        <input
                          type="number"
                          value={weight}
                          onChange={(e) => setWeight(parseInt(e.target.value) || 0)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">Activity Level</label>
                      <select
                        value={activity}
                        onChange={(e) => setActivity(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      >
                        <option value="1.2">Sedentary (No exercise)</option>
                        <option value="1.375">Lightly Active (Exercise 1-3 days/wk)</option>
                        <option value="1.55">Moderately Active (Exercise 3-5 days/wk)</option>
                        <option value="1.725">Very Active (Hard exercise daily)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5">Your Goal</label>
                      <select
                        value={goal}
                        onChange={(e) => setGoal(e.target.value as any)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      >
                        <option value="lose">Lose Weight (-400 kcal)</option>
                        <option value="maintain">Maintain Weight</option>
                        <option value="gain">Gain Muscle (+400 kcal)</option>
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={calculateCalories}
                      className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-sans font-semibold py-2.5 rounded-xl shadow-md transition-all active:scale-98"
                    >
                      Calculate Needs
                    </button>
                  </div>

                  {/* Right Results Display */}
                  <div className="bg-slate-50 rounded-2xl p-6 flex flex-col justify-center items-center border border-slate-100 text-center">
                    {calcResult ? (
                      <div>
                        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Recommended Intake</p>
                        <p className="font-display text-4xl font-extrabold text-emerald-700 mb-2">{calcResult} <span className="text-sm font-bold text-slate-600">kcal/day</span></p>
                        <p className="font-sans text-sm text-slate-600 mb-6 max-w-xs">
                          Based on your metrics and goals, your daily caloric intake should be around {calcResult} calories.
                        </p>
                        
                        <div className="border-t border-slate-200/60 pt-4">
                          <p className="font-sans text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide">Suggested FitMeal Plan</p>
                          {calcResult < 1500 ? (
                            <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold inline-block">
                              Basic Package (1 Meal/day) + custom snacks
                            </div>
                          ) : calcResult < 2200 ? (
                            <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold inline-block">
                              Healthy Package (2 Meals/day) - PERFECT FIT
                            </div>
                          ) : (
                            <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold inline-block">
                              Premium Package (Complete Daily Fuel)
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="py-8">
                        <Dumbbell className="h-10 w-10 text-emerald-400 mb-3 animate-bounce-slow" />
                        <p className="font-sans text-sm text-slate-500 font-medium max-w-xs">
                          Input your metrics on the left and click "Calculate Needs" to see your tailored recommendation.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
