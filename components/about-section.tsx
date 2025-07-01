"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Award, Zap } from 'lucide-react'

export function AboutSection() {
  console.log("AboutSection component rendered")
  
  const values = [
    {
      icon: Target,
      title: "Excellence Gabonaise",
      description: "Standards internationaux adaptés aux réalités économiques du Gabon"
    },
    {
      icon: Users,
      title: "Proximité Africaine",
      description: "Accompagnement local avec une compréhension profonde du marché gabonais"
    },
    {
      icon: Award,
      title: "Innovation Locale",
      description: "Solutions technologiques conçues pour et par l'Afrique Centrale"
    },
    {
      icon: Zap,
      title: "Efficacité CEMAC",
      description: "Processus optimisés pour la zone économique et monétaire"
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge className="bg-brand-ebony/10 text-brand-ebony border-brand-ebony/20 mb-4">
            Notre Histoire Gabonaise
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark mb-6">
            Pionniers de la{' '}
            <span className="text-brand-ebony">RH digitale</span>{' '}
            au Gabon
          </h2>
          <p className="text-xl text-brand-slate leading-relaxed">
            Depuis 8 ans, nous révolutionnons la gestion RH au Gabon et en Afrique Centrale. 
            Notre expertise alliant tradition gabonaise et innovation technologique transforme 
            la façon dont les entreprises africaines gèrent leurs ressources humaines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-dark">Notre Mission Gabonaise</h3>
            <div className="space-y-4 text-brand-slate">
              <p>
                Chez SME Conseil & Développement Gabon, nous croyons que l'Afrique mérite 
                des solutions RH de classe mondiale, conçues par et pour les Africains.
              </p>
              <p>
                Notre plateforme respecte les spécificités gabonaises : réglementations CNSS, 
                congés traditionnels, diversité culturelle et langues locales, tout en offrant 
                l'excellence technologique internationale.
              </p>
              <p>
                Nous permettons aux entreprises gabonaises de rivaliser avec les meilleures 
                du monde grâce à une gestion RH moderne et efficace, 100% adaptée à notre contexte.
              </p>
            </div>
            
            {/* Image représentative */}
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/32046848/pexels-photo-32046848.jpeg?auto=compress&cs=tinysrgb&h=350" 
                alt="Professionnelle gabonaise dans un bureau moderne" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-ebony/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-brand-sahel rounded-lg border border-brand-okoume/20 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-brand-ebony mb-2">8+</div>
              <div className="text-brand-slate">Années au Gabon</div>
            </div>
            <div className="text-center p-6 bg-brand-sahel rounded-lg border border-brand-okoume/20 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-brand-okoume mb-2">120+</div>
              <div className="text-brand-slate">Entreprises gabonaises</div>
            </div>
            <div className="text-center p-6 bg-brand-sahel rounded-lg border border-brand-okoume/20 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-brand-laterite mb-2">15K+</div>
              <div className="text-brand-slate">Collaborateurs gérés</div>
            </div>
            <div className="text-center p-6 bg-brand-sahel rounded-lg border border-brand-okoume/20 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-brand-copper mb-2">24/7</div>
              <div className="text-brand-slate">Support Libreville</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-brand-okoume/20">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-brand-ebony/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-brand-ebony" />
                  </div>
                  <h4 className="text-lg font-semibold text-brand-dark mb-2">{value.title}</h4>
                  <p className="text-brand-slate text-sm">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}