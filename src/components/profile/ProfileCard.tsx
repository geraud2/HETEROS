import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MapPin, Crown, Star } from "lucide-react";

interface ProfileCardProps {
  id: string;
  imageUrl: string;
  age: number;
  distance: string;
  level: "curious" | "adventurer" | "experienced" | "expert";
  isBlurred?: boolean;
  isPremium?: boolean;
  name?: string;
  bio?: string;
  tags?: string[];
  status?: "online" | "offline" | "recent";
  lastActive?: string;
  compatibility?: number;
  verified?: boolean;
  premium?: boolean;
  showTags?: boolean;
  showStatus?: boolean;
  showBio?: boolean;
  showLastActive?: boolean;
  showCompatibility?: boolean;
}

const levelLabels = {
  curious: "Curieux",
  adventurer: "Aventurier",
  experienced: "Expérimenté",
  expert: "Expert",
};

const levelVariants = {
  curious: "curious" as const,
  adventurer: "adventurer" as const,
  experienced: "experienced" as const,
  expert: "premium" as const, // Map "expert" to a valid variant
};

const statusColors = {
  online: "bg-green-500",
  offline: "bg-gray-500",
  recent: "bg-yellow-500",
};

export function ProfileCard({
  imageUrl,
  age,
  distance,
  level,
  isBlurred = true,
  isPremium = false,
  name,
  bio,
  tags = [],
  status,
  lastActive,
  compatibility,
  verified = false,
  premium = false,
  showTags = false,
  showStatus = false,
  showBio = false,
  showLastActive = false,
  showCompatibility = false,
}: ProfileCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-card border border-border/50 group cursor-pointer transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
      {/* Image Container */}
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={imageUrl}
          alt={name || "Profile"}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            isBlurred && !isPremium && "blur-profile",
            "group-hover:scale-105"
          )}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Badges en haut */}
        <div className="absolute top-2 right-2 flex flex-col items-end gap-2">
          <Badge variant={levelVariants[level]} className="text-[10px]">
            {levelLabels[level]}
          </Badge>
          
          {verified && (
            <Badge variant="outline" className="bg-blue-500/20 text-blue-600 border-blue-500/30 text-[10px] px-2">
              <Crown className="w-3 h-3 mr-1" />
              Vérifié
            </Badge>
          )}
          
          {premium && (
            <Badge variant="outline" className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 text-orange-600 border-orange-500/30 text-[10px] px-2">
              <Star className="w-3 h-3 mr-1" />
              Premium
            </Badge>
          )}
        </div>
        
        {/* Indicateur de statut */}
        {showStatus && status && (
          <div className="absolute top-2 left-2">
            <div className={cn(
              "w-2 h-2 rounded-full",
              statusColors[status],
              status === "online" && "animate-pulse"
            )} />
          </div>
        )}
        
        {/* Blur Indicator */}
        {isBlurred && !isPremium && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center border border-border/50">
              <span className="text-2xl">🔒</span>
            </div>
          </div>
        )}
        
        {/* Score de compatibilité */}
        {showCompatibility && compatibility && (
          <div className="absolute top-12 left-2">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-[10px] px-2">
              {compatibility}% match
            </Badge>
          </div>
        )}
      </div>
      
      {/* Contenu info */}
      <div className="p-3 space-y-2">
        {/* Nom et âge */}
        <div className="flex items-start justify-between">
          <div>
            {name && (
              <h3 className="font-semibold text-foreground">{name}</h3>
            )}
            <div className="flex items-center gap-2">
              <span className="font-medium text-foreground">{age} ans</span>
              {showLastActive && lastActive && (
                <span className="text-xs text-muted-foreground">• {lastActive}</span>
              )}
            </div>
          </div>
          
          {/* Distance */}
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin className="w-3 h-3" />
            <span>{distance}</span>
          </div>
        </div>
        
        {/* Bio */}
        {showBio && bio && (
          <p className="text-sm text-muted-foreground line-clamp-2">{bio}</p>
        )}
        
        {/* Tags */}
        {showTags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {tags.slice(0, 3).map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-[10px] px-2 py-0.5"
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        )}
      </div>
    </div>
  );
}