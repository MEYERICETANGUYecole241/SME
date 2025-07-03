"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Award, Zap, Mail, Phone, Globe } from 'lucide-react'

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
          <p className="text-xl text-brand-slate leading-relaxed italic">
            Former. Structurer. Élever les organisations — notre mission une priorité.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-brand-dark">Notre Mission Gabonaise</h3>
            <div className="space-y-4 text-brand-slate">
              <p>
                Chez <strong>SME Conseil & Développement</strong>, nous croyons que l'Afrique mérite 
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
                src="/v.webp" 
                alt="Professionnelle gabonaise dans un bureau moderne" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-ebony/20 to-transparent"></div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
           <div className="text-center p-6 bg-brand-sahel rounded-lg border border-brand-okoume/20 hover:shadow-lg transition-all duration-300">
  <div className="text-3xl font-bold text-brand-ebony mb-2">150+</div>
  <div className="text-brand-slate">Entreprises partenaires</div>
</div>

            <div className="text-center p-6 bg-brand-sahel rounded-lg border border-brand-okoume/20 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-brand-okoume mb-2">120+</div>
              <div className="text-brand-slate">Clients satisfaits</div>
            </div>
            <div className="text-center p-6 bg-brand-sahel rounded-lg border border-brand-okoume/20 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-brand-laterite mb-2">15K+</div>
              <div className="text-brand-slate">Collaborateurs gérés</div>
            </div>
            <div className="text-center p-6 bg-brand-sahel rounded-lg border border-brand-okoume/20 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold text-brand-copper mb-2">24/7</div>
              <div className="text-brand-slate">Support technique</div>
            </div>
          </div>
        </div>

        {/* Founder Info Section */}
        <div className="bg-brand-sahel/10 rounded-2xl p-8 border border-brand-okoume/20 mb-16 shadow-md">
          <h3 className="text-xl font-bold text-brand-dark mb-4">Rencontrez notre fondateur</h3>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="sm:w-20 sm:h-20 w-16 h-16 bg-brand-ebony rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              E
            </div>
            <div className="flex-1">
              <p className="font-semibold text-brand-dark">Epiphane Sitou Moukeytou</p>
              <p className="text-brand-slate">Consultant stratégique RH – Fondateur</p>
              <p className="text-brand-slate mt-2">
                Expert en transformation RH avec plus de 15 ans d'expérience dans le conseil et la formation en Afrique centrale.
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <a href=" sitou.epiphane@gmail.com" className="flex items-center text-brand-slate hover:text-brand-ebony">
                <Mail className="h-4 w-4 mr-2" /> Email
              </a>
              <a href="tel:+241077153846" className="flex items-center text-brand-slate hover:text-brand-ebony">
                <Phone className="h-4 w-4 mr-2" /> Téléphone
              </a>
              <a href=" rh2-flax.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center text-brand-slate hover:text-brand-ebony">
                <Globe className="h-4 w-4 mr-2" /> Site web
              </a>
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