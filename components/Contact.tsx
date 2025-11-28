import React from 'react';
import Button from './Button';
import { Mail, Phone, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-100/30 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Form */}
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-2xl shadow-slate-200/50">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Secure your cameras</h2>
            <p className="text-slate-600 mb-8">Fill out the form below to schedule a demo or get a custom quote.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Company</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="SafeCo Inc." />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Work Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="john@company.com" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Cameras (Est.)</label>
                  <select className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all appearance-none">
                    <option>1 - 16</option>
                    <option>17 - 64</option>
                    <option>65 - 128</option>
                    <option>129+</option>
                  </select>
                </div>
                 <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Country</label>
                  <select className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all appearance-none">
                    <option>USA / Canada</option>
                    <option>Europe</option>
                    <option>Australia / NZ</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Message</label>
                <textarea rows={3} className="w-full bg-slate-50 border border-slate-300 rounded-md px-4 py-2.5 text-slate-900 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400" placeholder="Briefly describe your security needs..."></textarea>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input type="checkbox" id="demo" className="w-4 h-4 rounded bg-slate-50 border-slate-300 text-cyan-600 focus:ring-cyan-500" />
                <label htmlFor="demo" className="text-sm text-slate-600">I'd like a 15-minute discovery call.</label>
              </div>

              <Button fullWidth size="lg" className="mt-4">Submit & Schedule</Button>
            </form>
            <p className="text-center text-xs text-slate-500 mt-4">Response time: within 24 hours.</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            <h3 className="text-2xl font-bold text-slate-900">Direct Contacts</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                  <Mail className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email us</p>
                  <p className="text-lg font-medium text-slate-900">contact@safelinkbpo.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                  <Phone className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Call us</p>
                  <p className="text-lg font-medium text-slate-900">+1 (401) 660-8660</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
                  <Calendar className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Schedule</p>
                  <p className="text-lg font-medium text-slate-900">Book a video meeting</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200">
               <p className="text-slate-600 text-sm italic">
                 "SafeLink transformed our warehouse security. We went from reactive incident review to proactive prevention overnight."
               </p>
               <p className="mt-2 text-slate-900 font-medium text-sm">— Director of Ops, Major Logistics Firm</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;