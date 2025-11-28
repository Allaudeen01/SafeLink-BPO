import React from 'react';
import { ServiceItem } from '../types';
import { Eye, ShieldAlert, Video, ClipboardList, Mic2, Users, Clock, CircleDollarSign, Store } from 'lucide-react';

const services: ServiceItem[] = [
  {
    title: "24/7 Live CCTV Monitoring",
    description: "Dedicated operators continuously watch your camera feeds, identify suspicious behavior, and act before incidents escalate.",
    bullets: ["Real-time incident flagging", "Multi-site monitoring", "Customized protocols"],
    icon: Eye
  },
  {
    title: "Virtual Guarding & Intervention",
    description: "Our team acts like virtual guards, issuing live audio warnings or dispatching authorities immediately.",
    bullets: ["Two-way audio announcements", "Deterrence scripts", "Detailed post-event reports"],
    icon: Mic2
  },
  {
    title: "Alarm Verification",
    description: "We verify alarms against live video to reduce false dispatches, saving you money and avoiding unnecessary panic.",
    bullets: ["Visual confirmation", "Filter false triggers", "Timestamped evidence"],
    icon: ShieldAlert
  },
  {
    title: "Scheduled Video Patrols",
    description: "Operators perform routine virtual patrols on your cameras, checking critical points at pre-set intervals.",
    bullets: ["Hourly/Nightly schedules", "Compliance checks", "Snapshot audit trails"],
    icon: Video
  },
  {
    title: "Incident Logging & Analytics",
    description: "Every incident is logged with context and outcomes, feeding into periodic reports that reveal patterns.",
    bullets: ["Structured incident logs", "Weekly summary reports", "Trend insights"],
    icon: ClipboardList
  },
  {
    title: "Dedicated Operator Teams",
    description: "Scale a dedicated remote security desk without building your own expensive operations center.",
    bullets: ["Trained on your SOPs", "Flexible coverage hours", "Multi-language support"],
    icon: Users
  },
  {
    title: "Employee Attendance Tracking",
    description: "Visual verification of staff hours using your cameras to ensure accurate billing and reduce time theft.",
    bullets: ["CCTV-based attendance tracking", "Weekly payroll-ready reports", "Shift adherence logs"],
    icon: Clock
  },
  {
    title: "POS & Cash Register Monitoring",
    description: "Close supervision of cash handling areas to prevent internal theft, sweet-hearting, and register errors.",
    bullets: ["Cash counter monitoring", "Suspicious activity logging", "Transaction verification"],
    icon: CircleDollarSign
  },
  {
    title: "Multi-Store Audit & Operations",
    description: "Cost-effective oversight for retail chains, providing historical data for disputes and operational compliance.",
    bullets: ["One operator covers up to 5 stores", "Historical records for disputes", "Audit-ready archives"],
    icon: Store
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Specialized remote monitoring services</h2>
          <p className="text-slate-600 text-lg">
            We combine trained human operators, standardized procedures, and your existing CCTV infrastructure to deliver real-time situational awareness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:bg-white hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-900/5"
            >
              <div className="w-12 h-12 bg-cyan-100/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-100 transition-colors">
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