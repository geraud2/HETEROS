import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { TopNav } from "./Topnav";
import { PanicButton } from "./PanicButton";

interface AppLayoutProps {
  children: ReactNode;
  showNav?: boolean;
  showPanic?: boolean;
}

export function AppLayout({ children, showNav = true, showPanic = true }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation - Visible uniquement sur desktop */}
      <div className="hidden md:block">
        {showNav && <TopNav />}
      </div>
      
      <main className={showNav ? "pb-20 md:pb-0" : ""}>
        {children}
      </main>
      
      {showPanic && <PanicButton />}
      
      {/* Bottom Navigation - Visible uniquement sur mobile */}
      <div className="md:hidden">
        {showNav && <BottomNav />}
      </div>
    </div>
  );
}