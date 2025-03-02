import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Clock, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

function Contact() {
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
            Contactez-nous
            <span className="absolute inset-x-0 inset-y-0 bg-blue-600/20 -skew-x-12 transform -rotate-2"></span>
          </span>
        </h1>
      </div>
      
      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Adresse</h3>
                <p className="text-gray-700 text-center">
                  Vigilant Médias<br />
                  123 Avenue de la Presse<br />
                  75008 Paris, France
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Phone className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Téléphone</h3>
                <p className="text-gray-700 text-center">
                  Standard: +33 (0)1 23 45 67 89<br />
                  Service commercial: +33 (0)1 23 45 67 90
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-300">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Horaires d'ouverture</h3>
                <p className="text-gray-700 text-center">
                  Lundi - Vendredi: 9h00 - 18h00<br />
                  Samedi - Dimanche: Fermé
                </p>
              </div>
            </div>
            
            {/* Email Section */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-10 rounded-2xl shadow-lg mb-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center mr-6 shrink-0">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Contactez-nous par email</h3>
                    <p className="text-gray-700">
                      Nous répondons à toutes les demandes sous 24-48h
                    </p>
                  </div>
                </div>
                <div className="space-y-2 w-full md:w-auto">
                  <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-blue-200 hover:shadow-md transition-all">
                    <p className="text-gray-700">
                      <span className="font-medium">Information générale:</span> <a href="mailto:info@vigilantmedia.fr" className="text-blue-600 hover:underline">info@vigilantmedia.fr</a>
                    </p>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-blue-200 hover:shadow-md transition-all">
                    <p className="text-gray-700">
                      <span className="font-medium">Service commercial:</span> <a href="mailto:commercial@vigilantmedia.fr" className="text-blue-600 hover:underline">commercial@vigilantmedia.fr</a>
                    </p>
                  </div>
                  <div className="bg-white px-6 py-3 rounded-lg shadow-sm border border-blue-200 hover:shadow-md transition-all">
                    <p className="text-gray-700">
                      <span className="font-medium">Support technique:</span> <a href="mailto:support@vigilantmedia.fr" className="text-blue-600 hover:underline">support@vigilantmedia.fr</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-blue-100 mb-20">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Suivez-nous sur les réseaux sociaux</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <a href="#" className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-200 transition-colors">
                    <Linkedin className="w-8 h-8 text-blue-600" />
                  </div>
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">LinkedIn</span>
                </a>
                <a href="#" className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-200 transition-colors">
                    <Twitter className="w-8 h-8 text-blue-600" />
                  </div>
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Twitter</span>
                </a>
                <a href="#" className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-200 transition-colors">
                    <Facebook className="w-8 h-8 text-blue-600" />
                  </div>
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Facebook</span>
                </a>
                <a href="#" className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2 group-hover:bg-blue-200 transition-colors">
                    <Instagram className="w-8 h-8 text-blue-600" />
                  </div>
                  <span className="text-gray-700 group-hover:text-blue-600 transition-colors">Instagram</span>
                </a>
              </div>
            </div>
            
            {/* Map Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nous trouver</h2>
              <div className="bg-gray-200 rounded-2xl overflow-hidden h-96 shadow-lg">
                <div className="w-full h-full flex items-center justify-center bg-blue-50">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4 opacity-50" />
                    <p className="text-gray-600">Carte interactive indisponible en mode prévisualisation</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Questions fréquentes</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Comment puis-je devenir partenaire de Vigilant Médias ?</h3>
                  <p className="text-gray-700">
                    Pour discuter d'un partenariat potentiel, veuillez contacter notre équipe commerciale à l'adresse 
                    <a href="mailto:partenariats@vigilantmedia.fr" className="text-blue-600 hover:underline"> partenariats@vigilantmedia.fr</a> 
                    ou par téléphone au +33 (0)1 23 45 67 90.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Quels sont les délais de réponse à mes demandes ?</h3>
                  <p className="text-gray-700">
                    Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 à 48 heures ouvrées. 
                    Pour les demandes urgentes, nous vous recommandons de nous contacter par téléphone.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Comment puis-je signaler un problème technique ?</h3>
                  <p className="text-gray-700">
                    Pour tout problème technique, veuillez contacter notre équipe de support à l'adresse 
                    <a href="mailto:support@vigilantmedia.fr" className="text-blue-600 hover:underline"> support@vigilantmedia.fr</a> 
                    en précisant la nature du problème et en joignant des captures d'écran si possible.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Où puis-je trouver vos offres d'emploi ?</h3>
                  <p className="text-gray-700">
                    Toutes nos offres d'emploi sont disponibles sur la page 
                    <Link to="/nous-rejoindre" className="text-blue-600 hover:underline"> Nous rejoindre</Link>. 
                    Vous pouvez également envoyer une candidature spontanée à 
                    <a href="mailto:recrutement@vigilantmedia.fr" className="text-blue-600 hover:underline"> recrutement@vigilantmedia.fr</a>.
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

export default Contact; 