import React from 'react';

const steps = [
  {
    num: "01",
    title: "Discovery & Map",
    desc: "We map your camera layout, understand risk zones, and align on your security goals.",
    sub: "Risk assessment • SOP definition"
  },
  {
    num: "02",
    title: "Secure Integration",
    desc: "Our team connects to your CCTV or VMS through secure channels without disrupting your setup.",
    sub: "Read-only access • No hardware changes"
  },
  {
    num: "03",
    title: "Live Monitoring",
    desc: "Trained operators monitor your feeds using detailed playbooks and escalation paths.",
    sub: "Standard protocols • Incident tagging"
  },
  {
    num: "04",
    title: "Report & Optimize",
    desc: "You receive incident reports, summaries, and insights that help refine your security posture.",
    sub: "Weekly reports • Incident archives"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How SafeLink BPO integrates with your cameras</h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 -z-10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative bg-white lg:bg-transparent p-6 lg:p-0 rounded-xl border border-slate-200 lg:border-none shadow-sm lg:shadow-none">
                <div className="w-12 h-12 lg:w-24 lg:h-24 bg-white border border-slate-200 rounded-full flex items-center justify-center text-xl lg:text-3xl font-bold text-cyan-600 mb-6 mx-auto lg:mx-0 z-10 relative shadow-sm">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 text-center lg:text-left">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-3 text-center lg:text-left">
                  {step.desc}
                </p>
                <p className="text-xs font-mono text-cyan-700 text-center lg:text-left">
                  {step.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-lg p-6 max-w-2xl mx-auto flex flex-wrap justify-center gap-6 text-sm text-slate-600">
           <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Encrypted connections</span>
           <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> Restricted operator access</span>
           <span className="flex items-center gap-2"><div className="w-2 h-2 bg-green-500 rounded-full"></div> NDAs & Strict confidentiality</span>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;