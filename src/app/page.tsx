import Hero from "@/components/Hero";
import About from "@/components/AboutUs";
import Stats from "@/components/Statistics";
import Extro from "@/components/HeroExtro";
import Gallery from "@/components/PlayfulGallery";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="relative mx-auto min-h-screen mt-46 ">
      <Hero />
      <About />
      <Stats />
      <Extro />
      <Testimonials />
      <Gallery />
    </main>
  );
}
