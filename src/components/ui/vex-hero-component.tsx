import React, { useEffect, useState } from 'react';
import { AnimatedText } from './animated-shiny-text';

// --- FadeIn Component ---
type FadeInProps = {
  delay: number;
  duration?: number;
  children: React.ReactNode;
  className?: string;
};

export const FadeIn: React.FC<FadeInProps> = ({
  delay,
  duration = 1000,
  children,
  className = '',
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

type AnimatedHeadingProps = {
  text: string;
  initialDelay?: number;
  charDelay?: number;
  duration?: number;
  className?: string;
};

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  initialDelay = 200,
  charDelay = 30,
  duration = 500,
  className = "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-normal mb-4 tracking-tight text-white select-none",
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split('\n');

  return (
    <h1
      className={className}
      style={{ letterSpacing: '-0.04em' }}
    >
      {lines.map((line, lineIndex) => {
        const lineLength = line.length;

        return (
          <span key={lineIndex} className="block whitespace-nowrap">
            {line.split('').map((char, charIndex) => {
              // Formula: (lineIndex * lineLength * charDelay) + (charIndex * charDelay)
              const delay = (lineIndex * lineLength * charDelay) + (charIndex * charDelay);

              return (
                <span
                  key={charIndex}
                  className="inline-block transition-all ease-out"
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate ? 'translateX(0)' : 'translateX(-18px)',
                    transitionDuration: `${duration}ms`,
                    transitionDelay: `${delay}ms`,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
};

// --- VexHero Component ---
export const VexHero: React.FC<{ theme: 'light' | 'dark' }> = ({ theme }) => {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden select-none">
      {/* Background Video */}
      <video
        key={theme}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
        src={theme === 'dark' ? '/dark.mp4' : '/light.mp4'}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Main Content Layout Container (Centered) */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-6 md:px-12">
        <div className="max-w-4xl space-y-6 flex flex-col items-center">
          
          {/* Centered Heading in one line with big size */}
          <AnimatedHeading 
            text="MS BUILDER & DEVELOPERS" 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase select-none leading-none drop-shadow-lg"
          />

          {/* Tagline in one line, shiny text, below the heading */}
          <FadeIn delay={700} duration={1000}>
            <AnimatedText
              text="DREAM . DESIGN . DELIVER"
              gradientColors="linear-gradient(90deg, #ff5656, #ffffff, #ff5656)"
              gradientAnimationDuration={2}
              className="py-0"
              textClassName="text-sm sm:text-base md:text-lg lg:text-xl font-extrabold tracking-[0.25em] text-white uppercase drop-shadow-md select-none"
            />
          </FadeIn>


          {/* Centered Buttons Row */}
          <FadeIn delay={1100} duration={1000}>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a 
                href="https://wa.me/919743399992" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-[2px]"
              >
                <svg className="w-5 h-5 fill-current text-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.962 3.21 1.454 4.857 1.458 5.403.004 9.799-4.385 9.802-9.792.002-2.618-1.01-5.082-2.853-6.927C16.562 2.049 14.1 1.037 11.498 1.037c-5.409 0-9.804 4.394-9.807 9.801-.001 1.77.464 3.498 1.348 5.022L1.93 22.07l6.398-1.68.319.19zM17.487 14.39c-.3-.15-1.774-.875-2.049-.976-.275-.1-.475-.15-.675.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-1.041-.522-1.997-1.121-2.853-1.979-.756-.757-1.217-1.636-1.367-1.938-.15-.3-.015-.461.135-.611.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.496-.589-.675-.597-.175-.008-.375-.01-.575-.01-.2 0-.525.075-.8 1.025-.275.95-1.05 2.1-1.15 2.3-.1.2-.2.3-.2.3.1.2 1.408 2.235 3.42 3.01 2.012.775 2.012.515 2.375.475.362-.04 1.774-.725 2.024-1.4.25-.675.25-1.25.175-1.375-.075-.125-.275-.2-.575-.35z"/>
                </svg>
                <span>Start a Chat</span>
              </a>
              <a 
                href="https://www.instagram.com/ms__builders__developers?igsh=MTRpazB3N2FvY2xhMw%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="liquid-glass border border-white/20 text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-[2px]"
              >
                <svg className="w-5 h-5 fill-current text-[#E1306C]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
};
