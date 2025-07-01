import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/footer";
import { Navigation } from '@/components/navigation'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SME Conseil & Développement - Plateforme RH Digitale",
  description: "Plateforme numérique RH complète pour la digitalisation des processus RH : gestion des congés, recrutement, formation en ligne et espace client.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
        <body className={inter.className}>
            <Navigation />
          {children}
          <Toaster />
        <Footer/>
         </body>
    </html>
  );
}