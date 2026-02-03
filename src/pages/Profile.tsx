import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Settings, 
  Shield, 
  CreditCard, 
  Bell, 
  HelpCircle, 
  LogOut,
  ChevronRight,
  Camera,
  Edit
} from "lucide-react";

const menuItems = [
  { icon: Edit, label: "Modifier le profil", href: "/profile/edit" },
  { icon: Bell, label: "Notifications", href: "/notifications" },
  { icon: CreditCard, label: "Abonnement", href: "/subscription", badge: "Gratuit" },
  { icon: Shield, label: "Sécurité & Panic Mode", href: "/security" },
  { icon: Settings, label: "Paramètres", href: "/settings" },
  { icon: HelpCircle, label: "Aide & Support", href: "/help" },
];

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const levelLabels = {
    curious: "Curieux",
    adventurer: "Aventurier", 
    experienced: "Expérimenté",
  };

  return (
    <AppLayout>
      <div className="container px-4 py-6">
        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center border-2 border-primary/20">
              <User className="w-10 h-10 text-muted-foreground" />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <Camera className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
          
          <h1 className="font-serif text-xl mb-1">{user?.username || "Anonyme"}</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant={user?.level || "curious"}>{levelLabels[user?.level || "curious"]}</Badge>
            <span className="text-sm text-muted-foreground">
              {user?.age ? `• ${user.age} ans` : ""} {user?.city ? `• ${user.city}` : ""}
            </span>
          </div>
          
          {!user?.isPremium && (
            <Button variant="gold" size="sm" asChild>
              <Link to="/subscription">Passer Premium</Link>
            </Button>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="glass-card rounded-xl p-4 text-center">
            <span className="text-2xl font-serif text-foreground">12</span>
            <p className="text-xs text-muted-foreground mt-1">Likes reçus</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <span className="text-2xl font-serif text-foreground">5</span>
            <p className="text-xs text-muted-foreground mt-1">Matchs</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <span className="text-2xl font-serif text-foreground">3</span>
            <p className="text-xs text-muted-foreground mt-1">Accès donnés</p>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-2 mb-8">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="glass-card rounded-xl p-4 flex items-center justify-between group hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-muted-foreground" />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {user?.isPremium ? "Premium" : item.badge}
                  </Badge>
                )}
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Logout */}
        <Button 
          variant="outline" 
          className="w-full justify-center gap-2 text-destructive hover:text-destructive"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4" />
          Se déconnecter
        </Button>

        {/* App Version */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          HCH v1.0.0 • Sécurité RGPD
        </p>
      </div>
    </AppLayout>
  );
}
