"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield, Star } from 'lucide-react'

export function HeroSection() {
  console.log("HeroSection component rendered")
  
  return (
    <section className="relative pt-24 pb-20 bg-gradient-to-br from-brand-sahel via-white to-brand-sahel/50 overflow-hidden">
      {/* Motif géométrique gabonais en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-brand-ebony rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-brand-okoume rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-brand-laterite rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-laterite/10 text-brand-laterite px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4" />
                Solution RH #1 en Afrique Centrale
              </div>
        <h1 className="text-4xl lg:text-6xl font-bold text-brand-dark leading-tight">
  Révolutionnez vos{' '}
  <span className="text-brand-ebony">processus RH au Gabon</span>{' '}
  
</h1>


              
              <p className="text-xl text-brand-slate leading-relaxed">
                Plateforme gabonaise de digitalisation RH. Optimisez la gestion de vos talents 
                avec des solutions adaptées au contexte africain moderne.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                'Gestion des congés adaptée aux réglementations gabonaises',
                'Recrutement digital multiculturel',
                'Formation e-learning en français et langues locales',
                'Conformité avec le droit du travail gabonais'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-laterite flex-shrink-0" />
                  <span className="text-brand-dark">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-brand-ebony hover:bg-brand-ebony/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Démarrer maintenant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-brand-okoume text-brand-okoume hover:bg-brand-okoume hover:text-white transition-all duration-300"
              >
                Demander une démo
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image + Stats */}
          <div className="relative">
            {/* Image principale - Bureau moderne gabonais */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/30689114/pexels-photo-30689114.jpeg?auto=compress&cs=tinysrgb&h=350" 
                alt="Équipe professionnelle africaine en collaboration" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>
              
              {/* Badge de confiance sur l'image */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-laterite rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-dark">Certifié CEMAC</div>
                    <div className="text-xs text-brand-slate">Conformité garantie</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats flottantes */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-brand-sahel">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-8 w-8 text-brand-ebony" />
                <span className="text-brand-laterite text-sm font-medium">↗ +40%</span>
              </div>
              <div className="text-2xl font-bold text-brand-dark">1,200+</div>
              <div className="text-brand-slate text-sm">Entreprises gabonaises</div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-brand-sahel">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-8 w-8 text-brand-okoume" />
                <span className="text-brand-laterite text-sm font-medium">↗ +65%</span>
              </div>
              <div className="text-2xl font-bold text-brand-dark">96%</div>
              <div className="text-brand-slate text-sm">Satisfaction utilisateur</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}