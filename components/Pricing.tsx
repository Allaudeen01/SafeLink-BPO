import React from 'react';
import { PricingPlan } from '../types';
import Button from './Button';
import { Check } from 'lucide-react';

const plans: PricingPlan[] = [
  {
    name: "Starter",
    priceDesc: "Small sites / single locations",
    features: ["Up to 16 cameras", "Night-time coverage (8h)", "Basic incident reporting", "Email alerts"],
    cta: "Request Quote",
    idealFor: "Small Businesses"
  },
  {
    name: "Growth",
    priceDesc: "Growing businesses & multi-site",
    features: ["Up to 64 cameras", "24/7 or Mixed shifts", "Priority escalation", "Weekly summary reports", "Voice-down support"],
    cta: "Talk to Sales",
    popular: true,
    idealFor: "Mid-Sized Operations"
  },
  {
    name: "Enterprise",
    priceDesc: "Large scale high-risk facilities",
    features: ["Unlimited cameras & sites", "Dedicated operator pods", "Custom SLAs", "Advanced analytics", "Periodic security reviews"],
    cta: "Book Consultation",
    idealFor: "Logistics & Corporate"
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Transparent pricing, tailored to your risk</h2>
          <p className="text-slate-600">
            We design plans around the number of cameras, sites, and coverage hours you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative bg-white rounded-2xl p-8 border ${
                plan.popular 
                  ? 'border-cyan-500 shadow-xl shadow-cyan-900/5 scale-105 z-10' 
                  : 'border-slate-200 hover:border-slate-300'
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                <p className="text-sm text-cyan-700 font-medium mt-1">{plan.idealFor}</p>
                <p className="text-slate-500 text-sm mt-4 pb-4 border-b border-slate-100">{plan.priceDesc}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-5 h-5 text-cyan-600 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <Button 
                fullWidth 
                variant={plan.popular ? 'primary' : 'secondary'}
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;