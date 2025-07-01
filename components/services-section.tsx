"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  FileText, 
  Calculator, 
  Shield, 
  Calendar, 
  TrendingUp, 
  Briefcase,
  GraduationCap,
  ArrowRight
} from 'lucide-react'

export function ServicesSection() {
  console.log("ServicesSection component rendered")
  
  const services = [
    {
      icon: Users,
      title: "Conseil RH Gabonais",
      description: "Expertise locale en gestion des ressources humaines adaptée au marché gabonais",
      features: ["Audit RH localisé", "Politique salariale CEMAC", "GPEC adaptée", "Relations sociales gabonaises"],
      color: "bg-brand-ebony",
      accent: "text-brand-ebony"
    },
    {
      icon: FileText,
      title: "Administration Gabonaise",
      description: "Gestion administrative conforme aux réglementations du Gabon et de la CEMAC",
      features: ["Contrats gabonais", "Bulletins conformes", "CNSS Gabon", "Formations obligatoires"],
      color: "bg-brand-okoume",
      accent: "text-brand-okoume"
    },
    {
      icon: Calculator,
      title: "Paie & CNSS Gabon",
      description: "Gestion complète de la paie selon les normes gabonaises et CEMAC",
      features: ["Bulletins CNSS", "Déclarations Gabon", "Optimisation fiscale", "Veille réglementaire"],
      color: "bg-brand-laterite",
      accent: "text-brand-laterite"
    },
    {
      icon: Shield,
      title: "Conformité Gabonaise",
      description: "Respect du Code du Travail gabonais et des réglementations CEMAC",
      features: ["Droit du travail GA", "Veille juridique locale", "Audits conformité", "Support légal"],
      color: "bg-brand-copper",
      accent: "text-brand-copper"
    },
    {
      icon: Calendar,
      title: "Gestion des Temps",
      description: "Solutions adaptées aux rythmes de travail et congés spécifiques au Gabon",
      features: ["Planning local", "Congés gabonais", "Heures sup. GA", "Reporting CEMAC"],
      color: "bg-brand-gold",
      accent: "text-brand-gold"
    },
    {
      icon: TrendingUp,
      title: "Analytics RH Afrique",
      description: "Tableaux de bord et KPI adaptés au contexte économique gabonais",
      features: ["KPI sectoriels GA", "Tableaux localisés", "Rapports CEMAC", "Analyses sectorielles"],
      color: "bg-brand-slate",
      accent: "text-brand-slate"
    },
    {
      icon: Briefcase,
      title: "Recrutement Local",
      description: "Plateforme de recrutement connectée au marché de l'emploi gabonais",
      features: ["Talents gabonais", "Tri multiculturel", "Entretiens adaptés", "Intégration locale"],
      color: "bg-brand-ebony",
      accent: "text-brand-ebony"
    },
    {
      icon: GraduationCap,
      title: "Formation Gabonaise",
      description: "E-learning en français et langues locales pour le développement des compétences",
      features: ["Formations locales", "Suivi personnalisé", "Certifications GA", "Développement RH"],
      color: "bg-brand-okoume",
      accent: "text-brand-okoume"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-brand-sahel/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-brand-laterite/10 text-brand-laterite border-brand-laterite/20 mb-4">
            Solutions RH Gabonaises
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark mb-6">
            Excellence RH adaptée au{' '}
            <span className="text-brand-ebony">contexte gabonais</span>
          </h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Solutions digitales conçues pour les entreprises gabonaises. 
            Conformité CEMAC, expertise locale et innovation technologique réunies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-brand-dark group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-brand-slate text-sm">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center text-xs text-brand-slate">
                        <div className={`w-1.5 h-1.5 ${service.color} rounded-full mr-2`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-brand-ebony hover:bg-brand-ebony/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
            Découvrir nos solutions gabonaises
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}