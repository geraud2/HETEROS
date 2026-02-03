import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { KeyRound, Lock, Unlock, UserCheck } from "lucide-react";

const accessRequests = [
  { id: "1", name: "Anonyme #4821", status: "pending", date: "Il y a 2h" },
  { id: "2", name: "Anonyme #1293", status: "granted", date: "Hier" },
  { id: "3", name: "Anonyme #7654", status: "pending", date: "Il y a 1j" },
];

export default function Access() {
  return (
    <AppLayout>
      <div className="container px-4 py-6">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <KeyRound className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-serif text-2xl mb-2">Coffre-fort Photos</h1>
          <p className="text-muted-foreground text-sm">
            Gérez qui peut voir vos photos nettes
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Lock className="w-4 h-4 text-muted-foreground" />
              <span className="text-2xl font-serif text-foreground">3</span>
            </div>
            <p className="text-xs text-muted-foreground">Demandes en attente</p>
          </div>
          <div className="glass-card rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Unlock className="w-4 h-4 text-primary" />
              <span className="text-2xl font-serif text-primary">12</span>
            </div>
            <p className="text-xs text-muted-foreground">Accès accordés</p>
          </div>
        </div>

        {/* Access Requests */}
        <div className="space-y-4">
          <h2 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">
            Demandes récentes
          </h2>
          
          {accessRequests.map((request) => (
            <div key={request.id} className="glass-card rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium text-sm">{request.name}</p>
                  <p className="text-xs text-muted-foreground">{request.date}</p>
                </div>
              </div>
              
              {request.status === "pending" ? (
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    Refuser
                  </Button>
                  <Button size="sm" variant="gold" className="text-xs">
                    Accorder
                  </Button>
                </div>
              ) : (
                <span className="text-xs text-primary font-medium">Accordé</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
