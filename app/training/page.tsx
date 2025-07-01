"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { 
  GraduationCap, 
  Play, 
  BookOpen, 
  Award, 
  Users, 
  Clock,
  Star,
  TrendingUp,
  Target,

} from 'lucide-react'

export default function TrainingSection() {
  console.log("TrainingSection component rendered")
  
  const courses = [
    {
      title: "Leadership et Management",
      category: "Management",
      duration: "8h 30min",
      modules: 12,
      enrolled: 45,
      rating: 4.8,
      progress: 75,
      status: "En cours"
    },
    {
      title: "Sécurité au Travail",
      category: "Obligatoire",
      duration: "2h 15min", 
      modules: 6,
      enrolled: 120,
      rating: 4.5,
      progress: 100,
      status: "Complété"
    },
    {
      title: "Communication Interpersonnelle",
      category: "Soft Skills",
      duration: "5h 45min",
      modules: 8,
      enrolled: 32,
      rating: 4.9,
      progress: 30,
      status: "En cours"
    }
  ]

  const learners = [
    {
      name: "Alice D.",
      role: "Manager",
      completedCourses: 8,
      currentCourse: "Leadership",
      progress: 85,
      avatar: "AD"
    },
    {
      name: "Paul M.",
      role: "Développeur",
      completedCourses: 5,
      currentCourse: "Sécurité",
      progress: 100,
      avatar: "PM"
    },
    {
      name: "Emma K.",
      role: "RH",
      completedCourses: 12,
      currentCourse: "Communication",
      progress: 60,
      avatar: "EK"
    }
  ]

  const features = [
    {
      icon: BookOpen,
      title: "Catalogue Riche",
      description: "Plus de 200 modules de formation adaptés à vos besoins",
      stat: "200+ modules"
    },
    {
      icon: Target,
      title: "Suivi Personnalisé",
      description: "Parcours adaptatifs et recommandations intelligentes",
      stat: "IA personnalisée"
    },
    {
      icon: Award,
      title: "Certifications",
      description: "Délivrance de certificats reconnus et badges de compétences",
      stat: "Certifié qualité"
    },
    {
      icon: TrendingUp,
      title: "Analytics Apprentissage",
      description: "Tableaux de bord détaillés des progrès et performances",
      stat: "Suivi temps réel"
    }
  ]

  return (
    <section id="training" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-indigo-500/10 text-indigo-600 border-indigo-500/20 mb-4">
            Formation & E-Learning
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark mb-6">
            Développez les compétences de vos équipes
          </h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Plateforme e-learning complète avec suivi personnalisé, certifications 
            et analytics détaillées pour maximiser le développement professionnel.
          </p>
        </div>

        {/* Learning Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Courses Panel */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6" />
                  <span>Formations Disponibles</span>
                  <Badge variant="secondary" className="ml-auto bg-white/20 text-white border-white/30">
                    {courses.length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {courses.map((course, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-brand-dark">{course.title}</h4>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              course.category === 'Obligatoire' ? 'border-red-200 text-red-600' :
                              course.category === 'Management' ? 'border-blue-200 text-blue-600' :
                              'border-green-200 text-green-600'
                            }`}
                          >
                            {course.category}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-brand-slate mb-3">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {course.duration}
                          </span>
                          <span>{course.modules} modules</span>
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {course.enrolled} inscrits
                          </span>
                          <span className="flex items-center">
                            <Star className="h-4 w-4 mr-1 text-yellow-500 fill-current" />
                            {course.rating}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-brand-slate">Progression</span>
                            <span className="text-brand-dark font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      </div>
                      <div className="ml-4 flex flex-col items-end space-y-2">
                        <Badge 
                          className={`${
                            course.status === 'Complété' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {course.status}
                        </Badge>
                        <Button size="sm" variant="outline">
                          <Play className="h-4 w-4 mr-1" />
                          {course.status === 'Complété' ? 'Revoir' : 'Continuer'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Learners Panel */}
          <div>
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-6 w-6" />
                  <span>Top Apprenants</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {learners.map((learner, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-green-100 text-green-600 font-semibold">
                        {learner.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-brand-dark">{learner.name}</h4>
                        <div className="flex items-center space-x-1">
                          <Award className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm font-medium text-brand-dark">{learner.completedCourses}</span>
                        </div>
                      </div>
                      <p className="text-sm text-brand-slate mb-2">{learner.role}</p>
                      <div className="space-y-1">
                        <div className="text-xs text-brand-slate">En cours: {learner.currentCourse}</div>
                        <Progress value={learner.progress} className="h-1" />
                      </div>
                    </div>
                  </div>
                ))}
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                  Voir tous les apprenants
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow group">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-500/20 transition-colors">
                    <Icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-lg text-brand-dark">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-brand-slate text-sm">{feature.description}</p>
                  <Badge variant="secondary" className="bg-indigo-500/10 text-indigo-600 text-xs">
                    {feature.stat}
                  </Badge>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Learning Stats */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Impact de la Formation</h3>
            <p className="text-indigo-100">Résultats mesurables de votre investissement formation</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-indigo-100 text-sm">Taux de completion</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">+40%</div>
              <div className="text-indigo-100 text-sm">Productivité équipes</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.7/5</div>
              <div className="text-indigo-100 text-sm">Satisfaction apprenants</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-indigo-100 text-sm">Recommandations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}