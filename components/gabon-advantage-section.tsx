"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  MapPin, 
  Shield, 
  Globe, 
  Handshake, 
  ArrowRight,
  CheckCircle,
  Mail,
  Phone
} from 'lucide-react'

export function GabonAdvantageSection() {
  console.log("GabonAdvantageSection component rendered")
  
  const advantages = [
    {
      icon: MapPin,
      title: "Présence Locale",
      description: "Équipe basée à Libreville avec une compréhension profonde du marché gabonais",
      features: ["Bureau local", "Support en français", "Équipe gabonaise"]
    },
    {
      icon: Shield,
      title: "Conformité CEMAC",
      description: "Solutions 100% conformes aux réglementations gabonaises et CEMAC",
      features: ["Code du travail GA", "CNSS Gabon", "Normes CEMAC"]
    },
    {
      icon: Globe,
      title: "Technologie Mondiale",
      description: "Standards internationaux adaptés aux spécificités africaines",
      features: ["Cloud sécurisé", "Innovations IT", "Performance garantie"]
    },
    {
      icon: Handshake,
      title: "Partenariat Africain",
      description: "Accompagnement sur-mesure pour la croissance des entreprises gabonaises",
      features: ["Conseil stratégique", "Formation équipes", "Support continu"]
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-brand-sahel to-white relative overflow-hidden">
      {/* Motifs décoratifs gabonais */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-brand-ebony transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-brand-okoume transform -rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-2 border-brand-laterite transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-brand-laterite/10 text-brand-laterite border-brand-laterite/20 mb-4">
            Avantage Gabonais
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark mb-6">
            Pourquoi choisir <span className="text-brand-ebony">SME Conseil & Développement</span> ?
          </h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto italic">
            Former. Structurer. Élever les organisations — avec une solution pensée localement pour un impact global.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Image gabonaise */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/l.jpg" 
                alt="Bureau moderne à Libreville" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
              
              {/* Badge confiance */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-ebony rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-dark">SME Conseil</div>
                    <div className="text-xs text-brand-slate">Expertise locale</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Avantages */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">
              Les atouts d'une solution pensée au Gabon
            </h3>
            
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <Card key={index} className="border border-brand-okoume/20 hover:shadow-lg transition-all duration-300 hover:border-brand-okoume/40">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-brand-ebony/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-brand-ebony" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-brand-dark mb-2">{advantage.title}</h4>
                        <p className="text-brand-slate mb-3">{advantage.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {advantage.features.map((feature, fIndex) => (
                            <span 
                              key={fIndex} 
                              className="inline-flex items-center px-2 py-1 bg-brand-laterite/10 text-brand-laterite text-xs font-medium rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Section Contact Info */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-brand-okoume/20 mb-16 shadow-md">
          <h3 className="text-xl font-bold text-brand-dark mb-4">À propos de nous</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-brand-dark">SME Conseil & Développement</p>
              <p className="text-brand-slate">BP 2218 – Ambowe, Libreville, Gabon</p>
            </div>
            <div>
              <p className="font-semibold text-brand-dark">Contact</p>
              <div className="flex items-center text-brand-slate mt-1">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:contact@smeconseil.com"> sitou.epiphane@gmail.com</a>
              </div>
              <div className="flex items-center text-brand-slate mt-1">
                <Phone className="h-4 w-4 mr-2" />
                <span>+241077153846</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-brand-ebony/5 rounded-2xl p-8 border border-brand-okoume/20">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">
              Prêt à digitaliser votre RH avec une solution gabonaise ?
            </h3>
            <p className="text-brand-slate mb-6 max-w-2xl mx-auto">
              Rejoignez plus de 120 entreprises gabonaises qui font confiance à notre expertise 
              locale pour transformer leur gestion des ressources humaines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" passHref>
  <Button
    size="lg"
    className="bg-brand-ebony hover:bg-brand-ebony/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
    asChild
  >
    <a>
      Démarrer aujourd&apos;hui
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  </Button>
</Link>
              <Link
  href="/rendez-vous"
  target="_blank"
  rel="noopener noreferrer"
  passHref
>
  <Button variant="outline" className="px-9 py-6 text-lg border-brand-ebony text-brand-ebony">
    parler à un expert
  </Button>
</Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}