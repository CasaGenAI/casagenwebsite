import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Search,
  BarChart3,
  Calendar,
  Brain,
  Shield,
  Zap,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: "AI Lead Generation",
      description:
        "Discover off-market opportunities with our intelligent lead finder that analyzes tax records, ownership history, and market patterns.",
      highlights: [
        "Natural language queries",
        "Off-market property discovery",
        "Owner intent prediction",
      ],
    },
    {
      icon: BarChart3,
      title: "Investment Analysis",
      description:
        "Get instant property evaluations with AI-powered investment scores, risk assessments, and comprehensive market data.",
      highlights: [
        "30-second deal analysis",
        "Flip vs. rental comparisons",
        "Neighborhood quality metrics",
      ],
    },
    {
      icon: Calendar,
      title: "Transaction Management",
      description:
        "Manage your entire pipeline with automated timelines, task checklists, and integrated calendar views.",
      highlights: [
        "Automated deal timelines",
        "Deadline tracking",
        "Client task management",
      ],
    },
    {
      icon: Search,
      title: "Market Intelligence",
      description:
        "Stay ahead with curated market news, trend analysis, and neighborhood insights delivered right to your dashboard.",
      highlights: [
        "Real-time market updates",
        "Trend forecasting",
        "Competitive analysis",
      ],
    },
    {
      icon: Shield,
      title: "Data Security",
      description:
        "Your data is encrypted and secure. We comply with all industry standards to protect your sensitive business information.",
      highlights: [
        "Bank-level encryption",
        "SOC 2 compliant",
        "Regular security audits",
      ],
    },
    {
      icon: Zap,
      title: "Fast & Reliable",
      description:
        "Built on modern infrastructure for speed and reliability. Access your data anywhere, anytime, on any device.",
      highlights: [
        "99.9% uptime guarantee",
        "Lightning-fast responses",
        "Mobile-optimized",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Everything You Need to Close More Deals
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              Powerful features designed for real estate professionals who demand
              the best tools and insights.
            </p>
            <Button size="lg" asChild data-testid="button-features-trial">
              <Link href="/signup">Start Your Free Trial</Link>
            </Button>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="p-8 hover-elevate transition-all duration-300"
                    data-testid={`feature-card-${index}`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    
                    <p className="text-base text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-foreground flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of real estate professionals already using CasaGen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild data-testid="button-features-cta">
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                data-testid="button-features-demo"
              >
                <Link href="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
