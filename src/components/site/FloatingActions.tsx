import { MessageCircle, Phone } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/site";

export function FloatingActions() {
  return (
    <>
      <div className="fixed bottom-24 right-5 z-50 hidden flex-col gap-3 md:flex">
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-glow transition-transform hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href={telLink}
          aria-label="Call"
          className="grid h-14 w-14 place-items-center rounded-full bg-gradient-cta text-cta-foreground shadow-glow transition-transform hover:scale-105"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-24 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-glow transition-transform hover:scale-105 md:hidden"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <a
            href={telLink}
            className="flex-1 rounded-full bg-gradient-cta px-4 py-3 text-center text-sm font-semibold text-cta-foreground shadow-soft"
          >
            Call Now
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full bg-whatsapp px-4 py-3 text-center text-sm font-semibold text-white shadow-soft"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </>
  );
}
