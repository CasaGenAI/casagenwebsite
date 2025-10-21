import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for individual agents getting started",
      features: [
        "50 AI lead queries per month",
        "Unlimited property analysis",
        "Basic transaction management",
        "Email support",
        "Mobile app access",
      ],
      cta: "Start Free Trial",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "For active agents and small teams",
      features: [
        "Unlimited AI lead queries",
        "Unlimited property analysis",
        "Advanced transaction management",
        "Priority support",
        "Mobile app access",
        "Team collaboration tools",
        "Custom market reports",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For brokerages and large teams",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced analytics",
        "White-label options",
        "Onboarding & training",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      highlighted: false,
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-4">
              Choose the plan that fits your business. All plans include a 14-day
              free trial.
            </p>
            <p className="text-sm text-muted-foreground">
              No credit card required • Cancel anytime
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className={`p-8 flex flex-col ${
                    plan.highlighted
                      ? "border-primary shadow-xl scale-105"
                      : ""
                  }`}
                  data-testid={`pricing-card-${plan.name.toLowerCase()}`}
                >
                  {plan.highlighted && (
                    <div className="text-center mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wide">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <div className="mb-2">
                      <span className="text-5xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      {plan.price !== "Custom" && (
                        <span className="text-muted-foreground ml-2">
                          /{plan.period.split(" ")[1]}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-chart-2/10 flex items-center justify-center mt-0.5">
                          <Check className="h-3 w-3 text-chart-2" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                    asChild
                    data-testid={`button-${plan.name.toLowerCase()}`}
                  >
                    <Link href={plan.cta === "Contact Sales" ? "/contact" : "/signup"}>
                      {plan.cta}
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Can I change plans later?
                </h3>
                <p className="text-muted-foreground">
                  Yes! You can upgrade or downgrade your plan at any time. Changes
                  take effect immediately, and we'll prorate any charges.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-muted-foreground">
                  We accept all major credit cards (Visa, Mastercard, American
                  Express) and can arrange invoicing for Enterprise customers.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Is there a long-term contract?
                </h3>
                <p className="text-muted-foreground">
                  No. All plans are month-to-month with no long-term commitment.
                  Cancel anytime with no penalties.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
