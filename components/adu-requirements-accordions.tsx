"use client"

import { FileCheck, Mail, Phone } from "lucide-react"
import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { JurisdictionRequirements } from "@/lib/building-requirements/types"

type AduRequirementsAccordionsProps = {
  jurisdiction: JurisdictionRequirements
}

function EligibilityBody({ body }: { body: string | string[] }) {
  if (Array.isArray(body)) {
    return (
      <ul className="text-sm text-muted-foreground leading-relaxed flex flex-col gap-1 list-disc pl-4">
        {body.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    )
  }
  return <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
}

export function AduRequirementsAccordions({ jurisdiction }: AduRequirementsAccordionsProps) {
  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible className="rounded-lg border border-border bg-secondary px-4 md:px-6">
        <AccordionItem value="eligibility" className="border-border">
          <AccordionTrigger className="font-serif text-lg md:text-xl text-foreground hover:no-underline py-5">
            {jurisdiction.eligibilityTitle}
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <p className="text-muted-foreground leading-relaxed mb-6">{jurisdiction.eligibilityIntro}</p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {jurisdiction.eligibilityBlocks.map((block) => (
                <div key={block.title}>
                  <h4 className="font-semibold text-foreground mb-2">{block.title}</h4>
                  <EligibilityBody body={block.body} />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{jurisdiction.eligibilityNote}</p>
            <p className="text-xs text-muted-foreground mt-4 border-t border-border pt-4">
              Source: {jurisdiction.eligibilitySource}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div>
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
          ADU type submission requirements
        </p>
        <Accordion type="single" collapsible className="rounded-lg border border-border bg-background divide-y divide-border">
          {jurisdiction.aduTypes.map((type) => (
            <AccordionItem key={type.id} value={type.id} className="border-border px-4 md:px-6">
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="flex items-start gap-3 text-left">
                  <FileCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
                  <span>
                    <span className="block font-serif text-base md:text-lg text-foreground">{type.title}</span>
                    <span className="block text-sm font-normal text-muted-foreground mt-0.5">{type.subtitle}</span>
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5">
                <ul className="flex flex-col gap-2.5 pl-8">
                  {type.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2.5 text-sm text-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0 mt-2" aria-hidden />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Accordion type="single" collapsible className="rounded-lg border border-border bg-secondary px-4 md:px-6">
        <AccordionItem value="permit-process" className="border-border">
          <AccordionTrigger className="font-serif text-lg md:text-xl text-foreground hover:no-underline py-5">
            The permit application process
          </AccordionTrigger>
          <AccordionContent className="pb-6">
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="flex flex-col gap-4">
                {jurisdiction.permitProcessSteps.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-background rounded-lg p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-4">
                  Questions? Contact {jurisdiction.name}
                </h4>
                <div className="flex flex-col gap-4">
                  {jurisdiction.contacts.map((contact) => (
                    <div key={contact.label}>
                      <p className="text-sm text-muted-foreground mb-2">{contact.label}</p>
                      {contact.phone ? (
                        <a
                          href={`tel:${contact.phone.replace(/\D/g, "")}`}
                          className="flex items-center gap-3 text-primary hover:underline font-medium text-sm"
                        >
                          <Phone className="w-4 h-4 shrink-0" aria-hidden />
                          {contact.phone}
                        </a>
                      ) : null}
                      {contact.email ? (
                        <a
                          href={`mailto:${contact.email}`}
                          className="flex items-center gap-3 text-primary hover:underline font-medium text-sm mt-1"
                        >
                          <Mail className="w-4 h-4 shrink-0" aria-hidden />
                          {contact.email}
                        </a>
                      ) : null}
                      {contact.note ? (
                        <p className="text-sm text-muted-foreground mt-1">{contact.note}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <p className="text-sm text-muted-foreground">
        Full county rules hub:{" "}
        <Link href="/adu-rules" className="text-primary font-medium underline-offset-4 hover:underline">
          Florida ADU rules &amp; local directory
        </Link>
      </p>
    </div>
  )
}
