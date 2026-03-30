import ParticleCanvas from "@/components/particle-canvas";
import { HomeNavbar } from "@/components/home-navbar";

export default function Home() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <ParticleCanvas imageSrc="/cal-icon.png" />
      <HomeNavbar />
    </div>
  );
}
