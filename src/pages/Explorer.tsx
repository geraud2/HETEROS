import { AppLayout } from "@/components/layout/AppLayout";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal, Heart, MapPin, Users, Filter, Sparkles, Play, ChevronLeft, ChevronRight, Star, Zap, Shield, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

// Types
type ProfileLevel = "curious" | "adventurer" | "experienced";
type Gender = "man" | "woman" | "non-binary";
type LookingFor = "relationship" | "friends" | "casual" | "networking";

interface Profile {
  id: string;
  imageUrl: string;
  age: number;
  distance: string;
  level: ProfileLevel;
  name: string;
  bio: string;
  tags: string[];
  gender: Gender;
  lookingFor: LookingFor[];
  online: boolean;
  lastActive?: string;
  verified?: boolean;
  premium?: boolean;
}

interface AdCarouselItem {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  cta: string;
  badge?: string;
  gradient: string;
}

// Données mockées pour la communauté LGBTQ+
const mockProfiles: Profile[] = [
  { 
    id: "1", 
    imageUrl: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=400&h=600&fit=crop&q=80", 
    age: 28, 
    distance: "2 km", 
    level: "curious",
    name: "Lucas",
    bio: "Artiste et passionné de cinéma queer. Je cherche à rencontrer des gens intéressants pour des discussions profondes et des aventures urbaines.",
    tags: ["Art", "Cinéma", "Voyage", "Musique"],
    gender: "man",
    lookingFor: ["relationship", "friends"],
    online: true,
    verified: true
  },
  { 
    id: "2", 
    imageUrl: "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=400&h=600&fit=crop&q=80", 
    age: 32, 
    distance: "5 km", 
    level: "adventurer",
    name: "Alex",
    bio: "Sportif et aventurier. J'adore la randonnée, le vélo et découvrir de nouveaux endroits. Ouvert à des rencontres authentiques.",
    tags: ["Sport", "Randonnée", "Vélo", "Aventure"],
    gender: "man",
    lookingFor: ["friends", "casual"],
    online: false,
    lastActive: "Il y a 30 min",
    premium: true
  },
  { 
    id: "3", 
    imageUrl: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=400&h=600&fit=crop&q=80", 
    age: 25, 
    distance: "1 km", 
    level: "experienced",
    name: "Sam",
    bio: "Non-binaire et fier·e. Étudiant·e en psychologie, militant·e LGBTQ+. Je cherche des connections significatives.",
    tags: ["Psychologie", "Militantisme", "Écriture", "Yoga"],
    gender: "non-binary",
    lookingFor: ["relationship", "friends"],
    online: true,
    verified: true
  },
  { 
    id: "4", 
    imageUrl: "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?w=400&h=600&fit=crop&q=80", 
    age: 35, 
    distance: "8 km", 
    level: "curious",
    name: "Marc",
    bio: "Professionnel créatif qui aime les sorties culturelles, les bonnes tables et les conversations jusqu'au bout de la nuit.",
    tags: ["Culture", "Cuisine", "Photographie", "Voyage"],
    gender: "man",
    lookingFor: ["relationship", "casual"],
    online: true,
    premium: true
  },
  { 
    id: "5", 
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&q=80", 
    age: 29, 
    distance: "3 km", 
    level: "adventurer",
    name: "Jules",
    bio: "Entrepreneur et globe-trotter. Je suis toujours à la recherche de nouvelles inspirations et de personnes inspirantes.",
    tags: ["Entrepreneuriat", "Voyage", "Tech", "Lecture"],
    gender: "man",
    lookingFor: ["networking", "friends"],
    online: false,
    lastActive: "Il y a 2h",
    verified: true
  },
  { 
    id: "6", 
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&q=80", 
    age: 31, 
    distance: "12 km", 
    level: "experienced",
    name: "Thomas",
    bio: "Professeur de danse spécialisé en danse contemporaine. Passionné par l'expression corporelle et la communauté queer.",
    tags: ["Danse", "Art", "Fitness", "Théâtre"],
    gender: "man",
    lookingFor: ["friends", "casual"],
    online: true,
    premium: true
  },
];

// Carousel d'images publicitaires
const adCarouselItems: AdCarouselItem[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=1600&h=500&fit=crop&q=80",
    title: "Trouve l'amour authentique",
    description: "Rejoins des milliers de membres LGBTQ+ qui ont trouvé leur âme sœur sur notre plateforme",
    cta: "Créer mon profil",
    badge: "Nouveau",
    gradient: "from-purple-600/90 to-pink-600/90"
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1600&h=500&fit=crop&q=80",
    title: "Soirées exclusives",
    description: "Accès prioritaire aux événements LGBTQ+ les plus branchés de ta ville",
    cta: "Voir les événements",
    badge: "Premium",
    gradient: "from-blue-600/90 to-cyan-600/90"
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=1600&h=500&fit=crop&q=80",
    title: "Safe Space Garanti",
    description: "Notre équipe veille à créer un environnement sécurisé et inclusif pour tous",
    cta: "En savoir plus",
    badge: "Sécurisé",
    gradient: "from-green-600/90 to-emerald-600/90"
  }
];

// Filtres disponibles
const filters = [
  { id: "online", label: "En ligne", count: mockProfiles.filter(p => p.online).length },
  { id: "verified", label: "Vérifiés", count: mockProfiles.filter(p => p.verified).length },
  { id: "new", label: "Nouveaux", count: 12 },
  { id: "nearby", label: "À côté", count: mockProfiles.length },
];

// Composant Carousel
const AdCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % adCarouselItems.length);
      }, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    goToSlide((currentIndex + 1) % adCarouselItems.length);
  };

  const prevSlide = () => {
    goToSlide((currentIndex - 1 + adCarouselItems.length) % adCarouselItems.length);
  };

  return (
    <div className="relative h-[400px] rounded-2xl overflow-hidden group">
      {/* Slides */}
      {adCarouselItems.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-500 ease-in-out",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} via-black/60 to-black/40`} />
          
          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="container px-12">
              <div className="max-w-xl">
                {item.badge && (
                  <Badge className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white/30">
                    {item.badge}
                  </Badge>
                )}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {item.title}
                </h2>
                <p className="text-lg text-white/90 mb-8">
                  {item.description}
                </p>
                <Button size="lg" className="gap-2 bg-white text-black hover:bg-white/90">
                  {item.cta}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
      >
        <ChevronLeft className="w-5 h-5 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
      >
        <ChevronRight className="w-5 h-5 text-white" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {adCarouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/80"
            )}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute bottom-6 right-6">
        <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white" />
        </div>
      </div>
    </div>
  );
};

export default function Explorer() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("profiles");

  return (
    <AppLayout>
      {/* Hero Section avec Carousel */}
      <div className="container px-4 pt-6">
        <AdCarousel />
      </div>

      {/* Search Section */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/50">
        <div className="container px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Recherche par intérêts, nom, ou localisation..." 
                  className="pl-10 h-12 rounded-xl border-border/50"
                />
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  <Filter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick actions */}
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2 rounded-xl">
                <MapPin className="w-4 h-4" />
                Paris
              </Button>
              <Button variant="outline" className="gap-2 rounded-xl">
                <SlidersHorizontal className="w-4 h-4" />
                Filtres
              </Button>
              <Button className="gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
                <Sparkles className="w-4 h-4" />
                Premium
              </Button>
            </div>
          </div>

          {/* Quick Filters */}
          <ScrollArea className="mt-4">
            <div className="flex gap-2 pb-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  className="gap-2 rounded-full"
                  onClick={() => setActiveFilter(filter.id)}
                >
                  <span>{filter.label}</span>
                  <Badge variant="secondary" className="ml-1 h-5 px-1.5 min-w-[20px]">
                    {filter.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>

      {/* Main Content */}
      <main className="container px-4 py-8">
        {/* Stats et Tabs */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Explore la communauté</h2>
            <p className="text-muted-foreground">
              Découvre des personnes authentiques qui partagent tes passions
            </p>
          </div>
          
          {/* Stats */}
          <div className="flex gap-6">
            <div className="text-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <div className="text-2xl font-bold">{mockProfiles.filter(p => p.online).length}</div>
              </div>
              <div className="text-sm text-muted-foreground">En ligne</div>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-blue-500" />
                <div className="text-2xl font-bold">{mockProfiles.filter(p => p.verified).length}</div>
              </div>
              <div className="text-sm text-muted-foreground">Vérifiés</div>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <div className="text-2xl font-bold">{mockProfiles.filter(p => p.premium).length}</div>
              </div>
              <div className="text-sm text-muted-foreground">Premium</div>
            </div>
          </div>
        </div>

        {/* Profiles Grid avec design amélioré */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockProfiles.map((profile) => (
            <div 
              key={profile.id} 
              className="group relative bg-gradient-to-b from-background via-background to-secondary/20 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl p-4"
            >
              {/* Profile Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src={profile.imageUrl} 
                      alt={profile.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    {profile.online && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background bg-green-500" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{profile.name}, {profile.age}</h3>
                      {profile.verified && (
                        <Badge variant="outline" className="h-5 px-1.5">
                          <Shield className="w-3 h-3" />
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {profile.distance}
                      <span className="text-xs px-2 py-0.5 bg-secondary rounded-full">
                        {profile.level}
                      </span>
                    </div>
                  </div>
                </div>
                {profile.premium && (
                  <Sparkles className="w-5 h-5 text-yellow-500" />
                )}
              </div>

              {/* Bio */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {profile.bio}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {profile.tags.slice(0, 3).map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary" 
                    className="text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
                {profile.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{profile.tags.length - 3}
                  </Badge>
                )}
              </div>

              {/* Looking For */}
              <div className="mb-4">
                <div className="text-xs text-muted-foreground mb-2">Recherche :</div>
                <div className="flex flex-wrap gap-1">
                  {profile.lookingFor.map((looking) => (
                    <Badge 
                      key={looking} 
                      variant="outline" 
                      className="text-xs capitalize"
                    >
                      {looking === "relationship" && "💝 Relation"}
                      {looking === "friends" && "👥 Amis"}
                      {looking === "casual" && "✨ Casual"}
                      {looking === "networking" && "🤝 Réseau"}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 gap-2">
                  <Heart className="w-4 h-4" />
                  Like
                </Button>
                <Button className="flex-1 gap-2 bg-gradient-to-r from-purple-600 to-pink-600">
                  Message
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-purple-500" />
            </div>
            <h3 className="font-semibold mb-2">Espace sécurisé</h3>
            <p className="text-sm text-muted-foreground">
              Notre équipe modère toutes les interactions pour garantir ton confort et sécurité.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-semibold mb-2">Matchs instantanés</h3>
            <p className="text-sm text-muted-foreground">
              Notre algorithme intelligent te propose des profils qui correspondent vraiment à tes critères.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
            <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="font-semibold mb-2">Événements exclusifs</h3>
            <p className="text-sm text-muted-foreground">
              Accès à des rencontres, soirées et activités réservées à notre communauté.
            </p>
          </div>
        </div>

        {/* Événements */}
        <div className="bg-gradient-to-br from-background to-secondary/20 rounded-2xl border border-border/50 p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Événements à venir</h3>
              <p className="text-muted-foreground">
                Rejoins la communauté lors de nos prochaines rencontres
              </p>
            </div>
            <Button variant="outline" className="gap-2">
              Voir tout
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Soirée Queer & Chill",
                date: "Vendredi • 20h",
                location: "Le Comptoir Général",
                participants: 45,
                type: "soirée",
                image: "https://images.unsplash.com/photo-1519677100203-5f5a1c56b7b3?w=400&h=200&fit=crop&q=80"
              },
              {
                title: "Brunch LGBTQ+",
                date: "Dimanche • 11h",
                location: "Café A, Montmartre",
                participants: 25,
                type: "rencontre",
                image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=200&fit=crop&q=80"
              },
              {
                title: "Marche des fiertés",
                date: "Samedi • 14h",
                location: "Place de la République",
                participants: 120,
                type: "manifestation",
                image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=200&fit=crop&q=80"
              }
            ].map((event, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-colors">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <Badge className="absolute top-3 right-3">
                    {event.type}
                  </Badge>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2">{event.title}</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {event.participants} participants
                    </div>
                  </div>
                  <Button className="w-full mt-4 gap-2">
                    <Heart className="w-4 h-4" />
                    S'intéresser
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Final */}
      <div className="border-t border-border/50 bg-gradient-to-r from-purple-600/5 via-pink-600/5 to-purple-600/5">
        <div className="container px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Offre limitée</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Prêt à faire des rencontres authentiques ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Rejoins des milliers de membres LGBTQ+ qui ont trouvé des amitiés durables et des relations significatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Sparkles className="w-5 h-5" />
                Essayer Premium Gratuitement
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Users className="w-5 h-5" />
                Explorer la communauté
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              ✅ Sécurisé • ✅ Inclusif • ✅ 100% LGBTQ+ Friendly
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}