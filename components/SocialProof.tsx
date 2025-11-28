import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: "24/7/365", label: "Always-on monitoring coverage" },
  { value: "90%+", label: "Reduction in false alarms" },
  { value: "<30 sec", label: "Avg time to human review" },
];

const SocialProof: React.FC = () => {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          
          <div className="w-full md:w-1/3">
            <p className="text-sm text-slate-500 font-medium uppercase tracking-wider mb-2">Trusted By Industries</p>
            <p className="text-slate-700 text-sm">
              Retail, Logistics, Manufacturing, Gated Communities, and Enterprise Campuses worldwide.
            </p>
          </div>

          <div className="w-full md:w-2/3 flex flex-wrap justify-between gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</span>
                <span className="text-sm text-slate-600">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SocialProof;