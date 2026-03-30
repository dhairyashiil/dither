import ParticleCanvas from "@/components/particle-canvas";

export default function Home() {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <ParticleCanvas imageSrc="/cal-icon.png" />
    </div>
  );
}
