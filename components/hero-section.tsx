"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Users, TrendingUp, Shield, Star, Mail, Phone } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  console.log("HeroSection component rendered");

  return (
    <section className="relative pt-24 pb-20 bg-gradient-to-br from-brand-sahel via-white to-brand-sahel/50 overflow-hidden">
      {/* Motif géométrique gabonais en arrière-plan */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-brand-ebony rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-brand-okoume rotate-12"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-brand-laterite rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-laterite/10 text-brand-laterite px-4 py-2 rounded-full text-sm font-medium">
                <Star className="h-4 w-4" />
                SME Conseil & Développement
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-brand-dark leading-tight">
                Former. Structurer.{' '}
                <span className="text-brand-ebony">Élever les organisations</span>
              </h1>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                'Accompagnement personnalisé en gestion RH',
                'Formation certifiante aux normes internationales',
                'Digitalisation des processus RH locales',
                'Support technique et juridique local'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-brand-laterite flex-shrink-0" />
                  <span className="text-brand-dark">{feature}</span>
                </div>
              ))}
            </div>

            {/* Founder Info */}
            <div className="mt-6 p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-brand-sahel/30 shadow-sm">
              <p className="text-sm text-brand-dark">
                <strong>Epiphane Sitou Moukeytou</strong>, Fondateur – Consultant stratégique RH
              </p>
              <p className="text-xs text-brand-slate mt-1">BP 2218 – Ambowe, Libreville, Gabon</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Link href="/contact" passHref>
                <Button asChild className="px-9 py-6 text-lg">
                  <a className="text-brand-slate hover:text-brand-ebony transition-colors duration-200 font-medium">
                    Contactez-nous
                  </a>
                </Button>
              </Link>

         <Link
  href="https://wa.me/241077153846?text=Bonjour%20je%20souhaite%20parler%20à%20un%20expert%20de%20SME%20Conseil%20et%20Développement"
  target="_blank"
  rel="noopener noreferrer"
  passHref
>
  <Button variant="outline" className="px-9 py-6 text-lg border-brand-ebony text-brand-ebony">
    parler à un expert
  </Button>
</Link>


            </div>
          </div>

          {/* Right Column - Hero Image + Stats */}
          <div className="relative">
            {/* Image principale - Bureau moderne gabonais */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/o.jpeg"
                alt="Équipe professionnelle africaine en collaboration"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent"></div>

              {/* Badge de confiance sur l'image */}
              <div className="absolute -top-6 -left-10 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-laterite rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-brand-dark">Gabonais</div>
                    <div className="text-xs text-brand-slate">Solution locale, impact global</div>
                  </div>
                </div>
              </div>

              {/* Statistiques flottantes */}
              <div className="absolute -top-10 -right-10 bg-white rounded-xl shadow-xl p-6 border border-brand-sahel">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="h-8 w-8 text-brand-ebony" />
                  <span className="text-brand-laterite text-sm font-medium">↗ +60%</span>
                </div>
                <div className="text-2xl font-bold text-brand-dark">1 500+</div>
                <div className="text-brand-slate text-sm">Clients satisfaits</div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-brand-sahel">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-8 w-8 text-brand-okoume" />
                  <span className="text-brand-laterite text-sm font-medium">↗ +75%</span>
                </div>
                <div className="text-2xl font-bold text-brand-dark">98%</div>
                <div className="text-brand-slate text-sm">Taux de satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}