import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, Users, Lock, Shield, ChevronRight, ArrowLeft } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/50">
        <div className="container px-4 py-4 flex items-center gap-4">
          <Link to="/" className="p-2 -ml-2 hover:bg-secondary rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-serif text-lg">À propos de HCH</h1>
        </div>
      </header>

      <div className="container px-6 py-8 max-w-3xl mx-auto">
        {/* Main Title */}
        <section className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
            L'Espace où la Curiosité<br />
            <span className="text-gold-gradient">rencontre la Discrétion</span>
          </h1>
        </section>

        {/* Introduction */}
        <section className="mb-12">
          <p className="text-muted-foreground leading-relaxed mb-4">
            La découverte de soi ne devrait jamais être une source de stress ou d'exposition non désirée. 
            Chez <strong className="text-foreground">Heteros Curieux Home (HCH)</strong>, nous croyons que la fluidité 
            et l'exploration masculine font partie d'un cheminement personnel riche.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nous avons créé cet espace pour les hommes qui, comme vous, souhaitent explorer de nouveaux 
            horizons sans pour autant modifier leur équilibre de vie ou leur identité sociale.
          </p>
        </section>

        {/* Three Pillars */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl mb-8 text-center">
            La Promesse <span className="text-gold-gradient">HCH</span>
          </h2>

          <div className="space-y-6">
            {/* Pillar 1 */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">La Discrétion par la Technologie</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Nous savons que votre vie privée est votre bien le plus précieux. C'est pourquoi HCH 
                    est la seule plateforme qui intègre nativement le "Smart Blur". Vos photos ne sont 
                    jamais visibles par défaut. Vous gardez les clés de votre jardin secret et décidez, 
                    au cas par cas, à qui vous accordez votre confiance.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Une Communauté de "Gentlemen"</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    HCH n'est pas un site de rencontre comme les autres. C'est un club privé. 
                    Nous encourageons le respect, la patience et l'honnêteté.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl mb-2">Zéro Trace, Zéro Jugement</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    De l'icône de l'application sur votre téléphone à l'intitulé de votre abonnement 
                    sur votre relevé bancaire, tout a été pensé pour être invisible aux yeux des non-initiés.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose HCH */}
        <section className="mb-12">
          <h2 className="font-serif text-2xl mb-6">Pourquoi choisir HCH ?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Contrairement aux applications généralistes ou trop typées, HCH s'adresse spécifiquement 
            à l'homme qui ne se reconnaît pas dans les étiquettes traditionnelles.
          </p>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-center gap-3">
              <span className="text-primary">✓</span>
              Pas de swipes compulsifs
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">✓</span>
              Accompagnement personnalisé
            </li>
            <li className="flex items-center gap-3">
              <span className="text-primary">✓</span>
              Sécurité Européenne (RGPD)
            </li>
          </ul>
        </section>

        {/* Panic Mode */}
        <section className="mb-12">
          <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h3 className="font-serif text-xl mb-2">Le Mode Panique</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Un bouton d'urgence toujours accessible. Un simple geste vous redirige vers un site neutre. 
                Vous pouvez même changer l'icône de l'application en "Calculatrice" sur votre écran d'accueil.
              </p>
            </div>
          </div>
        </section>

        {/* Founder Quote */}
        <section className="mb-12 text-center py-8">
          <h2 className="font-serif text-xl mb-6 text-muted-foreground">Le Mot du Fondateur</h2>
          <blockquote className="font-serif text-lg md:text-xl italic leading-relaxed mb-4">
            "HCH est né d'un constat simple : beaucoup d'hommes ont des désirs ou des curiosités 
            qu'ils n'osent pas exprimer par peur du regard des autres. Nous avons voulu briser 
            ce tabou en offrant un outil élégant, sécurisé et surtout, totalement confidentiel. 
            <span className="text-gold-gradient">Bienvenue chez vous.</span>"
          </blockquote>
        </section>

        {/* CTA */}
        <section className="text-center pb-8">
          <Button variant="gold" size="xl" asChild>
            <Link to="/explorer">
              Rejoindre le Cercle Privé
              <ChevronRight className="w-5 h-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}
