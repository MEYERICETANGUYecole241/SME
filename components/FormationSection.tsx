"use client";

import { Laptop, School, CloudCog, BadgeCheck, ShieldCheck } from "lucide-react";

export function FormationSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-sahel/5 via-white to-brand-sahel/5 relative overflow-hidden">
      {/* Motifs décoratifs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-12 w-24 h-24 border-2 border-brand-laterite rotate-12" />
        <div className="absolute bottom-16 right-16 w-20 h-20 border-2 border-brand-ebony rotate-45" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark">
            Nos formations RH
          </h2>
          <p className="mt-4 text-brand-slate max-w-2xl mx-auto">
            Nous vous formons à la **digitalisation des ressources humaines**, avec des programmes pratiques et certifiants adaptés aux réalités du Gabon et de l'Afrique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map((formation, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-brand-sahel rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="w-14 h-14 bg-brand-okoume text-white rounded-full flex items-center justify-center mb-4">
                <formation.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brand-ebony mb-2">
                {formation.title}
              </h3>
              <p className="text-brand-slate text-sm">
                {formation.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const formations = [
  {
    icon: Laptop,
    title: "Digitalisation des processus RH",
    description:
      "Apprenez à utiliser des outils numériques pour la gestion des congés, paie, dossiers du personnel, et reporting RH.",
  },
  {
    icon: School,
    title: "Initiation aux SIRH modernes",
    description:
      "Découverte des systèmes d'information RH, cloud RH, logiciels de paie et outils de gestion RH adaptés au Gabon.",
  },
  {
    icon: CloudCog,
    title: "Automatisation RH & conformité",
    description:
      "Optimisez les tâches RH répétitives tout en assurant la conformité aux normes locales (CNSS, impôts, droit du travail).",
  },
  {
    icon: BadgeCheck,
    title: "Certifications RH professionnelles",
    description:
      "Formations certifiantes reconnues à l’échelle nationale et africaine en gestion des ressources humaines.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurité et confidentialité des données RH",
    description:
      "Bonne pratique de gestion numérique des données RH : confidentialité, sauvegarde, RGPD africain.",
  },
];
