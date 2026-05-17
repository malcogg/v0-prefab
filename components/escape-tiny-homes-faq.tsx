"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ESCAPE_TINY_HOMES_FAQ } from "@/lib/escape-tiny-homes-data"

export function EscapeTinyHomesFaq() {
  return (
    <section className="border-t border-border bg-background px-6 py-16 md:py-24" aria-labelledby="escape-faq-heading">
      <div className="max-w-3xl mx-auto">
        <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase mb-4 text-center">FAQ</p>
        <h2 id="escape-faq-heading" className="font-serif text-3xl md:text-4xl text-foreground text-balance text-center mb-4">
          Common questions
        </h2>
        <p className="text-center text-muted-foreground leading-relaxed mb-10 md:mb-12 max-w-xl mx-auto text-sm md:text-base">
          Straight answers on pricing, delivery, certification, and how Escape models differ from customizable EarthNest
          lanes.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {ESCAPE_TINY_HOMES_FAQ.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-[15px]">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
