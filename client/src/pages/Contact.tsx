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
import { useEffect } from "react";

const faqs = [
  {
    question: "What is CasaGen?",
    answer: "CasaGen is an AI-powered compliance and transaction platform built for real estate brokerages. It helps brokerages monitor every transaction automatically while giving agents smarter tools to close deals.",
  },
  {
    question: "How does CasaGen use AI?",
    answer: "AI flags compliance issues before they become problems, discovers off-market deals from public records and market signals, and provides property enrichment and analysis to help agents work faster.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. CasaGen uses bank-level encryption and industry-standard security practices. Enterprise plans include SSO and advanced security options.",
  },
  {
    question: "Can I try CasaGen for free?",
    answer: "Yes. Every plan comes with a 14-day free trial. Invite your agents and test the full platform before committing.",
  },
  {
    question: "How do I get support?",
    answer: "You can reach out via the contact form above or email us at info@casagen.ai. Brokerage and Enterprise plans include priority and dedicated support.",
  },
  {
    question: "Who can see my brokerage's data?",
    answer: "Only your team. Admins see brokerage-wide data, while agents only see their own pipeline and deals. Role-based permissions give you full control.",
  },
  {
    question: "How long does setup take?",
    answer: "Most brokerages are up and running in minutes. Create your account, invite agents, and configure compliance rules — all from one dashboard. Enterprise plans include custom onboarding.",
  },
];

export default function Contact() {
  useEffect(() => {
    if (window.location.hash === "#contact-form") {
      setTimeout(() => {
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(225,25%,6%)]">
      <Navigation />

      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/6 rounded-full blur-[120px]" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
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
                className="flex items-center gap-4 rounded-2xl glass-card-hover p-6"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex-shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Email Us
                  </h3>
                  <p className="text-slate-400">
                    info@casagen.ai
                  </p>
                </div>
                <svg className="h-5 w-5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Demo Card */}
            <div className="relative rounded-2xl overflow-hidden p-8 text-center shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent_60%)]" />

              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                  Want a Personalized Demo?
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                  See how CasaGen gives your brokerage real-time compliance oversight and your agents the tools to close more deals.
                </p>
                <Button
                  size="lg"
                  className="h-12 px-8 bg-white hover:bg-white/95 text-sky-600 font-bold text-base rounded-xl shadow-lg border-0 transition-all duration-300"
                  onClick={() => {
                    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Request a Demo
                </Button>
              </div>
            </div>

            {/* Google Form */}
            <div id="contact-form" className="mt-12 rounded-2xl glass-card p-8">
              <h2 className="text-2xl font-extrabold text-white mb-6 tracking-tight">
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
                  Loading...
                </iframe>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-20 lg:pb-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-400">
                Find answers to common questions about CasaGen
              </p>
            </div>

            <div className="rounded-2xl glass-card p-6 lg:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                    <AccordionTrigger className="text-left text-white font-semibold hover:no-underline hover:text-sky-400 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <p className="text-center mt-8 text-slate-500">
              Have more questions? Reach out to us at{" "}
              <a href="mailto:info@casagen.ai" className="text-sky-400 hover:text-sky-300 transition-colors font-medium">
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
