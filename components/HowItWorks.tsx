import React from 'react';

const steps = [
  {
    num: "01",
    title: "CCTV Monitoring",
    desc: "We monitor your store cameras during operating hours—nothing manual, nothing estimated.",
    sub: "Live EST Coverage"
  },
  {
    num: "02",
    title: "Entry & Exit Logging",
    desc: "We record exact entry and exit times for every employee to the minute.",
    sub: "Precision Tracking"
  },
  {
    num: "03",
    title: "Shift Verification",
    desc: "Two operators cover the day with clean handovers to ensure no data is missed.",
    sub: "Zero Data Gaps"
  },
  {
    num: "04",
    title: "Report Delivery",
    desc: "You receive a clean Excel/PDF report every week—calculated and ready for payment.",
    sub: "Weekly Payroll Ready"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How it works</h2>
          <p className="text-slate-600 mt-4">From camera feed to payroll report in 4 simple steps.</p>
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
                <p className="text-xs font-bold text-cyan-700 text-center lg:text-left uppercase tracking-wide">
                  {step.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;