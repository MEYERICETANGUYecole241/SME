"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu as MenuIcon,
  Building2,
  Users,
  Calendar,
  Briefcase,
  GraduationCap,
  Phone,
  UserCheck,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Les éléments du dropdown "Menu"
  const menuItems = [
    { label: "Services", href: "/Services", icon: Users },
    { label: "Espace Client", href: "/client-space", icon: UserCheck },
    { label: "Gestion Congés", href: "/leave-management", icon: Calendar },
    { label: "Recrutement", href: "/recruitment", icon: Briefcase },
    { label: "Formation", href: "/training", icon: GraduationCap },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-sahel/95 backdrop-blur-sm border-b border-brand-okoume/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo à gauche */}
          <div className="flex flex-1 justify-start">
            <div className="relative">
              <Image
                src="/logo.jpeg"
                alt="Logo SME Conseil"
                width={32}
                height={32}
                className="h-16 w-64 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-brand-laterite rounded-full"></div>
            </div>
          </div>

          {/* Centre: À propos et Menu avec dropdown */}
          <div className="hidden md:flex flex-1 justify-center space-x-16 font-medium text-brand-slate relative">
            {/* À propos simple lien */}
            <Link
              href="/"
              className="hover:text-brand-ebony transition-colors duration-200 flex items-center"
            >
              À propos
            </Link>

            {/* Bouton Menu avec dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className="flex items-center hover:text-brand-ebony transition-colors duration-200 cursor-pointer select-none"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                type="button"
              >
                Menu
                {dropdownOpen ? (
                  <ChevronUp size={16} className="ml-1" />
                ) : (
                  <ChevronDown size={16} className="ml-1" />
                )}
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                  {menuItems.map(({ label, href, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center space-x-2 px-4 py-2 text-sm hover:bg-brand-sahel hover:text-white transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Contact à droite - visible uniquement en desktop */}
     <div className="hidden md:flex flex-1 justify-end">
      <Link href="/contact" className="text-brand-slate hover:text-brand-ebony transition-colors duration-200 font-medium">
       <Button>
        Contactez-nous
       </Button>
     </Link>
    </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Ouvrir le menu">
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    href="/"
                    className="flex items-center space-x-3 text-brand-slate hover:text-brand-ebony transition-colors duration-200 p-2 rounded-lg hover:bg-brand-sahel"
                    onClick={() => setIsOpen(false)}
                  >
                    <Building2 className="h-5 w-5" />
                    <span className="font-medium">À propos</span>
                  </Link>
                  {menuItems.map(({ label, href, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className="flex items-center space-x-3 text-brand-slate hover:text-brand-ebony transition-colors duration-200 p-2 rounded-lg hover:bg-brand-sahel"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{label}</span>
                    </Link>
                  ))}
                     <div className="flex flex-1 justify-end">
                   <Link href="/contact" className="text-brand-slate hover:text-brand-ebony transition-colors duration-200 font-medium">
                   <Button>
                    Contactez-nous
                   </Button>
                   </Link>
                     </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
