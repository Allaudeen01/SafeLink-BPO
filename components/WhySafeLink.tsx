import React from 'react';
import { UserCheck, Layers, FileText, Camera, ShieldCheck, TrendingDown } from 'lucide-react';

const benefits = [
  { icon: UserCheck, title: "Real Humans", desc: "We don't just send automated notifications—trained operators actively watch." },
  { icon: Layers, title: "Built for Scale", desc: "Scale from a single site to dozens without building your own SOC." },
  { icon: FileText, title: "Standardized SOPs", desc: "Every response follows a clear playbook for predictable outcomes." },
  { icon: Camera, title: "Easy Integration", desc: "No need to rip and replace. We work with common NVRs and VMS." },
  { icon: ShieldCheck, title: "Compliance", desc: "Strict access controls and data handling to keep footage safe." },
  { icon: TrendingDown, title: "Cost Effective", desc: "Gain 24/7 coverage at a fraction of the cost of on-site guards." },
];

const WhySafeLink: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">Why security leaders choose SafeLink</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySafeLink;