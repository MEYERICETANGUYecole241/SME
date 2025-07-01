"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Calendar, 
  TrendingUp, 
  Users, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  BarChart3,
  PieChart,
  Activity,
  ArrowRight
} from 'lucide-react'

export function LeaveManagementSection() {
  console.log("LeaveManagementSection component rendered")
  
  const dashboardData = [
    {
      title: "Congés en cours",
      value: "23",
      change: "+12%",
      color: "text-blue-600",
      bgColor: "bg-blue-500/10",
      icon: Calendar
    },
    {
      title: "Taux d'absentéisme",
      value: "3.2%",
      change: "-0.8%",
      color: "text-green-600",
      bgColor: "bg-green-500/10",
      icon: TrendingUp
    },
    {
      title: "Effectif présent",
      value: "187/195",
      change: "95.9%",
      color: "text-purple-600",
      bgColor: "bg-purple-500/10",
      icon: Users
    },
    {
      title: "Demandes en attente",
      value: "7",
      change: "Urgent",
      color: "text-orange-600",
      bgColor: "bg-orange-500/10",
      icon: Clock
    }
  ]

  const features = [
    {
      icon: BarChart3,
      title: "Tableaux de Bord en Temps Réel",
      description: "Visualisez instantanément les indicateurs clés de présence et d'absentéisme",
      highlight: "Mise à jour automatique"
    },
    {
      icon: PieChart,
      title: "Analytics Avancées",
      description: "Analysez les tendances et optimisez la gestion des effectifs",
      highlight: "Rapports personnalisés"
    },
    {
      icon: CheckCircle,
      title: "Validation Automatisée",
      description: "Workflow de validation configurable selon votre organisation",
      highlight: "Processus optimisé"
    },
    {
      icon: Activity,
      title: "Suivi Performance",
      description: "Monitoring des performances individuelles et collectives",
      highlight: "KPI détaillés"
    }
  ]

  return (
    <section id="leave-management" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/20 mb-4">
            Gestion des Congés & Absences
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark mb-6">
            Pilotage RH en temps réel
          </h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Visualisez les performances, gérez les absences et optimisez vos effectifs 
            grâce à des tableaux de bord intelligents et des analytics avancées.
          </p>
        </div>

        {/* Dashboard Demo */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 border border-gray-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-brand-dark">Tableau de Bord RH</h3>
            <div className="flex items-center space-x-2 text-sm text-brand-slate">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Mise à jour en temps réel</span>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {dashboardData.map((item, index) => {
              const Icon = item.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center`}>
                        <Icon className={`h-5 w-5 ${item.color}`} />
                      </div>
                      <span className={`text-sm font-medium ${item.color}`}>{item.change}</span>
                    </div>
                    <div className="text-2xl font-bold text-brand-dark mb-1">{item.value}</div>
                    <div className="text-brand-slate text-sm">{item.title}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Progress Bars */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-brand-dark">Utilisation des congés par département</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-brand-slate">IT & Développement</span>
                    <span className="text-brand-dark font-medium">78%</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-brand-slate">Marketing & Communication</span>
                    <span className="text-brand-dark font-medium">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-brand-slate">Ressources Humaines</span>
                    <span className="text-brand-dark font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-brand-dark">Alertes & Notifications</h4>
              <div className="space-y-3">
                <div className="flex items-center p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <AlertCircle className="h-5 w-5 text-orange-500 mr-3" />
                  <div>
                    <div className="text-sm font-medium text-brand-dark">7 demandes en attente</div>
                    <div className="text-xs text-brand-slate">Validation nécessaire</div>
                  </div>
                </div>
                <div className="flex items-center p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <div>
                    <div className="text-sm font-medium text-brand-dark">Effectif stable</div>
                    <div className="text-xs text-brand-slate">Taux de présence optimal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/20 transition-colors">
                    <Icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg text-brand-dark">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-brand-slate text-sm">{feature.description}</p>
                  <Badge variant="secondary" className="bg-purple-500/10 text-purple-600 text-xs">
                    {feature.highlight}
                  </Badge>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white">
            Découvrir le tableau de bord
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}