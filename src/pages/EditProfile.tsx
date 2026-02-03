import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Camera, User, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function EditProfile() {
  const { user, updateProfile } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: user?.username || "",
    age: user?.age?.toString() || "",
    city: user?.city || "",
    level: user?.level || "curious" as "curious" | "adventurer" | "experienced",
    bio: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 500));

    updateProfile({
      username: formData.username,
      age: formData.age ? parseInt(formData.age) : undefined,
      city: formData.city,
      level: formData.level as "curious" | "adventurer" | "experienced",
    });

    toast({
      title: "Profil mis à jour",
      description: "Vos modifications ont été enregistrées",
    });

    setIsLoading(false);
    navigate("/profile");
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
          <h1 className="font-serif text-lg">Modifier le profil</h1>
        </div>
      </header>

      <div className="container px-4 py-6">
        {/* Avatar */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center border-2 border-primary/20">
              <User className="w-10 h-10 text-muted-foreground" />
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <Camera className="w-4 h-4 text-primary-foreground" />
            </button>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            Votre photo sera floutée par défaut
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Pseudonyme</Label>
            <Input
              id="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="bg-secondary/50"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Âge</Label>
              <Input
                id="age"
                type="number"
                min="18"
                max="99"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="bg-secondary/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city">Ville</Label>
              <Input
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="Paris"
                className="bg-secondary/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Niveau d'expérience</Label>
            <Select 
              value={formData.level} 
              onValueChange={(value: "curious" | "adventurer" | "experienced") => setFormData({ ...formData, level: value })}
            >
              <SelectTrigger className="bg-secondary/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="curious">🌱 Curieux - Je découvre</SelectItem>
                <SelectItem value="adventurer">🧭 Aventurier - Quelques expériences</SelectItem>
                <SelectItem value="experienced">⭐ Expérimenté - À l'aise</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio (optionnel)</Label>
            <Textarea
              id="bio"
              placeholder="Quelques mots sur vous..."
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="bg-secondary/50 min-h-[100px]"
            />
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
                Enregistrement...
              </>
            ) : (
              "Enregistrer les modifications"
            )}
          </Button>
        </form>
      </div>
    </AppLayout>
  );
}
