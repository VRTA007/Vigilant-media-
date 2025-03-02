import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Globe, HandHeart, Lightbulb, Shield, Recycle, TreePine, Building, Users, Heart } from 'lucide-react';

function NosEngagements() {
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
            Nos Engagements
            <span className="absolute inset-x-0 inset-y-0 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
          </span>
        </h1>
      </div>
      
      {/* Introduction RSE */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center gap-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Notre Démarche RSE</h2>
            <span className="text-6xl font-black tracking-widest text-green-600 opacity-25">R S E</span>
          </div>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              Chez Vigilant Médias, nous sommes convaincus que notre rôle va au-delà de l'information. 
              Nous nous engageons à avoir un impact positif sur la société et l'environnement à travers 
              une démarche RSE (Responsabilité Sociétale des Entreprises) ambitieuse et concrète.
            </p>
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

      {/* Environnement Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="relative inline-block">
              Environnement
              <span className="absolute inset-x-0 bottom-0 h-3 bg-green-600/20 -skew-x-12 transform -rotate-2"></span>
            </span>
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <div className="aspect-video bg-green-100 rounded-2xl overflow-hidden shadow-lg">
                  <div className="w-full h-full flex items-center justify-center">
                    <TreePine className="w-24 h-24 text-green-600 opacity-50" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-6">Réduction de notre empreinte carbone</h3>
                <p className="text-gray-700 mb-6">
                  Nous avons mis en place une stratégie ambitieuse pour réduire notre empreinte carbone de 50% d'ici 2030. 
                  Cette démarche inclut l'optimisation de nos infrastructures numériques, la réduction de notre consommation 
                  d'énergie et la compensation de nos émissions résiduelles.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Utilisation d'énergies renouvelables pour nos bureaux et data centers</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Optimisation de l'efficacité énergétique de nos plateformes numériques</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Politique de mobilité durable pour nos collaborateurs</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Économie circulaire</h3>
                <p className="text-gray-700 mb-6">
                  Nous appliquons les principes de l'économie circulaire à l'ensemble de nos activités, 
                  en minimisant les déchets et en maximisant la réutilisation et le recyclage des ressources.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Dématérialisation progressive de nos publications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Utilisation de papier recyclé et certifié pour nos éditions imprimées</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Gestion responsable des équipements électroniques</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-video bg-green-100 rounded-2xl overflow-hidden shadow-lg">
                  <div className="w-full h-full flex items-center justify-center">
                    <Recycle className="w-24 h-24 text-green-600 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="relative inline-block">
              Engagement Social
              <span className="absolute inset-x-0 bottom-0 h-3 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
            </span>
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <div className="aspect-video bg-blue-100 rounded-2xl overflow-hidden shadow-lg">
                  <div className="w-full h-full flex items-center justify-center">
                    <Users className="w-24 h-24 text-blue-600 opacity-50" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Diversité et inclusion</h3>
                <p className="text-gray-700 mb-6">
                  Nous nous engageons à promouvoir la diversité et l'inclusion au sein de notre groupe et dans 
                  l'ensemble du secteur des médias. Nous croyons que la diversité des perspectives enrichit notre 
                  couverture de l'actualité et renforce notre capacité à servir tous les publics.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Programme de mentorat pour les jeunes issus de milieux défavorisés</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Politique de recrutement inclusive et non-discriminatoire</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Formation continue sur les enjeux de diversité et d'inclusion</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">Engagement communautaire</h3>
                <p className="text-gray-700 mb-6">
                  Nous soutenons activement les communautés locales dans lesquelles nous opérons, à travers 
                  des partenariats, du mécénat et des initiatives de bénévolat.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Programme "Médias pour Tous" d'éducation aux médias dans les écoles</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Soutien aux associations locales et aux initiatives citoyennes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Journées de bénévolat pour nos collaborateurs</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-video bg-blue-100 rounded-2xl overflow-hidden shadow-lg">
                  <div className="w-full h-full flex items-center justify-center">
                    <Heart className="w-24 h-24 text-blue-600 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="relative inline-block">
              Innovation Responsable
              <span className="absolute inset-x-0 bottom-0 h-3 bg-purple-600/20 -skew-x-12 transform -rotate-2"></span>
            </span>
          </h2>

          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-700 leading-relaxed">
              Nous développons des solutions innovantes qui répondent aux défis sociétaux et environnementaux, 
              tout en maintenant notre engagement envers une information de qualité et accessible à tous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">Médias inclusifs</h3>
              <p className="text-gray-700">
                Développement de formats accessibles pour tous les publics, y compris les personnes en situation de handicap.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">Éthique numérique</h3>
              <p className="text-gray-700">
                Utilisation responsable des données et des algorithmes, dans le respect de la vie privée et de la transparence.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">Lutte contre la désinformation</h3>
              <p className="text-gray-700">
                Initiatives pour promouvoir l'information vérifiée et lutter contre les fake news.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Charte RSE */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="relative inline-block">
              Notre Charte RSE
              <span className="absolute inset-x-0 bottom-0 h-3 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
            </span>
          </h2>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <p className="text-gray-700 mb-8 text-center italic">
              "Chez Vigilant Médias, nous nous engageons à exercer nos activités de manière responsable, 
              en tenant compte de leur impact sur la société et l'environnement."
            </p>
            
            <div className="space-y-6">
              <div className="p-4 border-l-4 border-blue-600 bg-blue-50">
                <h3 className="text-lg font-bold text-blue-800 mb-2">Responsabilité éditoriale</h3>
                <p className="text-gray-700">
                  Nous nous engageons à fournir une information de qualité, vérifiée et équilibrée, 
                  dans le respect de l'éthique journalistique et de la diversité des opinions.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-green-600 bg-green-50">
                <h3 className="text-lg font-bold text-green-800 mb-2">Responsabilité environnementale</h3>
                <p className="text-gray-700">
                  Nous nous engageons à réduire notre empreinte écologique et à promouvoir les bonnes 
                  pratiques environnementales auprès de nos parties prenantes.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
                <h3 className="text-lg font-bold text-purple-800 mb-2">Responsabilité sociale</h3>
                <p className="text-gray-700">
                  Nous nous engageons à promouvoir la diversité, l'inclusion et le bien-être au sein 
                  de notre groupe et à contribuer positivement aux communautés locales.
                </p>
              </div>
              
              <div className="p-4 border-l-4 border-orange-600 bg-orange-50">
                <h3 className="text-lg font-bold text-orange-800 mb-2">Gouvernance responsable</h3>
                <p className="text-gray-700">
                  Nous nous engageons à adopter des pratiques de gouvernance transparentes et éthiques, 
                  en dialogue constant avec nos parties prenantes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NosEngagements; 