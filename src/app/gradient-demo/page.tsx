import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

export default function GradientDemoPage() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(10, 15, 28)"
      gradientBackgroundEnd="rgb(6, 10, 18)"
      firstColor="29, 188, 214"
      secondColor="92, 184, 92"
      thirdColor="29, 188, 214"
      fourthColor="0, 80, 120"
      fifthColor="0, 120, 80"
      pointerColor="29, 188, 214"
    >
      <div className="absolute z-50 inset-0 flex items-center justify-center pointer-events-none">
        <p className="text-4xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 px-4">
          Smart Buildings.<br />Connected Devices.
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
