import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Newspaper, Building2, Users, Heart, Briefcase, Mail, ExternalLink, Twitter, Youtube, Linkedin, Leaf, Globe, HandHeart, Lightbulb, Settings, Database, Code, Radio } from 'lucide-react';

function AnimatedNumber({ end, duration = 2000, delay = 0 }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0;
      const increment = end / 40;
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 50);
      
      return () => clearInterval(timer);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [end, duration, delay]);

  return <span>{count}</span>;
}

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=800&h=800&fit=crop&q=80",
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&h=800&fit=crop&q=80"
  ];

  const partners = [
    { id: 1, alt: "Logo Partenaire 1" },
    { id: 2, alt: "Logo Partenaire 2" },
    { id: 3, alt: "Logo Partenaire 3" },
    { id: 4, alt: "Logo Partenaire 4" },
    { id: 5, alt: "Logo Partenaire 5" },
    { id: 6, alt: "Logo Partenaire 6" },
    { id: 7, alt: "Logo Partenaire 7" },
    { id: 8, alt: "Logo Partenaire 8" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
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

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-start bg-gray-50 pt-48">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-16">
            {/* Text Content */}
            <div className="flex-1 max-w-2xl pt-12">
              <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-10 leading-tight">
                Le Futur des Médias Locaux{" "}
                <span className="relative whitespace-nowrap">
                  <span className="absolute inset-x-0 -inset-y-4 bg-blue-600/20 -skew-x-12 transform -rotate-2 rounded-lg"></span>
                  <span className="relative">Digitalisés</span>
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 mb-10">
                Groupe Vigilant Médias construit l'avenir des médias en alliant patrimoine éditorial et innovation numérique.
              </p>
              
              {/* Key Numbers */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300 border border-blue-600/30">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    +<AnimatedNumber end={30} />M
                  </div>
                  <div className="text-sm text-gray-800">Lecteurs fidèles chaque mois sur nos plateformes</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300 border border-blue-600/30">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    <AnimatedNumber end={150} delay={500} />+
                  </div>
                  <div className="text-sm text-gray-800">Experts passionnés par l'information</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300 border border-blue-600/30">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    <AnimatedNumber end={1923} delay={1000} />
                  </div>
                  <div className="text-sm text-gray-800">Un siècle d'expertise éditoriale</div>
                </div>
              </div>
            </div>

            {/* Carousel */}
            <div className="flex-1 relative h-[600px] w-full max-w-3xl">
              <div className="absolute inset-0 flex items-center justify-center">
                {images.map((src, index) => {
                  const position = (index - currentImage + images.length) % images.length;
                  const offset = position - Math.floor(images.length / 2);
                  const zIndex = images.length - Math.abs(offset);
                  const rotation = offset * 25;
                  const translateX = offset * 140;
                  const translateY = Math.abs(offset) * 50;
                  const scale = 1 - Math.abs(offset) * 0.1;
                  
                  return (
                    <img
                      key={src}
                      src={src}
                      alt={`Slide ${index + 1}`}
                      className="absolute object-cover rounded-2xl shadow-2xl transition-all duration-700 ease-out"
                      style={{
                        width: `${550 * scale}px`,
                        height: `${650 * scale}px`,
                        transform: `perspective(1000px) rotateY(${rotation}deg) translateX(${translateX}px) translateY(${translateY}px)`,
                        zIndex,
                        opacity: 1 - Math.abs(offset) * 0.2
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Logo Banner */}
      <div className="bg-white py-16 overflow-hidden border-t border-b border-gray-100">
        <div className="relative">
          <div className="flex animate-[scroll_40s_linear_infinite] space-x-16">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-none w-64 h-32 bg-white rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center border border-gray-100"
              >
                <div className="w-52 h-24 bg-gray-50 rounded-lg flex items-center justify-center text-lg font-medium text-gray-400">
                  Logo {partner.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nos Métiers Section */}
      <section id="activities" className="py-20 bg-gradient-to-b from-blue-50 to-white">
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

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold relative inline-block">
                <span className="relative">
                  L'Histoire du Groupe
                  <span className="absolute inset-x-0 inset-y-0 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
                </span>
              </h2>
            </div>

            {/* Introduction Text */}
            <div className="max-w-3xl mx-auto text-center mb-24">
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
      </section>

      {/* Cartographie Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">
            <span className="relative inline-block">
              Cartographie du Groupe
              <span className="absolute inset-x-0 bottom-0 h-3 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
            </span>
          </h2>

          <div className="max-w-7xl mx-auto">
            {/* GROUPE VIGILANT MÉDIAS en haut et centré */}
            <div className="flex justify-center mb-12">
              <div className="bg-blue-800 text-white p-8 rounded-xl shadow-lg w-96">
                <div className="flex flex-col items-center text-center">
                  <Shield className="w-12 h-12 mb-2" />
                  <h3 className="text-2xl font-bold">GROUPE VIGILANT MÉDIAS</h3>
                </div>
              </div>
            </div>
            
            {/* Trois colonnes pour les pôles et entités */}
            <div className="grid grid-cols-3 gap-8">
              {/* Colonne 1: Production de contenus */}
              <div className="flex flex-col space-y-6">
                <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center space-x-4">
                    <Radio className="w-8 h-8" />
                    <h3 className="text-xl font-bold">PRODUCTION DE CONTENUS</h3>
                  </div>
                </div>
                
                <div className="border-2 border-blue-600 bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-bold text-blue-800 mb-2">ACP</h4>
                  <p className="text-sm text-gray-600">Agence de presse spécialisée dans la production de contenus d'actualité</p>
                </div>
                
                <div className="border-2 border-blue-600 bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-bold text-blue-800 mb-2">Studio Vidéo</h4>
                  <p className="text-sm text-gray-600">Production audiovisuelle et formats innovants</p>
                </div>
              </div>
              
              {/* Colonne 2: Marques médias */}
              <div className="flex flex-col space-y-6">
                <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center space-x-4">
                    <Newspaper className="w-8 h-8" />
                    <h3 className="text-xl font-bold">MARQUES MÉDIAS PATRIMONIALES</h3>
                  </div>
                </div>
                
                <div className="border-2 border-blue-600 bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-bold text-blue-800 mb-2">LE JOURNAL DES DÉBATS</h4>
                  <p className="text-sm text-gray-600">Média d'analyse politique et économique</p>
                </div>
                
                <div className="border-2 border-blue-600 bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-bold text-blue-800 mb-2">Le Méridional</h4>
                  <p className="text-sm text-gray-600">Journal régional du Sud de la France</p>
                  <div className="mt-2 pl-4 border-l-2 border-blue-200">
                    <p className="text-xs text-blue-600 font-medium">Projets spéciaux</p>
                  </div>
                </div>
                
                <div className="border-2 border-blue-600 bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-bold text-blue-800 mb-2">NORD MATIN</h4>
                  <p className="text-sm text-gray-600">Quotidien d'information du Nord</p>
                </div>
              </div>
              
              {/* Colonne 3: Conseil en stratégie */}
              <div className="flex flex-col space-y-6">
                <div className="bg-blue-600 text-white p-6 rounded-xl shadow-md">
                  <div className="flex items-center space-x-4">
                    <Settings className="w-8 h-8" />
                    <h3 className="text-xl font-bold">CONSEIL EN STRATÉGIE</h3>
                  </div>
                </div>
                
                <div className="border-2 border-blue-600 bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-lg font-bold text-blue-800 mb-2">AGENCE VIGILANT CONSEIL</h4>
                  <p className="text-sm text-gray-600">Conseil en stratégie de communication et transformation digitale</p>
                </div>
              </div>
            </div>
            
            {/* Légende */}
            <div className="mt-16 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-600 rounded"></div>
                  <span className="text-sm text-gray-600">Pôles principaux</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-blue-600 bg-white rounded"></div>
                  <span className="text-sm text-gray-600">Entités</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-l-2 border-blue-200 bg-white"></div>
                  <span className="text-sm text-gray-600">Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section id="engagement" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Nos Engagements</h2>
            <span className="text-6xl font-black tracking-widest text-green-600 opacity-25">R S E</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="engagement-card group h-[300px]">
              <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 group-hover:opacity-75 transition-opacity"></div>
                <div>
                  <Leaf className="w-12 h-12 text-green-600 mb-6" />
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Environnement</h3>
                  <p className="text-green-700">
                    Engagement pour un impact environnemental positif et une transition écologique responsable.
                  </p>
                </div>
              </div>
            </div>

            <div className="engagement-card group h-[300px]">
              <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 group-hover:opacity-75 transition-opacity"></div>
                <div>
                  <Globe className="w-12 h-12 text-green-600 mb-6" />
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Durabilité</h3>
                  <p className="text-green-700">
                    Développement durable et responsable dans toutes nos activités médias.
                  </p>
                </div>
              </div>
            </div>

            <div className="engagement-card group h-[300px]">
              <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 group-hover:opacity-75 transition-opacity"></div>
                <div>
                  <HandHeart className="w-12 h-12 text-green-600 mb-6" />
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Social</h3>
                  <p className="text-green-700">
                    Actions concrètes pour l'inclusion et l'équité dans le monde des médias.
                  </p>
                </div>
              </div>
            </div>

            <div className="engagement-card group h-[300px]">
              <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-50 -mr-16 -mt-16 group-hover:opacity-75 transition-opacity"></div>
                <div>
                  <Lightbulb className="w-12 h-12 text-green-600 mb-6" />
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Innovation</h3>
                  <p className="text-green-700">
                    Innovation responsable au service de l'information de qualité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nous Rejoindre Section */}
      <section id="careers" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold relative inline-block">
              <span className="relative">
                Nous Rejoindre
                <span className="absolute inset-x-0 inset-y-0 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Rejoignez une équipe passionnée et contribuez à façonner l'avenir des médias locaux
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Pourquoi nous rejoindre */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-10 mb-16 shadow-lg">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Pourquoi nous rejoindre ?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Culture d'entreprise</h4>
                  <p className="text-gray-600">
                    Un environnement de travail stimulant et bienveillant, favorisant l'innovation et le bien-être.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                  <p className="text-gray-600">
                    Participez à la transformation numérique des médias et développez des solutions innovantes.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Développement</h4>
                  <p className="text-gray-600">
                    Des opportunités de formation continue et d'évolution de carrière dans un groupe en pleine croissance.
                  </p>
                </div>
              </div>
            </div>

            {/* Nos offres d'emploi */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Nos offres d'emploi</h3>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Développeur Full Stack</h4>
                      <p className="text-gray-600 mt-1">Paris, France • CDI</p>
                    </div>
                    <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Postuler
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Rédacteur Web SEO</h4>
                      <p className="text-gray-600 mt-1">Lyon, France • CDI</p>
                    </div>
                    <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Postuler
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800">Chef de Projet Digital</h4>
                      <p className="text-gray-600 mt-1">Marseille, France • CDI</p>
                    </div>
                    <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Postuler
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                  Voir toutes nos offres
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>

            {/* Candidature spontanée */}
            <div className="bg-gray-50 rounded-2xl p-10 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Vous ne trouvez pas le poste qui vous correspond ?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                N'hésitez pas à nous envoyer une candidature spontanée. Nous sommes toujours à la recherche de talents passionnés pour rejoindre notre équipe.
              </p>
              <a href="mailto:recrutement@vigilantmedia.fr" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                Envoyer une candidature spontanée
                <Mail className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center">
            {/* Suivez-nous sur */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-8">Suivez-nous<br />sur</h2>
              <div className="flex gap-4 justify-center">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition-colors">
                  <Twitter className="w-6 h-6 text-white" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition-colors">
                  <Youtube className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Contact Email */}
            <div className="text-center mb-12">
              <p className="text-gray-600 mb-2">Pour toute demande professionnelle :</p>
              <a href="mailto:contact@vigilantmedia.fr" className="text-blue-600 hover:text-blue-700 text-lg font-semibold">
                contact@vigilantmedia.fr
              </a>
            </div>

            {/* Footer Links */}
            <div className="flex gap-6 mb-8 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600">Vie privée</a>
              <a href="#" className="hover:text-blue-600">Politique de cookies</a>
              <a href="#" className="hover:text-blue-600">Réserve TDM</a>
              <a href="#" className="hover:text-blue-600">Contacts</a>
              <a href="#" className="hover:text-blue-600">Documents d'entreprise</a>
              <a href="#" className="hover:text-blue-600">Travailler avec nous</a>
            </div>

            {/* Legal Information */}
            <div className="text-center text-sm text-gray-500 space-y-2">
              <p>Numéro de TVA 00906801006</p>
              <p>Copyright © 2022 Vigilant Groupe Éditorial S.A.S</p>
              <p>Par E. Lugaro 15 - 10126 Turin</p>
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-600 max-w-xl text-center">
                Les sites des journaux du groupe Vigilant sont considérés comme des sources d'information fiables et de référence dans leur domaine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;