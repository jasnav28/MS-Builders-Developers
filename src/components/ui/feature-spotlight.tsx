import * as React from 'react';
import { cn } from '@/lib/utils';
import StarBorder from './StarBorder';

// Interface for component props remains the same for easy integration.
interface AnimatedFeatureSpotlightProps extends React.HTMLAttributes<HTMLElement> {
  preheaderIcon?: React.ReactNode;
  preheaderText: string;
  heading: React.ReactNode;
  description: string | React.ReactNode;
  buttonText: string;
  buttonProps?: any;
  imageUrl: string;
  imageAlt?: string;
}

const AnimatedFeatureSpotlight = React.forwardRef<HTMLElement, AnimatedFeatureSpotlightProps>(
  (
    {
      className,
      preheaderIcon,
      preheaderText,
      heading,
      description,
      buttonText,
      buttonProps,
      imageUrl,
      imageAlt = 'Feature illustration',
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          'w-full max-w-5xl mx-auto p-5 md:p-9 rounded-3xl bg-black/60 backdrop-blur-lg border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] shadow-2xl overflow-hidden',
          className
        )}
        aria-labelledby="feature-spotlight-heading"
        {...props}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column: Animated Text Content */}
          <div className="flex flex-col space-y-4 text-center md:text-left items-center md:items-start">
            <div
              className="flex items-center space-x-2 text-xs md:text-sm font-semibold tracking-wider uppercase text-[#FF5656] animate-in fade-in slide-in-from-top-4 duration-700"
            >
              {preheaderIcon}
              <span>{preheaderText}</span>
            </div>
            <h2
              id="feature-spotlight-heading"
              className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white animate-in fade-in slide-in-from-top-4 duration-700 delay-150"
            >
              {heading}
            </h2>
            <div className="text-sm md:text-base text-gray-300 leading-relaxed space-y-4 font-light text-left animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
              {typeof description === 'string'
                ? description.split('\n\n').map((para, i) => (
                    <p key={i}>
                      {para.trim()}
                    </p>
                  ))
                : description}
            </div>
            <div className="animate-in fade-in slide-in-from-top-4 duration-700 delay-400 pt-2">
              <StarBorder color="#FF5656" speed="5s" thickness={2} className="cursor-pointer" {...buttonProps}>
                {buttonText}
              </StarBorder>
            </div>
          </div>

          {/* Right Column: Animated Visual */}
          <div className="relative w-full min-h-[200px] md:min-h-[300px] flex items-center justify-center animate-in fade-in zoom-in-95 duration-700 delay-200">
            {/* Main Image with both entrance and continuous animations */}
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full max-w-[260px] md:max-w-[340px] object-contain animate-float"
            />
          </div>
        </div>
      </section>
    );
  }
);
AnimatedFeatureSpotlight.displayName = 'AnimatedFeatureSpotlight';

export { AnimatedFeatureSpotlight };
