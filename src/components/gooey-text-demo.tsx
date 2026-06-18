import { GooeyText } from "@/components/ui/gooey-text-morphing";

export function GooeyTextDemo() {
  return (
    <div className="h-[200px] flex items-center justify-center bg-black text-white">
      <GooeyText
        texts={["Dream", "Design", "Deliver"]}
        morphTime={1}
        cooldownTime={0.25}
        className="font-bold"
      />
    </div>
  );
}
