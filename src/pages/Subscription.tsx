import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Crown, Zap, Eye, MessageCircle, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const features = [
  { icon: Eye, text: "Voir les photos nettes autorisées" },
  { icon: Zap, text: "Likes illimités" },
  { icon: MessageCircle, text: "Messages sans match préalable" },
  { icon: Shield, text: "Mode Fantôme (visite invisible)" },
  { icon: Crown, text: "Support prioritaire" },
];

const plans = [
  { duration: "1 mois", price: "19€", perMonth: "19€/mois", popular: false },
  { duration: "3 mois", price: "45€", perMonth: "15€/mois", popular: true, savings: "-21%" },
  { duration: "12 mois", price: "108€", perMonth: "9€/mois", popular: false, savings: "-53%" },
];

export default function Subscription() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubscribe = (plan: typeof plans[0]) => {
    toast({
      title: "Paiement",
      description: `Abonnement ${plan.duration} sélectionné. Intégration Stripe requise.`,
    });
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
          <h1 className="font-serif text-lg">Devenir Premium</h1>
        </div>
      </header>

      <div className="container px-4 py-6">
        {/* Hero */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Crown className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-2xl mb-2">
            <span className="text-gold-gradient">Premium</span>
          </h1>
          <p className="text-muted-foreground text-sm">
            Débloquez toutes les fonctionnalités
          </p>
        </div>

        {/* Features */}
        <div className="glass-card rounded-xl p-6 mb-8">
          <h2 className="font-medium mb-4 text-sm">Avantages Premium</h2>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="space-y-3 mb-8">
          {plans.map((plan) => (
            <button
              key={plan.duration}
              onClick={() => handleSubscribe(plan)}
              className={`w-full glass-card rounded-xl p-4 flex items-center justify-between transition-all ${
                plan.popular 
                  ? "border-primary/50 bg-primary/5" 
                  : "hover:border-primary/30"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  plan.popular ? "border-primary bg-primary" : "border-border"
                }`}>
                  {plan.popular && <Check className="w-3 h-3 text-primary-foreground" />}
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{plan.duration}</span>
                    {plan.savings && (
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">
                        {plan.savings}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{plan.perMonth}</p>
                </div>
              </div>
              <span className="text-lg font-serif text-gold-gradient">{plan.price}</span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <Button variant="gold" size="lg" className="w-full">
          Passer Premium maintenant
        </Button>

        {/* Note */}
        <p className="text-center text-xs text-muted-foreground mt-4">
          Paiement sécurisé • Annulation à tout moment<br />
          L'intitulé "HCH-SERVICES" apparaîtra sur votre relevé
        </p>
      </div>
    </AppLayout>
  );
}
