import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/config";
import { Link } from "wouter";
import { Check, X, ArrowRight, Sparkles, ShieldCheck, Users, Search, BarChart3, FileText } from "lucide-react";

interface DisplayPlan {
  id: string;
  name: string;
  price: string;
  priceDetail: string;
  annualPrice: string | null;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge: string | null;
  isContactUs: boolean;
}

const plans: DisplayPlan[] = [
  {
    id: "team",
    name: "Team",
    price: "$199",
    priceDetail: "/mo for up to 5 seats",
    annualPrice: "$159/mo billed annually",
    description: "For small teams and independent brokerages getting started",
    features: [
      "Up to 5 agent seats",
      "Off-market deal finder",
      "Transaction management",
      "Basic compliance checklists",
      "Agent activity dashboard",
      "25 AI property analyses/mo",
      "Email support",
    ],
    cta: "Start 14-Day Free Trial",
    highlighted: false,
    badge: null,
    isContactUs: false,
  },
  {
    id: "brokerage",
    name: "Brokerage",
    price: "$499",
    priceDetail: "/mo for up to 25 seats",
    annualPrice: "$399/mo billed annually",
    description: "For growing brokerages that need compliance and visibility",
    features: [
      "Up to 25 agent seats",
      "Everything in Team, plus:",
      "Full compliance workflows & audit trails",
      "Brokerage admin dashboard",
      "Role-based permissions",
      "Unlimited AI property analyses",
      "Document tracking & version control",
      "Agent performance reporting",
      "Priority support",
    ],
    cta: "Start 14-Day Free Trial",
    highlighted: true,
    badge: "Most Popular",
    isContactUs: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    priceDetail: "pricing for 25+ seats",
    annualPrice: null,
    description: "For large brokerages and multi-office operations",
    features: [
      "Unlimited agent seats",
      "Everything in Brokerage, plus:",
      "Multi-office management",
      "Custom compliance rules",
      "SSO & advanced security",
      "API access & custom integrations",
      "Dedicated account manager",
      "Custom onboarding & training",
      "SLA & uptime guarantees",
    ],
    cta: "Contact Sales",
    highlighted: false,
    badge: null,
    isContactUs: true,
  },
];

function handleSelectPlan(plan: DisplayPlan) {
  if (plan.isContactUs) {
    window.location.href = "/contact#contact-form";
  } else {
    window.location.href = `${APP_URL}/signup?plan=${plan.id}`;
  }
}

const featureComparisonData = {
  categories: [
    {
      name: "Team & Seats",
      features: [
        { name: "Agent Seats", team: "Up to 5", brokerage: "Up to 25", enterprise: "Unlimited" },
        { name: "Multi-Office Support", team: false, brokerage: false, enterprise: true },
        { name: "Role-Based Permissions", team: false, brokerage: true, enterprise: true },
        { name: "SSO / SAML", team: false, brokerage: false, enterprise: true },
      ],
    },
    {
      name: "Off-Market Deals",
      features: [
        { name: "AI Property Discovery", team: true, brokerage: true, enterprise: true },
        { name: "Owner Intent Scoring", team: true, brokerage: true, enterprise: true },
        { name: "Targeted Outreach Lists", team: "Basic", brokerage: "Advanced", enterprise: "Advanced" },
        { name: "Saved Search Automation", team: false, brokerage: true, enterprise: true },
      ],
    },
    {
      name: "Compliance & Transactions",
      features: [
        { name: "Transaction Management", team: true, brokerage: true, enterprise: true },
        { name: "Compliance Checklists", team: "Basic", brokerage: "Full", enterprise: "Custom" },
        { name: "Audit Trail", team: false, brokerage: true, enterprise: true },
        { name: "Document Tracking", team: false, brokerage: true, enterprise: true },
        { name: "Custom Compliance Rules", team: false, brokerage: false, enterprise: true },
      ],
    },
    {
      name: "AI & Analytics",
      features: [
        { name: "AI Property Analyses", team: "25/mo", brokerage: "Unlimited", enterprise: "Unlimited" },
        { name: "Agent Performance Reports", team: false, brokerage: true, enterprise: true },
        { name: "Brokerage Analytics Dashboard", team: "Basic", brokerage: "Full", enterprise: "Full" },
        { name: "API Access", team: false, brokerage: false, enterprise: true },
      ],
    },
    {
      name: "Support",
      features: [
        { name: "Support Level", team: "Email", brokerage: "Priority", enterprise: "Dedicated" },
        { name: "Onboarding & Training", team: "Self-serve", brokerage: "Guided", enterprise: "Custom" },
        { name: "SLA Guarantee", team: false, brokerage: false, enterprise: true },
      ],
    },
  ],
};

const faqData = [
  {
    question: "What's included in the free trial?",
    answer: "Full access to all features in your chosen plan for 14 days. No credit card required. You can invite your agents and test the full platform before committing.",
  },
  {
    question: "How does per-seat pricing work?",
    answer: "Each plan includes a set number of agent seats. Each agent who logs in and uses the platform counts as one seat. Brokerage admins and owners don't count toward the seat limit.",
  },
  {
    question: "Can I add more seats later?",
    answer: "Yes. You can add seats anytime. If you outgrow your plan, upgrading is instant with prorated billing. Or contact us for custom seat pricing.",
  },
  {
    question: "What compliance features are included?",
    answer: "Team plans include basic compliance checklists. Brokerage plans add full audit trails, document tracking with version control, and automated compliance workflows. Enterprise plans allow custom compliance rules.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No. All plans are month-to-month. Cancel anytime with no penalties. Annual billing saves 20%.",
  },
  {
    question: "Can I manage multiple offices?",
    answer: "Multi-office support is available on the Enterprise plan. You can manage separate offices with their own agents, compliance rules, and reporting — all from one admin dashboard.",
  },
  {
    question: "How do brokerage admin tools work?",
    answer: "Admins get a dedicated dashboard to manage agents, set permissions, monitor deal flow, review compliance status, and view brokerage-wide analytics. Agents see their own pipeline and tools.",
  },
  {
    question: "Do you offer migration support?",
    answer: "Yes. Our team can help you import existing transactions, agent data, and documents. Enterprise plans include custom onboarding with a dedicated account manager.",
  },
];

const platformHighlights = [
  {
    icon: Search,
    title: "Off-Market Deals",
    description: "AI surfaces hidden opportunities from tax records, ownership data, and market signals.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Built In",
    description: "Automated checklists, audit trails, and document tracking on every transaction.",
  },
  {
    icon: Users,
    title: "Brokerage Admin",
    description: "Manage agents, permissions, and performance from a single dashboard.",
  },
  {
    icon: BarChart3,
    title: "AI Property Intelligence",
    description: "Investment scores, risk assessments, and pricing analysis in seconds.",
  },
  {
    icon: FileText,
    title: "Transaction Management",
    description: "Automated timelines, deadlines, and multi-agent deal coordination.",
  },
];

export default function Pricing() {
  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="h-5 w-5 text-sky-400 mx-auto" />;
    }
    if (value === false) {
      return <X className="h-5 w-5 text-slate-600 mx-auto" />;
    }
    return <span className="text-sm text-slate-300">{value}</span>;
  };

  return (
    <div className="min-h-screen bg-[hsl(225,25%,6%)]">
      <Navigation />

      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-500/6 rounded-full blur-[120px]" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Simple Pricing for Your Entire Brokerage
            </h1>
            <p className="text-xl text-slate-400 mb-4">
              One platform, one price. Off-market deals, compliance, and admin tools included in every plan.
            </p>
            <p className="text-sm text-slate-500">
              14-day free trial &bull; No credit card required &bull; Save 20% annually
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-20 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                    plan.highlighted
                      ? "glass-card border border-sky-500/30 glow md:scale-105"
                      : "glass-card-hover"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 text-white text-xs font-semibold uppercase tracking-wide shadow-lg shadow-sky-500/25">
                        <Sparkles className="h-3 w-3" />
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-extrabold text-white mb-3 tracking-tight">
                      {plan.name}
                    </h3>
                    <div className="mb-1">
                      <span className="font-extrabold text-white text-4xl">
                        {plan.price}
                      </span>
                      <span className="text-slate-400 text-sm ml-1">
                        {plan.priceDetail}
                      </span>
                    </div>
                    {plan.annualPrice && (
                      <p className="text-sm text-sky-400 font-medium mb-3">
                        {plan.annualPrice}
                      </p>
                    )}
                    <p className="text-sm text-slate-400 mt-2">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-sky-500/15 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-sky-400" />
                        </div>
                        <span className="text-sm text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full h-12 font-semibold text-base rounded-xl transition-all duration-300 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-white shadow-lg shadow-sky-500/25 border-0"
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20"
                    }`}
                    onClick={() => handleSelectPlan(plan)}
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-white mb-12 tracking-tight">
              Compare Plans
            </h2>

            <div className="overflow-x-auto glass-card rounded-2xl">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-6 font-bold text-white">Feature</th>
                    <th className="text-center py-4 px-4 font-bold text-slate-300 w-28">Team</th>
                    <th className="text-center py-4 px-4 font-bold text-sky-400 w-28">Brokerage</th>
                    <th className="text-center py-4 px-4 font-bold text-slate-300 w-28">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {featureComparisonData.categories.map((category, catIdx) => (
                    <>
                      <tr key={`cat-${catIdx}`} className="bg-white/[0.02]">
                        <td colSpan={4} className="py-3 px-6 font-semibold text-xs text-slate-500 uppercase tracking-widest">
                          {category.name}
                        </td>
                      </tr>
                      {category.features.map((feature, featIdx) => (
                        <tr
                          key={`feat-${catIdx}-${featIdx}`}
                          className="border-b border-white/5"
                        >
                          <td className="py-4 px-6 text-sm text-slate-300">
                            {feature.name}
                          </td>
                          <td className="py-4 px-4 text-center">
                            {renderFeatureValue(feature.team)}
                          </td>
                          <td className="py-4 px-4 text-center bg-sky-500/[0.03]">
                            {renderFeatureValue(feature.brokerage)}
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
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-white mb-4 tracking-tight">
              One Platform. Everything Included.
            </h2>
            <p className="text-center text-slate-400 mb-12">
              Stop paying for separate tools. CasaGen replaces:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
              {[
                { name: "Transaction management", price: "$32/mo per agent" },
                { name: "Compliance tracking", price: "$50+/mo per agent" },
                { name: "Lead generation tools", price: "$189+/mo" },
                { name: "Brokerage admin software", price: "$200+/mo" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl glass-card">
                  <div className="w-2 h-2 rounded-full bg-slate-500" />
                  <div>
                    <span className="text-slate-300">{item.name}</span>
                    <span className="text-slate-500 text-sm ml-2">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl font-bold gradient-text">
                CasaGen gives your whole brokerage everything, in one price.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Highlights */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                What Your Brokerage Gets
              </h2>
              <p className="text-lg text-slate-400">
                Every plan includes the core tools your agents and admins need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformHighlights.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card-hover rounded-2xl p-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-sky-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-white mb-12 tracking-tight">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">
              {faqData.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.question}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
              Need a custom plan for your brokerage?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              We work with brokerages of all sizes. Let's find the right fit.
            </p>
            <Button
              size="lg"
              className="h-12 px-8 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-white font-semibold text-base rounded-xl shadow-lg shadow-sky-500/25 border-0 transition-all duration-300"
              asChild
            >
              <Link href="/contact#contact-form">
                Contact Sales
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
