import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="relative mx-auto min-h-screen ">
      <Navbar />
      <Hero />
    </main>
  );
}
