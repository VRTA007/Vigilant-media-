import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Building2, Users, ChevronDown, ChevronUp, Radio, Tv, Globe, Database, Code, Building, Shield } from 'lucide-react';

function NosActivites() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [currentMeridionalImage, setCurrentMeridionalImage] = useState<number>(0);
  const [currentNordMatinImage, setCurrentNordMatinImage] = useState<number>(0);
  
  const meridionalImages = [
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=800&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&h=400&fit=crop&q=80"
  ];
  
  const nordMatinImages = [
    "https://images.unsplash.com/photo-1557428894-56bcc97113fe?w=800&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1557428894-8c480ed73535?w=800&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1557428894-9c7cd3c5c56d?w=800&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1557428894-6c890d8e0708?w=800&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1557428894-56bcc97113fe?w=800&h=400&fit=crop&q=80",
    "https://images.unsplash.com/photo-1557428894-8c480ed73535?w=800&h=400&fit=crop&q=80"
  ];

  const toggleAccordion = (id: string) => {
    if (openAccordion === id) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(id);
    }
  };
  
  useEffect(() => {
    const meridionalTimer = setInterval(() => {
      setCurrentMeridionalImage((prev) => (prev + 1) % meridionalImages.length);
    }, 2000);
    
    const nordMatinTimer = setInterval(() => {
      setCurrentNordMatinImage((prev) => (prev + 1) % nordMatinImages.length);
    }, 2500);
    
    return () => {
      clearInterval(meridionalTimer);
      clearInterval(nordMatinTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 flex justify-center pt-6">
        <div className="flex bg-white/90 backdrop-blur-sm rounded-full border-2 border-blue-600 p-1.5">
          <Link to="/" className="px-6 py-2 text-black font-bold hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">Page d'accueil</Link>
          <Link to="/qui-sommes-nous" className="px-6 py-2 text-black font-bold hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">Qui sommes-nous</Link>
          <Link to="/nos-activites" className="px-6 py-2 text-black font-bold hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">Nos activités</Link>
          <Link to="/nos-engagements" className="px-6 py-2 text-black font-bold hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">Nos engagements</Link>
          <Link to="/nous-rejoindre" className="px-6 py-2 text-black font-bold hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">Nous rejoindre</Link>
          <Link to="/contact" className="px-6 py-2 text-black font-bold hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">Contact</Link>
        </div>
      </nav>

      {/* Header */}
      <div className="container mx-auto px-6 mb-16 pt-32">
        <h1 className="text-5xl font-bold text-center">
          <span className="relative inline-block">
            Nos activités
            <span className="absolute inset-x-0 inset-y-0 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
          </span>
        </h1>
      </div>
      
      {/* Nos Métiers Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center mb-24">
            <div className="h-2 bg-blue-200 flex-1 max-w-xs"></div>
            <h2 className="text-5xl font-bold text-center mx-8 text-gray-900">Nos Métiers</h2>
            <div className="h-2 bg-blue-200 flex-1 max-w-xs"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group relative p-6 bg-white border-2 border-blue-600 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Newspaper className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Production de contenus</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Création et diffusion de contenus de qualité
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
            
            <div className="group relative p-6 bg-white border-2 border-blue-600 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building2 className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Marques médias patrimoniales</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Transformation numérique des médias historiques
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
            
            <div className="group relative p-6 bg-white border-2 border-blue-600 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Conseil en stratégie</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Accompagnement stratégique et expertise média
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation des Titres de Presse */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="relative inline-block">
              Nos Titres de Presse
              <span className="absolute inset-x-0 bottom-0 h-3 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
            </span>
          </h2>

          <div className="max-w-6xl mx-auto space-y-24">
            {/* Le Méridional */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-10 text-blue-800">Le Méridional</h3>
              
              {/* Bandeau déroulant pour Le Méridional */}
              <div className="w-full overflow-hidden mb-10">
                <div className="flex space-x-4 scroll-animation">
                  {meridionalImages.map((src, index) => (
                    <div key={`meridional-${index}`} className="flex-none w-80 h-48 relative">
                      <img 
                        src={src} 
                        alt={`Le Méridional ${index + 1}`} 
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                    </div>
                  ))}
                  {/* Répéter les images pour un défilement continu */}
                  {meridionalImages.map((src, index) => (
                    <div key={`meridional-repeat-${index}`} className="flex-none w-80 h-48 relative">
                      <img 
                        src={src} 
                        alt={`Le Méridional ${index + 1}`} 
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-200">
                <div className="flex flex-wrap">
                  <button 
                    className="flex-1 py-4 px-6 bg-blue-50 hover:bg-blue-100 transition-colors border-r border-blue-200 font-medium"
                    onClick={() => toggleAccordion('meridional-presentation')}
                  >
                    Présentation
                  </button>
                  <button 
                    className="flex-1 py-4 px-6 bg-blue-50 hover:bg-blue-100 transition-colors border-r border-blue-200 font-medium"
                    onClick={() => toggleAccordion('meridional-editions')}
                  >
                    Éditions
                  </button>
                  <button 
                    className="flex-1 py-4 px-6 bg-blue-50 hover:bg-blue-100 transition-colors border-r border-blue-200 font-medium"
                    onClick={() => toggleAccordion('meridional-diffusion')}
                  >
                    Diffusion
                  </button>
                  <button 
                    className="flex-1 py-4 px-6 bg-blue-50 hover:bg-blue-100 transition-colors font-medium"
                    onClick={() => toggleAccordion('meridional-contact')}
                  >
                    Contact
                  </button>
                </div>
                
                {openAccordion === 'meridional-presentation' && (
                  <div className="p-6 bg-gradient-to-b from-white to-blue-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="aspect-video bg-blue-100 rounded-lg mb-4 overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center bg-blue-600/10">
                            <span className="text-blue-800 font-medium">Image du Méridional</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-4">
                          Fondé en 1944, Le Méridional est un journal régional emblématique du Sud de la France. 
                          Avec son ancrage territorial fort, il offre une couverture complète de l'actualité locale, 
                          nationale et internationale.
                        </p>
                        <p className="text-gray-600">
                          Le journal s'engage à fournir une information de qualité, indépendante et proche des préoccupations 
                          de ses lecteurs dans toute la région méridionale.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {openAccordion === 'meridional-editions' && (
                  <div className="p-6 bg-gradient-to-b from-white to-blue-50">
                    <h4 className="text-xl font-semibold mb-4 text-blue-800">Publications</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Édition quotidienne</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Magazine hebdomadaire</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Éditions spéciales thématiques</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Suppléments saisonniers</span>
                      </li>
                    </ul>
                  </div>
                )}
                
                {openAccordion === 'meridional-diffusion' && (
                  <div className="p-6 bg-gradient-to-b from-white to-blue-50">
                    <h4 className="text-xl font-semibold mb-4 text-blue-800">Diffusion</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Version papier</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Site web</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Application mobile</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Réseaux sociaux</span>
                      </li>
                    </ul>
                  </div>
                )}
                
                {openAccordion === 'meridional-contact' && (
                  <div className="p-6 bg-gradient-to-b from-white to-blue-50">
                    <h4 className="text-xl font-semibold mb-4 text-blue-800">Contact</h4>
                    <p className="text-gray-600 mb-2">
                      <strong>Adresse :</strong> 123 Avenue de la Méditerranée, 13000 Marseille
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Téléphone :</strong> 04 91 XX XX XX
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Email :</strong> contact@lemeridional.fr
                    </p>
                    <p className="text-gray-600">
                      <strong>Site web :</strong> www.lemeridional.fr
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Nord Matin */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-10 text-blue-800">Nord Matin</h3>
              
              {/* Bandeau déroulant pour Nord Matin */}
              <div className="w-full overflow-hidden mb-10">
                <div className="flex space-x-4 scroll-animation-reverse">
                  {nordMatinImages.map((src, index) => (
                    <div key={`nordmatin-${index}`} className="flex-none w-80 h-48 relative">
                      <img 
                        src={src} 
                        alt={`Nord Matin ${index + 1}`} 
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                    </div>
                  ))}
                  {/* Répéter les images pour un défilement continu */}
                  {nordMatinImages.map((src, index) => (
                    <div key={`nordmatin-repeat-${index}`} className="flex-none w-80 h-48 relative">
                      <img 
                        src={src} 
                        alt={`Nord Matin ${index + 1}`} 
                        className="w-full h-full object-cover rounded-lg shadow-md"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-200">
                <div className="flex flex-wrap">
                  <button 
                    className="flex-1 py-4 px-6 bg-blue-50 hover:bg-blue-100 transition-colors border-r border-blue-200 font-medium"
                    onClick={() => toggleAccordion('nordmatin-presentation')}
                  >
                    Présentation
                  </button>
                  <button 
                    className="flex-1 py-4 px-6 bg-blue-50 hover:bg-blue-100 transition-colors border-r border-blue-200 font-medium"
                    onClick={() => toggleAccordion('nordmatin-editions')}
                  >
                    Éditions
                  </button>
                  <button 
                    className="flex-1 py-4 px-6 bg-blue-50 hover:bg-blue-100 transition-colors border-r border-blue-200 font-medium"
                    onClick={() => toggleAccordion('nordmatin-diffusion')}
                  >
                    Diffusion
                  </button>
                  <button 
                    className="flex-1 py-4 px-6 bg-blue-50 hover:bg-blue-100 transition-colors font-medium"
                    onClick={() => toggleAccordion('nordmatin-contact')}
                  >
                    Contact
                  </button>
                </div>
                
                {openAccordion === 'nordmatin-presentation' && (
                  <div className="p-6 bg-gradient-to-b from-white to-blue-50">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="aspect-video bg-blue-100 rounded-lg mb-4 overflow-hidden">
                          <div className="w-full h-full flex items-center justify-center bg-blue-600/10">
                            <span className="text-blue-800 font-medium">Image de Nord Matin</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-4">
                          Nord Matin est un quotidien d'information régional couvrant l'actualité des Hauts-de-France. 
                          Reconnu pour sa proximité avec les lecteurs et son engagement pour les enjeux locaux, 
                          il est un acteur majeur du paysage médiatique du Nord de la France.
                        </p>
                        <p className="text-gray-600">
                          Le journal se distingue par sa couverture approfondie de l'économie régionale et son 
                          attachement aux traditions et à la culture du Nord.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {openAccordion === 'nordmatin-editions' && (
                  <div className="p-6 bg-gradient-to-b from-white to-blue-50">
                    <h4 className="text-xl font-semibold mb-4 text-blue-800">Publications</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Édition quotidienne</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Supplément économique</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Cahier culturel hebdomadaire</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Édition spéciale événements régionaux</span>
                      </li>
                    </ul>
                  </div>
                )}
                
                {openAccordion === 'nordmatin-diffusion' && (
                  <div className="p-6 bg-gradient-to-b from-white to-blue-50">
                    <h4 className="text-xl font-semibold mb-4 text-blue-800">Diffusion</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Version papier</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Site web</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Réseaux sociaux</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        <span>Newsletter quotidienne</span>
                      </li>
                    </ul>
                  </div>
                )}
                
                {openAccordion === 'nordmatin-contact' && (
                  <div className="p-6 bg-gradient-to-b from-white to-blue-50">
                    <h4 className="text-xl font-semibold mb-4 text-blue-800">Contact</h4>
                    <p className="text-gray-600 mb-2">
                      <strong>Adresse :</strong> 45 Rue du Nord, 59000 Lille
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Téléphone :</strong> 03 20 XX XX XX
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Email :</strong> contact@nordmatin.fr
                    </p>
                    <p className="text-gray-600">
                      <strong>Site web :</strong> www.nordmatin.fr
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Espace Technologique pour les Autres Entités */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30 -ml-48 -mb-48"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="relative inline-block">
              Notre Écosystème Média
              <span className="absolute inset-x-0 bottom-0 h-3 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
            </span>
          </h2>

          <p className="text-xl text-center text-gray-600 max-w-4xl mx-auto mb-16">
            Découvrez les différentes entités qui composent le groupe Vigilant Médias. 
            Cliquez sur chaque élément pour accéder à leur site web.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* ACP */}
            <div className="tech-entity-card group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:rotate-1 duration-500 border border-blue-200 h-full flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Newspaper className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-blue-800">ACP</h3>
                <p className="text-gray-600 text-center text-sm">
                  Agence de presse spécialisée
                </p>
              </div>
            </div>

            {/* Studio Vidéo */}
            <div className="tech-entity-card group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:rotate-1 duration-500 border border-blue-200 h-full flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Tv className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-blue-800">Studio Vidéo</h3>
                <p className="text-gray-600 text-center text-sm">
                  Production audiovisuelle
                </p>
              </div>
            </div>

            {/* Le Journal des Débats */}
            <div className="tech-entity-card group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:rotate-1 duration-500 border border-blue-200 h-full flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Newspaper className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-blue-800">Journal des Débats</h3>
                <p className="text-gray-600 text-center text-sm">
                  Média d'analyse politique
                </p>
              </div>
            </div>

            {/* Radio Vigilant */}
            <div className="tech-entity-card group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:rotate-1 duration-500 border border-blue-200 h-full flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Radio className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-blue-800">Radio Vigilant</h3>
                <p className="text-gray-600 text-center text-sm">
                  Station de radio
                </p>
              </div>
            </div>

            {/* Vigilant Digital */}
            <div className="tech-entity-card group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:rotate-1 duration-500 border border-blue-200 h-full flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-blue-800">Vigilant Digital</h3>
                <p className="text-gray-600 text-center text-sm">
                  Plateforme numérique
                </p>
              </div>
            </div>

            {/* Vigilant Data */}
            <div className="tech-entity-card group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:rotate-1 duration-500 border border-blue-200 h-full flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-blue-800">Vigilant Data</h3>
                <p className="text-gray-600 text-center text-sm">
                  Analyse de données
                </p>
              </div>
            </div>

            {/* Vigilant Tech */}
            <div className="tech-entity-card group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:rotate-1 duration-500 border border-blue-200 h-full flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-blue-800">Vigilant Tech</h3>
                <p className="text-gray-600 text-center text-sm">
                  Solutions technologiques
                </p>
              </div>
            </div>

            {/* Agence Vigilant Conseil */}
            <div className="tech-entity-card group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:rotate-1 duration-500 border border-blue-200 h-full flex flex-col items-center justify-center cursor-pointer">
                <div className="bg-blue-600 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2 text-blue-800">Vigilant Conseil</h3>
                <p className="text-gray-600 text-center text-sm">
                  Conseil en stratégie
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 italic">
              Les liens vers les sites web des entités seront intégrés prochainement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NosActivites; 