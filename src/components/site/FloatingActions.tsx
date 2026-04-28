import { Phone, MessageCircle } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="grid place-items-center h-14 w-14 rounded-full bg-whatsapp text-white shadow-glow hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={telLink}
        aria-label="Call"
        className="grid place-items-center h-14 w-14 rounded-full bg-gradient-cta text-cta-foreground shadow-glow hover:scale-105 transition-transform"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}