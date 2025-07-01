"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  Briefcase, 
  Users, 
  Filter, 
  Video, 
  CheckCircle, 
  Clock,
  MapPin,
  ArrowRight,
  Star,
  TrendingUp,
  Zap
} from 'lucide-react'

export function RecruitmentSection() {
  console.log("RecruitmentSection component rendered")
  
  const jobOffers = [
    {
      title: "Développeur Full-Stack Senior",
      department: "IT & Tech",
      location: "Paris / Remote",
      type: "CDI",
      applications: 42,
      status: "active",
      posted: "Il y a 3 jours"
    },
    {
      title: "Responsable Marketing Digital",
      department: "Marketing",
      location: "Lyon",
      type: "CDI",
      applications: 28,
      status: "active", 
      posted: "Il y a 1 semaine"
    },
    {
      title: "Consultant RH Junior",
      department: "Ressources Humaines",
      location: "Marseille",
      type: "Stage",
      applications: 15,
      status: "draft",
      posted: "Brouillon"
    }
  ]

  const candidates = [
    {
      name: "Sarah M.",
      position: "Développeur Full-Stack",
      score: 92,
      status: "Interview",
      avatar: "SM"
    },
    {
      name: "Thomas L.", 
      position: "Marketing Digital",
      score: 87,
      status: "Évaluation",
      avatar: "TL"
    },
    {
      name: "Marie P.",
      position: "Consultant RH",
      score: 95,
      status: "Finaliste",
      avatar: "MP"
    }
  ]

  const features = [
    {
      icon: Briefcase,
      title: "Job Board Intégré",
      description: "Publiez vos offres et gérez les candidatures depuis une interface unique",
      stat: "500+ offres publiées"
    },
    {
      icon: Filter,
      title: "Tri Automatique",
      description: "IA avancée pour filtrer et classer automatiquement les candidatures",
      stat: "85% d'efficacité"
    },
    {
      icon: Video,
      title: "Entretiens Digitaux",
      description: "Planification et gestion des entretiens vidéo intégrés",
      stat: "1200+ entretiens"
    },
    {
      icon: CheckCircle,
      title: "Suivi Processus",
      description: "Tracking complet du parcours candidat de A à Z",
      stat: "Temps divisé par 3"
    }
  ]

  return (
    <section id="recruitment" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-teal-500/10 text-teal-600 border-teal-500/20 mb-4">
            Recrutement Digital
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark mb-6">
            Recrutement moderne et efficace
          </h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Simplifiez votre processus de recrutement avec notre plateforme intelligente : 
            publication d'offres, gestion des candidatures et suivi automatisé.
          </p>
        </div>

        {/* Dashboard Demo */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Job Offers Panel */}
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <Briefcase className="h-6 w-6" />
                <span>Offres d'Emploi Actives</span>
                <Badge variant="secondary" className="ml-auto bg-white/20 text-white border-white/30">
                  {jobOffers.length}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {jobOffers.map((job, index) => (
                <div key={index} className="border border-gray-100 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-brand-dark">{job.title}</h4>
                      <div className="flex items-center space-x-4 text-sm text-brand-slate mt-1">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </span>
                        <Badge variant="outline" className="text-xs">{job.type}</Badge>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${job.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-slate">{job.applications} candidatures</span>
                    <span className="text-xs text-brand-slate">{job.posted}</span>
                  </div>
                </div>
              ))}
              <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                Publier une nouvelle offre
              </Button>
            </CardContent>
          </Card>

          {/* Candidates Panel */}
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-6 w-6" />
                <span>Candidats en Cours</span>
                <Badge variant="secondary" className="ml-auto bg-white/20 text-white border-white/30">
                  Top 3
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {candidates.map((candidate, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-purple-100 text-purple-600 font-semibold">
                      {candidate.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold text-brand-dark">{candidate.name}</h4>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-brand-dark">{candidate.score}</span>
                      </div>
                    </div>
                    <p className="text-sm text-brand-slate mb-2">{candidate.position}</p>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        candidate.status === 'Finaliste' ? 'bg-green-100 text-green-700' :
                        candidate.status === 'Interview' ? 'bg-blue-100 text-blue-700' :
                        'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {candidate.status}
                    </Badge>
                  </div>
                </div>
              ))}
              <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                Voir tous les candidats
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/20 transition-colors">
                    <Icon className="h-6 w-6 text-teal-600" />
                  </div>
                  <CardTitle className="text-lg text-brand-dark">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-brand-slate text-sm">{feature.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-500" />
                    <span className="text-xs font-medium text-green-600">{feature.stat}</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-teal-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">75%</div>
              <div className="text-teal-100">Réduction du temps de recrutement</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3x</div>
              <div className="text-teal-100">Plus de candidats qualifiés</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">92%</div>
              <div className="text-teal-100">Satisfaction des recruteurs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}