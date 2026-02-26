import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/config";
import { Link } from "wouter";
import { Check, X, Loader2, BarChart3, DollarSign, AlertTriangle, Building2, MessageSquare } from "lucide-react";
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
  annualPrice: string | null;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge: string | null;
  isContactUs: boolean;
}

const TIERS_API_URL = "https://casagen-backend-150430015740.us-west1.run.app/api/subscriptions/tiers";

function getStarterFeatures(): string[] {
  return [
    "25 active properties",
    "10 transactions",
    "3 saved searches",
    "Basic property enrichment",
    "Property Copilot (20 questions/mo)",
    "Risk summary reports",
    "Email support",
  ];
}

function getProFeatures(): string[] {
  return [
    "100 active properties",
    "50 transactions",
    "10 saved searches with automation",
    "Full AI property enrichment",
    "Days on Market predictions",
    "Pricing strategy analysis",
    "Risk scoring with mitigation",
    "Zoning & development insights",
    "Unlimited Property Copilot",
    "Document analysis",
    "Weekly email digests",
    "Priority support",
  ];
}

function getEnterpriseFeatures(): string[] {
  return [
    "Everything in Pro, plus:",
    "Unlimited properties & transactions",
    "Unlimited saved searches",
    "DocuSign integration",
    "Compliance audit trail",
    "Strategic property briefings",
    "API access",
    "Custom integrations",
    "Dedicated account manager",
    "Team volume discounts",
    "Onboarding & training",
  ];
}

function mapTierToDisplayPlan(tier: PricingTier): DisplayPlan {
  const isEnterprise = tier.is_contact_us;
  const isPro = tier.id === "pro";
  const isStarter = tier.id === "starter";

  let features: string[];
  let description: string;
  let price: string;
  let annualPrice: string | null = null;

  if (isEnterprise) {
    features = getEnterpriseFeatures();
    description = "For brokerages and top producers";
    price = "Custom Pricing";
  } else if (isPro) {
    features = getProFeatures();
    description = "For agents who want an edge";
    price = "$149/mo";
    annualPrice = "$119/mo billed annually";
  } else {
    features = getStarterFeatures();
    description = "For agents building their business";
    price = "$79/mo";
    annualPrice = "$63/mo billed annually";
  }

  return {
    id: tier.id,
    name: tier.name,
    price,
    annualPrice,
    description,
    features,
    cta: isEnterprise ? "Contact Sales" : "Start 14-Day Free Trial",
    highlighted: isPro,
    badge: isPro ? "Most Popular" : null,
    isContactUs: isEnterprise,
  };
}

function handleSelectPlan(tierId: string) {
  if (tierId === "enterprise") {
    window.location.href = "/contact#contact-form";
  } else {
    window.location.href = `${APP_URL}/signup?plan=${tierId}`;
  }
}

// Feature comparison data
const featureComparisonData = {
  categories: [
    {
      name: "Limits",
      features: [
        { name: "Active Properties", starter: "25", pro: "100", enterprise: "Unlimited" },
        { name: "Transactions", starter: "10", pro: "50", enterprise: "Unlimited" },
        { name: "Saved Searches", starter: "3", pro: "10", enterprise: "Unlimited" },
        { name: "Scheduled Search Automation", starter: false, pro: true, enterprise: true },
      ],
    },
    {
      name: "AI Features",
      features: [
        { name: "AI Property Enrichment", starter: "Basic", pro: "Full", enterprise: "Full" },
        { name: "Days on Market Prediction", starter: false, pro: true, enterprise: true },
        { name: "Pricing Strategy Analysis", starter: false, pro: true, enterprise: true },
        { name: "Risk Scoring & Mitigation", starter: "Summary", pro: "Detailed", enterprise: "Detailed" },
        { name: "Zoning & Development Analysis", starter: false, pro: true, enterprise: true },
      ],
    },
    {
      name: "Tools",
      features: [
        { name: "Property Copilot Questions", starter: "20/mo", pro: "Unlimited", enterprise: "Unlimited" },
        { name: "Document Analysis", starter: false, pro: true, enterprise: true },
        { name: "Strategic Briefings", starter: false, pro: false, enterprise: true },
      ],
    },
    {
      name: "Integrations & Support",
      features: [
        { name: "Email Digests", starter: false, pro: "Weekly", enterprise: "Custom" },
        { name: "DocuSign Integration", starter: false, pro: false, enterprise: true },
        { name: "Audit Trail & Compliance", starter: false, pro: false, enterprise: true },
        { name: "API Access", starter: false, pro: false, enterprise: true },
        { name: "Support", starter: "Email", pro: "Priority", enterprise: "Dedicated" },
      ],
    },
  ],
};

const faqData = [
  {
    question: "What's included in the free trial?",
    answer: "Full access to all features in your chosen plan for 14 days. A valid credit card is required to start your trial. You won't be charged until your trial ends, and you can cancel anytime.",
  },
  {
    question: "Can I change plans later?",
    answer: "Yes. Upgrade or downgrade anytime. Changes take effect immediately with prorated billing.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "All major credit cards (Visa, Mastercard, American Express). Enterprise customers can arrange invoicing.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No. All plans are month-to-month. Cancel anytime with no penalties.",
  },
  {
    question: "What's the difference between Basic and Full AI enrichment?",
    answer: "Basic enrichment includes property overview and risk summary. Full enrichment adds DOM predictions, pricing analysis, detailed risk scoring with mitigation strategies, and zoning insights.",
  },
  {
    question: "How does Property Copilot work?",
    answer: "Ask natural language questions about any property in your portfolio. Copilot searches the enrichment data and returns sourced answers with confidence levels. Example: \"What's the flood risk?\" or \"Is this a good investment property?\"",
  },
  {
    question: "What integrations are available for Enterprise?",
    answer: "DocuSign for e-signatures, API access for custom integrations, and we can build custom connections for your brokerage systems.",
  },
  {
    question: "Do you offer team or brokerage discounts?",
    answer: "Yes. Contact our sales team for volume pricing on 5+ seats.",
  },
];

const aiFeatures = [
  {
    icon: BarChart3,
    title: "Days on Market Prediction",
    description: "Know how long a property will take to sell before you list it.",
    detail: "AI analyzes comparable sales, market velocity, and local trends.",
  },
  {
    icon: DollarSign,
    title: "Pricing Strategy Analysis",
    description: "Get recommended pricing with clear methodology.",
    detail: "See adjustments, comparables, and confidence scores.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Scoring",
    description: "Understand flood, fire, market, and financial risks.",
    detail: "Get mitigation strategies for every risk factor.",
  },
  {
    icon: Building2,
    title: "Zoning & Development",
    description: "See development potential and land use restrictions.",
    detail: "Identify ADU opportunities and lot optimization.",
  },
  {
    icon: MessageSquare,
    title: "Property Copilot",
    description: "Ask any question about a property.",
    detail: "Get sourced answers backed by real data.",
  },
];

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
        const displayPlans = displayableTiers.map((tier) => mapTierToDisplayPlan(tier));

        setPlans(displayPlans);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        // Fallback to hardcoded plans if API fails
        setPlans([
          {
            id: "starter",
            name: "Starter",
            price: "$79/mo",
            annualPrice: "$63/mo billed annually",
            description: "For agents building their business",
            features: getStarterFeatures(),
            cta: "Start 14-Day Free Trial",
            highlighted: false,
            badge: null,
            isContactUs: false,
          },
          {
            id: "pro",
            name: "Pro",
            price: "$149/mo",
            annualPrice: "$119/mo billed annually",
            description: "For agents who want an edge",
            features: getProFeatures(),
            cta: "Start 14-Day Free Trial",
            highlighted: true,
            badge: "Most Popular",
            isContactUs: false,
          },
          {
            id: "enterprise",
            name: "Enterprise",
            price: "Custom Pricing",
            annualPrice: null,
            description: "For brokerages and top producers",
            features: getEnterpriseFeatures(),
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

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="h-5 w-5 text-[#1193d4] mx-auto" />;
    }
    if (value === false) {
      return <X className="h-5 w-5 text-slate-300 dark:text-slate-600 mx-auto" />;
    }
    return <span className="text-sm text-slate-700 dark:text-slate-300">{value}</span>;
  };

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
              Choose the plan that fits your business. Start your 14-day free trial today.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Cancel anytime &bull; Save 20% with annual billing
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
                        <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#1193d4] text-white text-xs font-bold uppercase tracking-wide shadow-md">
                          <span>&#11088;</span> {plan.badge}
                        </span>
                      </div>
                    )}

                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-black text-[#0d171b] dark:text-slate-50 mb-2 tracking-tight">
                        {plan.name}
                      </h3>
                      <div className="mb-1">
                        <span className={`font-black text-[#0d171b] dark:text-slate-50 ${plan.isContactUs ? "text-2xl" : "text-4xl"}`}>
                          {plan.price}
                        </span>
                      </div>
                      {plan.annualPrice && (
                        <p className="text-sm text-[#1193d4] font-medium mb-3">
                          {plan.annualPrice}
                        </p>
                      )}
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                        {plan.description}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow">
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
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-center text-[#0d171b] dark:text-slate-50 mb-12 tracking-tight">
              Feature Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                    <th className="text-left py-4 px-4 font-bold text-[#0d171b] dark:text-slate-50">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-[#0d171b] dark:text-slate-50 w-28">Starter</th>
                    <th className="text-center py-4 px-4 font-bold text-[#1193d4] w-28">Pro</th>
                    <th className="text-center py-4 px-4 font-bold text-[#0d171b] dark:text-slate-50 w-28">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparisonData.categories.map((category, catIdx) => (
                    <>
                      <tr key={`cat-${catIdx}`} className="bg-slate-50 dark:bg-slate-800/30">
                        <td colSpan={4} className="py-3 px-4 font-bold text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                          {category.name}
                        </td>
                      </tr>
                      {category.features.map((feature, featIdx) => (
                        <tr
                          key={`feat-${catIdx}-${featIdx}`}
                          className="border-b border-slate-100 dark:border-slate-800"
                        >
                          <td className="py-4 px-4 text-sm text-slate-700 dark:text-slate-300">
                            {feature.name}
                          </td>
                          <td className="py-4 px-4 text-center">
                            {renderFeatureValue(feature.starter)}
                          </td>
                          <td className="py-4 px-4 text-center bg-[#1193d4]/5">
                            {renderFeatureValue(feature.pro)}
                          </td>
                          <td className="py-4 px-4 text-center">
                            {renderFeatureValue(feature.enterprise)}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-[#f6f7f8] dark:bg-[#101c22]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-center text-[#0d171b] dark:text-slate-50 mb-4 tracking-tight">
              All-in-One Platform. No Nickel-and-Diming.
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
              Other platforms charge separately for:
            </p>

            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <div>
                  <span className="text-slate-700 dark:text-slate-300">CRM & contact management</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">$69/mo elsewhere</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <div>
                  <span className="text-slate-700 dark:text-slate-300">Transaction management</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">$32/mo elsewhere</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <div>
                  <span className="text-slate-700 dark:text-slate-300">Lead generation tools</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">$189+/mo elsewhere</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-lg bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                <div>
                  <span className="text-slate-700 dark:text-slate-300">Property analysis</span>
                  <span className="text-slate-500 dark:text-slate-400 text-sm ml-2">not available elsewhere</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl font-bold text-[#1193d4]">
                CasaGen includes everything in one simple price.
              </p>
            </div>
          </div>
        </section>

        {/* AI Features Highlight */}
        <section className="py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-black text-[#0d171b] dark:text-slate-50 mb-4 tracking-tight">
                AI-Powered Property Intelligence
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Make confident decisions with data, not guesswork.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-[#f6f7f8] dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#1193d4]/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-[#1193d4]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0d171b] dark:text-slate-50 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      {feature.description}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {feature.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#f6f7f8] dark:bg-[#101c22]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-center text-[#0d171b] dark:text-slate-50 mb-12 tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqData.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-lg bg-white dark:bg-slate-800/50 p-6 border border-slate-200 dark:border-slate-700"
                >
                  <h3 className="text-lg font-bold text-[#0d171b] dark:text-slate-50 mb-2">
                    {item.question}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black text-[#0d171b] dark:text-slate-50 mb-4 tracking-tight">
              Have questions or need a custom plan?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Our team is here to help you find the perfect solution.
            </p>
            <Button
              size="lg"
              className="h-12 px-8 bg-[#1193d4] hover:bg-[#0e7ab8] text-white font-bold text-base rounded-lg shadow-sm"
              asChild
            >
              <Link href="/contact#contact-form">Contact Sales</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
