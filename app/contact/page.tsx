"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  Building2,
  MessageSquare,
  CheckCircle
} from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    comment: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  console.log("ContactSection component rendered")

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "+241 06 50 97 00",
      subtitle: "Du lundi au vendredi, 9h-18h"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@sme-conseil.fr",
      subtitle: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Rond point Awendje",
      subtitle: "Libreville, Gabon"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Ven: 8h00 - 16h00",
      subtitle: "Sam: 8h00 - 12h00"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    console.log("Form data updated:", { [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log("Form submission started:", formData)

    // Validation simple
    if (!formData.phone || !formData.email || !formData.comment) {
      toast.error("Veuillez remplir tous les champs obligatoires")
      setIsSubmitting(false)
      return
    }

    // Simulation d'envoi
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simule un délai d'envoi
      
      console.log("Form submitted successfully:", formData)
      toast.success("Votre demande a été envoyée avec succès ! Nous vous contacterons rapidement.")
      
      // Reset form
      setFormData({ phone: '', email: '', comment: '' })
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-brand-orange/10 text-brand-orange border-brand-orange/20 mb-4">
            Contact
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-dark mb-6">
            Parlons de votre projet RH
          </h2>
          <p className="text-xl text-brand-slate max-w-3xl mx-auto">
            Notre équipe d'experts est à votre disposition pour vous accompagner 
            dans votre transformation digitale RH. Contactez-nous dès maintenant !
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-brand-dark mb-6">Nos Coordonnées</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-brand-orange/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-6 w-6 text-brand-orange" />
                        </div>
                        <h4 className="font-semibold text-brand-dark mb-2">{info.title}</h4>
                        <p className="text-brand-dark font-medium">{info.content}</p>
                        <p className="text-brand-slate text-sm mt-1">{info.subtitle}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Company Info */}
            <Card className="bg-brand-light border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-brand-dark mb-2">SME Conseil & Développement</h4>
                    <p className="text-brand-slate text-sm mb-3">
                      Cabinet de conseil RH spécialisé dans la transformation digitale 
                      des processus de gestion des ressources humaines.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">Expert certifié</Badge>
                      <Badge variant="secondary" className="text-xs">RGPD Compliant</Badge>
                      <Badge variant="secondary" className="text-xs">ISO 27001</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lead Capture Form */}
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-brand-blue to-brand-orange text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-6 w-6" />
                <span>Demande d'Information</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-brand-dark font-medium">
                    Numéro de téléphone *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+241 06 50 97 00"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-gray-200 focus:border-brand-blue"
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-brand-dark font-medium">
                    Adresse email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre.email@entreprise.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-gray-200 focus:border-brand-blue"
                    required
                  />
                </div>

                {/* Comment */}
                <div className="space-y-2">
                  <Label htmlFor="comment" className="text-brand-dark font-medium">
                    Décrivez vos besoins *
                  </Label>
                  <Textarea
                    id="comment"
                    name="comment"
                    placeholder="Décrivez votre projet, vos besoins spécifiques en matière de RH, le nombre d'employés concernés, etc."
                    value={formData.comment}
                    onChange={handleInputChange}
                    className="border-gray-200 focus:border-brand-blue min-h-[120px]"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Envoyer ma demande
                    </>
                  )}
                </Button>

                {/* Privacy Notice */}
                <p className="text-xs text-brand-slate text-center">
                  En soumettant ce formulaire, vous acceptez que SME Conseil traite vos données 
                  pour vous recontacter. Conformément au RGPD, vous disposez d'un droit d'accès 
                  et de rectification de vos données.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-brand-blue to-brand-orange rounded-2xl p-8 text-white">
          <div className="max-w-2xl mx-auto">
            <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-300" />
            <h3 className="text-2xl font-bold mb-2">Prêt à digitiser votre RH ?</h3>
            <p className="text-blue-100 mb-6">
              Rejoignez plus de 200 entreprises qui nous font confiance pour leur transformation RH
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-gray-50">
              Planifier un rendez-vous
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}