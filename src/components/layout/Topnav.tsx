import { Link, useLocation, useNavigate } from "react-router-dom";
import { Compass, KeyRound, MessageCircle, BookOpen, User, Search, Bell, Menu, Sparkles, Heart, MapPin, Filter, Users, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navItems = [
  { 
    path: "/explorer", 
    label: "Explorer", 
    icon: Compass,
    description: "Découvre la communauté"
  },
  { 
    path: "/access", 
    label: "Accès", 
    icon: KeyRound,
    description: "Événements exclusifs"
  },
  { 
    path: "/messages", 
    label: "Messages", 
    icon: MessageCircle,
    notification: 3
  },
  { 
    path: "/guide", 
    label: "Guide", 
    icon: BookOpen,
    description: "Ressources & sécurité"
  },
];

export function TopNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo et navigation principale */}
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className="flex items-center gap-2 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="relative h-10 w-10 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
              </div>
              {/* <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  QueerConnect
                </span>
                <span className="text-xs text-muted-foreground -mt-1">Safe Space</span>
              </div> */}
            </Link>

            {/* Navigation items - Desktop */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname.startsWith(item.path);
                const Icon = item.icon;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "group relative flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-300",
                      isActive
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    )}
                  >
                    <Icon className={cn(
                      "w-4 h-4 transition-transform duration-300",
                      isActive && "scale-110"
                    )} />
                    <span className="font-medium">{item.label}</span>
                    
                    {item.notification && (
                      <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 text-white border-2 border-background">
                        {item.notification}
                      </Badge>
                    )}
                    
                    {/* Animated underline */}
                    {isActive && (
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-pulse" />
                    )}
                  </Link>
                );
              })}

              {/* Menu déroulant Explore */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="gap-2 px-4 py-2.5 rounded-xl bg-transparent hover:bg-accent/50 data-[state=open]:bg-primary/5">
                      <Filter className="w-4 h-4" />
                      Catégories
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[400px] p-4">
                        <div className="grid grid-cols-2 gap-3">
                          <Link
                            to="/explorer?filter=online"
                            className="group flex flex-col gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/30 transition-all"
                          >
                            <div className="flex items-center gap-2">
                              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                                <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
                              </div>
                              <span className="font-medium">En ligne</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {Math.floor(Math.random() * 50) + 20} personnes actives
                            </p>
                          </Link>
                          
                          <Link
                            to="/explorer?filter=verified"
                            className="group flex flex-col gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/30 transition-all"
                          >
                            <div className="flex items-center gap-2">
                              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                <Shield className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                              </div>
                              <span className="font-medium">Vérifiés</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Profils authentifiés
                            </p>
                          </Link>
                          
                          <Link
                            to="/explorer?filter=nearby"
                            className="group flex flex-col gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/30 transition-all"
                          >
                            <div className="flex items-center gap-2">
                              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                                <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                              </div>
                              <span className="font-medium">À côté</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Proches de ta position
                            </p>
                          </Link>
                          
                          <Link
                            to="/explorer?filter=premium"
                            className="group flex flex-col gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-accent/30 transition-all"
                          >
                            <div className="flex items-center gap-2">
                              <div className="p-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30">
                                <Sparkles className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                              </div>
                              <span className="font-medium">Premium</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              Membres exclusifs
                            </p>
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>

          {/* Barre de recherche et actions */}
          <div className="flex items-center gap-3">
            {/* Barre de recherche - avec effet glassmorphism */}
            {/* <div className="hidden lg:block">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground transition-colors group-hover:text-primary" />
                <Input
                  placeholder="Rechercher des personnes, intérêts..."
                  className="pl-10 w-64 bg-white/5 border-border/50 focus:border-primary/50 focus:bg-white/10 backdrop-blur-sm transition-all duration-300"
                />
                <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:inline-flex h-5 select-none items-center gap-1 rounded border border-border/50 bg-muted px-1.5 font-mono text-[10px] font-medium opacity-60">
                  ⌘K
                </kbd>
              </div>
            </div> */}

            {/* <Separator orientation="vertical" className="h-6 hidden lg:block" /> */}

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Notification */}
              <Button
                variant="ghost"
                size="icon"
                className="relative h-10 w-10 rounded-full hover:bg-accent/50"
                onClick={() => navigate("/notifications")}
              >
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-0.5 -right-0.5 h-5 w-5 p-0 flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 text-white border-2 border-background">
                  5
                </Badge>
              </Button>

              {/* Premium CTA */}
              <Button
                variant="ghost"
                className="hidden md:flex gap-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 text-purple-600 dark:text-purple-400 border border-purple-500/20"
                onClick={() => navigate("/premium")}
              >
                <Sparkles className="w-4 h-4" />
                <span className="hidden lg:inline font-medium">Premium</span>
              </Button>

              {/* Quick Stats */}
              <div className="hidden xl:flex items-center gap-3 px-3 py-2 rounded-xl bg-accent/30 border border-border/50">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-sm font-medium">124</span>
                </div>
                <div className="h-4 w-px bg-border/50" />
                <div className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-pink-500" />
                  <span className="text-sm font-medium">42</span>
                </div>
                <div className="h-4 w-px bg-border/50" />
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-sm font-medium">Paris</span>
                </div>
              </div>

              {/* Menu profil */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className="relative h-10 w-10 rounded-full p-0 overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity" />
                    <div className="relative h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
                      J
                    </div>
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background bg-green-500 animate-pulse" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-64 rounded-xl border-border/50 shadow-xl"
                >
                  <div className="p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative">
                        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                          J
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-background bg-green-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold truncate">Julien Martin</p>
                        <div className="flex items-center gap-2">
                          <Badge className="text-xs bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-700 dark:text-yellow-400 border-yellow-500/30">
                            <Sparkles className="w-3 h-3 mr-1" />
                            Premium
                          </Badge>
                          <span className="text-xs text-muted-foreground truncate">
                            Paris, France
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="text-center p-2 rounded-lg bg-accent/30">
                        <div className="font-bold text-primary">24</div>
                        <div className="text-xs text-muted-foreground">Matchs</div>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-accent/30">
                        <div className="font-bold text-pink-500">156</div>
                        <div className="text-xs text-muted-foreground">Likes</div>
                      </div>
                      <div className="text-center p-2 rounded-lg bg-accent/30">
                        <div className="font-bold text-green-500">89%</div>
                        <div className="text-xs text-muted-foreground">Compatibilité</div>
                      </div>
                    </div>
                  </div>
                  
                  <DropdownMenuSeparator className="bg-border/50" />
                  
                  <div className="p-2">
                    <DropdownMenuItem 
                      onClick={() => navigate("/profile")}
                      className="flex items-center gap-2 rounded-lg py-2.5 cursor-pointer"
                    >
                      <User className="w-4 h-4" />
                      <span>Mon profil</span>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem 
                      onClick={() => navigate("/settings")}
                      className="flex items-center gap-2 rounded-lg py-2.5 cursor-pointer"
                    >
                      <KeyRound className="w-4 h-4" />
                      <span>Paramètres</span>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem 
                      onClick={() => navigate("/guide")}
                      className="flex items-center gap-2 rounded-lg py-2.5 cursor-pointer"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Guide de sécurité</span>
                    </DropdownMenuItem>
                    
                    <DropdownMenuSeparator className="bg-border/50 my-1" />
                    
                    <DropdownMenuItem className="flex items-center gap-2 rounded-lg py-2.5 cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30">
                      Déconnexion
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Menu mobile */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="lg:hidden h-10 w-10 rounded-full"
                  >
                    <Menu className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-72 rounded-xl border-border/50 shadow-xl"
                >
                  <DropdownMenuLabel className="text-xs text-muted-foreground font-normal px-4 pt-3 pb-2">
                    Navigation rapide
                  </DropdownMenuLabel>
                  
                  <div className="px-2 space-y-1">
                    {navItems.map((item) => {
                      const Icon = item.icon;
                      const isActive = location.pathname.startsWith(item.path);
                      
                      return (
                        <DropdownMenuItem
                          key={item.path}
                          onClick={() => navigate(item.path)}
                          className={cn(
                            "flex items-center justify-between gap-2 rounded-lg py-3 px-3 cursor-pointer",
                            isActive && "bg-accent"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "p-2 rounded-lg",
                              isActive 
                                ? "bg-primary/10 text-primary" 
                                : "bg-accent/50 text-muted-foreground"
                            )}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="font-medium">{item.label}</div>
                              {item.description && (
                                <div className="text-xs text-muted-foreground">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </div>
                          {item.notification && (
                            <Badge className="bg-gradient-to-r from-pink-500 to-rose-500">
                              {item.notification}
                            </Badge>
                          )}
                        </DropdownMenuItem>
                      );
                    })}
                  </div>
                  
                  <DropdownMenuSeparator className="my-2 bg-border/50" />
                  
                  <div className="px-2 space-y-1">
                    <DropdownMenuItem 
                      onClick={() => navigate("/search")}
                      className="flex items-center gap-3 rounded-lg py-3 px-3 cursor-pointer"
                    >
                      <Search className="w-4 h-4" />
                      <span>Recherche avancée</span>
                    </DropdownMenuItem>
                    
                    <DropdownMenuItem 
                      onClick={() => navigate("/premium")}
                      className="flex items-center gap-3 rounded-lg py-3 px-3 cursor-pointer"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                        <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <div className="font-medium">Passer Premium</div>
                        <div className="text-xs text-muted-foreground">
                          Débloque toutes les fonctionnalités
                        </div>
                      </div>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Search bar mobile */}
        <div className="lg:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher..."
              className="pl-10 bg-white/5 border-border/50 focus:border-primary/50"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
            >
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}