import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Newspaper, Users, Heart, Lightbulb, Star, Leaf, HandHeart, Database, Code, Building, Radio, Tv, Laptop } from 'lucide-react';

function QuiSommesNous() {
  const [activeEntity, setActiveEntity] = useState<number | null>(null);

  const toggleEntity = (index: number) => {
    setActiveEntity(activeEntity === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 flex justify-center pt-6">
        <div className="flex bg-white/90 backdrop-blur-sm rounded-full border-2 border-blue-600 p-1.5">
          <Link to="/" className="px-6 py-2 text-black font-bold hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">Page d'accueil</Link>
          <Link to="/qui-sommes-nous" className="px-6 py-2 text-black font-bold hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">Qui sommes-nous</Link>
          <Link to="/nos-activites" className="px-6 py-2 text-black font-bold hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">Nos activités</Link>
          <a href="/#engagement" className="px-6 py-2 text-black font-bold hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">Nos engagements</a>
          <a href="/#careers" className="px-6 py-2 text-black font-bold hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">Nous rejoindre</a>
          <a href="/#contact" className="px-6 py-2 text-black font-bold hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">Contact</a>
        </div>
      </nav>

      {/* Header */}
      <div className="container mx-auto px-6 mb-16 pt-32">
        <h1 className="text-5xl font-bold text-center">
          <span className="relative inline-block">
            Qui sommes-nous
            <span className="absolute inset-x-0 inset-y-0 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
          </span>
        </h1>
      </div>

      {/* 1. Section "Le Groupe" - Média Full Stack */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -mr-48 -mt-48 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 -ml-48 -mb-48 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-24">
              <h2 className="text-4xl font-bold text-center mb-12 transform transition-all duration-700 hover:scale-105">
                <span className="relative inline-block">
                  Le Groupe - Média Full Stack
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
                  <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-600 -skew-x-12 transform -rotate-2 w-0 group-hover:w-full transition-all duration-700"></span>
                </span>
              </h2>

              <div className="max-w-4xl mx-auto text-center mb-16 transform transition-all duration-500 hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 p-8 rounded-2xl shadow-lg relative overflow-hidden border border-blue-200">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>
                  <p className="text-xl text-gray-700 leading-relaxed relative z-10">
                    Vigilant Médias se positionne comme un acteur <span className="font-bold text-blue-700">innovant</span> dans le paysage médiatique en adoptant une approche <span className="font-bold text-blue-700">"full stack"</span>. Notre expertise couvre l'ensemble de la chaîne de valeur, de l'infrastructure technologique à la production de contenus de qualité.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {/* Infrastructure */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-4 hover:rotate-1 duration-500 border border-blue-200 group">
                  <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Database className="w-8 h-8 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-blue-800 group-hover:text-blue-600 transition-colors">Infrastructure</h3>
                  <p className="text-gray-700 text-center group-hover:text-gray-900 transition-colors">
                    Plateformes technologiques, architecture cloud et systèmes de données permettant une diffusion optimale de l'information.
                  </p>
                </div>

                {/* Développement */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-4 hover:rotate-1 duration-500 border border-blue-200 group">
                  <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-8 h-8 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-blue-800 group-hover:text-blue-600 transition-colors">Développement</h3>
                  <p className="text-gray-700 text-center group-hover:text-gray-900 transition-colors">
                    Solutions digitales, applications web/mobile et interfaces utilisateur conçues pour une expérience immersive et intuitive.
                  </p>
                </div>

                {/* Contenu */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-4 hover:rotate-1 duration-500 border border-blue-200 group">
                  <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <Newspaper className="w-8 h-8 group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4 text-blue-800 group-hover:text-blue-600 transition-colors">Contenu</h3>
                  <p className="text-gray-700 text-center group-hover:text-gray-900 transition-colors">
                    Production éditoriale, formats innovants et stratégies de distribution adaptées aux nouveaux modes de consommation de l'information.
                  </p>
                </div>
              </div>

              {/* Accordéon pour les entités du groupe - REMPLACÉ PAR UNE NOUVELLE PRÉSENTATION */}
              <div className="max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold mb-16 text-center relative">
                  <span className="relative inline-block">
                    Nos entités
                    <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-600/50 transform"></span>
                  </span>
                </h3>
                
                {/* Nouvelle présentation visuelle des entités */}
                <div className="mb-20">
                  {/* Vigilant Média Group */}
                  <div className="relative mb-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 rounded-3xl transform rotate-1 scale-105 -z-10"></div>
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-blue-200">
                      <div className="flex flex-col md:flex-row">
                        {/* Partie gauche - Logo et titre */}
                        <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-600 to-blue-700 p-8 flex flex-col items-center justify-center text-white">
                          <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                            <Shield className="w-12 h-12 text-white" />
                          </div>
                          <h4 className="text-2xl font-bold text-center mb-4">Vigilant Média Group</h4>
                          <div className="h-1 w-16 bg-white/50 rounded-full mb-4"></div>
                          <p className="text-white/80 text-center text-sm">
                            Entité principale du groupe
                          </p>
                        </div>
                        
                        {/* Partie droite - Description et logos */}
                        <div className="w-full md:w-2/3 p-8">
                          <p className="text-gray-700 mb-8 text-lg">
                            Entité principale regroupant l'ensemble des activités médias du groupe, avec une vision stratégique globale et une expertise reconnue dans le secteur.
                          </p>
                          
                          <h5 className="text-sm font-semibold text-blue-600 mb-6 uppercase tracking-wider">Nos marques</h5>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="group">
                              <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-center h-20 border border-blue-100 group-hover:border-blue-300 group-hover:shadow-md transition-all transform group-hover:-translate-y-1 duration-300">
                                <Newspaper className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-500">Presse</p>
                            </div>
                            <div className="group">
                              <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-center h-20 border border-blue-100 group-hover:border-blue-300 group-hover:shadow-md transition-all transform group-hover:-translate-y-1 duration-300">
                                <Radio className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-500">Radio</p>
                            </div>
                            <div className="group">
                              <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-center h-20 border border-blue-100 group-hover:border-blue-300 group-hover:shadow-md transition-all transform group-hover:-translate-y-1 duration-300">
                                <Tv className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-500">Télévision</p>
                            </div>
                            <div className="group">
                              <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-center h-20 border border-blue-100 group-hover:border-blue-300 group-hover:shadow-md transition-all transform group-hover:-translate-y-1 duration-300">
                                <Building className="w-8 h-8 text-blue-500 group-hover:scale-110 transition-transform" />
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-500">Édition</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Vigilant Tech */}
                  <div className="relative mb-24">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-blue-50 rounded-3xl transform -rotate-1 scale-105 -z-10"></div>
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-indigo-200">
                      <div className="flex flex-col md:flex-row">
                        {/* Partie droite - Description et logos */}
                        <div className="w-full md:w-2/3 p-8 order-2 md:order-1">
                          <p className="text-gray-700 mb-8 text-lg">
                            Division technologique dédiée au développement des plateformes digitales, à l'innovation technique et à l'infrastructure cloud sécurisée.
                          </p>
                          
                          <h5 className="text-sm font-semibold text-indigo-600 mb-6 uppercase tracking-wider">Nos solutions</h5>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="group">
                              <div className="bg-indigo-50 rounded-lg p-4 flex items-center justify-center h-20 border border-indigo-100 group-hover:border-indigo-300 group-hover:shadow-md transition-all transform group-hover:-translate-y-1 duration-300">
                                <Code className="w-8 h-8 text-indigo-500 group-hover:scale-110 transition-transform" />
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-500">Développement</p>
                            </div>
                            <div className="group">
                              <div className="bg-indigo-50 rounded-lg p-4 flex items-center justify-center h-20 border border-indigo-100 group-hover:border-indigo-300 group-hover:shadow-md transition-all transform group-hover:-translate-y-1 duration-300">
                                <Laptop className="w-8 h-8 text-indigo-500 group-hover:scale-110 transition-transform" />
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-500">Applications</p>
                            </div>
                            <div className="group">
                              <div className="bg-indigo-50 rounded-lg p-4 flex items-center justify-center h-20 border border-indigo-100 group-hover:border-indigo-300 group-hover:shadow-md transition-all transform group-hover:-translate-y-1 duration-300">
                                <Database className="w-8 h-8 text-indigo-500 group-hover:scale-110 transition-transform" />
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-500">Cloud</p>
                            </div>
                            <div className="group">
                              <div className="bg-indigo-50 rounded-lg p-4 flex items-center justify-center h-20 border border-indigo-100 group-hover:border-indigo-300 group-hover:shadow-md transition-all transform group-hover:-translate-y-1 duration-300">
                                <Shield className="w-8 h-8 text-indigo-500 group-hover:scale-110 transition-transform" />
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-500">Sécurité</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Partie gauche - Logo et titre */}
                        <div className="w-full md:w-1/3 bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 flex flex-col items-center justify-center text-white order-1 md:order-2">
                          <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                            <Database className="w-12 h-12 text-white" />
                          </div>
                          <h4 className="text-2xl font-bold text-center mb-4">Vigilant Tech</h4>
                          <div className="h-1 w-16 bg-white/50 rounded-full mb-4"></div>
                          <p className="text-white/80 text-center text-sm">
                            Division technologique
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Vigilant Content Studio */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 to-blue-50 rounded-3xl transform rotate-1 scale-105 -z-10"></div>
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-cyan-200">
                      <div className="flex flex-col md:flex-row">
                        {/* Partie gauche - Logo et titre */}
                        <div className="w-full md:w-1/3 bg-gradient-to-br from-cyan-600 to-cyan-700 p-8 flex flex-col items-center justify-center text-white">
                          <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                            <Newspaper className="w-12 h-12 text-white" />
                          </div>
                          <h4 className="text-2xl font-bold text-center mb-4">Vigilant Content Studio</h4>
                          <div className="h-1 w-16 bg-white/50 rounded-full mb-4"></div>
                          <p className="text-white/80 text-center text-sm">
                            Studio de création
                          </p>
                        </div>
                        
                        {/* Partie droite - Description et logos */}
                        <div className="w-full md:w-2/3 p-8">
                          <p className="text-gray-700 mb-8 text-lg">
                            Studio de création de contenus multiformats pour tous les canaux de diffusion, alliant créativité et expertise éditoriale.
                          </p>
                          
                          <h5 className="text-sm font-semibold text-cyan-600 mb-6 uppercase tracking-wider">Nos productions</h5>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="group">
                              <div className="bg-cyan-50 rounded-lg p-4 flex items-center justify-center h-20 border border-cyan-100 group-hover:border-cyan-300 group-hover:shadow-md transition-all transform group-hover:-translate-y-1 duration-300">
                                <Tv className="w-8 h-8 text-cyan-500 group-hover:scale-110 transition-transform" />
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-500">Émissions</p>
                            </div>
                            <div className="group">
                              <div className="bg-cyan-50 rounded-lg p-4 flex items-center justify-center h-20 border border-cyan-100 group-hover:border-cyan-300 group-hover:shadow-md transition-all transform group-hover:-translate-y-1 duration-300">
                                <Radio className="w-8 h-8 text-cyan-500 group-hover:scale-110 transition-transform" />
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-500">Podcasts</p>
                            </div>
                            <div className="group">
                              <div className="bg-cyan-50 rounded-lg p-4 flex items-center justify-center h-20 border border-cyan-100 group-hover:border-cyan-300 group-hover:shadow-md transition-all transform group-hover:-translate-y-1 duration-300">
                                <Newspaper className="w-8 h-8 text-cyan-500 group-hover:scale-110 transition-transform" />
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-500">Articles</p>
                            </div>
                            <div className="group">
                              <div className="bg-cyan-50 rounded-lg p-4 flex items-center justify-center h-20 border border-cyan-100 group-hover:border-cyan-300 group-hover:shadow-md transition-all transform group-hover:-translate-y-1 duration-300">
                                <Laptop className="w-8 h-8 text-cyan-500 group-hover:scale-110 transition-transform" />
                              </div>
                              <p className="text-xs text-center mt-2 text-gray-500">Digital</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section "Notre Histoire" */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="relative inline-block">
                  Notre Histoire
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
                </span>
              </h2>

              <div className="max-w-4xl mx-auto text-center mb-16">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 -mr-32 -mt-32"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 -ml-32 -mb-32"></div>
                  <p className="text-xl text-gray-700 leading-relaxed relative z-10">
                    Depuis sa création en 1944, le Groupe Vigilant Médias n'a cessé d'évoluer et d'innover, tout en restant fidèle à ses valeurs fondamentales. Notre histoire est marquée par une constante adaptation aux mutations du paysage médiatique, faisant de nous aujourd'hui un acteur majeur de la transformation numérique de l'information locale.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600/20"></div>

                {/* Timeline items */}
                <div className="space-y-20">
                  <div className="relative flex items-center justify-between">
                    <div className="w-5/12 pr-8 text-right">
                      <h3 className="text-4xl font-bold text-blue-600">1944</h3>
                      <p className="mt-2 text-xl text-gray-600">Création du journal <span className="font-bold">Le Méridional</span>, fondé sur des valeurs d'indépendance et d'engagement local.</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="w-5/12 pl-8"></div>
                  </div>

                  <div className="relative flex items-center justify-between">
                    <div className="w-5/12 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="w-5/12 pl-8">
                      <h3 className="text-4xl font-bold text-blue-600">1990</h3>
                      <p className="mt-2 text-xl text-gray-600">Modernisation des infrastructures et <span className="font-bold">début de la transformation numérique</span>.</p>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-between">
                    <div className="w-5/12 pr-8 text-right">
                      <h3 className="text-4xl font-bold text-blue-600">2010</h3>
                      <p className="mt-2 text-xl text-gray-600">Lancement de la <span className="font-bold">stratégie digitale</span> et diversification des activités médias.</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="w-5/12 pl-8"></div>
                  </div>

                  <div className="relative flex items-center justify-between">
                    <div className="w-5/12 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="w-5/12 pl-8">
                      <h3 className="text-4xl font-bold text-blue-600">2024</h3>
                      <p className="mt-2 text-xl text-gray-600">Création de <span className="font-bold">Vigilant Media</span>, marquant une nouvelle ère dans l'histoire du groupe.</p>
                    </div>
                  </div>

                  {/* Arrow at the bottom */}
                  <div className="flex justify-center mt-8">
                    <div className="w-0 h-0 
                      border-l-[20px] border-l-transparent
                      border-t-[30px] border-t-blue-600
                      border-r-[20px] border-r-transparent">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Section "Nos Valeurs" */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="relative inline-block">
                  Nos Valeurs
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Valeur 1: Innovation */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex justify-center">
                    <Lightbulb className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-3">Innovation</h3>
                    <p className="text-gray-700">
                      Nous cultivons un esprit d'innovation constante, en explorant de nouvelles technologies et formats pour réinventer l'expérience médiatique.
                    </p>
                  </div>
                </div>

                {/* Valeur 2: Indépendance */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex justify-center">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-3">Indépendance</h3>
                    <p className="text-gray-700">
                      Nous défendons une information libre et indépendante, garantissant l'intégrité éditoriale et la diversité des points de vue.
                    </p>
                  </div>
                </div>

                {/* Valeur 3: Proximité */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-3">Proximité</h3>
                    <p className="text-gray-700">
                      Nous maintenons un lien fort avec nos communautés locales, en étant à l'écoute de leurs besoins et en valorisant leurs initiatives.
                    </p>
                  </div>
                </div>

                {/* Valeur 4: Excellence */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex justify-center">
                    <Star className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-3">Excellence</h3>
                    <p className="text-gray-700">
                      Nous visons l'excellence dans tous nos contenus et services, avec une exigence constante de qualité et de pertinence.
                    </p>
                  </div>
                </div>

                {/* Valeur 5: Responsabilité */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex justify-center">
                    <Leaf className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-3">Responsabilité</h3>
                    <p className="text-gray-700">
                      Nous assumons notre responsabilité sociétale et environnementale, en contribuant positivement aux enjeux contemporains.
                    </p>
                  </div>
                </div>

                {/* Valeur 6: Collaboration */}
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 duration-300 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex justify-center">
                    <HandHeart className="w-12 h-12 text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-3">Collaboration</h3>
                    <p className="text-gray-700">
                      Nous favorisons la collaboration et le partage de connaissances, tant en interne qu'avec nos partenaires et notre écosystème.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section "Gouvernance" */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12">
                <span className="relative inline-block">
                  Gouvernance
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
                </span>
              </h2>

              <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-xl text-gray-700">
                  Notre équipe de direction combine expertise médiatique et vision stratégique pour guider le groupe vers l'avenir.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
                {/* Membre 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 mb-6 shadow-md">
                    ML
                  </div>
                  <h4 className="text-xl font-bold mb-2">Marie Lefort</h4>
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Présidente Directrice Générale
                  </div>
                  <p className="text-gray-600 text-center">
                    Visionnaire et stratège, elle dirige le groupe avec une expertise reconnue dans la transformation digitale des médias.
                  </p>
                </div>

                {/* Membre 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 mb-6 shadow-md">
                    TD
                  </div>
                  <h4 className="text-xl font-bold mb-2">Thomas Durand</h4>
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Directeur Général Adjoint
                  </div>
                  <p className="text-gray-600 text-center">
                    Expert en développement commercial et partenariats stratégiques, il supervise la croissance et l'expansion du groupe.
                  </p>
                </div>

                {/* Membre 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 mb-6 shadow-md">
                    SB
                  </div>
                  <h4 className="text-xl font-bold mb-2">Sophie Blanc</h4>
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Directrice Éditoriale
                  </div>
                  <p className="text-gray-600 text-center">
                    Journaliste de renom, elle garantit l'excellence et l'indépendance éditoriale de l'ensemble des publications du groupe.
                  </p>
                </div>

                {/* Membre 4 */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 mb-6 shadow-md">
                    RM
                  </div>
                  <h4 className="text-xl font-bold mb-2">Rémi Martin</h4>
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Directeur Technique
                  </div>
                  <p className="text-gray-600 text-center">
                    Ingénieur et innovateur, il pilote la stratégie technologique et les infrastructures digitales du groupe.
                  </p>
                </div>

                {/* Membre 5 */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 mb-6 shadow-md">
                    CL
                  </div>
                  <h4 className="text-xl font-bold mb-2">Claire Legrand</h4>
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Directrice Financière
                  </div>
                  <p className="text-gray-600 text-center">
                    Experte en finance des médias, elle assure la solidité financière et la durabilité économique du groupe.
                  </p>
                </div>

                {/* Membre 6 */}
                <div className="flex flex-col items-center">
                  <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center text-3xl font-bold text-blue-600 mb-6 shadow-md">
                    AP
                  </div>
                  <h4 className="text-xl font-bold mb-2">Alexandre Petit</h4>
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    Directeur de l'Innovation
                  </div>
                  <p className="text-gray-600 text-center">
                    Visionnaire créatif, il explore les nouvelles technologies et formats pour façonner l'avenir des médias du groupe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default QuiSommesNous; 