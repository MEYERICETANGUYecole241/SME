'use client'

import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { CalendarDays, Send } from 'lucide-react'

export default function RendezVous() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    subject: '',
  })

  const [successMessage, setSuccessMessage] = useState('')

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, phone, email, date, time, subject } = formData

    if (!name || !phone || !email || !date || !time || !subject) {
      alert('Veuillez remplir tous les champs')
      return
    }

    handleWhatsApp()
  }

  const handleWhatsApp = () => {
    const message = `📆 Prise de rendez-vous :
👤 Nom : ${formData.name}
📞 Téléphone : ${formData.phone}
📧 Email : ${formData.email}
📅 Date : ${formData.date}
⏰ Heure : ${formData.time}
📝 Sujet : ${formData.subject}`

    const phoneNumber = '33743376165'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    window.open(whatsappUrl, '_blank')

    // Affiche le message de succès
    setSuccessMessage('✅ Votre demande de rendez-vous a été envoyée avec succès.')

    // Réinitialise le formulaire
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      subject: '',
    })

    // Disparaît après 4 secondes
    setTimeout(() => {
      setSuccessMessage('')
    }, 4000)
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 bg-gray-100">
      <Card className="shadow-lg border border-gray-200">
        <CardHeader className="bg-brand-blue text-white rounded-t-lg p-6">
          <CardTitle className="text-xl flex items-center gap-2">
            <CalendarDays className="w-5 h-5" />
            Prendre rendez-vous avec un expert SME
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-8">
          {successMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Votre nom complet"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+241 06 XX XX XX"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="votre.email@exemple.com"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date du rendez-vous *</Label>
                <Input
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Heure du rendez-vous *</Label>
                <Input
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Sujet du rendez-vous *</Label>
              <Textarea
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Ex. : Accompagnement à la création d’entreprise, financement, etc."
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              <Send className="h-5 w-5 mr-2" />
              Envoyer via WhatsApp
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
