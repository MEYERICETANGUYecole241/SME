'use client'

import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Vidéo en fond */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/i.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéo.
      </video>

      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-1 gap-12 items-center min-h-screen">
          {/* Carte centrale semi-transparente */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl p-10 md:p-16 max-w-4xl mx-auto">
            <div className="text-white space-y-10">
              {/* Logo + slogan */}
              <div className="flex flex-col items-start space-y-1">
                <Image
                  src="/logo.png"
                  alt="Logo SME Conseil & Développement"
                  width={600}
                  height={600}
                  className="h-auto"
                />

                <div className="flex flex-col items-center text-center space-y-2">
                  {/* Badge slogan */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <span className="text-sm font-medium">
                      Conseil & Développement
                    </span>
                  </div>

                  {/* Titre + description */}
                  <div className="space-y-4">
                    <h2 className="text-xl lg:text-6xl font-bold leading-tight">
                      Révolutionnez vos 
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-400 to-blue-900">
                        processus RH au Gabon
                      </span>
                    </h2>

                  <p className="text-lg lg:text-xl italic text-white-100">
                  Plateforme gabonaise de digitalisation RH. Optimisez la gestion de vos talents avec des solutions adaptées au contexte africain moderne.
                  </p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Flèche incitative vers le bas */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Découvrez plus</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
