import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ServiceFaq } from "@/data/services";

export function FAQSection({
  title = "Frequently asked questions",
  faqs,
}: {
  title?: string;
  faqs: ServiceFaq[];
}) {
  return (
    <section className="rounded-[2rem] bg-card p-8 shadow-soft ring-1 ring-border">
      <p className="text-sm font-bold tracking-[0.2em] text-brand">FAQ</p>
      <h2 className="mt-3 text-3xl font-extrabold text-navy">{title}</h2>
      <Accordion type="single" collapsible className="mt-6 w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={`faq-${index}`}>
            <AccordionTrigger className="text-left text-base font-semibold text-navy">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-7 text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
