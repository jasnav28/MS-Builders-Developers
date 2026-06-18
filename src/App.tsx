import { useState, useEffect } from 'react'
import AnimatedFeatureSpotlightDemo from './components/feature-spotlight-demo'
import HoverFooterDemo from './components/hover-footer-demo'
import InteractiveSelectorDemo from './components/interactive-selector-demo'
import PackagesDemo from './components/packages-demo'
import FreedomSection from './components/FreedomSection'
import TestimonialsDemo from './components/testimonials-demo'
import { ToonHubHero } from './components/ui/toonhub-hero-component'
import { VexHero } from './components/ui/vex-hero-component'
import Switch from './components/ui/sky-toggle'
import FounderShowcase from './components/ui/founder-showcase'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return 'dark'; // Default to dark theme
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#vex' },
    { label: 'About Us', href: '#aboutus' },
    { label: 'Services', href: '#services' },
    { label: 'Packages', href: '#packages' },
    { label: 'Contact Us', href: '#footer' }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white/30 overflow-y-auto scroll-smooth">
      {/* Global Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-12 lg:px-16 pt-6">
        <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between relative">
          {/* Left Logo */}
          <div className="text-2xl font-semibold tracking-tight text-white">
            MS
          </div>
          
          {/* Center Navigation Links (Desktop only) */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/90 hover:text-gray-300 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Right Section: Theme Toggle + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <Switch checked={theme === 'dark'} onChange={toggleTheme} />
            
            {/* Hamburger Button (Mobile only) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 active:scale-95 transition-all focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <span className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'transform rotate-45 translate-y-1' : ''}`} />
              <span className={`w-4 h-0.5 bg-white rounded-full my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 h-0 my-0' : ''}`} />
              <span className={`w-4 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'transform -rotate-45 -translate-y-1' : ''}`} />
            </button>
          </div>

          {/* Mobile Dropdown Panel (Mobile only) */}
          {isMobileMenuOpen && (
            <div className="absolute top-[115%] left-0 right-0 md:hidden liquid-glass rounded-xl p-4 flex flex-col gap-3 border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-lg text-sm text-white/90 hover:bg-white/10 hover:text-white transition-all duration-150"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>


      {/* 1st: VEX Vision */}
      <section id="vex" className="w-full h-screen relative border-b border-white/10">
        <VexHero theme={theme} />
      </section>

      {/* 2nd: Feature Spotlight (About Us) */}
      <section id="aboutus" className="w-full min-h-[15vh] relative flex items-center justify-center border-b border-white/10 py-3 bg-black">
        <AnimatedFeatureSpotlightDemo />
      </section>

      {/* NEW: Founder Showcase Section */}
      <FounderShowcase />

      {/* 3rd: Services */}
      <section id="services" className="w-full h-screen relative border-b border-white/10">
        <ToonHubHero />
      </section>

      {/* 4th: Freedom Section (Our Portfolio) */}
      <section id="portfolio" className="w-full relative border-b border-white/10">
        <FreedomSection theme={theme} />
      </section>

      {/* 5th: Why Choose Us? */}
      <section id="whychooseus" className="w-full relative border-b border-white/10">
        <InteractiveSelectorDemo theme={theme} />
      </section>

      {/* 6th: Packages */}
      <section id="packages" className="w-full relative border-b border-white/10 bg-background">
        <PackagesDemo />
      </section>

      {/* 7th: Testimonials */}
      <section id="testimonials" className="w-full relative border-b border-white/10 bg-background">
        <TestimonialsDemo />
      </section>



      {/* 9th: Hover Footer */}
      <section id="footer" className="w-full">
        <HoverFooterDemo />
      </section>
    </div>
  )
}

export default App
