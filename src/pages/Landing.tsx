import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroSilhouettes from "@/assets/hero-silhouettes.jpg";
import heroSilhouettee from "@/assets/hero-silhouettee.jpg";
import heroSilhouetteee from "@/assets/hero-silhouetteee.jpg";
import { 
  Check, Shield, Lock, Users, MessageSquare, 
  Sparkles, ChevronRight, EyeOff, VenetianMask, 
  Crown, Gem, Star, Zap, Key, Target, Globe,
  ArrowRight, ArrowLeft, Heart, Trophy, Settings,
  Calendar, Clock, ShieldCheck
 } from "lucide-react";

const bannerImages = [
   heroSilhouettes,
   heroSilhouettee,
   heroSilhouetteee,
];

export default function Landing() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % bannerImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Carousel Banner Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Carousel avec opacité augmentée */}
        <div className="absolute inset-0">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.9)' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" /> {/* Réduit l'overlay */}
            </div>
          ))}
          
          {/* Overlay pattern plus subtil */}
          <div className="absolute inset-0 opacity-5"> {/* Réduit à 5% */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(197,160,89,0.1)_50%,transparent_52%)] bg-[size:50px_50px]" />
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-amber-500 w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>

        {/* <button
          onClick={prevImage}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 hover:bg-black/50 transition-all group"
          aria-label="Image précédente"
        >
          <ArrowLeft className="w-6 h-6 text-white group-hover:text-amber-400 transition-colors" />
        </button> */}

        {/* <button
          onClick={nextImage}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/20 hover:bg-black/50 transition-all group"
          aria-label="Image suivante"
        >
          <ArrowRight className="w-6 h-6 text-white group-hover:text-amber-400 transition-colors" />
        </button> */}

        {/* Hero Content avec meilleur contraste */}
        <div className="container mx-auto px-6 relative z-10">
          <div className=""> {/* Fond semi-transparent */}
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-amber-500/30 to-amber-600/30 border border-amber-500/40 mb-10 backdrop-blur-sm animate-pulse">
              <Sparkles className="w-5 h-5 text-amber-400 animate-spin-slow" />
              <span className="text-sm font-medium text-amber-300 tracking-widest">
                CLUB PRIVÉ • ACCÈS IMMÉDIAT
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                DÉCOUVREZ
              </span>
              <span className="block text-3xl md:text-4xl text-white mt-3">
                Votre univers confidentiel d'exception
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-100 mb-10 max-w-xl leading-relaxed"> {/* Gris plus clair */}
              La première plateforme où discrétion rime avec expériences inoubliables.
              Rejoignez le cercle des hommes qui osent vivre leurs passions secrètes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button 
                size="lg" 
                asChild 
                className="group relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-10 py-7 text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
              >
                <Link to="/auth?tab=register">
                  <span className="relative z-10 flex items-center">
                    <Target className="mr-3 w-6 h-6" />
                    ACCÉDER MAINTENANT
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-white/40 text-white hover:bg-white/20 px-10 py-7 text-lg backdrop-blur-sm group" /* Border plus visible */
              >
                <Link to="/about">
                  <EyeOff className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                  MODE DÉMO
                </Link>
              </Button>
            </div>

            {/* Quick Stats avec meilleure lisibilité */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              <div className="text-center p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/20 hover:border-amber-500/50 transition-colors">
                <div className="text-2xl font-bold text-amber-400">5K+</div>
                <div className="text-sm text-gray-200">Gentlemen actifs</div> {/* Texte plus clair */}
              </div>
              <div className="text-center p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/20 hover:border-amber-500/50 transition-colors">
                <div className="text-2xl font-bold text-amber-400">48H</div>
                <div className="text-sm text-gray-200">Premier contact</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/20 hover:border-amber-500/50 transition-colors">
                <div className="text-2xl font-bold text-amber-400">100%</div>
                <div className="text-sm text-gray-200">Discrétion</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <div className="text-xs text-amber-400 mb-2 tracking-widest">EXPLORER</div>
            <div className="w-6 h-10 rounded-full border border-amber-500/40 flex items-start justify-center pt-2">
              <div className="w-1 h-3 bg-gradient-to-b from-amber-400 to-amber-500 rounded-full animate-pulse" />
            </div>
          </div>
        </div> */}
      </section>

      {/* Features Section avec plus de contraste */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                L'EXPÉRIENCE
              </span>
              <span className="block text-2xl md:text-3xl text-gray-200 mt-3"> {/* Gris plus clair */}
                qui va transformer votre quotidien
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Main Feature Card */}
            <div className="lg:col-span-2">
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/50 group-hover:border-amber-500/40 transition-all duration-500 overflow-hidden">
                  <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/30 to-amber-600/30">
                          <ShieldCheck className="w-8 h-8 text-amber-400" />
                        </div>
                        <span className="text-sm font-medium text-amber-400 uppercase tracking-widest">
                          INNOVATION EXCLUSIVE
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Citadelle Numérique</h3>
                      <p className="text-lg text-gray-200 leading-relaxed mb-8"> {/* Gris plus clair */}
                        Un écosystème entièrement sécurisé où chaque interaction bénéficie 
                        d'une protection de niveau institutionnel. Vos secrets sont préservés, 
                        vos rencontres restent confidentielles.
                      </p>
                      <Button 
                        variant="outline" 
                        className="border-amber-500/40 text-amber-400 hover:bg-amber-500/20 group"
                        asChild
                      >
                        <Link to="/guide">
                          Découvrir la technologie
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                    <div className="flex-1">
                      <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-purple-600/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-40 h-40 rounded-full bg-gradient-to-br from-amber-500/30 to-amber-600/30 border-2 border-amber-500/40 flex items-center justify-center">
                            <Lock className="w-20 h-20 text-amber-400/60" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sub Features */}
            {[
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Messagerie Éphémère",
                description: "Messages auto-destructifs, conversations 100% privées",
                color: "from-blue-500/30 to-cyan-600/30"
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Rencontres Curatées",
                description: "Algorithmes IA pour des connections authentiques",
                color: "from-purple-500/30 to-violet-600/30"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className={`absolute -inset-4 bg-gradient-to-r ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 group-hover:border-amber-500/40 transition-all duration-500 hover:translate-y-[-8px]">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                    <div className="text-amber-400">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-200 mb-6">{feature.description}</p> {/* Gris plus clair */}
                  <div className="flex items-center gap-2 text-amber-400 group-hover:gap-4 transition-all duration-300">
                    <span className="text-sm font-medium">Découvrir</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                value: "94%",
                label: "Taux de satisfaction",
                description: "Des membres satisfaits de leur expérience",
                icon: <Heart className="w-8 h-8" />,
                color: "from-red-500/30 to-pink-600/30"
              },
              {
                value: "24/7",
                label: "Support dédié",
                description: "Assistance personnalisée à toute heure",
                icon: <Clock className="w-8 h-8" />,
                color: "from-blue-500/30 to-cyan-600/30"
              },
              {
                value: "0%",
                label: "Risque de fuite",
                description: "Aucune donnée jamais compromise",
                icon: <Shield className="w-8 h-8" />,
                color: "from-green-500/30 to-emerald-600/30"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-amber-400">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-amber-400 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-300">{stat.description}</div> {/* Gris plus clair */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-r from-amber-900/10 via-black to-purple-900/10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(251,191,36,0.2),transparent)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center bg-black/30 backdrop-blur-sm rounded-3xl p-12 border border-gray-800/50"> {/* Fond pour contraste */}
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/30 to-red-500/30 border border-amber-500/40 mb-8 backdrop-blur-sm animate-pulse">
              <Zap className="w-5 h-5 text-amber-400" />
              <span className="text-sm font-medium text-amber-300 tracking-widest">
                INSCRIPTION OUVERTE • PLACES LIMITÉES
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                VOTRE PORTE D'ENTRÉE
              </span>
              <span className="block text-2xl md:text-3xl text-gray-200 mt-4">
                vers des expériences uniques
              </span>
            </h2>

            <p className="text-lg text-gray-200 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ne laissez pas la routine étouffer vos désirs. Rejoignez aujourd'hui 
              la communauté la plus exclusive et discrète pour hommes curieux.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                asChild 
                className="group relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-12 py-8 text-xl shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                <Link to="/auth?tab=register">
                  <span className="relative z-10 flex items-center">
                    <Trophy className="mr-4 w-6 h-6" />
                    REJOINDRE MAINTENANT
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </Link>
              </Button>

              <Button 
                size="lg" 
                variant="outline" 
                asChild 
                className="border-white/40 text-white hover:bg-white/20 px-12 py-8 text-xl backdrop-blur-sm group"
              >
                <Link to="/about">
                  <Settings className="mr-3 w-6 h-6" />
                  VOIR LES TARIFS
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span>100% sécurisé</span>
              </div>
              <div className="flex items-center gap-2">
                <EyeOff className="w-4 h-4 text-amber-400" />
                <span>Anonymat garanti</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>Support 24h/24</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800/50 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <VenetianMask className="w-6 h-6 text-black" />
              </div>
              <div>
                <span className="font-bold text-xl bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                  HCH
                </span>
                <p className="text-xs text-gray-400 mt-1">L'excellence dans la discrétion</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {['Le Club', 'Fonctionnalités', 'Sécurité', 'Tarifs', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="text-sm text-gray-400 text-center md:text-right">
              <div>© 2024 HCH Élite • Confidentialité garantie</div>
              <div className="text-xs text-gray-600 mt-1">Pour les gentlemen modernes</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Animations CSS */}
      <style >{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.4); }
          50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.7); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}