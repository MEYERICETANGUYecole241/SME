
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'

import { GabonAdvantageSection } from '@/components/gabon-advantage-section'


export default function Home() {
  console.log("Home page rendered")
  
  return (
    <div className="min-h-screen bg-white">
    
      <main>
        <HeroSection />
        <AboutSection />
       
        <GabonAdvantageSection />
      
       
      </main>
    </div>
  );
}
