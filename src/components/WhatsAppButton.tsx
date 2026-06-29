import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/products";

const WhatsAppButton = () => {
  return (
    <a
      href={waLink("Hello MAISHA MABATI FACTORY, I would like to inquire about your products.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3.5 rounded-full bg-[hsl(142_70%_45%)] text-[hsl(0_0%_100%)] font-heading font-bold shadow-lg hover:scale-105 transition-transform animate-pulse-glow"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline">Talk to Us</span>
    </a>
  );
};

export default WhatsAppButton;
