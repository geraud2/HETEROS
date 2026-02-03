import { AppLayout } from "@/components/layout/AppLayout";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const conversations = [
  { id: "1", name: "Anonyme #4821", lastMessage: "Salut, comment vas-tu ?", time: "14:32", unread: 2, online: true },
  { id: "2", name: "Anonyme #1293", lastMessage: "Merci pour l'accès !", time: "Hier", unread: 0, online: false },
  { id: "3", name: "Anonyme #7654", lastMessage: "On se retrouve ce soir ?", time: "Lun", unread: 0, online: true },
  { id: "4", name: "Anonyme #3421", lastMessage: "À bientôt", time: "23/01", unread: 0, online: false },
];

export default function Messages() {
  return (
    <AppLayout>
      <div className="container px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="font-serif text-2xl">Messages</h1>
          <span className="text-sm text-muted-foreground">{conversations.length} conversations</span>
        </div>

        {/* Conversations List */}
        <div className="space-y-2">
          {conversations.map((conv) => (
            <div 
              key={conv.id} 
              className="glass-card rounded-xl p-4 flex items-center gap-4 cursor-pointer hover:bg-secondary/50 transition-colors"
            >
              {/* Avatar */}
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-muted-foreground" />
                </div>
                {conv.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-card" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-medium text-sm truncate">{conv.name}</h3>
                  <span className="text-xs text-muted-foreground shrink-0">{conv.time}</span>
                </div>
                <p className={cn(
                  "text-sm truncate",
                  conv.unread > 0 ? "text-foreground font-medium" : "text-muted-foreground"
                )}>
                  {conv.lastMessage}
                </p>
              </div>

              {/* Unread Badge */}
              {conv.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-xs font-medium text-primary-foreground">{conv.unread}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {conversations.length === 0 && (
          <div className="text-center py-20">
            <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Aucune conversation</p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
