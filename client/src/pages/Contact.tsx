import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Calendar } from "lucide-react";

const faqs = [
  {
    question: "What is CasaGen?",
    answer: "CasaGen is an AI-powered property management system designed for real estate agents, vacation rental managers, and property managers.",
  },
  {
    question: "How does CasaGen use AI?",
    answer: "CasaGen uses AI to automate guest messaging, respond to inquiries, and streamline property operations.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. CasaGen uses encryption and industry-standard security practices to protect your data.",
  },
  {
    question: "Can I try CasaGen for free?",
    answer: "Yes. You can sign up for a free trial to explore the platform.",
  },
  {
    question: "How do I get support?",
    answer: "You can reach out via the contact form above or email us at info@casagen.ai.",
  },
  {
    question: "Does CasaGen integrate with my PMS?",
    answer: "PMS integration is not yet available but is on our roadmap. Contact us to learn more about upcoming integrations.",
  },
  {
    question: "Who can see my properties and clients?",
    answer: "Only you. Your data is private to your account.",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f6f7f8] dark:bg-[#101c22]">
      <Navigation />

      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-black text-[#0d171b] dark:text-slate-50 mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Reach out to us directly or fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="pb-20 lg:pb-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 mb-12">
              {/* Email */}
              <a
                href="mailto:info@casagen.ai"
                className="flex items-center gap-4 rounded-xl bg-white dark:bg-slate-800/50 p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1193d4]/10 text-[#1193d4] flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#0d171b] dark:text-slate-50 mb-1">
                    Email Us
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    info@casagen.ai
                  </p>
                </div>
                <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Demo Card */}
            <div className="rounded-xl bg-gradient-to-br from-[#1193d4] to-[#0e7ab8] p-8 text-center shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mx-auto mb-6">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
                Want a Personalized Demo?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
                See CasaGen in action with a guided tour tailored to your specific needs.
              </p>
              <Button
                size="lg"
                className="h-12 px-8 bg-white text-[#1193d4] hover:bg-slate-50 font-bold text-base rounded-lg shadow-lg"
                asChild
              >
                <a href="mailto:info@casagen.ai?subject=Demo Request">Request a Demo</a>
              </Button>
            </div>

            {/* Google Form */}
            <div className="mt-12 rounded-xl bg-white dark:bg-slate-800/50 p-8 shadow-sm border border-slate-200 dark:border-slate-700">
              <h2 className="text-2xl font-black text-[#0d171b] dark:text-slate-50 mb-6 tracking-tight">
                Send us a message
              </h2>
              <div className="flex justify-center">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSchSz8iQ6Q8GpPpbLk-5duoNEfwB9k-V5dip8xGBgCgnSn63A/viewform?embedded=true"
                  width="100%"
                  height="1138"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="max-w-[640px]"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-20 lg:pb-32 bg-white dark:bg-slate-900/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-black text-[#0d171b] dark:text-slate-50 mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Find answers to common questions about CasaGen
              </p>
            </div>

            <div className="rounded-xl bg-[#f6f7f8] dark:bg-slate-800/50 p-6 lg:p-8 border border-slate-200 dark:border-slate-700">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-slate-300 dark:border-slate-600">
                    <AccordionTrigger className="text-left text-[#0d171b] dark:text-slate-50 font-semibold hover:no-underline hover:text-[#1193d4]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 dark:text-slate-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <p className="text-center mt-8 text-slate-600 dark:text-slate-400">
              Have more questions? Reach out to us at{" "}
              <a href="mailto:info@casagen.ai" className="text-[#1193d4] hover:underline font-medium">
                info@casagen.ai
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
