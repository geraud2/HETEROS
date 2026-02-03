import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, ArrowLeft, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const validateForm = (): string | null => {
    if (!email.trim()) return "L'email est requis";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Email invalide";
    if (!password) return "Le mot de passe est requis";
    if (password.length < 6) return "Le mot de passe doit contenir au moins 6 caractères";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: validationError,
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = isLogin 
        ? await login(email, password)
        : await signup(email, password, username);

      if (result.success) {
        toast({
          title: isLogin ? "Connexion réussie" : "Bienvenue dans votre jardin secret",
          description: isLogin 
            ? "Heureux de vous revoir" 
            : "Votre compte a été créé avec succès",
        });
        navigate("/explorer");
      } else {
        toast({
          variant: "destructive",
          title: "Erreur",
          description: result.error,
        });
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="p-4">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm">Retour</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-card border border-border/50 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-2xl font-serif text-gold-gradient font-bold">HCH</span>
            </div>
            <h1 className="font-serif text-2xl mb-2">
              {isLogin ? "Bon retour" : "Rejoindre le Cercle"}
            </h1>
            <p className="text-muted-foreground text-sm">
              {isLogin 
                ? "Connectez-vous pour accéder à votre espace privé" 
                : "Créez votre compte en toute discrétion"}
            </p>
          </div>

          {/* Form Card */}
          <Card className="glass-card border-border/50">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg">
                {isLogin ? "Connexion" : "Inscription"}
              </CardTitle>
              <CardDescription>
                {isLogin 
                  ? "Entrez vos identifiants" 
                  : "Vos données restent anonymes"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="username">Pseudonyme (optionnel)</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="Anonyme #XXXX"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="bg-secondary/50"
                    />
                    <p className="text-xs text-muted-foreground">
                      Laissez vide pour un pseudonyme généré automatiquement
                    </p>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-secondary/50"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-secondary/50 pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="gold" 
                  className="w-full" 
                  size="lg"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Chargement...
                    </>
                  ) : (
                    isLogin ? "Se connecter" : "Créer mon compte"
                  )}
                </Button>
              </form>

              {/* Toggle */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {isLogin ? "Pas encore membre ?" : "Déjà membre ?"}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-primary hover:underline ml-1 font-medium"
                  >
                    {isLogin ? "Créer un compte" : "Se connecter"}
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Privacy Note */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            En continuant, vous acceptez nos conditions d'utilisation.<br />
            Vos données sont chiffrées et protégées.
          </p>
        </div>
      </main>
    </div>
  );
}
