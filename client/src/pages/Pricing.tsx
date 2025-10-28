import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Professional",
      price: "$99",
      period: "per agent/month",
      description: "Perfect for individual agents and small teams",
      features: [
        "Unlimited AI lead queries",
        "Unlimited property analysis",
        "Advanced transaction management",
        "Priority support",
        "Team collaboration tools",
        "Custom market reports",
        "30-day free trial",
      ],
      cta: "Start Free Trial",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact for pricing",
      description: "For brokerages and large teams with volume discounts",
      features: [
        "Everything in Professional",
        "Volume discounts for large teams",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics & reporting",
        "White-label options",
        "Onboarding & training",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      highlighted: false,
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f7f8] dark:bg-[#101c22]">
      <Navigation />

      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-black text-[#0d171b] dark:text-slate-50 mb-6 tracking-tight">
              Flexible Pricing for Every Agent
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
              Choose the plan that fits your business. All plans include a 30-day free trial.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No credit card required • Cancel anytime • Save 20% with annual billing
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col rounded-xl bg-white dark:bg-slate-800/50 p-8 shadow-sm border transition-all duration-300 ${
                    plan.highlighted
                      ? "border-[#1193d4] border-2 shadow-lg scale-105"
                      : "border-slate-200 dark:border-slate-700 hover:shadow-md"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-block px-4 py-1 rounded-full bg-[#1193d4] text-white text-xs font-bold uppercase tracking-wide shadow-md">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-black text-[#0d171b] dark:text-slate-50 mb-2 tracking-tight">
                      {plan.name}
                    </h3>
                    <div className="mb-3">
                      <span className="text-5xl font-black text-[#0d171b] dark:text-slate-50">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-slate-500 dark:text-slate-400 text-base ml-2">
                          /month
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1193d4]/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-[#1193d4]" />
                        </div>
                        <span className="text-sm text-slate-700 dark:text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full h-12 font-bold text-base rounded-lg shadow-sm ${
                      plan.highlighted
                        ? "bg-[#1193d4] hover:bg-[#0e7ab8] text-white"
                        : "bg-[#1193d4]/10 hover:bg-[#1193d4]/20 text-[#1193d4]"
                    }`}
                    asChild
                  >
                    {plan.cta === "Contact Sales" ? (
                      <a href="/contact">{plan.cta}</a>
                    ) : (
                      <a href="https://app.casagen.ai">{plan.cta}</a>
                    )}
                  </Button>
                </div>
              ))}
            </div>

            {/* Annual Savings Note */}
            <div className="mt-16 text-center">
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                💰 Save <span className="font-bold text-[#1193d4]">20%</span> with annual billing
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-center text-[#0d171b] dark:text-slate-50 mb-12 tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <div className="rounded-lg bg-[#f6f7f8] dark:bg-slate-800/50 p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-[#0d171b] dark:text-slate-50 mb-2">
                  Can I change plans later?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.
                </p>
              </div>

              <div className="rounded-lg bg-[#f6f7f8] dark:bg-slate-800/50 p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-[#0d171b] dark:text-slate-50 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We accept all major credit cards (Visa, Mastercard, American Express) and can arrange invoicing for Enterprise customers.
                </p>
              </div>

              <div className="rounded-lg bg-[#f6f7f8] dark:bg-slate-800/50 p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-[#0d171b] dark:text-slate-50 mb-2">
                  Is there a long-term contract?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  No. All plans are month-to-month with no long-term commitment. Cancel anytime with no penalties.
                </p>
              </div>

              <div className="rounded-lg bg-[#f6f7f8] dark:bg-slate-800/50 p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-[#0d171b] dark:text-slate-50 mb-2">
                  What discounts are available for brokerages?
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  We offer volume discounts for brokerages and large teams. Contact our sales team to discuss custom pricing for your organization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-[#f6f7f8] dark:bg-[#101c22]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black text-[#0d171b] dark:text-slate-50 mb-4 tracking-tight">
              Have questions or need a custom plan?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Our team is here to help you find the perfect solution for your brokerage.
            </p>
            <Button
              size="lg"
              className="h-12 px-8 bg-[#1193d4] hover:bg-[#0e7ab8] text-white font-bold text-base rounded-lg shadow-sm"
              asChild
            >
              <a href="/contact">Contact Sales</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
