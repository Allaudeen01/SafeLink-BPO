import React from 'react';
import { Sun, Moon, ArrowRight, Store, UserCheck } from 'lucide-react';

const Operations: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Structured shift coverage — no gaps, no guesswork.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our operators work on a fixed EST schedule to ensure every minute of your store's operation is accounted for.
          </p>
        </div>

        <div className="relative">
          {/* Time Axis */}
          <div className="hidden lg:flex justify-between text-xs font-mono text-slate-500 border-b border-slate-700 pb-2 mb-8 uppercase tracking-widest">
            <span>Start 5:00 AM</span>
            <span>Handover 2:30 PM</span>
            <span>End 12:00 AM</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative">
            
            {/* Timeline Connector (Desktop) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-700 via-cyan-500 to-slate-700 -translate-x-1/2"></div>
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900 border-2 border-cyan-500 rounded-full items-center justify-center z-10 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
               <ArrowRight className="w-5 h-5 text-cyan-500" />
            </div>

            {/* Shift 1 */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Sun className="w-24 h-24 text-yellow-500" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-500/10 rounded-lg">
                   <Sun className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Morning Shift</h3>
                  <div className="text-sm font-mono text-cyan-400">05:00 AM – 02:30 PM (EST)</div>
                </div>
              </div>
              
              <ul className="space-y-4 text-slate-300 text-sm mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2"></div>
                  Monitors up to 5 stores simultaneously
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2"></div>
                  Tracks store opening & morning arrivals
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2"></div>
                  Prepares structured logs for mid-day handover
                </li>
              </ul>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-900/50 p-3 rounded border border-slate-700/50">
                <UserCheck className="w-4 h-4" /> ONE OPERATOR
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <div className="flex -space-x-2">
                   {[1,2,3,4,5].map(i => (
                     <div key={i} className="w-6 h-6 bg-slate-700 rounded-full border border-slate-800 flex items-center justify-center">
                       <Store className="w-3 h-3 text-slate-400" />
                     </div>
                   ))}
                </div>
                <span className="ml-2">5 STORES</span>
              </div>
            </div>

            {/* Shift 2 */}
            <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Moon className="w-24 h-24 text-blue-500" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/10 rounded-lg">
                   <Moon className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Evening Shift</h3>
                  <div className="text-sm font-mono text-cyan-400">02:30 PM – 12:00 AM (EST)</div>
                </div>
              </div>
              
              <ul className="space-y-4 text-slate-300 text-sm mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2"></div>
                  Validates continuity from morning shift
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2"></div>
                  Tracks late shift arrivals & store closing
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2"></div>
                  Finalizes daily attendance logs
                </li>
              </ul>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-slate-900/50 p-3 rounded border border-slate-700/50">
                <UserCheck className="w-4 h-4" /> ONE OPERATOR
                <ArrowRight className="w-3 h-3 text-slate-600" />
                <div className="flex -space-x-2">
                   {[1,2,3,4,5].map(i => (
                     <div key={i} className="w-6 h-6 bg-slate-700 rounded-full border border-slate-800 flex items-center justify-center">
                       <Store className="w-3 h-3 text-slate-400" />
                     </div>
                   ))}
                </div>
                <span className="ml-2">5 STORES</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Operations;