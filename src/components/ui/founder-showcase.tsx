import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function FounderShowcase() {
  const containerRef = useRef(null);

  return (
    <div id="founder" className="w-full bg-[#030303] text-white py-20 md:py-28 px-6 md:px-12 lg:px-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Meet Our Founders
            </h2>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
              The managing directors and structural specialists behind MS Builders & Developers. Shaping durable building projects, residential homes, interiors, and architectural blueprints. With over a decade of construction craftsmanship, we help translate your home-building ideas into concrete realities with precision and integrity.
            </p>
          </div>
          <div>
            <a
              href="https://wa.me/919743399992"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black font-semibold text-xs md:text-sm tracking-wider transition-all duration-300 cursor-pointer"
            >
              <span>Let's Team Up Today</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Masonry/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* COLUMN 1: Tall Card - Background Photo (Founder 1) */}
          <div className="md:col-span-1 rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.02] flex flex-col justify-end p-8 relative min-h-[600px] shadow-2xl group text-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src="/fo1.PNG"
                alt="Founder Shashank Kumar Shekhar"
                className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/85" />
            </div>
            
            {/* Name centered at bottom */}
            <div className="relative z-10 text-xl md:text-2xl font-bold tracking-wide text-white">
              Shashank Kumar Shekhar
            </div>
          </div>

          {/* COLUMN 2: Center (Client Voice + Metrics) */}
          <div className="md:col-span-1 flex flex-col gap-6">
            
            {/* Card 2.1: Client Voice */}
            <div className="flex-1 rounded-[28px] border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group min-h-[250px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="text-[10px] font-mono tracking-widest text-[#FF5656] uppercase font-bold mb-6">
                ✦ Client Voice ✦
              </div>

              <blockquote className="text-sm md:text-base text-gray-300 italic font-light leading-relaxed mb-6">
                "Shankar and his team delivered our residential villa with a degree of structural integrity and modern aesthetics that exceeded our expectations. The entire process felt completely transparent."
              </blockquote>

              <div className="text-xs">
                <span className="block font-bold text-white">Rajesh Kumar</span>
                <span className="block text-gray-500 text-[10px] font-mono">Homeowner, Bangalore</span>
              </div>
            </div>

            {/* Card 2.2: Metric Card */}
            <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group min-h-[200px]">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF5656]/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="text-[10px] font-mono tracking-widest text-gray-500 uppercase font-bold mb-4">
                ✦ Track Record ✦
              </div>

              <div className="space-y-1">
                <div className="text-5xl font-black font-mono tracking-tight text-white">
                  200+
                </div>
                <div className="text-xs text-gray-400 font-light uppercase tracking-wider">
                  Homes & Commercial Projects Completed
                </div>
              </div>
            </div>

          </div>

          {/* COLUMN 3: Tall Card - Background Photo (Founder 2) */}
          <div className="md:col-span-1 rounded-[28px] overflow-hidden border border-white/10 bg-white/[0.02] flex flex-col justify-end p-8 relative min-h-[600px] shadow-2xl group text-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src="/fo2.PNG"
                alt="Founder Madan Gowda"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/85" />
            </div>
            
            {/* Name centered at bottom */}
            <div className="relative z-10 text-xl md:text-2xl font-bold tracking-wide text-white">
              Madan Gowda
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
