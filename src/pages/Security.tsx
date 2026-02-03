import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft, 
  Shield, 
  ExternalLink,
  Smartphone,
  Lock,
  Calculator
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Security() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [panicUrl, setPanicUrl] = useState("https://www.google.com");
  const [settings, setSettings] = useState({
    panicEnabled: true,
    shakeToEscape: true,
    calculatorIcon: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
    toast({
      title: "Paramètre modifié",
      description: key === "calculatorIcon" 
        ? "L'icône sera modifiée au prochain lancement" 
        : "Votre préférence a été enregistrée",
    });
  };

  const testPanicMode = () => {
    window.location.href = panicUrl;
  };

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
          <h1 className="font-serif text-lg">Sécurité & Panic Mode</h1>
        </div>
      </header>

      <div className="container px-4 py-6 space-y-8">
        {/* Panic Mode Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
              <Shield className="w-5 h-5 text-destructive" />
            </div>
            <div>
              <h2 className="font-medium">Mode Panique</h2>
              <p className="text-xs text-muted-foreground">Protection d'urgence</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="glass-card rounded-xl p-4 flex items-center justify-between">
              <div className="flex-1">
                <Label htmlFor="panicEnabled" className="font-medium text-sm cursor-pointer">
                  Activer le Panic Mode
                </Label>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Bouton d'urgence toujours visible
                </p>
              </div>
              <Switch
                id="panicEnabled"
                checked={settings.panicEnabled}
                onCheckedChange={() => toggleSetting("panicEnabled")}
              />
            </div>

            <div className="glass-card rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <Smartphone className="w-5 h-5 text-muted-foreground shrink-0" />
                <div>
                  <Label htmlFor="shakeToEscape" className="font-medium text-sm cursor-pointer">
                    Secouer pour échapper
                  </Label>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Secouez le téléphone pour activer
                  </p>
                </div>
              </div>
              <Switch
                id="shakeToEscape"
                checked={settings.shakeToEscape}
                onCheckedChange={() => toggleSetting("shakeToEscape")}
              />
            </div>

            <div className="glass-card rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <ExternalLink className="w-5 h-5 text-muted-foreground" />
                <Label htmlFor="panicUrl" className="font-medium text-sm">
                  URL de redirection
                </Label>
              </div>
              <Input
                id="panicUrl"
                value={panicUrl}
                onChange={(e) => setPanicUrl(e.target.value)}
                placeholder="https://www.google.com"
                className="bg-secondary/50"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Page vers laquelle vous serez redirigé
              </p>
            </div>

            <Button 
              variant="panic" 
              className="w-full"
              onClick={testPanicMode}
            >
              <Shield className="w-4 h-4" />
              Tester le Panic Mode
            </Button>
          </div>
        </div>

        {/* App Disguise */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-medium">Déguisement de l'app</h2>
              <p className="text-xs text-muted-foreground">Icône et nom discrets</p>
            </div>
          </div>

          <div className="glass-card rounded-xl p-4 flex items-center justify-between">
            <div className="flex-1">
              <Label htmlFor="calculatorIcon" className="font-medium text-sm cursor-pointer">
                Icône "Calculatrice"
              </Label>
              <p className="text-xs text-muted-foreground mt-0.5">
                L'app apparaîtra comme une calculatrice
              </p>
            </div>
            <Switch
              id="calculatorIcon"
              checked={settings.calculatorIcon}
              onCheckedChange={() => toggleSetting("calculatorIcon")}
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-medium">Sécurité du compte</h2>
              <p className="text-xs text-muted-foreground">Mot de passe et accès</p>
            </div>
          </div>

          <Button variant="outline" className="w-full justify-start gap-3">
            <Lock className="w-4 h-4" />
            Changer le mot de passe
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}
