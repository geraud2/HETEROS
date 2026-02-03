import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { PanicButton } from "./PanicButton";

interface AppLayoutProps {
  children: ReactNode;
  showNav?: boolean;
  showPanic?: boolean;
}

export function AppLayout({ children, showNav = true, showPanic = true }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className={showNav ? "pb-20" : ""}>
        {children}
      </main>
      {showPanic && <PanicButton />}
      {showNav && <BottomNav />}
    </div>
  );
}
