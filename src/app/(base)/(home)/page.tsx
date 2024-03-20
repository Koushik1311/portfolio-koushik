import About from "@/app/components/About";
import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </main>
  );
}
