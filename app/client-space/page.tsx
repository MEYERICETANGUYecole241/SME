"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Lock, 
  FileText, 
  CreditCard, 
  Download, 
  Eye, 
  Shield,
  Clock,
  Bell,
  UserCheck,
  ArrowRight
} from 'lucide-react'

export default function ClientSpacePage() {

  console.log("ClientSpaceSection component rendered")
  
  const features = [
    {
      icon: FileText,
      title: "Documents RH",
      description: "Accès à tous vos documents : contrats, avenants, certificats",
      demo: "250+ documents disponibles"
    },
    {
      icon: CreditCard,
      title: "Bulletins de Paie",
      description: "Consultation et téléchargement sécurisé de vos bulletins",
      demo: "Historique 5 ans"
    },
    {
      icon: Download,
      title: "Téléchargements",
      description: "Export PDF de tous vos documents en un clic",
      demo: "Format PDF sécurisé"
    },
    {
      icon: Eye,
      title: "Visualisation",
      description: "Interface intuitive pour consulter vos informations",
      demo: "Vue personnalisée"
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Alertes pour nouveaux documents et échéances",
      demo: "Temps réel"
    },
    {
      icon: UserCheck,
      title: "Profil Personnel",
      description: "Gestion de vos informations personnelles et professionnelles",
      demo: "Mise à jour simple"
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "Chiffrement de bout en bout et authentification forte",
      highlight: "RGPD Compliant"
    },
    {
      icon: Clock,
      title: "Disponible 24/7",
      description: "Accès à vos documents à tout moment, partout",
      highlight: "Mobile & Desktop"
    },
    {
      icon: Lock,
      title: "Confidentialité",
      description: "Vos données sont protégées et restent privées",
      highlight: "ISO 27001"
    }
  ]

  return (
    <section id="client-space" className="py-20 bg-brand-laterite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-white text-green-600 border-green-500/20 mb-4">
            Espace Client Sécurisé
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark mb-6">
            Votre espace personnel dédié
          </h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Accédez à tous vos documents RH, bulletins de paie et contrats depuis un espace 
            sécurisé disponible 24h/24. Simplicité et sécurité garanties.
          </p>
        </div>

        {/* Demo Section */}
        <div className="bg-gradient-to-br from-brand-blue-100 to-blue-600 rounded-2xl p-8 lg:p-12 mb-16 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Interface Client Intuitive
              </h3>
              <p className="text-blue-100 text-lg">
                Découvrez un espace moderne et ergonomique conçu pour faciliter 
                l'accès à vos informations RH essentielles.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-blue-100">Connexion sécurisée en 2 clics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-blue-100">Recherche instantanée dans vos documents</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-blue-100">Notifications intelligentes</span>
                </div>
              </div>
              <Button variant="secondary" size="lg" className="bg-green-500/10 text-brand-blue hover:bg-green-600">
                Voir la démo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            {/* Mock Interface */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">Tableau de bord</span>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="bg-white/20 rounded p-2 text-sm">📄 Bulletin de paie - Décembre 2024</div>
                  <div className="bg-white/20 rounded p-2 text-sm">📋 Contrat de travail - CDI</div>
                  <div className="bg-white/20 rounded p-2 text-sm">🏖️ Demande de congé approuvée</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                    <Icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg text-brand-dark">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-brand-slate text-sm">{feature.description}</p>
                  <div className="text-xs text-green-600 font-medium">{feature.demo}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-brand-blue" />
                </div>
                <h4 className="text-xl font-semibold text-brand-dark mb-2">{benefit.title}</h4>
                <p className="text-brand-slate mb-2">{benefit.description}</p>
                <Badge variant="secondary" className="bg-white text-green-600">
                  {benefit.highlight}
                </Badge>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}