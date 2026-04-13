import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { APP_URL } from "@/config";
import {
  Search,
  ShieldCheck,
  Calendar,
  Users,
  BarChart3,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Brokerage Compliance",
      description:
        "Protect your brokerage with built-in compliance workflows. Every transaction is tracked with audit trails, document verification, and automated checklists.",
      highlights: [
        "Automated compliance checklists",
        "Full audit trail on every deal",
        "Document tracking with version control",
      ],
      accent: "sky",
    },
    {
      icon: Calendar,
      title: "Transaction Management",
      description:
        "From contract to close, manage every deal with automated timelines, deadline tracking, and integrated task management across your entire team.",
      highlights: [
        "Automated deal timelines",
        "Deadline alerts and reminders",
        "Multi-agent deal coordination",
      ],
      accent: "cyan",
    },
    {
      icon: Users,
      title: "Brokerage Admin Tools",
      description:
        "Full visibility into your brokerage. Track agent performance, forecast revenue, manage permissions, and monitor deal flow from one dashboard.",
      highlights: [
        "Agent performance tracking and leaderboards",
        "Revenue forecasting and pipeline analytics",
        "Role-based permissions and onboarding",
      ],
      accent: "violet",
    },
    {
      icon: Search,
      title: "Off-Market Deal Finder",
      description:
        "Give your agents an edge with AI that scans tax records, ownership history, and market signals to surface off-market opportunities before anyone else.",
      highlights: [
        "AI-powered property discovery",
        "Owner intent and motivation scoring",
        "Targeted outreach lists",
      ],
      accent: "emerald",
    },
    {
      icon: BarChart3,
      title: "AI Property Intelligence",
      description:
        "Equip your agents with AI-powered property analysis — investment scores, risk assessments, pricing strategies, and market insights in seconds.",
      highlights: [
        "Investment and risk scoring",
        "Days on Market predictions",
        "Pricing strategy analysis",
      ],
      accent: "amber",
    },
    {
      icon: FileText,
      title: "Reporting & Analytics",
      description:
        "Track your brokerage's performance with real-time dashboards, agent activity reports, pipeline health, and compliance status at a glance.",
      highlights: [
        "Real-time pipeline dashboards",
        "Agent performance metrics",
        "Compliance status reporting",
      ],
      accent: "rose",
    },
  ];

  const accentMap: Record<string, { bg: string; text: string; dot: string }> = {
    sky: { bg: "bg-sky-500/10", text: "text-sky-400", dot: "bg-sky-400" },
    cyan: { bg: "bg-cyan-500/10", text: "text-cyan-400", dot: "bg-cyan-400" },
    violet: { bg: "bg-violet-500/10", text: "text-violet-400", dot: "bg-violet-400" },
    emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", dot: "bg-emerald-400" },
    amber: { bg: "bg-amber-500/10", text: "text-amber-400", dot: "bg-amber-400" },
    rose: { bg: "bg-rose-500/10", text: "text-rose-400", dot: "bg-rose-400" },
  };

  return (
    <div className="min-h-screen bg-[hsl(225,25%,6%)]">
      <Navigation />

      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/6 rounded-full blur-[120px]" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Built for Brokerages. <span className="gradient-text-accent">Agents First.</span>{" "}
              <span className="gradient-text">Powered by AI.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
              Off-market deal sourcing, compliant transactions, and admin tools
              your brokerage needs to scale — all in one platform.
            </p>
            <Button
              size="lg"
              className="h-12 px-6 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-white font-semibold text-base rounded-xl shadow-lg shadow-sky-500/25 border-0 transition-all duration-300"
              asChild
              data-testid="button-features-trial"
            >
              <Link href="/pricing">
                Start 14-Day Free Trial
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const colors = accentMap[feature.accent];
                return (
                  <div
                    key={index}
                    className="group glass-card-hover rounded-2xl p-8"
                    data-testid={`feature-card-${index}`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-6 w-6 ${colors.text}`} />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                      {feature.description}
                    </p>

                    <ul className="space-y-2.5">
                      {feature.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-slate-300 flex items-center gap-2.5"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/[0.03] to-transparent" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to Run a Smarter Brokerage?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Join brokerages that use CasaGen to stay compliant, find off-market deals, and close faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-12 px-6 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-white font-semibold rounded-xl shadow-lg shadow-sky-500/25 border-0 transition-all duration-300"
                asChild
                data-testid="button-features-cta"
              >
                <Link href="/pricing">Start 14-Day Free Trial</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-6 bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-white/20 font-semibold rounded-xl transition-all duration-300"
                asChild
                data-testid="button-features-demo"
              >
                <Link href="/contact#contact-form">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
