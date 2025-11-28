import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1">
             <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-cyan-600" />
              <span className="text-lg font-bold tracking-tight text-slate-900">
                SafeLink <span className="text-cyan-600">BPO</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Remote security camera monitoring, powered by human vigilance and advanced operational protocols.
            </p>
          </div>

          <div>
            <h4 className="text-slate-900 font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-cyan-600 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-cyan-600 transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-cyan-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#services" className="hover:text-cyan-600 transition-colors">24/7 Monitoring</a></li>
              <li><a href="#services" className="hover:text-cyan-600 transition-colors">Virtual Guarding</a></li>
              <li><a href="#services" className="hover:text-cyan-600 transition-colors">Video Patrols</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#faq" className="hover:text-cyan-600 transition-colors">FAQs</a></li>
              <li><a href="#how-it-works" className="hover:text-cyan-600 transition-colors">How It Works</a></li>
              <li><a href="#contact" className="hover:text-cyan-600 transition-colors">Book a Demo</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} SafeLink BPO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-800">Privacy Policy</a>
            <a href="#" className="hover:text-slate-800">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;