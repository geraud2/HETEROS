import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

interface ProfileCardProps {
  id: string;
  imageUrl: string;
  age: number;
  distance: string;
  level: "curious" | "adventurer" | "experienced";
  isBlurred?: boolean;
  isPremium?: boolean;
}

const levelLabels = {
  curious: "Curieux",
  adventurer: "Aventurier",
  experienced: "Expérimenté",
};

const levelVariants = {
  curious: "curious" as const,
  adventurer: "adventurer" as const,
  experienced: "experienced" as const,
};

export function ProfileCard({
  imageUrl,
  age,
  distance,
  level,
  isBlurred = true,
  isPremium = false,
}: ProfileCardProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-card border border-border/50 group cursor-pointer transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
      {/* Image Container */}
      <div className="aspect-[3/4] relative overflow-hidden">
        <img
          src={imageUrl}
          alt="Profile"
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            isBlurred && !isPremium && "blur-profile",
            "group-hover:scale-105"
          )}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Badge */}
        <div className="absolute top-2 right-2">
          <Badge variant={levelVariants[level]} className="text-[10px]">
            {levelLabels[level]}
          </Badge>
        </div>
        
        {/* Blur Indicator */}
        {isBlurred && !isPremium && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center border border-border/50">
              <span className="text-2xl">🔒</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <div className="flex items-end justify-between">
          <span className="font-medium text-foreground">{age} ans</span>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin className="w-3 h-3" />
            <span>{distance}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
