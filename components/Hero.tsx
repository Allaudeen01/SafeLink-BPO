import React from 'react';
import Button from './Button';
import { Activity, AlertTriangle, Eye, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  const cameraFeeds = [
    { id: 1, label: 'REG-01', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&w=400&q=80', status: 'REC' }, // Cashier
    { id: 2, label: 'AISLE-04', img: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=400&q=80', status: 'LIVE', alert: true }, // Aisle
    { id: 3, label: 'ENTRY-N', img: 'https://images.unsplash.com/photo-1601599561213-832382fd0752?auto=format&fit=crop&w=400&q=80', status: 'REC' }, // Retail/Smoke shop vibe
    { id: 4, label: 'STOCK', img: 'https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&w=400&q=80', status: 'REC' }, // Shelves dark
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-100/40 blur-[120px] rounded-full -z-10"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Copy */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-semibold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              24/7 Live Monitoring
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Human eyes on your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">cameras, 24/7.</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
              SafeLink BPO provides dedicated remote security camera monitoring so you can prevent incidents, not just replay them. Our trained operators watch your CCTV feeds around the clock to detect threats in real time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                Book a 15-Minute Demo
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})}>
                View Pricing
              </Button>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1">
                <Activity className="w-4 h-4 text-green-600" />
                Response under 30s
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4 text-cyan-600" />
                Always-on Vigilance
              </span>
            </div>
          </div>

          {/* Right Column: Visual Dashboard */}
          <div className="relative">
            <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden ring-1 ring-slate-900/10">
              {/* Header Bar */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="text-xs font-mono text-cyan-500 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  SYSTEM ACTIVE
                </div>
              </div>

              {/* Camera Grid */}
              <div className="grid grid-cols-2 gap-1 p-1 bg-slate-950">
                {cameraFeeds.map((cam) => (
                  <div key={cam.id} className="relative aspect-video bg-slate-800 overflow-hidden group">
                     {/* Camera Feed Background */}
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${cam.img}')`, opacity: 0.7 }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    
                    {/* Camera UI Overlay */}
                    <div className="absolute top-2 left-2 text-[10px] font-mono text-white/90 bg-black/50 px-1 rounded backdrop-blur-sm">{cam.label}</div>
                    <div className="absolute top-2 right-2 text-[10px] font-mono text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> {cam.status}
                    </div>
                    
                    {/* Simulated Scan Line */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent h-[10%] w-full animate-scan opacity-30 pointer-events-none"></div>

                    {/* Incident Alert */}
                    {cam.alert && (
                       <div className="absolute bottom-4 left-4 right-4 bg-red-500/30 backdrop-blur-md border border-red-500/50 p-2 rounded flex items-center gap-2 animate-pulse">
                         <AlertTriangle className="w-4 h-4 text-red-500" />
                         <span className="text-xs font-bold text-red-100 uppercase tracking-wider">Motion Detected</span>
                       </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Control Bar */}
              <div className="bg-slate-900 px-4 py-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 font-mono">
                <div>OPS: AGENT_04</div>
                <div>LOGS: 24 EVENTS</div>
              </div>
            </div>

            {/* Floating Status Widget */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg border border-slate-200 shadow-xl max-w-[200px] hidden md:block">
               <div className="flex items-center justify-between mb-2">
                 <span className="text-xs text-slate-500">Threats Blocked</span>
                 <Lock className="w-4 h-4 text-cyan-600" />
               </div>
               <div className="text-2xl font-bold text-slate-900">1,093</div>
               <div className="text-[10px] text-green-600 mt-1">↑ 12% vs last week</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;