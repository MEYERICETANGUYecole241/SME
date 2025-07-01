import React from 'react'

export default function Footer() {
  return (
    <div>
        {/* Footer */}
      <footer className="bg-brand-dark text-white py-12 relative overflow-hidden">
        {/* Motif décoratif gabonais */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20 w-32 h-32 border border-brand-okoume rotate-45"></div>
          <div className="absolute bottom-10 left-20 w-24 h-24 border border-brand-laterite rotate-12"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-brand-okoume">SME Conseil & Développement</h4>
              <p className="text-gray-300 text-sm">
                Leader de la digitalisation RH au Gabon. Solutions innovantes pour 
                les entreprises africaines modernes.
              </p>
              <div className="flex space-x-2">
                <div className="w-8 h-1 bg-brand-okoume rounded"></div>
                <div className="w-6 h-1 bg-brand-laterite rounded"></div>
                <div className="w-4 h-1 bg-brand-copper rounded"></div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-brand-laterite">Solutions</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="hover:text-brand-okoume transition-colors cursor-pointer">Conseil RH Gabonais</li>
                <li className="hover:text-brand-okoume transition-colors cursor-pointer">Paie & CNSS Gabon</li>
                <li className="hover:text-brand-okoume transition-colors cursor-pointer">Recrutement Local</li>
                <li className="hover:text-brand-okoume transition-colors cursor-pointer">Formation Gabonaise</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-brand-laterite">Support</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="hover:text-brand-okoume transition-colors cursor-pointer">Documentation FR</li>
                <li className="hover:text-brand-okoume transition-colors cursor-pointer">Support technique</li>
                <li className="hover:text-brand-okoume transition-colors cursor-pointer">Formation utilisateurs</li>
                <li className="hover:text-brand-okoume transition-colors cursor-pointer">FAQ Gabon</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-brand-laterite">Contact Libreville</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="hover:text-brand-okoume transition-colors">+241 01 XX XX XX</li>
                <li className="hover:text-brand-okoume transition-colors">contact@sme-gabon.com</li>
                <li className="hover:text-brand-okoume transition-colors">Boulevard Triomphal</li>
                <li className="hover:text-brand-okoume transition-colors">Libreville, Gabon</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-brand-ebony/50 mt-8 pt-8 text-center">
            <p className="text-gray-300 text-sm">
              &copy; 2024 SME Conseil & Développement Gabon. 
              <span className="text-brand-okoume"> Solutions RH Made in Africa</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
