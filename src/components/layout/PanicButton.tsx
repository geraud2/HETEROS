import { useState } from "react";
import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export function PanicButton() {
  const [isPressed, setIsPressed] = useState(false);

  const handlePanic = () => {
    setIsPressed(true);
    // Redirect to a neutral site
    setTimeout(() => {
      window.location.href = "https://www.google.com/search?q=weather+paris";
    }, 100);
  };

  return (
    <button
      onClick={handlePanic}
      className={cn(
        "fixed bottom-24 right-4 z-50 w-12 h-12 rounded-full",
        "bg-card/90 backdrop-blur-sm border border-border/50",
        "flex items-center justify-center",
        "shadow-lg hover:shadow-xl transition-all duration-300",
        "hover:scale-105 active:scale-95",
        "group",
        isPressed && "animate-pulse"
      )}
      aria-label="Mode Panique"
    >
      <Shield className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
    </button>
  );
}
