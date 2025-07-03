"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"
import Image from "next/image"
import Link from "next/link"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
  ArrowRight
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
      content: "+241 077 15 38 46",
      subtitle: "Du lundi au vendredi, 8h-16h"
    },
    {
      icon: Mail,
      title: "Email",
      content: "sitou.epiphane@gmail.com",
      subtitle: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Amboyet, Charbonnage",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    console.log("Form submission started:", formData)

    // Validation simple
    if (!formData.phone || !formData.email || !formData.comment) {
      toast.error("Veuillez remplir tous les champs obligatoires")
      setIsSubmitting(false)
      return
    }

    // Préparation du message pour WhatsApp
    const whatsappNumber = "+33743376165" // Numéro de téléphone WhatsApp
    const message = `Nouvelle demande de contact:
    
📞 Téléphone: ${formData.phone}
📧 Email: ${formData.email}
    
💬 Message:
${formData.comment}`

    // Encodage du message pour l'URL
    const encodedMessage = encodeURIComponent(message)
    
    // Création du lien WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Ouverture dans un nouvel onglet
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({ phone: '', email: '', comment: '' })
    setIsSubmitting(false)
    
    toast.success("Redirection vers WhatsApp pour envoyer votre message")
  }

  return (
    <section id="contact" className="py-20 bg-gray-100">
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
                    <Image
                      src="/n.png"  
                      alt="Logo bâtiment"
                      width={48}                   
                      height={48}
                    />
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
                    placeholder="+241 066 50 97 00"
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

                {/* Bouton de soumission */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3 relative overflow-hidden group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Publier sur WhatsApp
                </>
              )}
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>

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
            <h3 className="text-2xl font-bold mb-2 text-brand-dark">Prêt à digitiser votre RH ?</h3>
            <p className="text-green-300 mb-6">
              Rejoignez plus de 200 entreprises qui nous font confiance pour leur transformation RH
            </p>
             <Link href="/rendez-vous">
      <Button
        size="lg"
        className="bg-brand-ebony hover:bg-brand-ebony/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Démarrer aujourd'hui
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </Link>
          </div>
        </div>
      </div>
    </section>
  )
}