"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FeatureCarouselProps {
  images: { src: string; alt: string; }[];
  className?: string;
}

export function FeatureCarousel({ images, className }: FeatureCarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(Math.floor(images.length / 2));

  const handleNext = React.useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <div className={cn("relative w-full h-[380px] sm:h-[450px] flex items-center justify-center select-none", className)}>
      {/* Carousel Wrapper */}
      <div className="relative w-full h-full flex items-center justify-center [perspective:1000px] overflow-hidden">
        {images.map((image, index) => {
          const offset = index - currentIndex;
          const total = images.length;
          let pos = (offset + total) % total;
          if (pos > Math.floor(total / 2)) {
            pos = pos - total;
          }

          const isCenter = pos === 0;
          const isAdjacent = Math.abs(pos) === 1;

          return (
            <div
              key={index}
              className={cn(
                'absolute w-40 h-80 sm:w-56 sm:h-[400px] transition-all duration-500 ease-in-out',
                'flex items-center justify-center cursor-pointer'
              )}
              style={{
                transform: `
                  translateX(${(pos) * 55}%) 
                  scale(${isCenter ? 1 : isAdjacent ? 0.8 : 0.6})
                  rotateY(${(pos) * -12}deg)
                `,
                zIndex: isCenter ? 10 : isAdjacent ? 5 : 1,
                opacity: isCenter ? 1 : isAdjacent ? 0.5 : 0,
                filter: isCenter ? 'blur(0px)' : 'blur(3px)',
                visibility: Math.abs(pos) > 1 ? 'hidden' : 'visible',
              }}
              onClick={() => {
                if (isCenter) {
                  window.open("https://wa.me/919743399992", "_blank", "noopener");
                } else {
                  setCurrentIndex(index);
                }
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full rounded-2xl border border-white/10 shadow-2xl"
              />
            </div>
          );
        })}
      </div>
      
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 z-20 bg-black/40 border-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-200"
        onClick={handlePrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-8 w-8 z-20 bg-black/40 border-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-200"
        onClick={handleNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
