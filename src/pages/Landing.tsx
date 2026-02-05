import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sparkles, Shield, Lock, Users, MessageSquare,
  VenetianMask, Crown, Gem, Star, Zap, Key,
  Target, Globe, ArrowRight, Heart, Trophy,
  Settings, Calendar, Clock, ShieldCheck,
  CheckCircle,HelpCircle, Award, Diamond, Rocket, Eye,
  Compass, MapPin, Mail, Phone, Video,
  Palette, Wine, TrendingUp, ChevronDown,
  Menu, X, Globe as GlobeIcon, Users as UsersIcon,
  Briefcase, Car, Plane, Gamepad2, Music,
  Camera, TrendingUp as ChartUp, Gift,
  Shield as ShieldIcon, CreditCard, Headphones,
  Coffee, Moon, Sun, Cloud, Wind, Tag,
  Hotel, Wine as WineIcon, Music2, ChefHat,
  Mountain, Sailboat, Castle, Champagne,
  Camera as CameraIcon, UsersRound, Gift as GiftIcon
} from "lucide-react";

const heroImages = [
  "/VRAI.jpg",
  "/H45.jpg",
];

// Noms de fichiers pour vos images - À REMPLACER PAR VOS PROPRES IMAGES
const eventImages = [
  "/event-gala.jpg",         // Gala d'hiver
  "/event-yacht.jpg",        // Croisière yacht
  "/event-dinner.jpg",       // Dîner secret
  "/event-chateau.jpg",      // Château vin
  "/event-art.jpg",          // Soirée art
  "/event-retreat.jpg",      // Retraite montagne
];

export default function Landing() {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [counters, setCounters] = useState({
    members: 0,
    events: 0,
    cities: 0
  });
  const [hoveredCard, setHoveredCard] = useState(null);

  // Fonction pour rediriger vers /auth
  const redirectToAuth = () => {
    navigate('/auth');
  };

  useEffect(() => {
    // Carousel automatique
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % heroImages.length);
    }, 4000);

    // Animation des compteurs
    const animateCounters = () => {
      let current = { members: 0, events: 0, cities: 0 };
      const target = { members: 2784, events: 156, cities: 32 };
      const increment = { members: 25, events: 3, cities: 1 };
      
      const timer = setInterval(() => {
        current = {
          members: Math.min(current.members + increment.members, target.members),
          events: Math.min(current.events + increment.events, target.events),
          cities: Math.min(current.cities + increment.cities, target.cities)
        };
        
        setCounters(current);
        
        if (current.members === target.members && 
            current.events === target.events && 
            current.cities === target.cities) {
          clearInterval(timer);
        }
      }, 20);
    };

    setTimeout(animateCounters, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Section "Notre Histoire" - Deux hommes d'affaires
  const ourStory = {
    title: "L'Union de Deux Visions",
    description: "HCH Élite est né de la rencontre entre deux entrepreneurs visionnaires, Henri et Charles, qui partageaient une conviction commune : l'excellence mérite son propre espace.",
    points: [
      "Fondé en 2020 par deux entrepreneurs du CAC40",
      "Vision : créer un espace où l'excellence rencontre l'excellence",
      "Mission : redéfinir les standards des cercles privés",
      "Valeurs : discrétion, excellence, authenticité"
    ],
    image: "/founders.jpg" // Image des deux fondateurs
  };

  // Événements VIP avec images
  const vipEvents = [
    {
      id: 1,
      title: "Gala d'Hiver à Courchevel",
      date: "15-18 Décembre 2024",
      location: "Courchevel 1850, France",
      description: "Week-end exclusif dans les Alpes françaises avec soirée privée, dégustation de vins rares et networking en petit comité.",
      attendees: "25 places maximum",
      price: "VIP Only",
      icon: <Mountain className="w-5 h-5" />,
      image: eventImages[0],
      highlights: ["Dîner 3 étoiles", "Hélicoptère privé", "Spa luxe"]
    },
    {
      id: 2,
      title: "Croisière Privée Méditerranée",
      date: "20-25 Juillet 2024",
      location: "Côte d'Azur - Sardaigne",
      description: "Croisière exclusive à bord d'un yacht de luxe avec arrêts dans les plus belles criques méditerranéennes.",
      attendees: "12 cabines seulement",
      price: "Sur invitation",
      icon: <Sailboat className="w-5 h-5" />,
      image: eventImages[1],
      highlights: ["Yacht privé", "Chef personnel", "Plages secrètes"]
    },
    {
      id: 3,
      title: "Dîner Secrets de Paris",
      date: "Tous les mois",
      location: "Paris - Lieux secrets",
      description: "Dîners intimistes dans des lieux exceptionnels de Paris, de l'appartement haussmannien à l'atelier d'artiste.",
      attendees: "8-10 convives",
      price: "Membres uniquement",
      icon: <ChefHat className="w-5 h-5" />,
      image: eventImages[2],
      highlights: ["Lieux confidentiels", "Chefs étoilés", "Vins d'exception"]
    },
    {
      id: 4,
      title: "Week-end Châteaux & Vins",
      date: "5-7 Avril 2024",
      location: "Bordeaux - Vallée de la Loire",
      description: "Découverte des plus beaux châteaux viticoles avec dégustations privées et rencontres avec les propriétaires.",
      attendees: "15 places",
      price: "Premium",
      icon: <Castle className="w-5 h-5" />,
      image: eventImages[3],
      highlights: ["Châteaux privés", "Millésimes rares", "Rencontres propriétaires"]
    },
    {
      id: 5,
      title: "Soirée Art Contemporain",
      date: "28 Mars 2024",
      location: "Fondation privée, Paris 16ème",
      description: "Vernissage exclusif d'une collection privée suivie d'une vente aux enchères caritative.",
      attendees: "30 invités",
      price: "Invitation requise",
      icon: <Palette className="w-5 h-5" />,
      image: eventImages[4],
      highlights: ["Collection privée", "Artistes présents", "Enchères caritatives"]
    },
    {
      id: 6,
      title: "Retraite Entrepreneuriale",
      date: "10-13 Mai 2024",
      location: "Val Thorens - Refuge privé",
      description: "Retraite en altitude combinant réflexion stratégique, activités de plein air et sessions de mentoring.",
      attendees: "20 entrepreneurs",
      price: "Sur sélection",
      icon: <Target className="w-5 h-5" />,
      image: eventImages[5],
      highlights: ["Coaching VIP", "Activités montagne", "Networking ciblé"]
    }
  ];

  // Données enrichies
  const eliteBenefits = [
    {
      icon: <Crown className="w-5 h-5" />,
      title: "Accès VIP Exclusif",
      description: "Événements privés avec personnalités influentes",
      color: "from-amber-500 to-yellow-500",
      stats: "500+ événements/an"
    },
    {
      icon: <GlobeIcon className="w-5 h-5" />,
      title: "Réseau Global",
      description: "Connectez-vous avec l'élite dans 32 villes mondiales",
      color: "from-blue-500 to-cyan-500",
      stats: "32 villes"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Opportunités Business",
      description: "Partenariats et collaborations exclusives",
      color: "from-emerald-500 to-green-500",
      stats: "120M€ de deals"
    },
    {
      icon: <Gift className="w-5 h-5" />,
      title: "Avantages Exclusifs",
      description: "Offres partenaires luxe, voyages privés, conciergerie 24/7",
      color: "from-purple-500 to-pink-500",
      stats: "150+ partenaires"
    }
  ];

  const eliteExperiences = [
    {
      category: "Luxe & Confort",
      experiences: [
        { name: "Jet Privé", icon: <Plane className="w-4 h-4" />, spots: "Limited" },
        { name: "Yacht Charter", icon: <Car className="w-4 h-4" />, spots: "Exclusive" },
        { name: "Spa Privé", icon: <Wind className="w-4 h-4" />, spots: "VIP Only" }
      ]
    },
    {
      category: "Business & Networking",
      experiences: [
        { name: "Mastermind Groups", icon: <UsersIcon className="w-4 h-4" />, spots: "10 seats" },
        { name: "Investor Dinners", icon: <Coffee className="w-4 h-4" />, spots: "15 seats" },
        { name: "Startup Pitches", icon: <ChartUp className="w-4 h-4" />, spots: "20 spots" }
      ]
    },
    {
      category: "Lifestyle & Culture",
      experiences: [
        { name: "Art Collection Tours", icon: <Palette className="w-4 h-4" />, spots: "8 spots" },
        { name: "Wine Masterclass", icon: <Wine className="w-4 h-4" />, spots: "12 spots" },
        { name: "Concert Backstage", icon: <Music className="w-4 h-4" />, spots: "5 spots" }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Alexandre Dubois",
      role: "CEO Tech Unicorn",
      text: "HCH Élite a transformé mon réseau. Les opportunités business générées valent 100x l'investissement.",
      rating: 5,
      joined: "2021",
      avatar: "AD",
      color: "from-pink-500 to-rose-600",
      company: "TechSphere Inc."
    },
    {
      name: "Thomas Leroy",
      role: "Hedge Fund Manager",
      text: "La discrétion et la qualité des membres sont exceptionnelles. Enfin un cercle qui comprend nos besoins.",
      rating: 5,
      joined: "2020",
      avatar: "TL",
      color: "from-blue-500 to-cyan-600",
      company: "Capital Partners"
    },
    {
      name: "Julien Moreau",
      role: "Family Office Director",
      text: "Le service conciergerie a sauvé ma soirée à Monaco. Niveau de service incomparable.",
      rating: 5,
      joined: "2022",
      avatar: "JM",
      color: "from-amber-500 to-orange-600",
      company: "Heritage Management"
    }
  ];

  const membershipLevels = [
    {
      name: "ÉLÉGANT",
      price: "299€",
      period: "par mois",
      icon: <Star className="w-5 h-5" />,
      features: [
        "2 événements VIP mensuels",
        "Accès réseau de base",
        "Support prioritaire 12h/jour",
        "Newsletter exclusive",
        "Invitations limitées"
      ],
      badge: "Starter",
      color: "from-gray-100 to-gray-50",
      popular: false
    },
    {
      name: "PRESTIGE",
      price: "699€",
      period: "par mois",
      icon: <Crown className="w-5 h-5" />,
      features: [
        "Accès illimité aux événements",
        "Réseau global complet",
        "Conciergerie 24/7",
        "Avantages partenaires",
        "Invitations +3",
        "Accès Mastermind"
      ],
      badge: "POPULAIRE",
      color: "from-amber-50 via-orange-50 to-yellow-50",
      popular: true
    },
    {
      name: "LEGEND",
      price: "1,499€",
      period: "par mois",
      icon: <Diamond className="w-5 h-5" />,
      features: [
        "Tout Prestige +",
        "Directeur personnel dédié",
        "Accès événements sur mesure",
        "Jet privé prioritaire",
        "Introductions VIP garanties",
        "Accès backstage exclusif",
        "Sécurité personnalisée"
      ],
      badge: "ULTIMATE",
      color: "from-purple-50 via-violet-50 to-pink-50",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section - Sans Navigation */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6">
        {/* Background Carousel avec overlay */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
                style={{ filter: 'brightness(0.6)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="container mx-auto relative z-10 max-w-6xl">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/30 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-pink-300" />
              <span className="text-xs font-bold text-white tracking-wider">
                ACCÈS STRICTEMENT SUR INVITATION • 98% TAUX D'ACCEPTATION
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              <span className="block text-white">
                VOTRE PASSPORT VERS
              </span>
              <span className="block bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300 bg-clip-text text-transparent">
                L'EXCELLENCE ABSOLUE
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
              Rejoignez le cercle le plus exclusif d'hommes d'affaires, leaders et visionnaires. 
              <span className="block text-pink-200 font-semibold mt-2">
                Où 1% des opportunités rencontrent 0,1% des hommes.
              </span>
            </p>

            {/* Stats en temps réel */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
              {[
                { value: counters.members, label: "Membres Élite", icon: <Users className="w-4 h-4" /> },
                { value: counters.events, label: "Événements Exclusifs", icon: <Calendar className="w-4 h-4" /> },
                { value: counters.cities, label: "Villes Globales", icon: <MapPin className="w-4 h-4" /> }
              ].map((stat, index) => (
                <div key={index} className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    {stat.icon}
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                      {index === 0 && '+'}
                    </div>
                  </div>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-3 text-base font-semibold shadow-lg shadow-pink-500/25"
                onClick={redirectToAuth}
              >
                <span className="flex items-center gap-2">
                  <span>DÉMARRER VOTRE SÉLECTION</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-3 backdrop-blur-sm"
                onClick={redirectToAuth}
              >
                <span className="flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  <span>DÉCOUVRIR NOTRE MONDE</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Notre Histoire - Deux Fondateurs */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image des fondateurs */}
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={ourStory.image} 
                  alt="Henri et Charles - Fondateurs de HCH Élite" 
                  className="w-full h-64 lg:h-96 object-cover bg-gray-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-light">Henri & Charles</div>
                  <div className="text-lg font-bold">Fondateurs HCH Élite</div>
                </div>
              </div>
            </div>

            {/* Contenu */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gray-900">NOTRE </span>
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  HISTOIRE
                </span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {ourStory.description}
              </p>
              <div className="space-y-4 mb-8">
                {ourStory.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              <Button
                onClick={redirectToAuth}
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-6 py-3"
              >
                <span className="flex items-center gap-2">
                  <UsersRound className="w-4 h-4" />
                  <span>Rejoindre notre histoire</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages Elite */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">LES AVANTAGES </span>
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                D'ÊTRE ÉLITE
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Plus qu'un réseau, un écosystème conçu pour votre ascension
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eliteBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4`}>
                  <div className="text-white">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-sm font-semibold text-gray-500">{benefit.stats}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-3"
              onClick={redirectToAuth}
            >
              <span className="flex items-center gap-2">
                <Gem className="w-5 h-5" />
                <span>ACCÉDER AUX AVANTAGES</span>
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Section Événements VIP avec images */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">ÉVÉNEMENTS </span>
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                VIP EXCLUSIFS
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des expériences uniques créées exclusivement pour nos membres
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {vipEvents.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Image de l'événement */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                      {event.icon}
                      <span className="text-sm font-semibold text-gray-900">{event.price}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded">
                      <span className="text-white text-sm">{event.date}</span>
                    </div>
                  </div>
                </div>

                {/* Contenu de l'événement */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
                  </div>
                  
                  <div className="flex items-center text-gray-600 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Participants : {event.attendees}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.highlights.map((highlight, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gradient-to-r from-pink-50 to-rose-50 text-pink-700 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-pink-200 text-pink-600 hover:bg-pink-50 hover:text-pink-700"
                    onClick={redirectToAuth}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    S'inscrire à l'événement
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action pour les événements */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3"
              onClick={redirectToAuth}
            >
              <Calendar className="w-5 h-5 mr-2" />
              ACCÉDER AUX ÉVÉNEMENTS
            </Button>
          </div>
        </div>
      </section>

      {/* Section Expériences */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              EXPÉRIENCES <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">SUR MESURE</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des moments uniques réservés à notre communauté exclusive
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {eliteExperiences.map((category, catIndex) => (
              <div
                key={catIndex}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.category}</h3>
                <div className="space-y-4">
                  {category.experiences.map((exp, expIndex) => (
                    <div
                      key={expIndex}
                      className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-pink-100 to-rose-100 flex items-center justify-center">
                          <div className="text-pink-600">
                            {exp.icon}
                          </div>
                        </div>
                        <span className="font-medium text-gray-900">{exp.name}</span>
                      </div>
                      <span className="text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                        {exp.spots}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3"
              onClick={redirectToAuth}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              RÉSERVER UNE EXPÉRIENCE
            </Button>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              CE QUE DISENT <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">NOS MEMBRES</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Les leaders qui redéfinissent les standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700/50"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${testimonial.color} flex items-center justify-center text-white font-bold text-xl`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    <div className="text-xs text-gray-500 mt-1">{testimonial.company}</div>
                    <div className="text-xs text-gray-600">Membre depuis {testimonial.joined}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">Verified Member</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3"
              onClick={redirectToAuth}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              DEVENIR LE PROCHAIN TÉMOIGNAGE
            </Button>
          </div>
        </div>
      </section>

      {/* Section Adhésion */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-900">VOTRE ACCÈS À </span>
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                L'EXCELLENCE
              </span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choisissez votre niveau d'adhésion. Chaque niveau ouvre des portes différentes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {membershipLevels.map((level, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${level.color} rounded-2xl p-6 border-2 ${
                  level.popular ? 'border-amber-500 shadow-2xl' : 'border-gray-200'
                }`}
              >
                {level.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold shadow-lg">
                      {level.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{level.name}</h3>
                    <div className="text-gray-600 text-sm">Niveau d'entrée</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/50 shadow-sm">
                    {level.icon}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{level.price}</span>
                    <span className="text-gray-600 ml-2">{level.period}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Engagement annuel recommandé</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {level.features.map((feature, i) => (
                    <li 
                      key={i}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 text-base font-semibold ${
                    level.popular
                      ? 'bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white shadow-lg shadow-pink-500/25'
                      : 'bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white'
                  }`}
                  onClick={redirectToAuth}
                >
                  {level.popular ? (
                    <span className="flex items-center justify-center gap-2">
                      <span>CHOISIR CE NIVEAU</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <span>SÉLECTIONNER</span>
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              variant="outline"
              className="border-pink-600 text-pink-600 hover:bg-pink-50 px-8 py-3"
              onClick={redirectToAuth}
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5" />
                <span>BESOIN D'AIDE POUR CHOISIR ?</span>
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500">
        <div className="container mx-auto max-w-6xl">
          <div className="rounded-2xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              VOTRE PLACE VOUS ATTEND
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
              Postulez aujourd'hui et bénéficiez d'un entretien personnel avec notre directeur des admissions.
              <span className="block font-bold mt-2 text-xl">Seulement 3 places disponibles ce mois-ci.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-3 text-base font-bold shadow-lg"
                onClick={redirectToAuth}
              >
                <span className="flex items-center gap-2">
                  <span>POSTULER MAINTENANT</span>
                  <Sparkles className="w-4 h-4" />
                </span>
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 backdrop-blur-sm"
                onClick={redirectToAuth}
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>PARLER À UN CONSEILLER</span>
                </span>
              </Button> */}
            </div>
            <div className="mt-8 text-white/80 text-sm flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Entretien personnalisé</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Confidentialité garantie</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Réponse sous 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                  <VenetianMask className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">HCH ÉLITE</span>
              </div>
              <p className="text-gray-400 text-sm">
                Fondé par Henri & Charles en 2020
                <br />
                Redéfinir l'excellence sociale
              </p>
            </div>

            {[
              { 
                title: "ACCÈS", 
                links: ["Processus d'Admission", "Critères d'Éligibilité", "FAQ Élite", "Calendrier Événements"] 
              },
              { 
                title: "EXPÉRIENCE", 
                links: ["Événements", "Réseau", "Avantages", "Témoignages"] 
              },
              { 
                title: "LEGAL", 
                links: ["Confidentialité", "Conditions", "Mentions", "Contact"] 
              }
            ].map((section, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-bold text-white">{section.title}</h4>
                <div className="space-y-2">
                  {section.links.map((link, i) => (
                    <button
                      key={i}
                      onClick={redirectToAuth}
                      className="block text-gray-400 hover:text-white text-sm transition-colors text-left w-full"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 HCH Élite Circle. Tous droits réservés. Accès strictement contrôlé.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500 flex-wrap">
              <span>🌐 Disponible dans 32 pays</span>
              <span>•</span>
              <span>🔒 256-bit Encryption</span>
              <span>•</span>
              <span>⭐ 4.9/5 Satisfaction</span>
              <span>•</span>
              <span>👥 2 Fondateurs</span>
            </div>
            <div className="mt-6">
              <Button 
                size="sm"
                className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white"
                onClick={redirectToAuth}
              >
                <span className="flex items-center gap-2">
                  <VenetianMask className="w-4 h-4" />
                  <span>DEVENIR MEMBRE</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}