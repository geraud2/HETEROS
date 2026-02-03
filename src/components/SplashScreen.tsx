import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SplashScreenProps {
  onComplete: () => void;
  minDuration?: number;
}

export function SplashScreen({ onComplete, minDuration = 2500 }: SplashScreenProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onComplete, 500);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [onComplete, minDuration]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center transition-opacity duration-500 overflow-hidden",
        fadeOut && "opacity-0 pointer-events-none"
      )}
    >
      {/* Arrière-plan avec l'homme */}
      <div className="absolute inset-0">
        {/* Image de l'homme avec overlay sombre */}
        <div 
          className={cn(
            "absolute inset-0 bg-cover bg-center transition-opacity duration-700",
            imageLoaded ? "opacity-40" : "opacity-0"
          )}
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
            backgroundPosition: "center 30%"
          }}
        />
        
        {/* Overlay noir pour assombrir l'image */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Effet de gradient sur les bords */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-transparent" />
        
        {/* Effet de particules subtiles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-[1px] bg-white/20 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Préchargement de l'image */}
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        alt=""
        className="hidden"
        onLoad={() => setImageLoaded(true)}
      />

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo élégant */}
        <div className="relative mb-10 animate-fade-in">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-900 to-black border-2 border-white/20 flex items-center justify-center shadow-2xl shadow-white/10 backdrop-blur-sm">
            <span className="text-5xl font-serif bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent font-bold tracking-wider">
              HCH
            </span>
          </div>
          
          {/* Anneau lumineux */}
          <div className="absolute -inset-4 rounded-full border border-white/10 animate-pulse-slow" />
          <div className="absolute -inset-6 rounded-full border border-white/5 animate-pulse-slower" />
        </div>

        {/* Titre et tagline */}
        <div className="text-center space-y-3 mb-16">
          <h1 className="font-serif text-3xl text-white font-light tracking-widest animate-fade-in animation-delay-300">
            HETEROS CURIEUX HOME
          </h1>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto animate-slide-in animation-delay-500" />
          <p className="text-white/80 text-lg font-light animate-fade-in animation-delay-700">
            Votre jardin secret
          </p>
        </div>

        {/* Indicateur de chargement sophistiqué */}
        <div className="relative animate-fade-in animation-delay-900">
          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-transparent via-white to-transparent animate-loading-bar"
              style={{ 
                width: "60%",
                animation: "loading 2s ease-in-out infinite"
              }}
            />
          </div>
          
          {/* Points décoratifs */}
          <div className="flex justify-between w-32 mt-2">
            {[0, 25, 50, 75, 100].map((percent) => (
              <div
                key={percent}
                className="w-2 h-2 rounded-full bg-white/30 animate-pulse"
                style={{
                  animationDelay: `${percent * 20}ms`
                }}
              />
            ))}
          </div>
        </div>

        {/* Copyright discret */}
        <p className="absolute bottom-8 text-white/30 text-xs font-light animate-fade-in animation-delay-1200">
          Accès exclusif • Confidentialité assurée
        </p>
      </div>

      {/* Styles d'animation inline */}
      <style >{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}