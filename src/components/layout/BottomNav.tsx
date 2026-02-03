import { Link, useLocation } from "react-router-dom";
import { Compass, KeyRound, MessageCircle, BookOpen, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/explorer", label: "Explorateur", icon: Compass },
  { path: "/access", label: "Accès", icon: KeyRound },
  { path: "/messages", label: "Messages", icon: MessageCircle },
  { path: "/guide", label: "Guide", icon: BookOpen },
  { path: "/profile", label: "Profil", icon: User },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card/95 backdrop-blur-xl safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 min-w-[60px]",
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon 
                className={cn(
                  "w-5 h-5 transition-all duration-300",
                  isActive && "scale-110"
                )} 
              />
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute bottom-1 w-1 h-1 rounded-full bg-primary animate-pulse-gold" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
