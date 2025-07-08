"use client";

import { Briefcase, Settings, FileText, Laptop, Users2 } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Motifs géométriques décoratifs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-brand-sahel rotate-45" />
        <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-brand-ebony rotate-12" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark">
            Nos services
          </h2>
          <p className="mt-4 text-brand-slate max-w-2xl mx-auto">
            SME Conseil & Développement propose des solutions sur mesure pour renforcer la performance humaine et organisationnelle de votre entreprise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-brand-sahel/10 rounded-xl border border-brand-sahel shadow-sm hover:shadow-md transition duration-300"
            >
              <div className="w-14 h-14 bg-brand-laterite text-white rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-brand-ebony mb-2">{service.title}</h3>
              <p className="text-brand-slate text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Briefcase,
    title: "Conseil RH stratégique",
    description:
      "Audit RH, élaboration de politiques RH, gestion des talents et planification des effectifs.",
  },
  {
    icon: Settings,
    title: "Digitalisation RH",
    description:
      "Mise en place de solutions numériques de gestion des ressources humaines, adaptées au contexte local.",
  },
  {
    icon: FileText,
    title: "Conformité & Droit social",
    description:
      "Accompagnement dans le respect du droit du travail gabonais, des obligations CNSS et fiscales.",
  },
  {
    icon: Laptop,
    title: "Formation & certification",
    description:
      "Formations professionnelles en management RH, gestion administrative et leadership organisationnel.",
  },
  {
    icon: Users2,
    title: "Recrutement & intégration",
    description:
      "Processus complet de recrutement, sélection de profils qualifiés et intégration efficace.",
  },
  {
    icon: Settings,
    title: "Externalisation RH",
    description:
      "Gestion RH partagée pour les PME/ONG : contrats, paie, congés, absences, suivi réglementaire.",
  },
];
