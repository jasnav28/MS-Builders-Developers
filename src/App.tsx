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
import ShinyText from './components/ui/ShinyText'

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

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-white/30 overflow-y-auto scroll-smooth">
      {/* Global Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 lg:px-16 pt-6">
        <div className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
          {/* Left Logo */}
          <div className="text-2xl font-semibold tracking-tight text-white">
            MS
          </div>
          
          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: 'Home', href: '#vex' },
              { label: 'About Us', href: '#aboutus' },
              { label: 'Services', href: '#services' },
              { label: 'Packages', href: '#packages' },
              { label: 'Contact Us', href: '#footer' }
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/90 hover:text-gray-300 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Theme Toggle Switch */}
          <div className="flex items-center">
            <Switch checked={theme === 'dark'} onChange={toggleTheme} />
          </div>
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
      <section id="services" className="w-full relative border-b border-white/10 bg-black">
        {/* Shiny Text Header Section on Top */}
        <div className="w-full py-8 flex justify-center items-center border-b border-white/5 bg-[#080808]">
          <ShinyText
            text="SERVICES"
            speed={3.5}
            color="#a3a3a3"
            shineColor="#ffffff"
            className="text-2xl md:text-3xl font-black tracking-[0.3em] font-mono"
          />
        </div>
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
