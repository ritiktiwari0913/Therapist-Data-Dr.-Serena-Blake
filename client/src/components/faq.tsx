import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Do you accept insurance?",
      answer:
        "No, I do not accept insurance directly. However, I provide a superbill for each session that you can submit to your insurance company for potential reimbursement. Many clients find they receive partial coverage for out-of-network mental health services.",
    },
    {
      question: "Are online sessions available?",
      answer:
        "Yes, I offer secure virtual therapy sessions via Zoom. Online sessions are available Monday, Wednesday, and Friday from 1 PM to 5 PM. Virtual sessions provide the same quality of care as in-person sessions and can be especially convenient for busy schedules.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Please provide at least 24 hours' notice if you need to cancel or reschedule your session. Cancellations made with less than 24 hours' notice will be charged the full session fee. This policy helps ensure I can offer your time slot to other clients who may need it.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
            <span className="text-primary font-medium uppercase tracking-wider text-sm">
              FAQ
            </span>
            <div className="w-12 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-light text-neutral-800 mb-6">
            Frequently Asked <span className="font-semibold text-primary">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl shadow-lg border border-neutral-200 px-6 mb-4"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-neutral-800 hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
