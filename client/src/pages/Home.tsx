import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { APP_URL } from "@/config";
import { Check, Sparkles, ShieldCheck, FileText, ArrowRight, Users, Search } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Brokerage Compliance",
      description: "Built-in compliance workflows, audit trails, and document tracking to keep your brokerage protected on every transaction.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Transaction Management",
      description: "Manage your entire pipeline with automated timelines, checklists, and deadline tracking from contract to close.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Brokerage Admin Tools",
      description: "Oversee your agents, track performance, forecast revenue, manage permissions, and get full visibility into your brokerage from one dashboard.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Off-Market Deal Finder",
      description: "Uncover hidden opportunities with AI that scans tax records, owner history, and proxy data to surface deals before they hit the market.",
    },
  ];

  const steps = [
    { number: "01", title: "Set Up Your Brokerage", description: "Create your brokerage account, invite agents, and configure compliance rules." },
    { number: "02", title: "Find & Manage Deals", description: "Discover off-market opportunities and manage transactions with full compliance." },
    { number: "03", title: "Scale with Confidence", description: "Grow your team knowing every deal is tracked, compliant, and on schedule." },
  ];

  return (
    <div className="min-h-screen bg-[hsl(225,25%,6%)]">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 lg:pt-24 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-500/8 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/6 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/4 rounded-full blur-[120px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center py-10 lg:py-20">
              {/* Hero Video */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden glow-lg">
                  <div className="absolute inset-0 rounded-2xl gradient-border" />
                  <div className="glass-card rounded-2xl overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover aspect-video"
                    >
                      <source src="/videos/FullSite.mov" type="video/mp4" />
                      <source src="/videos/FullSite.mov" type="video/quicktime" />
                    </video>
                  </div>
                </div>
              </div>

              {/* Hero Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm text-sky-400 font-medium mb-6">
                  <Sparkles className="h-3.5 w-3.5" />
                  Real-time transaction oversight. Smarter tools for your agents.
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
                  AI Compliance for{" "}
                  <span className="gradient-text">Modern Brokerages</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 mb-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  CasaGen helps brokerages monitor compliance across every transaction — automatically. AI flags issues before they become problems, so nothing slips through the cracks.
                </p>
                <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Your agents get built-in tools to work faster — lead management, property enrichment, off-market deal discovery, and more. <span className="text-slate-200 font-medium">The brokerage stays compliant. The agents close more deals.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="h-12 px-6 bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-white font-semibold text-base rounded-xl shadow-lg shadow-sky-500/25 border-0 transition-all duration-300 hover:shadow-sky-500/35 hover:-translate-y-0.5"
                    asChild
                  >
                    <Link href="/pricing">
                      Start 14-Day Free Trial
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-6 bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-white/20 font-semibold text-base rounded-xl transition-all duration-300"
                    asChild
                  >
                    <a href="/contact#contact-form">Request a Demo</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Everything Your Brokerage Needs
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                From off-market deal sourcing to compliant closings, one platform to run your entire brokerage.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group glass-card-hover rounded-2xl p-8 text-center items-center flex flex-col gap-4"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/15 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Showcase with Videos */}
        <section className="relative py-20 lg:py-32">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Feature 1: Compliance & Transactions */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-4 block">Compliance & Transactions</span>
                <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                  Every Transaction, Fully Compliant
                </h3>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  No more compliance headaches. Every deal flows through automated checklists, document tracking, and audit trails that keep your brokerage protected.
                </p>
                <ul className="space-y-3">
                  {["Built-in compliance workflows and audit trails", "Automated transaction timelines and deadlines", "Document tracking with version control"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center">
                        <Check className="h-3 w-3 text-emerald-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden glass-card glow-sm">
                <video autoPlay loop muted playsInline className="w-full">
                  <source src="/videos/transaction.mov" type="video/mp4" />
                  <source src="/videos/transaction.mov" type="video/quicktime" />
                </video>
              </div>
            </div>

            {/* Feature 2: Brokerage Admin */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
              <div className="order-2 lg:order-1 rounded-2xl overflow-hidden glass-card glow-sm">
                <video autoPlay loop muted playsInline className="w-full">
                  <source src="/videos/property-detail.mov" type="video/mp4" />
                  <source src="/videos/property-detail.mov" type="video/quicktime" />
                </video>
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4 block">Brokerage Admin</span>
                <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                  Full Visibility Across Your Brokerage
                </h3>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  Run your brokerage from one dashboard. Track agent performance, forecast revenue, manage permissions, and get real-time insights into every deal.
                </p>
                <ul className="space-y-3">
                  {["Agent performance tracking and leaderboards", "Revenue forecasting and pipeline analytics", "Role-based permissions and agent management"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center">
                        <Check className="h-3 w-3 text-emerald-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3: Off-Market Deals */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-4 block">Off-Market Deals</span>
                <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">
                  Find Deals Before They Hit the Market
                </h3>
                <p className="text-lg text-slate-400 mb-6 leading-relaxed">
                  Your agents get an unfair advantage. Our AI scans tax records, ownership data, and market signals to surface off-market opportunities your competitors will never see.
                </p>
                <ul className="space-y-3">
                  {["AI-powered off-market property discovery", "Owner intent signals and motivation scoring", "Targeted outreach lists for your agents"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center">
                        <Check className="h-3 w-3 text-emerald-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden glass-card glow-sm">
                <video autoPlay loop muted playsInline className="w-full">
                  <source src="/videos/leads.mov" type="video/mp4" />
                  <source src="/videos/leads.mov" type="video/quicktime" />
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/[0.02] to-transparent" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-white mb-16 tracking-tight">
              Get Started in Minutes
            </h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start glass-card-hover rounded-2xl p-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500/20 to-cyan-500/10 flex items-center justify-center border border-sky-500/20">
                    <span className="text-lg font-extrabold gradient-text">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-600 via-sky-500 to-cyan-500" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.12),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.15),transparent_50%)]" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Ready to Run a Smarter Brokerage?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join brokerages that use CasaGen to find off-market deals, stay compliant, and close faster.
            </p>
            <Button
              size="lg"
              className="h-14 px-8 bg-white hover:bg-white/95 text-sky-600 font-bold text-lg rounded-xl shadow-2xl shadow-black/20 border-0 transition-all duration-300 hover:-translate-y-0.5"
              asChild
            >
              <Link href="/pricing">
                Start Your Free Trial
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <p className="text-sm text-white/60 mt-4">
              No credit card required &bull; 14-day free trial &bull; Cancel anytime
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
