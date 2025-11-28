import React from 'react';
import { Fuel, ShoppingBag, Store, Users } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const targets = [
    { 
      icon: Fuel, 
      label: "Gas Stations & Convenience", 
      desc: "Perfect for 24/7 operations or long-hour shifts where owner presence is limited." 
    },
    { 
      icon: ShoppingBag, 
      label: "Retail Stores", 
      desc: "Ensure floor staff are present and punctual without checking footage yourself." 
    },
    { 
      icon: Store, 
      label: "Small Chains", 
      desc: "Manage payroll accuracy across multiple locations from a single report." 
    },
    { 
      icon: Users, 
      label: "Busy Owners", 
      desc: "For managers tired of disputes and manual timesheet verification." 
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Who is SafeLink for?</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-cyan-500/50 transition-all group">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center border border-slate-200 mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-600 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.label}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;