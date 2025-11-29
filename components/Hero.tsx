import React from 'react';
import Button from './Button';
import { FileText, Clock, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-100/40 blur-[120px] rounded-full -z-10"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-semibold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              100% CCTV-Based Tracking
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              We track employee working hours using CCTV — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">so you don’t have to.</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              SafeLink BPO records when your employees enter and exit the store using camera footage and delivers accurate weekly hour reports—ready for payroll. No punch cards. No estimates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                Get Weekly Reports
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                Book a Quick Call
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-cyan-600" />
                EST Shift Coverage
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-cyan-600" />
                Payroll-Ready PDF/Excel
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                Dispute-Ready Logs
              </span>
            </div>
          </div>

          {/* Right Column: Visual Report Mockup */}
          <div className="relative">
            <div className="relative bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden ring-1 ring-slate-900/5">
              {/* Report Header */}
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Weekly Attendance Report</h3>
                  <p className="text-xs text-slate-500">Store: Coventry Shell • Nov 11 - Nov 17</p>
                </div>
                <div className="flex items-center gap-2 px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded-md">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </div>
              </div>

              {/* Data Table Preview */}
              <div className="p-0">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-3">Employee</th>
                      <th className="px-6 py-3">Role</th>
                      <th className="px-6 py-3 text-right">Total Hours</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { name: "Rakib", role: "Cashier", hours: "18h 16m" },
                      { name: "Shargiya", role: "Manager", hours: "39h 41m" },
                      { name: "Aziza", role: "Stock", hours: "27h 38m" },
                      { name: "Qasim", role: "Supervisor", hours: "53h 40m" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50/50">
                        <td className="px-6 py-3 font-medium text-slate-900">{row.name}</td>
                        <td className="px-6 py-3 text-slate-500">{row.role}</td>
                        <td className="px-6 py-3 text-right font-mono font-semibold text-cyan-700">{row.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Report Footer */}
              <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500">
                <span>Generated by SafeLink BPO</span>
                <span>Page 1 of 1</span>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-4 rounded-lg shadow-xl max-w-[200px] border border-slate-700">
               <div className="flex items-center gap-2 mb-1">
                 <Clock className="w-4 h-4 text-cyan-400" />
                 <span className="text-xs font-bold uppercase text-slate-400">Total Tracked</span>
               </div>
               <div className="text-xl font-bold">138h 15m</div>
               <div className="text-[10px] text-slate-400 mt-1">For week ending Nov 17</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;