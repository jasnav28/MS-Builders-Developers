import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type PackageType = 'silver' | 'gold' | 'platinum' | 'commercial';

interface ToastState {
  visible: boolean;
  message: string;
  type: 'success' | 'info';
}

export function CalculatorSection() {
  // State variables tailored for construction square footage estimation
  const [packageType, setPackageType] = useState<PackageType>('platinum');
  const [sqft, setSqft] = useState<number>(0); // Default set to 0 as requested
  const [needInterior, setNeedInterior] = useState<boolean>(false);
  const [needAutomation, setNeedAutomation] = useState<boolean>(false);
  
  // Custom Toast State
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    message: '',
    type: 'success',
  });

  const triggerToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 4500);
  };

  // Pricing calculations
  const prices = useMemo(() => {
    // Package rates per Sqft
    let rate = 2550; // Platinum default
    if (packageType === 'silver') {
      rate = 1850;
    } else if (packageType === 'gold') {
      rate = 2150;
    } else if (packageType === 'commercial') {
      rate = 1350;
    }

    // MS Builders & Developers Price
    let total = sqft * rate;
    if (needInterior) total += sqft * 250;
    if (needAutomation) total += sqft * 150;

    // Premium Commercial Firm pricing (Typical 25% markup + higher overheads)
    const premiumFirmRate = rate * 1.25;
    const premiumFirmTotal = sqft * premiumFirmRate;

    // Local Contractor pricing (Substandard materials, 8% lower base rate but high risk of hidden charges)
    const localContractorRate = rate * 0.92;
    const localContractorTotal = sqft * localContractorRate;

    return {
      msBuilders: total,
      premiumFirm: premiumFirmTotal,
      localContractor: localContractorTotal,
      currentRate: rate,
    };
  }, [packageType, sqft, needInterior, needAutomation]);

  const handleBookSession = () => {
    const packageName = 
      packageType === 'silver' ? 'Silver Package' : 
      packageType === 'gold' ? 'Gold Package' : 
      packageType === 'platinum' ? 'Platinum Package' : 
      'Commercial Building Package';

    const details = `Package: ${packageName}, Area: ${sqft} Sqft, Premium Interiors: ${needInterior ? 'Yes' : 'No'}, Home Automation: ${needAutomation ? 'Yes' : 'No'}. Estimated Cost: Rs ${prices.msBuilders.toLocaleString('en-IN')}`;
    
    // Copy estimate to clipboard
    navigator.clipboard.writeText(details).catch(() => {});
    
    triggerToast(`Cost Estimation of Rs ${prices.msBuilders.toLocaleString('en-IN')} copied to clipboard! Opening WhatsApp...`);
    
    // Open Whatsapp with details prefilled after a slight delay
    setTimeout(() => {
      window.open(`https://wa.me/919743399992?text=Hello%20MS%20Builders,%20I%20used%20your%20Project%20Calculator:%20${encodeURIComponent(details)}`, '_blank');
    }, 1500);
  };

  // Package Details content mapping
  const activePackageDetails = useMemo(() => {
    switch (packageType) {
      case 'silver':
        return {
          design: [
            '2D Floor Plans',
            '3D Elevation',
            'Structural Drawing',
            'Working Drawings For Execution'
          ],
          materials: [
            'Steel: Fe500/550 Grade TMT India Gold Or Equivalent Brand',
            'Cement: 53 & 43 Grades Of Penna / Dalmia Or Equivalent Brand',
            'Blocks: 8", 6" & 4" Inches',
            'Aggregates: 20MM & 40MMM',
            'Sand: Blockwork & P-Sand Plastering',
            'No Size Stone Masonry Under Plinth'
          ]
        };
      case 'gold':
        return {
          design: [
            '2D Floor Plans',
            '3D Elevation',
            'Structural Drawing',
            'Plumbing & Electrical Layout',
            'Working Drawings For Execution'
          ],
          materials: [
            'Steel: Fe500/550 Grade TMT Indus prime gold Or Equivalent Brand',
            'Cement: 53 & 43 Grades Of Penna / Dalmia Or Equivalent Brand',
            'Blocks: 8", 6" & 4" Inches',
            'Aggregates: 20MM & 40MMM',
            'Sand: Blockwork & P-Sand Plastering',
            'No Size Stone Masonry Under Plinth'
          ]
        };
      case 'platinum':
        return {
          design: [
            '2D Floor Plans',
            '3D Elevation',
            'Structural Drawing',
            'Plumbing & Electrical Layout',
            'Furniture Layout',
            'Working Drawings For Execution'
          ],
          materials: [
            'Steel: Fe500/550 Grade TMT JSW, Tata Or Equivalent Brand',
            'Cement: 53 & 43 Grades Of Ultratech ACC / Birla Or Equivalent Brand',
            'Blocks: 8", 6" & 4" Inches',
            'Aggregates: 20MM & 40MM',
            'Sand: Blockwork & P-Sand Plastering',
            'Two course Size Stone Masonry Under Plinth peripheral'
          ]
        };
      case 'commercial':
        return {
          design: [
            'Architectural Concept Drawings & Plans',
            'Complete Structural Drawings & Calculations',
            'Plumbing & Electrical Schematic Design',
            'HVAC & Fire Fighting Layout planning',
            'Municipal Approval & Execution Drawings'
          ],
          materials: [
            'Steel: Fe500/550 Grade TMT JSW Or Tata Brand',
            'Cement: 53 & 43 Grades Of UltraTech, ACC Or Equivalent Brand',
            'Blocks: Solid Concrete Blocks 8", 6" & 4" Inches',
            'Aggregates: 20MM & 40MM Crushed Stone',
            'Sand: M-Sand Concrete & P-Sand Plastering',
            'Foundation: Deep Foundations / Plinth Beam matching design specs'
          ]
        };
    }
  }, [packageType]);

  return (
    <div id="calculator-section" className="w-full bg-background text-foreground py-16 md:py-28 px-4 md:px-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-12 md:mb-20 space-y-3">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#FF5656] block">
            “Try project estimation calculator
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal tracking-tight text-foreground max-w-2xl mx-auto leading-tight">
            Get premium construction within your budget”
          </h2>
        </div>


        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl">
          
          {/* LEFT COLUMN: Calculator Form + Dynamic Price */}
          <div className="bg-[#f9f9f9] dark:bg-[#0D0D0D] p-8 lg:p-12 flex flex-col justify-between transition-colors duration-300">
            <div className="divide-y divide-black/10 dark:divide-[#1E1E1E] space-y-8 [&>div]:pt-8 first:pt-0 [&>div]:first:pt-0">
              
              {/* SECTION 1: Package Type */}
              <div className="space-y-4">
                <h3 className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 tracking-wide uppercase">
                  Select Construction Package
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(
                    [
                      { label: 'SILVER PACKAGE', value: 'silver', rate: 'Rs 1,850 / Sqft' },
                      { label: 'GOLD PACKAGE', value: 'gold', rate: 'Rs 2,150 / Sqft' },
                      { label: 'PLATINUM PACKAGE', value: 'platinum', rate: 'Rs 2,550 / Sqft' },
                      { label: 'Commercial Building', value: 'commercial', rate: 'Starts @ Rs 1,350 / Sqft' },
                    ] as const
                  ).map((option) => {
                    const active = packageType === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setPackageType(option.value)}
                        className={`flex flex-col justify-between p-4 rounded-xl border transition-all text-left min-h-[95px] ${
                          active
                            ? 'border-[#FF5656] bg-[#FF5656]/5 text-foreground dark:text-white'
                            : 'border-black/10 dark:border-white/10 bg-transparent hover:border-black/20 dark:hover:border-white/20 text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {/* Custom Radio Button */}
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                              active ? 'border-[#FF5656]' : 'border-black/30 dark:border-white/30'
                            }`}
                          >
                            {active && (
                              <div className="w-2 h-2 rounded-full bg-[#FF5656]" />
                            )}
                          </div>
                          <span className="text-xs md:text-sm font-semibold">{option.label}</span>
                        </div>
                        <span className={`text-[11px] font-mono font-medium pl-8 mt-2 ${active ? 'text-[#FF5656]' : 'text-gray-500'}`}>
                          {option.rate}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 2: Total Sqft Area */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 tracking-wide uppercase">
                    Total Area (Sqft)
                  </h3>
                  <span className="text-lg md:text-xl font-mono font-bold text-[#FF5656]">
                    {sqft.toLocaleString('en-IN')} Sqft
                  </span>
                </div>
                <div className="space-y-2 py-2">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="50"
                    value={sqft}
                    onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-black/10 dark:bg-white/10 accent-[#FF5656]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 font-mono">
                    <span>0 Sqft</span>
                    <span>10,000 Sqft</span>
                  </div>
                </div>
              </div>

              {/* SECTION 3: Custom Add-ons */}
              <div className="space-y-4">
                <h3 className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 tracking-wide uppercase">
                  Premium Add-ons
                </h3>
                <div className="space-y-3">
                  {/* Addon 1 */}
                  <label
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                      needInterior
                        ? 'border-[#FF5656] bg-[#FF5656]/5 text-foreground dark:text-white'
                        : 'border-black/10 dark:border-white/10 bg-transparent hover:border-black/20 dark:hover:border-white/20 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={needInterior}
                        onChange={(e) => setNeedInterior(e.target.checked)}
                        className="sr-only"
                      />
                      {/* Custom Checkbox */}
                      <div
                        className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                          needInterior ? 'border-[#FF5656] bg-[#FF5656]' : 'border-black/30 dark:border-white/30'
                        }`}
                      >
                        {needInterior && (
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs md:text-sm font-medium">Include Premium Interior Design & Finishes</span>
                    </div>
                    <span className="text-xs md:text-sm font-bold text-[#FF5656] font-mono">+Rs 250/Sqft</span>
                  </label>

                  {/* Addon 2 */}
                  <label
                    className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                      needAutomation
                        ? 'border-[#FF5656] bg-[#FF5656]/5 text-foreground dark:text-white'
                        : 'border-black/10 dark:border-white/10 bg-transparent hover:border-black/20 dark:hover:border-white/20 text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={needAutomation}
                        onChange={(e) => setNeedAutomation(e.target.checked)}
                        className="sr-only"
                      />
                      {/* Custom Checkbox */}
                      <div
                        className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                          needAutomation ? 'border-[#FF5656] bg-[#FF5656]' : 'border-black/30 dark:border-white/30'
                        }`}
                      >
                        {needAutomation && (
                          <svg
                            className="w-3.5 h-3.5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="text-xs md:text-sm font-medium">Include Smart Home Automation & Security</span>
                    </div>
                    <span className="text-xs md:text-sm font-bold text-[#FF5656] font-mono">+Rs 150/Sqft</span>
                  </label>
                </div>
              </div>

              {/* DYNAMIC PRICING INFORMATION (Moved here to Left side div) */}
              <div className="pt-8 space-y-4">
                <div className="bg-[#f0f0f0] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 rounded-2xl p-6 space-y-4">
                  
                  {/* Webfluin Price (MS Builders & Developers) */}
                  <div className="space-y-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FF5656]">MS Builders & Developers Price</span>
                    <div className="text-3xl md:text-4xl lg:text-5xl font-black font-mono tracking-tight text-foreground dark:text-white">
                      Rs {prices.msBuilders.toLocaleString('en-IN')}
                    </div>
                    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">
                      Premium Quality, Transparent Materials & On-Time Handover
                    </p>
                  </div>

                  {/* Competitors summary info */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-black/10 dark:border-white/10 text-xs font-mono text-gray-600 dark:text-gray-400">
                    <div>
                      <span className="block text-[10px] uppercase text-gray-400">Premium Firms</span>
                      <span className="font-semibold text-foreground dark:text-white">Rs {prices.premiumFirm.toLocaleString('en-IN')}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase text-gray-400">Unskilled Contractors</span>
                      <span className="font-semibold text-foreground dark:text-white">Rs {prices.localContractor.toLocaleString('en-IN')}</span>
                    </div>
                  </div>

                </div>

                {/* Call To Action button */}
                <button
                  type="button"
                  onClick={handleBookSession}
                  className="w-full bg-[#FF5656] hover:bg-[#FF5656]/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl shadow-[#FF5656]/20 flex items-center justify-center gap-2 hover:-translate-y-[2px]"
                >
                  <span>Get Detailed Quote & Book consultation</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Package Details (Dynamic Background Image) */}
          <div 
            className="relative p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-black/10 dark:border-white/10 flex flex-col justify-between min-h-[717.98px] bg-cover bg-center overflow-hidden transition-all duration-500"
            style={{ 
              backgroundImage: `url(${
                packageType === 'silver' ? '/ba.png' :
                packageType === 'gold' ? '/lilba.png' :
                packageType === 'commercial' ? '/ca.png' :
                '/lux.png'
              })`
            }}
          >
            {/* Little black shade overlay so details are visible */}
            <div className="absolute inset-0 bg-black/70 pointer-events-none z-0" />
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-2 pb-4 border-b border-white/20">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Package Details
                </h3>
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed capitalize">
                  Specifications included in the {packageType} package:
                </p>
              </div>

              {/* DYNAMIC PACKAGE DETAILS LIST */}
              <div className="space-y-6">
                
                {/* 1. Design & Drawings */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#FF5656]">
                    Design & Drawings
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-gray-200">
                    {activePackageDetails.design.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-[#FF5656] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Construction Materials */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#FF5656]">
                    Construction Materials
                  </h4>
                  <ul className="space-y-2.5 text-xs md:text-sm text-gray-200">
                    {activePackageDetails.materials.map((detail, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-[#FF5656] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

            {/* Note info */}
            <div className="relative z-10 text-[10px] md:text-xs text-gray-400 border-t border-white/10 pt-4 mt-6">
              * The materials specified above represent standard execution. Equivalent brands may be substituted depending on material availability and client requirements.
            </div>

          </div>

        </div>
      </div>

      {/* Floating custom Toast notification */}
      <AnimatePresence>
        {toast.visible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[999] bg-[#121212] text-white border border-[#FF5656]/30 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-sm md:max-w-md"
          >
            <div className="w-8 h-8 rounded-full bg-[#FF5656]/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-[#FF5656]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="text-xs md:text-sm font-medium leading-snug">{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
