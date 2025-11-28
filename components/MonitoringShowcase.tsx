import React from 'react';
import { Radio, Maximize2, MoreHorizontal, Mic } from 'lucide-react';

const cameras = [
  {
    id: "CAM-01",
    label: "Main Register",
    location: "Norwood Shell",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1556740758-90de2742e1e2?q=80&w=1000&auto=format&fit=crop" // Cashier/Counter view
  },
  {
    id: "CAM-02",
    label: "Aisle 4 - Retail",
    location: "Mendon Store 2",
    status: "LIVE",
    image: "https://images.unsplash.com/photo-1604719312566-b7e6012e6b7b?q=80&w=1000&auto=format&fit=crop" // Aisle view
  },
  {
    id: "CAM-03",
    label: "Inventory / Stock",
    location: "Brockton Smoke",
    status: "RECORDING",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1000&auto=format&fit=crop" // Shelves/Stock
  }
];

const MonitoringShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800/50 via-slate-900 to-slate-900 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              See what our operators see.
            </h2>
            <p className="text-slate-400 text-lg">
              Our teams monitor high-definition feeds from your existing cameras, covering everything from point-of-sale interactions to back-of-house inventory.
            </p>
          </div>
          <div className="flex items-center gap-2 text-green-400 text-sm font-mono bg-green-900/20 px-4 py-2 rounded-full border border-green-900/50 animate-pulse">
            <Radio className="w-4 h-4" />
            LIVE SIGNAL ACTIVE
          </div>
        </div>

        {/* Camera Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {cameras.map((cam, idx) => (
            <div key={idx} className="group relative bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 shadow-2xl">
              
              {/* Image Feed */}
              <div className="aspect-video relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-900 animate-pulse"></div>
                <img 
                  src={cam.image} 
                  alt={cam.label} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 hover:scale-105"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
                
                {/* UI Overlays */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-black/60 text-white text-[10px] font-mono px-1.5 py-0.5 rounded border border-white/10">
                    {cam.id}
                  </span>
                  <span className="bg-red-600/90 text-white text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                    {cam.status}
                  </span>
                </div>

                <div className="absolute top-3 right-3 text-white/80">
                  <Maximize2 className="w-4 h-4 drop-shadow-md cursor-pointer hover:text-white" />
                </div>
                
                {/* Date/Time Overlay */}
                <div className="absolute bottom-3 right-3 text-[10px] font-mono text-cyan-400/80">
                  {new Date().toISOString().split('T')[0]} <span className="text-white">|</span> 1080p
                </div>
              </div>

              {/* Camera Info Footer */}
              <div className="p-4 bg-slate-800 border-t border-slate-700 flex justify-between items-center">
                <div>
                  <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    {cam.label}
                  </h4>
                  <p className="text-xs text-slate-500">{cam.location}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 hover:bg-slate-700 rounded text-slate-400 hover:text-cyan-400 transition-colors" title="Talk Down">
                    <Mic className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MonitoringShowcase;