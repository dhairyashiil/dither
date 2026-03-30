import ParticleCanvas from "@/components/particle-canvas";
import { HomeNavbar } from "@/components/home-navbar";

export default function Home() {
  return (
    <div className="bg-site-chrome box-border flex h-svh flex-col px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] sm:px-5 sm:pt-5 sm:pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] md:px-8 md:pt-8 md:pb-[max(2rem,env(safe-area-inset-bottom,0px))]">
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl bg-white shadow-lg shadow-neutral-900/8 ring-1 ring-neutral-200/60 md:rounded-3xl md:shadow-xl md:shadow-neutral-900/10">
        <ParticleCanvas imageSrc="/cal-icon.png" />
        <HomeNavbar />
      </div>
    </div>
  );
}
