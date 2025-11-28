import React from 'react';
import { ShoppingBag, Truck, Factory, Home, Building2, Landmark } from 'lucide-react';

const industries = [
  { icon: ShoppingBag, label: "Retail & Malls", desc: "Prevent theft and ensure customer safety." },
  { icon: Truck, label: "Warehouses", desc: "Protect high-value inventory and loading docks." },
  { icon: Factory, label: "Industrial", desc: "Secure large sites and restricted zones." },
  { icon: Home, label: "Residential", desc: "Monitor entrances without intrusive guards." },
  { icon: Building2, label: "Corporate", desc: "Coverage for lobbies and sensitive areas." },
  { icon: Landmark, label: "Finance", desc: "Extra vigilance for branches and ATMs." },
];

const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Built for high-stakes environments</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-200 hover:border-cyan-500/50 hover:shadow-md transition-all group">
              <item.icon className="w-8 h-8 text-slate-400 mb-4 group-hover:text-cyan-600 transition-colors" />
              <h3 className="text-sm font-bold text-slate-900 mb-2">{item.label}</h3>
              <p className="text-xs text-slate-500 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;