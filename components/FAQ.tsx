import React, { useState } from 'react';
import { FaqItem } from '../types';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs: FaqItem[] = [
  { question: "How do you ensure no hours are missed?", answer: "Our two-shift system with formal handover ensures full coverage from 5:00 AM to 12:00 AM EST. Operators must account for every entry and exit before ending their shift." },
  { question: "What if an employee disputes their hours?", answer: "We maintain historical logs and can provide time-stamped visual evidence from the CCTV footage to resolve any discrepancies immediately." },
  { question: "Do I need special cameras?", answer: "No. As long as your cameras cover the entrance/exit and the register area, and can be accessed remotely, we can work with your existing system." },
  { question: "How is the data delivered?", answer: "Every Monday, you receive a structured Excel or PDF report via email, broken down by store and employee, ready for your payroll software." },
  { question: "Can you track break times?", answer: "Yes, if employees leave the premises or have a designated break area visible on camera, we log break start and end times to calculate net working hours." },
  { question: "How many stores can you handle?", answer: "Our model assigns one operator to up to 5 stores. If you have more, we simply assign a larger pod of operators to your account." },
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