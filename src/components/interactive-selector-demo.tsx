import { WhyChooseUsShowcase } from "@/components/ui/whychooseus-showcase";

export default function InteractiveSelectorDemo({ theme }: { theme: 'light' | 'dark' }) {
  return (
    <div className="w-full min-h-screen">
      <WhyChooseUsShowcase theme={theme} />
    </div>
  );
}
