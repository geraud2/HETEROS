import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { 
  ArrowLeft, 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  ChevronRight,
  Shield,
  Eye,
  CreditCard,
  Users
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    question: "Comment fonctionne le Smart Blur ?",
    answer: "Toutes les photos téléchargées sont automatiquement floutées. Pour qu'un autre membre puisse voir votre photo nette, vous devez lui envoyer une 'Clé d'accès' depuis la section Accès. Les membres Premium peuvent voir les photos nettes des personnes qui leur ont accordé l'accès.",
    icon: Eye,
  },
  {
    question: "Qu'est-ce que le Mode Panique ?",
    answer: "Le Mode Panique est un bouton d'urgence (le bouclier rouge) qui vous redirige instantanément vers un site neutre (Google par défaut). Vous pouvez aussi secouer votre téléphone pour l'activer. Personnalisez l'URL de redirection dans Paramètres > Sécurité.",
    icon: Shield,
  },
  {
    question: "Comment fonctionne la facturation ?",
    answer: "Tous les paiements sont discrets. L'intitulé 'HCH-SERVICES' apparaîtra sur votre relevé bancaire, sans mention de la nature de l'application. Vous pouvez annuler votre abonnement à tout moment.",
    icon: CreditCard,
  },
  {
    question: "Que signifient les niveaux de curiosité ?",
    answer: "Les badges indiquent votre niveau d'expérience : 🌱 Curieux (débutant), 🧭 Aventurier (quelques expériences), ⭐ Expérimenté (à l'aise). Vous pouvez modifier votre niveau dans votre profil.",
    icon: Users,
  },
];

export default function Help() {
  const navigate = useNavigate();

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
          <h1 className="font-serif text-lg">Aide & Support</h1>
        </div>
      </header>

      <div className="container px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-2xl mb-2">Comment pouvons-nous vous aider ?</h1>
          <p className="text-muted-foreground text-sm">
            Trouvez des réponses ou contactez-nous
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-8">
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Questions fréquentes
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-xl border-border/50 px-4"
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3 text-left">
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-sm">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Nous contacter
          </h2>
          <div className="space-y-2">
            <a
              href="mailto:support@hch-services.com"
              className="glass-card rounded-xl p-4 flex items-center justify-between group hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-muted-foreground" />
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-xs text-muted-foreground">support@hch-services.com</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </a>

            <Button variant="gold" className="w-full gap-2">
              <MessageCircle className="w-4 h-4" />
              Chat en direct (Premium)
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
