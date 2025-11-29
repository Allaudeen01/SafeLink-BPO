import React from 'react';
import { CheckCircle, Clock, ShieldCheck, TrendingDown, Users, FileCheck } from 'lucide-react';

const benefits = [
  { icon: CheckCircle, title: "100% CCTV Accuracy", desc: "No manual inputs. We rely solely on visual evidence from your cameras." },
  { icon: Clock, title: "Dedicated EST Shifts", desc: "Our teams work your hours. Full coverage from morning open to midnight close." },
  { icon: FileCheck, title: "Verified Reports", desc: "Weekly reports are double-checked before delivery to ensure payroll readiness." },
  { icon: Users, title: "1 Operator = 5 Stores", desc: "Efficient staffing model keeps your costs low while maintaining high attention." },
  { icon: ShieldCheck, title: "Dispute Resolution", desc: "Video logs provide indisputable proof if an employee contests their hours." },
  { icon: TrendingDown, title: "Lower Cost", desc: "Cheaper and more reliable than hiring a dedicated on-site manager for tracking." },
];

const WhySafeLink: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-16">Why owners choose SafeLink</h2>
        
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