"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "From foundation planning to final handover, the entire process was smooth and professionally managed. The quality of work and attention to detail truly exceeded our expectations.",
    by: "Rajesh Kumar",
    imgSrc: "https://i.pravatar.cc/150?img=11"
  },
  {
    tempId: 1,
    testimonial: "They delivered our dream home exactly on time without compromising on quality. Their team maintained transparency and professionalism throughout the project.",
    by: "Ananya Sharma",
    imgSrc: "https://i.pravatar.cc/150?img=12"
  },
  {
    tempId: 2,
    testimonial: "What impressed us the most was their modern architectural approach combined with greenery and open spaces. Our home feels peaceful and luxurious.",
    by: "Vikram Reddy",
    imgSrc: "https://i.pravatar.cc/150?img=13"
  },
  {
    tempId: 3,
    testimonial: "The construction quality, premium materials, and finishing touches were outstanding. Every corner of the house reflects perfection.",
    by: "Sneha Patel",
    imgSrc: "https://i.pravatar.cc/150?img=14"
  },
  {
    tempId: 4,
    testimonial: "Their team stayed connected with us during every stage of construction and made the entire experience stress-free and enjoyable.",
    by: "Arjun Mehta",
    imgSrc: "https://i.pravatar.cc/150?img=15"
  },
  {
    tempId: 5,
    testimonial: "We were amazed by how efficiently they handled the project timeline. The final outcome looked even better than the original design.",
    by: "Priya Nair",
    imgSrc: "https://i.pravatar.cc/150?img=16"
  },
  {
    tempId: 6,
    testimonial: "The company truly understands modern living. They combined elegant design, functionality, and greenery beautifully in our villa project.",
    by: "Karan Malhotra",
    imgSrc: "https://i.pravatar.cc/150?img=17"
  },
  {
    tempId: 7,
    testimonial: "Excellent craftsmanship, transparent pricing, and professional communication. We would confidently recommend them to anyone building their dream property.",
    by: "Neha Kapoor",
    imgSrc: "https://i.pravatar.cc/150?img=18"
  },
  {
    tempId: 8,
    testimonial: "Their end-to-end construction service saved us so much time and effort. From planning to interiors, everything was handled perfectly.",
    by: "Sandeep Verma",
    imgSrc: "https://i.pravatar.cc/150?img=19"
  },
  {
    tempId: 9,
    testimonial: "The structural quality and premium finishing gave us complete confidence in their work. The team was supportive and highly experienced.",
    by: "Divya Rao",
    imgSrc: "https://i.pravatar.cc/150?img=20"
  },
  {
    tempId: 10,
    testimonial: "What stood out was their dedication to timely delivery and customer satisfaction. They treated our project as if it were their own home.",
    by: "Rahul Jain",
    imgSrc: "https://i.pravatar.cc/150?img=21"
  },
  {
    tempId: 11,
    testimonial: "Their innovative designs and eco-friendly approach created a perfect balance between luxury and comfort for our family.",
    by: "Meera Iyer",
    imgSrc: "https://i.pravatar.cc/150?img=22"
  },
  {
    tempId: 12,
    testimonial: "The entire construction journey was seamless. Their project management and execution skills were truly impressive.",
    by: "Aditya Singh",
    imgSrc: "https://i.pravatar.cc/150?img=23"
  },
  {
    tempId: 13,
    testimonial: "From selecting materials to final execution, everything was handled with precision and professionalism. The final results were exceptional.",
    by: "Pooja Desai",
    imgSrc: "https://i.pravatar.cc/150?img=24"
  },
  {
    tempId: 14,
    testimonial: "The team transformed our vision into reality with outstanding quality and modern aesthetics. We couldn’t have chosen a better construction partner.",
    by: "Manish Agarwal",
    imgSrc: "https://i.pravatar.cc/150?img=25"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out select-none",
        isCenter 
          ? "z-10 bg-primary text-primary-foreground border-primary" 
          : "z-0 bg-card text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-primary-foreground" : "text-foreground"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      handleMove(1);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonialsList]);

  return (
    <div
      className="relative w-full overflow-hidden bg-white dark:bg-black"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors cursor-pointer",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors cursor-pointer",
            "bg-background border-2 border-border hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
