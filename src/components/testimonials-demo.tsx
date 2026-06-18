import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export default function TestimonialsDemo() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center bg-background py-16">
      <div className="w-full max-w-7xl px-6">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          What our customers say
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
          Hear from our valued clients who built their dream homes, commercial structures, and elegant interiors with us.
        </p>
        <StaggerTestimonials />
      </div>
    </div>
  );
}
