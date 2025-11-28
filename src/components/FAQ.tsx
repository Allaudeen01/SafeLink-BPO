import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs: FaqItem[] = [
  { question: "How do you access our cameras?", answer: "We connect via secure, encrypted channels using your existing CCTV/VMS infrastructure. We do not require public IP exposure for your cameras." },
  { question: "Do we need new hardware?", answer: "Often no. We integrate with most major NVRs and VMS platforms. Hardware changes are only needed if your current setup is incompatible with remote transmission." },
  { question: "Are your operators really watching 24/7?", answer: "Yes. Depending on your coverage plan, we have dedicated shifts ensuring eyes are on your screen. We use vigilance detection software to ensure operator alertness." },
  { question: "What happens when you detect an incident?", answer: "We follow a strict SOP: 1) Verify visually, 2) Issue audio warning (if available), 3) Notify your designated contact, 4) Dispatch authorities if agreed upon." },
  { question: "How do you protect our data?", answer: "We operate out of a secure facility with restricted access. All connections are encrypted, and we enforce strict NDAs. We generally do not store footage unless it is an incident clip." },
  { question: "Can you support different time zones?", answer: "Absolutely. Our 24/7 operations center supports clients globally across all time zones." },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Frequently asked questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg overflow-hidden transition-all duration-200 shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-slate-50 transition-colors"
              >
                <span className="font-medium text-slate-800">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="w-5 h-5 text-cyan-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
              </button>
              
              {openIndex === idx && (
                <div className="px-6 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 bg-slate-50/50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;