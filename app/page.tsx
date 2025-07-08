
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import Hero from '@/components/hero'
import { GabonAdvantageSection } from '@/components/gabon-advantage-section'

export default function Home() {
  console.log("Home page rendered")
  
  return (
    <div className="min-h-screen bg-white">
    
      <main>
        <Hero />
        <HeroSection />
        <AboutSection />
        <GabonAdvantageSection />
      
       
      </main>
    </div>
  );
}
