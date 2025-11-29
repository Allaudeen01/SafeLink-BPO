import React from 'react';
import { ServiceItem } from '../types';
import { Clock, CircleDollarSign, AlertTriangle, FileSpreadsheet, Store, History } from 'lucide-react';

const services: ServiceItem[] = [
  {
    title: "CCTV-Based Attendance Tracking",
    description: "We record exact entry and exit times for every employee using your cameras. No apps, no punch cards.",
    bullets: ["Entry & exit logging", "Break time monitoring", "Accurate to the minute"],
    icon: Clock
  },
  {
    title: "Cash Counter & Register Monitoring",
    description: "Strict supervision to prevent register theft. We notify you immediately when employees count money or access the drawer outside of transactions.",
    bullets: ["Prevent internal theft", "Cash counting notifications", "Transaction verification"],
    icon: CircleDollarSign
  },
  {
    title: "Suspicious Activity Logging",
    description: "Operators flag and log irregular behaviors, loitering, or potential security threats in real-time.",
    bullets: ["Theft prevention", "Loitering alerts", "Safety protocol checks"],
    icon: AlertTriangle
  },
  {
    title: "Weekly Payroll-Ready Reports",
    description: "Get a clean, verified report every Monday with total hours per employee, ready for your payroll system.",
    bullets: ["Excel & PDF formats", "Store-wise breakdown", "Overtime calculation"],
    icon: FileSpreadsheet
  },
  {
    title: "Multi-Store Coverage",
    description: "Our efficient model allows one dedicated operator to monitor up to 5 stores simultaneously.",
    bullets: ["Cost-effective scaling", "Consistent standards", "Centralized reporting"],
    icon: Store
  },
  {
    title: "Historical Records",
    description: "We maintain detailed logs that serve as concrete evidence for wage disputes or internal audits.",
    bullets: ["Dispute resolution", "Audit trails", "Long-term archiving"],
    icon: History
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Services</h2>
          <p className="text-slate-600 text-lg">
            Focused on operational accuracy, loss prevention, and seamless payroll management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:bg-white hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/5"
            >
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-6 group-hover:border-cyan-200 transition-colors shadow-sm">
                <service.icon className="w-6 h-6 text-cyan-600 group-hover:text-cyan-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2 text-sm text-slate-500">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 shrink-0"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;