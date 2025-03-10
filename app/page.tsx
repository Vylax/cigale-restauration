'use client';

import AnimatedHero from './components/AnimatedHero';
import AnimatedIntro from './components/AnimatedIntro';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <AnimatedHero />

      {/* Introduction Section */}
      <section className="py-20 bg-beige">
        <div className="container-custom">
          <AnimatedIntro />
        </div>
      </section>
    </div>
  );
}