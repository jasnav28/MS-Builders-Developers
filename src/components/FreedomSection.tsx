'use client';

import Masonry from './ui/Masonry';

const CHECK_ICON = 'https://cdn.prod.website-files.com/6720dd1ab6df0da205830ab1/686cc068490683bbb3377d04_bullet-list.svg';

const leftProjects = [
  '1. Residential building construction G+2 @ Budigere',
  '2. Restaurant construction @ Chikkaballapur',
  '3. Motorcycle showroom @ Sullibelle',
  '4. Residential building construction G+2 at Avathi',
  '5. Residential building Interior G+2 @ Avathi',
];

const rightProjects = [
  '6. commercial building G+4 @ Hosa Road',
  '7. Residential project G+3 @ Jigani',
  '8. Interior project of commercial building @ APMC market Chikkaballapur.',
  '9. Muddenahalli 600 bedHospital 5th wing construction.',
];

const masonryItems = [
  { id: '1', img: '/pot/1.png', url: 'https://wa.me/919743399992', height: 380 },
  { id: '2', img: '/pot/2.png', url: 'https://wa.me/919743399992', height: 420 },
  { id: '3', img: '/pot/3.png', url: 'https://wa.me/919743399992', height: 280 },
  { id: '4', img: '/pot/4.png', url: 'https://wa.me/919743399992', height: 350 },
  { id: '5', img: '/pot/5.png', url: 'https://wa.me/919743399992', height: 400 },
  { id: '6', img: '/pot/6.png', url: 'https://wa.me/919743399992', height: 300 },
  { id: '7', img: '/pot/7.png', url: 'https://wa.me/919743399992', height: 360 },
];

export default function FreedomSection({ theme }: { theme: 'light' | 'dark' }) {

  const isDark = theme === 'dark';

  return (
    <section 
      className="w-full flex flex-col items-center transition-colors duration-300 relative overflow-hidden"
      style={{
        padding: 'clamp(36px, 4.5vw, 64px) clamp(16px, 3vw, 40px)',
        gap: '36px',
      }}
    >
      {/* Background Image & Tint Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/p.png"
          alt="Our Portfolio Background"
          className="w-full h-full object-cover object-center"
        />
        <div className={`absolute inset-0 ${isDark ? 'bg-black/85' : 'bg-white/85'} transition-colors duration-300`} />
      </div>

      {/* Block 1 — Header */}
      <div className="flex flex-col items-center gap-9 text-center relative z-10">
        <h2 
          className="font-medium tracking-tight"
          style={{
            fontSize: 'clamp(32px, 4vw, 56px)',
            color: isDark ? '#ffffff' : 'rgb(26, 11, 84)',
            lineHeight: '1.15',
            margin: 0,
          }}
        >
          Our Portfolio<br />
          <span 
            style={{
              backgroundImage: 'linear-gradient(90deg, rgb(43,167,255), rgb(202,69,255) 50%, rgb(254,136,27))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              paddingBottom: '0.3vw',
              display: 'inline-block',
            }}
          >
            Here are the done projects
          </span>
        </h2>
      </div>

      {/* Block 2 — Three-column grid */}
      <div 
        className="w-full flex flex-col lg:grid relative z-10"
        style={{
          gridTemplateColumns: '26vw 1fr 26vw',
          columnGap: '36px',
          rowGap: '24px',
          alignItems: 'start',
          padding: '0 clamp(0px, 2.92vw, 40px)',
          gap: '24px',
        }}
      >
        {/* Left Column — Left Projects */}
        <div 
          className="flex flex-col"
          style={{
            gap: '12px',
            fontSize: 'clamp(13px, 1.15vw, 17px)',
            color: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgb(26, 11, 84)',
          }}
        >
          {leftProjects.map((text, index) => (
            <div 
              key={index}
              className="flex flex-col"
              style={{
                gap: '12px',
                padding: 'clamp(12px, 0.97vw, 16px) clamp(14px, 1.25vw, 20px)',
                borderRadius: '18px',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgb(255, 255, 255)',
                boxShadow: isDark ? '0 3px 9.1px rgba(0,0,0,0.5)' : '0 3px 9.1px #3f4a7e0d, 0 1px 29px #3f4a7e1a',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(63, 74, 126, 0.05)',
              }}
            >
              <img 
                src={CHECK_ICON} 
                alt="" 
                aria-hidden 
                style={{ width: 'clamp(16px, 1.25vw, 20px)', flexShrink: 0 }} 
                loading="lazy"
              />
              <div>{text}</div>
            </div>
          ))}
        </div>

        {/* Center Column — Masonry Gallery */}
        <div 
          className="order-first lg:order-none w-full max-w-[340px] px-2 mx-auto"
          style={{ alignSelf: 'stretch' }}
        >
          <div className="w-full relative">
            <Masonry 
              items={masonryItems} 
              columns={2} 
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.96}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          </div>
        </div>

        {/* Right Column — Right Projects */}
        <div 
          className="flex flex-col"
          style={{
            gap: '12px',
            fontSize: 'clamp(13px, 1.15vw, 17px)',
            color: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgb(26, 11, 84)',
          }}
        >
          {rightProjects.map((text, index) => (
            <div 
              key={index}
              className="flex flex-col"
              style={{
                gap: '12px',
                padding: 'clamp(12px, 0.97vw, 16px) clamp(14px, 1.25vw, 20px)',
                borderRadius: '18px',
                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgb(255, 255, 255)',
                boxShadow: isDark ? '0 3px 9.1px rgba(0,0,0,0.5)' : '0 3px 9.1px #3f4a7e0d, 0 1px 29px #3f4a7e1a',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(63, 74, 126, 0.05)',
              }}
            >
              <img 
                src={CHECK_ICON} 
                alt="" 
                aria-hidden 
                style={{ width: 'clamp(16px, 1.25vw, 20px)', flexShrink: 0 }} 
              />
              <div style={{ color: isDark ? '#ffffff' : 'rgb(26, 11, 84)' }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
