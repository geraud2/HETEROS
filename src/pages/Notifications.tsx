import { useNavigate } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { ArrowLeft, Bell, Heart, MessageCircle, KeyRound, UserPlus } from "lucide-react";

const notifications = [
  {
    id: "1",
    type: "like",
    icon: Heart,
    title: "Nouveau like",
    message: "Anonyme #2847 a aimé votre profil",
    time: "Il y a 5 min",
    read: false,
  },
  {
    id: "2",
    type: "message",
    icon: MessageCircle,
    title: "Nouveau message",
    message: "Anonyme #1293 vous a envoyé un message",
    time: "Il y a 30 min",
    read: false,
  },
  {
    id: "3",
    type: "access",
    icon: KeyRound,
    title: "Demande d'accès",
    message: "Anonyme #5612 souhaite voir vos photos",
    time: "Il y a 2h",
    read: true,
  },
  {
    id: "4",
    type: "match",
    icon: UserPlus,
    title: "Nouveau match !",
    message: "Vous et Anonyme #7834 vous êtes mutuellement likés",
    time: "Hier",
    read: true,
  },
  {
    id: "5",
    type: "like",
    icon: Heart,
    title: "Nouveau like",
    message: "Anonyme #9021 a aimé votre profil",
    time: "Hier",
    read: true,
  },
];

const iconColors = {
  like: "text-pink-500",
  message: "text-primary",
  access: "text-amber-500",
  match: "text-green-500",
};

export default function Notifications() {
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
          <h1 className="font-serif text-lg">Notifications</h1>
        </div>
      </header>

      <div className="container px-4 py-6">
        {notifications.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <Bell className="w-8 h-8 text-muted-foreground" />
            </div>
            <h2 className="font-medium mb-2">Aucune notification</h2>
            <p className="text-sm text-muted-foreground">
              Vos notifications apparaîtront ici
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {notifications.map((notif) => (
              <div
                key={notif.id}
                className={`glass-card rounded-xl p-4 flex items-start gap-3 cursor-pointer hover:border-primary/30 transition-all ${
                  !notif.read ? "border-primary/20 bg-primary/5" : ""
                }`}
              >
                <div className={`w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0 ${iconColors[notif.type as keyof typeof iconColors]}`}>
                  <notif.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-medium text-sm">{notif.title}</h3>
                    {!notif.read && (
                      <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {notif.message}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {notif.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppLayout>
  );
}
