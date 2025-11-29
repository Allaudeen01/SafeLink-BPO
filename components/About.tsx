import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Story */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
            <div className="prose prose-slate text-slate-600 leading-relaxed">
              <p>
                SafeLink BPO was created to bridge the gap between expensive on-site guarding and passive camera systems that no one actually watches.
              </p>
              <p>
                Our founders saw businesses investing heavily in CCTV, only to use it after the fact—for investigations, not prevention. We built SafeLink to change that: to put trained human attention back at the center of security, powered by reliable processes and technology.
              </p>
            </div>
            
            {/* CEO Signature Block */}
            <div className="pt-6 mt-4 border-t border-slate-100 flex items-start gap-4">
               {/* Note: Replace the src below with the actual URL of the CEO's photo */}
               <img 
                 src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80" 
                 alt="Imran Siddiqui" 
                 className="h-20 w-20 rounded-lg object-cover border border-slate-200 shadow-sm"
               />
               <div>
                 <div className="text-slate-900 font-bold text-lg">Imran Siddiqui</div>
                 <div className="text-cyan-600 font-medium text-sm">CEO & Founder</div>
                 <p className="text-xs text-slate-500 mt-1 max-w-[200px]">
                   "We treat your business like our own."
                 </p>
               </div>
            </div>

            <div className="pt-2">
               <p className="text-sm text-slate-500 italic">Operating from a secure, redundant facility since 2018.</p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Mission</h3>
            <p className="text-lg text-slate-700 mb-8 italic">
              "To make proactive, real-time security monitoring accessible to any business with cameras, anywhere in the world."
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Vigilance", text: "Treat every camera as if it guards our own home." },
                { title: "Clarity", text: "Documented incidents, no guesswork." },
                { title: "Partnership", text: "We operate as an extension of your team." },
                { title: "Integrity", text: "Confidentiality and trust are non-negotiable." }
              ].map((val, i) => (
                <div key={i}>
                  <h4 className="text-slate-900 font-bold mb-1">{val.title}</h4>
                  <p className="text-sm text-slate-600">{val.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;