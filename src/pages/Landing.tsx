import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroSilhouettes from "@/public/hero-silhouettes.jpg";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % bannerImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Carousel Banner Hero - Optimisé mobile */}
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
              {/* Image optimisée pour mobile */}
              <div className="relative w-full h-full">
                <img
                  src={image}
                  alt=""
                  className={`w-full h-full object-cover ${
                    isMobile ? 'object-center scale-110' : 'object-center'
                  }`}
                  style={{ 
                    filter: 'brightness(0.85)',
                    objectPosition: isMobile ? 'center 30%' : 'center'
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 md:from-black/60 md:via-black/40 md:to-black/20" />
            </div>
          ))}
          
          {/* Overlay pattern plus subtil */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(197,160,89,0.1)_50%,transparent_52%)] bg-[size:50px_50px]" />
          </div>
        </div>

        {/* Carousel Controls - Réduit sur mobile */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-20">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-amber-500 w-6 h-2 md:w-8 md:h-3 rounded-full' 
                  : 'bg-white/30 hover:bg-white/50 w-2 h-2 md:w-3 md:h-3 rounded-full'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content avec meilleur contraste et responsive */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="max-w-4xl mx-auto">
            {/* Animated Badge - Responsive */}
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-3 rounded-full bg-gradient-to-r from-amber-500/30 to-amber-600/30 border border-amber-500/40 mb-6 md:mb-10 backdrop-blur-sm animate-pulse mx-auto md:mx-0">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-amber-400 animate-spin-slow" />
              <span className="text-xs md:text-sm font-medium text-amber-300 tracking-wider md:tracking-widest">
                CLUB PRIVÉ • ACCÈS IMMÉDIAT
              </span>
            </div>

            {/* Main Title - Responsive */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-center md:text-left">
              <span className="block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                DÉCOUVREZ
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mt-2 md:mt-3">
                Votre univers confidentiel d'exception
              </span>
            </h1>

            {/* Description - Responsive */}
            <p className="text-base sm:text-lg text-gray-100 mb-6 md:mb-10 max-w-xl leading-relaxed text-center md:text-left">
              La première plateforme où discrétion rime avec expériences inoubliables.
              Rejoignez le cercle des hommes qui osent vivre leurs passions secrètes.
            </p>

            {/* CTA Buttons - Responsive */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-12 md:mb-16">
              <Button 
                size={isMobile ? "default" : "lg"}
                asChild 
                className="group relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-6 sm:px-8 md:px-10 py-5 md:py-7 text-base md:text-lg shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
              >
                <Link to="/auth?tab=register">
                  <span className="relative z-10 flex items-center justify-center">
                    <Target className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6" />
                    ACCÉDER MAINTENANT
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </Link>
              </Button>
              
              <Button 
                size={isMobile ? "default" : "lg"}
                variant="outline" 
                asChild 
                className="border-white/40 text-white hover:bg-white/20 px-6 sm:px-8 md:px-10 py-5 md:py-7 text-base md:text-lg backdrop-blur-sm group"
              >
                <Link to="/about">
                  <EyeOff className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                  MODE DÉMO
                </Link>
              </Button>
            </div>

            {/* Quick Stats - Responsive */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-md mx-auto md:mx-0">
              {[
                { value: "5K+", label: "Gentlemen actifs" },
                { value: "48H", label: "Premier contact" },
                { value: "100%", label: "Discrétion" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-3 md:p-4 rounded-xl bg-black/40 backdrop-blur-sm border border-white/20 hover:border-amber-500/50 transition-colors"
                >
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-200 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Responsive */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                L'EXPÉRIENCE
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mt-2 md:mt-3">
                qui va transformer votre quotidien
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Main Feature Card */}
            <div className="lg:col-span-2">
              <div className="group relative">
                <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-amber-500/20 to-purple-600/20 rounded-2xl md:rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 border border-gray-700/50 group-hover:border-amber-500/40 transition-all duration-500 overflow-hidden">
                  <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10">
                    <div className="flex-1 w-full">
                      <div className="inline-flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                        <div className="p-2 md:p-3 rounded-xl bg-gradient-to-br from-amber-500/30 to-amber-600/30">
                          <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-amber-400" />
                        </div>
                        <span className="text-xs md:text-sm font-medium text-amber-400 uppercase tracking-wider md:tracking-widest">
                          INNOVATION EXCLUSIVE
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">Citadelle Numérique</h3>
                      <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-6 md:mb-8">
                        Un écosystème entièrement sécurisé où chaque interaction bénéficie 
                        d'une protection de niveau institutionnel. Vos secrets sont préservés, 
                        vos rencontres restent confidentielles.
                      </p>
                      <Button 
                        variant="outline" 
                        size={isMobile ? "default" : "lg"}
                        className="border-amber-500/40 text-amber-400 hover:bg-amber-500/20 group w-full sm:w-auto"
                        asChild
                      >
                        <Link to="/guide">
                          Découvrir la technologie
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                    <div className="flex-1 w-full mt-6 lg:mt-0">
                      <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-purple-600/20" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-amber-500/30 to-amber-600/30 border-2 border-amber-500/40 flex items-center justify-center">
                            <Lock className="w-16 h-16 md:w-20 md:h-20 text-amber-400/60" />
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
                icon: <MessageSquare className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Messagerie Éphémère",
                description: "Messages auto-destructifs, conversations 100% privées",
                color: "from-blue-500/30 to-cyan-600/30"
              },
              {
                icon: <Calendar className="w-6 h-6 md:w-8 md:h-8" />,
                title: "Rencontres Curatées",
                description: "Algorithmes IA pour des connections authentiques",
                color: "from-purple-500/30 to-violet-600/30"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className={`absolute -inset-2 md:-inset-4 bg-gradient-to-r ${feature.color} rounded-xl md:rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-xl md:rounded-2xl p-6 md:p-8 border border-gray-700/50 group-hover:border-amber-500/40 transition-all duration-500 hover:translate-y-[-4px] md:hover:translate-y-[-8px]">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 md:mb-6`}>
                    <div className="text-amber-400">{feature.icon}</div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-200 mb-4 md:mb-6">{feature.description}</p>
                  <div className="flex items-center gap-2 text-amber-400 group-hover:gap-3 md:group-hover:gap-4 transition-all duration-300">
                    <span className="text-xs md:text-sm font-medium">Découvrir</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Responsive */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              {
                value: "94%",
                label: "Taux de satisfaction",
                description: "Des membres satisfaits de leur expérience",
                icon: <Heart className="w-6 h-6 md:w-8 md:h-8" />,
                color: "from-red-500/30 to-pink-600/30"
              },
              {
                value: "24/7",
                label: "Support dédié",
                description: "Assistance personnalisée à toute heure",
                icon: <Clock className="w-6 h-6 md:w-8 md:h-8" />,
                color: "from-blue-500/30 to-cyan-600/30"
              },
              {
                value: "0%",
                label: "Risque de fuite",
                description: "Aucune donnée jamais compromise",
                icon: <Shield className="w-6 h-6 md:w-8 md:h-8" />,
                color: "from-green-500/30 to-emerald-600/30"
              }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${stat.color} mb-4 md:mb-6 group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-500`}>
                  <div className="text-amber-400">{stat.icon}</div>
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">{stat.value}</div>
                <div className="text-base md:text-lg font-medium text-amber-400 mb-1 md:mb-2">{stat.label}</div>
                <div className="text-xs md:text-sm text-gray-300 px-2">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-r from-amber-900/10 via-black to-purple-900/10">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(251,191,36,0.2),transparent)]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center bg-black/30 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-12 border border-gray-800/50">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-gradient-to-r from-amber-500/30 to-red-500/30 border border-amber-500/40 mb-6 md:mb-8 backdrop-blur-sm animate-pulse">
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
              <span className="text-xs md:text-sm font-medium text-amber-300 tracking-wider md:tracking-widest">
                INSCRIPTION OUVERTE • PLACES LIMITÉES
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                VOTRE PORTE D'ENTRÉE
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mt-3 md:mt-4">
                vers des expériences uniques
              </span>
            </h2>

            <p className="text-base md:text-lg text-gray-200 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Ne laissez pas la routine étouffer vos désirs. Rejoignez aujourd'hui 
              la communauté la plus exclusive et discrète pour hommes curieux.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Button 
                size={isMobile ? "default" : "lg"}
                asChild 
                className="group relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold px-8 md:px-12 py-4 md:py-8 text-base md:text-xl shadow-2xl shadow-amber-500/40 hover:shadow-amber-500/60 transition-all duration-300 hover:scale-105 animate-pulse-glow"
              >
                <Link to="/auth?tab=register">
                  <span className="relative z-10 flex items-center justify-center">
                    <Trophy className="mr-2 md:mr-4 w-5 h-5 md:w-6 md:h-6" />
                    REJOINDRE MAINTENANT
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                </Link>
              </Button>

              <Button 
                size={isMobile ? "default" : "lg"}
                variant="outline" 
                asChild 
                className="border-white/40 text-white hover:bg-white/20 px-8 md:px-12 py-4 md:py-8 text-base md:text-xl backdrop-blur-sm group"
              >
                <Link to="/about">
                  <Settings className="mr-2 md:mr-3 w-5 h-5 md:w-6 md:h-6" />
                  VOIR LES TARIFS
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-4 md:gap-8 text-xs md:text-sm text-gray-300">
              {[
                { icon: ShieldCheck, text: "100% sécurisé", color: "text-green-400" },
                { icon: EyeOff, text: "Anonymat garanti", color: "text-amber-400" },
                { icon: Clock, text: "Support 24h/24", color: "text-blue-400" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <item.icon className={`w-3 h-3 md:w-4 md:h-4 ${item.color}`} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Responsive */}
      <footer className="py-8 md:py-12 border-t border-gray-800/50 bg-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <VenetianMask className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
              <div>
                <span className="font-bold text-lg md:text-xl bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                  HCH
                </span>
                <p className="text-xs text-gray-400 mt-0.5">L'excellence dans la discrétion</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              {['Le Club', 'Fonctionnalités', 'Sécurité', 'Tarifs', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 hover:text-amber-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="text-xs md:text-sm text-gray-400 text-center md:text-right">
              <div>© 2024 HCH Élite • Confidentialité garantie</div>
              <div className="text-xs text-gray-600 mt-0.5">Pour les gentlemen modernes</div>
            </div>
          </div>
        </div>
      </footer>

      {/* Animations CSS */}
      <style>{`
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

        /* Optimisations mobiles */
        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </div>
  );
}