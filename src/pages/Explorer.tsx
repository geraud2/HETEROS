import { AppLayout } from "@/components/layout/AppLayout";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { Input } from "@/components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock data for profiles
const mockProfiles = [
  { id: "1", imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop", age: 32, distance: "2 km", level: "curious" as const },
  { id: "2", imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop", age: 28, distance: "5 km", level: "adventurer" as const },
  { id: "3", imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop", age: 35, distance: "1 km", level: "experienced" as const },
  { id: "4", imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop", age: 41, distance: "8 km", level: "curious" as const },
  { id: "5", imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop", age: 29, distance: "3 km", level: "adventurer" as const },
  { id: "6", imageUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=600&fit=crop", age: 38, distance: "12 km", level: "experienced" as const },
];

export default function Explorer() {
  return (
    <AppLayout>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border/50">
        <div className="container px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Rechercher..." 
                className="pl-10 bg-secondary/50 border-border/50"
              />
            </div>
            <Button variant="outline" size="icon" className="shrink-0">
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Profiles Grid */}
      <div className="container px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-serif text-2xl">À proximité</h1>
          <span className="text-sm text-muted-foreground">{mockProfiles.length} profils</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {mockProfiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              {...profile}
              isBlurred={true}
            />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
