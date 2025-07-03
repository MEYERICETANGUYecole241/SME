"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu as MenuIcon,
  Building2,
} from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-sahel/95 backdrop-blur-sm border-b border-brand-okoume/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo à gauche */}
          <div className="flex flex-1 justify-start">
            <div className="relative">
              <Image
                src="/logo-removebg.png"
                alt="Logo SME Conseil"
                width={32}
                height={32}
                className="h-16 w-64 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-brand-laterite rounded-full"></div>
            </div>
          </div>

          {/* Centre: uniquement "À propos" */}
          <div className="hidden md:flex flex-1 justify-center space-x-12 font-medium text-brand-slate">
            <Link
              href="/"
              className="hover:text-brand-ebony transition-colors duration-200 flex items-center"
            >
              À propos
            </Link>
          </div>

          {/* Contact à droite - desktop */}
          <div className="hidden md:flex flex-1 justify-end">
            <Link href="/contact">
              <Button>Contactez-nous</Button>
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
                  <Link
                    href="/contact"
                    className="text-brand-slate hover:text-brand-ebony transition-colors duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <Button>Contactez-nous</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
