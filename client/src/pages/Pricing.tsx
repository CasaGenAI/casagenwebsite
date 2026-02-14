import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

interface TierLimits {
  properties: number;
  transactions: number;
  saved_searches: number;
  deletions: number;
}

interface PricingTier {
  id: string;
  name: string;
  price_per_seat: number;
  stripe_price_id: string | null;
  limits_per_seat: TierLimits;
  is_contact_us: boolean;
}

interface DisplayPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge: string | null;
  isContactUs: boolean;
}

const TIERS_API_URL = "https://casagen-backend-150430015740.us-west1.run.app/api/subscriptions/tiers";

function formatLimit(value: number): string {
  if (value >= 9999) return "Unlimited";
  return value.toString();
}

function mapTierToDisplayPlan(tier: PricingTier, index: number, totalPlans: number): DisplayPlan {
  const isEnterprise = tier.is_contact_us;
  const isPro = tier.id === "pro";

  const baseFeatures = isEnterprise
    ? [
        "Everything in Pro",
        "Volume discounts for large teams",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics & reporting",
        "White-label options",
        "Onboarding & training",
        "SLA guarantees",
      ]
    : [
        `${formatLimit(tier.limits_per_seat.properties)} properties`,
        `${formatLimit(tier.limits_per_seat.transactions)} transactions`,
        `${formatLimit(tier.limits_per_seat.saved_searches)} saved searches`,
        `${formatLimit(tier.limits_per_seat.deletions)} deletions per month`,
        "AI-powered lead queries",
        "Property analysis tools",
        ...(isPro ? ["Priority support", "Team collaboration tools", "Custom market reports"] : ["Email support"]),
      ];

  return {
    id: tier.id,
    name: tier.name,
    price: isEnterprise ? "Contact Us" : `$${tier.price_per_seat}`,
    description: isEnterprise
      ? "For brokerages and large teams with volume discounts"
      : isPro
        ? "Perfect for growing teams and power users"
        : "Great for individual agents getting started",
    features: baseFeatures,
    cta: isEnterprise ? "Contact Sales" : "Get Started",
    highlighted: isPro,
    badge: isPro ? "Most Popular" : null,
    isContactUs: isEnterprise,
  };
}

function handleSelectPlan(tierId: string, seats: number = 1) {
  if (tierId === "enterprise") {
    window.location.href = "mailto:sales@casagen.ai";
  } else {
    window.location.href = `https://app.casagen.ai/signup?plan=${tierId}&seats=${seats}`;
  }
}

export default function Pricing() {
  const [plans, setPlans] = useState<DisplayPlan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTiers() {
      try {
        const response = await fetch(TIERS_API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch pricing tiers");
        }
        const data = await response.json();
        const tiers: PricingTier[] = data.tiers;

        // Filter out trial tier and map to display format
        const displayableTiers = tiers.filter((tier) => tier.id !== "trial");
        const displayPlans = displayableTiers.map((tier, index) =>
          mapTierToDisplayPlan(tier, index, displayableTiers.length)
        );

        setPlans(displayPlans);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        // Fallback to hardcoded plans if API fails
        setPlans([
          {
            id: "starter",
            name: "Starter",
            price: "$49",
            description: "Great for individual agents getting started",
            features: [
              "25 properties",
              "10 transactions",
              "3 saved searches",
              "5 deletions per month",
              "AI-powered lead queries",
              "Property analysis tools",
              "Email support",
            ],
            cta: "Get Started",
            highlighted: false,
            badge: null,
            isContactUs: false,
          },
          {
            id: "pro",
            name: "Pro",
            price: "$99",
            description: "Perfect for growing teams and power users",
            features: [
              "100 properties",
              "50 transactions",
              "10 saved searches",
              "20 deletions per month",
              "AI-powered lead queries",
              "Property analysis tools",
              "Priority support",
              "Team collaboration tools",
              "Custom market reports",
            ],
            cta: "Get Started",
            highlighted: true,
            badge: "Most Popular",
            isContactUs: false,
          },
          {
            id: "enterprise",
            name: "Enterprise",
            price: "Contact Us",
            description: "For brokerages and large teams with volume discounts",
            features: [
              "Everything in Pro",
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
            isContactUs: true,
          },
        ]);
      } finally {
        setLoading(false);
      }
    }

    fetchTiers();
  }, []);

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
            {loading ? (
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-[#1193d4]" />
              </div>
            ) : (
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative flex flex-col rounded-xl bg-white dark:bg-slate-800/50 p-8 shadow-sm border transition-all duration-300 ${
                      plan.highlighted
                        ? "border-[#1193d4] border-2 shadow-lg md:scale-105"
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
                        <span className={`font-black text-[#0d171b] dark:text-slate-50 ${plan.isContactUs ? "text-3xl" : "text-5xl"}`}>
                          {plan.price}
                        </span>
                        {!plan.isContactUs && (
                          <span className="text-slate-500 dark:text-slate-400 text-base ml-2">
                            /seat/month
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
                      onClick={() => handleSelectPlan(plan.id)}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                ))}
              </div>
            )}

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
