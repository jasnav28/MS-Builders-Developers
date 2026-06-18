import { Eye } from 'lucide-react';
// Update the import to the new animated component
import { AnimatedFeatureSpotlight } from '@/components/ui/feature-spotlight';

// The demo showcases the component with animations firing on load.
export default function AnimatedFeatureSpotlightDemo() {
  const descriptionText = `Welcome to MS Builders & Developers, your trusted partner in real estate, construction, interiors, and renovations. With a commitment to excellence and a passion for innovation, we bring your vision to life through our comprehensive range of services.

At MS Builders & Developers, we pride ourselves on delivering high-quality projects tailored to meet the unique needs of our clients. Whether it's developing modern real estate, constructing robust buildings, designing exquisite interiors, or transforming spaces through renovations, our skilled team ensures every project is executed with precision and professionalism.

Our mission is to create spaces that inspire and exceed expectations. We believe in building lasting relationships with our clients by providing exceptional service and maintaining the highest standards of integrity and craftsmanship.`;

  return (
    <div 
      className="flex items-center justify-center w-full min-h-[50vh] md:min-h-[65vh] py-16 md:py-26 px-4 md:px-8 relative bg-cover bg-center bg-no-repeat bg-black overflow-hidden"
      style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/about.png')" }}
    >
      {/* Dark fade out start (top) */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black via-black/80 to-transparent pointer-events-none z-10" />

      {/* Dark fade out ending (bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none z-10" />

      <AnimatedFeatureSpotlight
        className="relative z-20"
        preheaderIcon={<Eye className="h-4 w-4 text-[#FF5656]" />}
        preheaderText="About Us"
        heading={
          <span className="text-white">MS Builders & Developers</span>
        }
        description={descriptionText}
        buttonText="Contact Us"
        buttonProps={{ onClick: () => window.open('https://wa.me/919743399992', '_blank') }}
        imageUrl="/logo.png"
        imageAlt="MS Builders & Developers Logo"
      />
    </div>
  );
}
