import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Users, Lock, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-silhouette.jpg";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container px-6 py-20 text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <h2 className="text-primary text-lg font-medium tracking-[0.3em] uppercase">
              HCH
            </h2>
          </div>

          {/* Main Title */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 animate-fade-in animation-delay-200">
            L'Espace où la Curiosité<br />
            <span className="text-gold-gradient">rencontre la Discrétion</span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in animation-delay-400">
            Le premier club privé d'exploration masculine. Anonymat garanti, 
            photos floutées et discrétion totale.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
            <Button variant="gold" size="xl" asChild>
              <Link to="/auth">
                Rejoindre le Cercle Privé
                <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="goldOutline" size="lg" asChild>
              <Link to="/about">
                En savoir plus
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
            Nos Trois <span className="text-gold-gradient">Piliers</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="glass-card rounded-2xl p-8 text-center animate-slide-up">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-4">Smart Blur</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Vos photos sont automatiquement floutées. Vous décidez qui peut les voir en envoyant une clé d'accès.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card rounded-2xl p-8 text-center animate-slide-up animation-delay-200">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-4">Club de Gentlemen</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Une communauté bienveillante où le respect, la patience et l'honnêteté sont les valeurs fondamentales.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card rounded-2xl p-8 text-center animate-slide-up animation-delay-400">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Lock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl mb-4">Zéro Trace</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                De l'icône discrète à l'intitulé bancaire neutre, tout est conçu pour être invisible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Panic Mode Feature */}
      <section className="py-20 px-6 bg-card/50">
        <div className="container max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-2xl bg-destructive/10 flex items-center justify-center shrink-0">
              <Shield className="w-10 h-10 text-destructive" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl mb-3">Mode Panique</h3>
              <p className="text-muted-foreground leading-relaxed">
                Un bouton d'urgence toujours accessible. En cas de besoin, un simple geste vous redirige 
                vers un site neutre. Changez même l'icône de l'application en "Calculatrice".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 px-6">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Commencez <span className="text-gold-gradient">Gratuitement</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Créez votre profil et explorez. Passez Premium pour débloquer toutes les fonctionnalités.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free */}
            <div className="glass-card rounded-2xl p-8 border-border/50">
              <h4 className="text-lg font-medium mb-2">Gratuit</h4>
              <p className="text-3xl font-serif text-gold-gradient mb-6">0€</p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li>✓ Profil avec photos floutées</li>
                <li>✓ 5 likes par jour</li>
                <li>✓ Messagerie avec match</li>
                <li>✓ Accès au Guide</li>
              </ul>
              <Button variant="outline" className="w-full">
                Commencer
              </Button>
            </div>

            {/* Premium */}
            <div className="glass-card rounded-2xl p-8 border-primary/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-4 py-1 rounded-bl-lg font-medium">
                Recommandé
              </div>
              <h4 className="text-lg font-medium mb-2">Premium</h4>
              <p className="text-3xl font-serif text-gold-gradient mb-6">19€<span className="text-sm text-muted-foreground">/mois</span></p>
              <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                <li>✓ Photos nettes autorisées</li>
                <li>✓ Likes illimités</li>
                <li>✓ Messages sans match</li>
                <li>✓ Mode Fantôme</li>
                <li>✓ Support prioritaire</li>
              </ul>
              <Button variant="gold" className="w-full">
                Devenir Premium
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-xl md:text-2xl italic leading-relaxed mb-6">
            "HCH est né d'un constat simple : beaucoup d'hommes ont des désirs ou des curiosités 
            qu'ils n'osent pas exprimer par peur du regard des autres. Nous avons voulu briser 
            ce tabou en offrant un outil élégant, sécurisé et surtout, totalement confidentiel."
          </blockquote>
          <p className="text-primary font-medium">— Le Fondateur</p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-6">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            Bienvenue chez vous.
          </h2>
          <Button variant="gold" size="xl" asChild>
            <Link to="/auth">
              Rejoindre le Cercle Privé
              <ChevronRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50">
        <div className="container max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 HCH Services. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-primary transition-colors">À propos</Link>
            <Link to="/guide" className="hover:text-primary transition-colors">Le Guide</Link>
            <a href="#" className="hover:text-primary transition-colors">Confidentialité</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
