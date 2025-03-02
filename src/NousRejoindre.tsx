import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Newspaper, Users, Heart, Lightbulb, Star, Leaf, HandHeart, Database, Code, Building, Radio, Tv, Laptop, ExternalLink, Mail, Briefcase } from 'lucide-react';

function NousRejoindre() {
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
            Nous Rejoindre
            <span className="absolute inset-x-0 inset-y-0 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
          </span>
        </h1>
      </div>
      
      {/* Politique RH Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Notre Politique</h2>
            <span className="text-6xl font-black tracking-widest text-blue-600 opacity-25">RH</span>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              Chez Vigilant Médias, nous plaçons l'humain au cœur de notre stratégie. Notre politique RH 
              vise à créer un environnement de travail épanouissant, favorisant l'innovation, le développement 
              personnel et professionnel, ainsi que le bien-être de chaque collaborateur.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto mb-24">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Diversité et inclusion</h3>
              <p className="text-gray-700 mb-6">
                Nous valorisons la diversité sous toutes ses formes et nous engageons à créer un environnement 
                inclusif où chacun peut s'épanouir, indépendamment de son origine, genre, âge ou orientation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Politique de recrutement non-discriminatoire</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Égalité des chances et de traitement</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Sensibilisation aux biais inconscients</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Formation et développement</h3>
              <p className="text-gray-700 mb-6">
                Nous investissons dans le développement continu des compétences de nos collaborateurs, 
                avec des programmes de formation adaptés aux évolutions du secteur des médias.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Plan de formation personnalisé</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Accompagnement des parcours professionnels</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Mentorat et partage de connaissances</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Bien-être au travail</h3>
              <p className="text-gray-700 mb-6">
                Le bien-être de nos collaborateurs est une priorité. Nous mettons en place des initiatives 
                pour favoriser un équilibre sain entre vie professionnelle et vie personnelle.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Flexibilité des horaires et télétravail</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Espaces de travail conviviaux et ergonomiques</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Programme de prévention du stress et des risques psychosociaux</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Évolution de carrière</h3>
              <p className="text-gray-700 mb-6">
                Nous offrons des perspectives d'évolution claires et des opportunités de mobilité interne 
                au sein de notre groupe en pleine croissance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Entretiens de développement réguliers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Priorité aux recrutements internes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Accompagnement des projets professionnels</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nous Rejoindre Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold relative inline-block">
              <span className="relative">
                Rejoignez Notre Équipe
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
    </div>
  );
}

export default NousRejoindre; 