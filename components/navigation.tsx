"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Building2, Users, Calendar, Briefcase, GraduationCap, Phone, UserCheck } from 'lucide-react'

const navItems = [
  { label: 'À propos', href: '/', icon: Building2 },
  { label: 'Services', href: '/Services', icon: Users },
  { label: 'Espace Client', href: '/client-space', icon: UserCheck },
  { label: 'Gestion Congés', href: '/leave-management', icon: Calendar },
  { label: 'Recrutement', href: '/recruitment', icon: Briefcase },
  { label: 'Formation', href: '/training', icon: GraduationCap },
  { label: 'Contact', href: '/contact', icon: Phone },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  
  console.log("Navigation component rendered")

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-sahel/95 backdrop-blur-sm border-b border-brand-okoume/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Building2 className="h-8 w-8 text-brand-ebony" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-brand-laterite rounded-full"></div>
            </div>
            <div>
              <span className="text-xl font-bold text-brand-dark">SME Conseil</span>
              <div className="text-xs text-brand-slate">Gabon</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-brand-slate hover:text-brand-ebony transition-colors duration-200 font-medium relative group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-laterite transition-all duration-200 group-hover:w-full"></div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-brand-ebony hover:bg-brand-ebony/90 text-white shadow-lg hover:shadow-xl transition-all duration-300">
              Démo Gabonaise
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center space-x-3 text-brand-slate hover:text-brand-ebony transition-colors duration-200 p-2 rounded-lg hover:bg-brand-sahel"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="font-medium">{item.label}</span>
                      </Link>
                    )
                  })}
                  <Button className="bg-brand-ebony hover:bg-brand-ebony/90 text-white mt-4">
                    Démo Gabonaise
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}