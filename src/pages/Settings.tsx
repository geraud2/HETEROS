import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, 
  Bell, 
  Moon, 
  Shield, 
  Eye,
  Smartphone,
  Globe,
  Trash2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: true,
    ghostMode: false,
    readReceipts: true,
    showDistance: true,
    showOnlineStatus: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    toast({
      title: "Paramètre modifié",
      description: "Votre préférence a été enregistrée",
    });
  };

  const settingsGroups = [
    {
      title: "Notifications",
      items: [
        { key: "notifications" as const, icon: Bell, label: "Notifications push", description: "Recevez des alertes pour les messages et matchs" },
      ]
    },
    {
      title: "Apparence",
      items: [
        { key: "darkMode" as const, icon: Moon, label: "Mode sombre", description: "Toujours activé pour plus de discrétion" },
      ]
    },
    {
      title: "Confidentialité",
      items: [
        { key: "ghostMode" as const, icon: Eye, label: "Mode Fantôme", description: "Visitez les profils sans laisser de trace", isPremium: true },
        { key: "readReceipts" as const, icon: Shield, label: "Accusés de lecture", description: "Montrer quand vous avez lu les messages" },
        { key: "showDistance" as const, icon: Globe, label: "Afficher ma distance", description: "Les autres voient votre distance approximative" },
        { key: "showOnlineStatus" as const, icon: Smartphone, label: "Statut en ligne", description: "Montrer quand vous êtes connecté" },
      ]
    },
  ];

  return (
    <AppLayout showNav={false}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/50">
        <div className="container px-4 py-4 flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 -ml-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="font-serif text-lg">Paramètres</h1>
        </div>
      </header>

      <div className="container px-4 py-6 space-y-8">
        {settingsGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
              {group.title}
            </h2>
            <div className="space-y-2">
              {group.items.map((item) => (
                <div 
                  key={item.key}
                  className="glass-card rounded-xl p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3 flex-1">
                    <item.icon className="w-5 h-5 text-muted-foreground shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <Label htmlFor={item.key} className="font-medium text-sm cursor-pointer">
                          {item.label}
                        </Label>
                        {item.isPremium && (
                          <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                            Premium
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <Switch
                    id={item.key}
                    checked={settings[item.key]}
                    onCheckedChange={() => toggleSetting(item.key)}
                    disabled={item.isPremium}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Danger Zone */}
        <div>
          <h2 className="text-sm font-medium text-destructive uppercase tracking-wider mb-4">
            Zone de danger
          </h2>
          <Button variant="outline" className="w-full justify-start gap-3 text-destructive hover:text-destructive border-destructive/30">
            <Trash2 className="w-4 h-4" />
            Supprimer mon compte
          </Button>
          <p className="text-xs text-muted-foreground mt-2">
            Cette action est irréversible. Toutes vos données seront effacées.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
