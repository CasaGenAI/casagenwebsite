import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { APP_URL } from "@/config";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  price: string;
  priceDetail: string;
  savingsNote: string | null;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
  badge: string | null;
  isContactUs: boolean;
}

const plans: Plan[] = [
  {
    id: "solo",
    name: "Solo",
    price: "$15",
    priceDetail: "/mo · 1 credit/month",
    savingsNote: "1 free credit to start",
    description: "For solo TCs. One credit closes one transaction.",
    features: [
      "1 transaction credit included each month",
      "PSA parsing + auto-task creation",
      "50-state compliance baseline",
      "Document storage + audit trail",
      "Human review queue — nothing closes without sign-off",
    ],
    cta: "Start with 1 free credit",
    highlighted: false,
    badge: null,
    isContactUs: false,
  },
  {
    id: "brokerage",
    name: "Brokerage",
    price: "$549",
    priceDetail: "/mo · 50 credits/month",
    savingsNote: "3 free credits to start · Save $1,320/year on annual billing",
    description: "For brokerages that need compliance depth and agent management.",
    features: [
      "Everything in Solo",
      "50 transaction credits included each month",
      "Agent profiles + role-based permissions",
      "CE credit + license expiration tracking",
      "Tamper-proof audit trail — complete record of every change",
      "Team pipeline view",
      "AI-drafted email replies",
      "Automatic commission calculation from parsed PSA",
      "Commission dashboard + CSV export",
      "Quick audit mode",
      "Custom reporting",
      "Onboarding workflows",
      "Priority support + guided onboarding",
    ],
    cta: "Start with 3 free credits",
    highlighted: true,
    badge: "Best Value",
    isContactUs: false,
  },
  {
    id: "full-service",
    name: "Full Service TC",
    price: "$450",
    priceDetail: "per transaction",
    savingsNote: "No subscription · Pay only when you close",
    description: "For brokerages that want a dedicated TC, not just the software.",
    features: [
      "Dedicated licensed transaction coordinator",
      "End-to-end management from PSA to close",
      "Document collection + party follow-up",
      "Deadline tracking + automated reminders",
      "50-state compliance review",
      "All CasaGen software features included",
      "Closing prep + post-close audit",
      "Direct line for your agents and clients",
    ],
    cta: "Talk to a TC",
    highlighted: false,
    badge: null,
    isContactUs: true,
  },
  {
    id: "custom",
    name: "Custom",
    price: "Let's talk",
    priceDetail: "tailored to your brokerage",
    savingsNote: null,
    description: "For multi-office brokerages and unique requirements.",
    features: [
      "Everything in Brokerage",
      "Multi-office management",
      "Custom state rule configuration",
      "Dedicated integrations (CRM, accounting, SSO, and more)",
      "Dedicated account manager + SLA",
    ],
    cta: "Contact Sales",
    highlighted: false,
    badge: null,
    isContactUs: true,
  },
];

function handleSelectPlan(plan: Plan) {
  if (plan.isContactUs) {
    window.location.href = "/contact#contact-form";
  } else {
    window.location.href = `${APP_URL}/signup?plan=${plan.id}`;
  }
}

export default function Pricing() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navigation />

      <main style={{ paddingTop: "64px" }}>
        {/* ── Hero ── */}
        <section style={{ background: "#f7f7f5", padding: "80px 24px" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            <h1
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                lineHeight: 1.05,
                letterSpacing: "clamp(-1.5px, -0.04em, -2.6px)",
                color: "#1b0624",
                fontWeight: 400,
                marginBottom: "16px",
              }}
            >
              Simple pricing for every team size
            </h1>
            <p style={{ fontSize: "16px", lineHeight: 1.71, color: "#898683", marginBottom: "8px" }}>
              Start free with included credits. Subscribe for monthly credits sized to your workflow.
            </p>
            <p style={{ fontSize: "13px", color: "#b2afae" }}>
              Free credits on every plan · No credit card required · Cancel anytime
            </p>
          </div>
        </section>

        {/* ── Pricing Cards ── */}
        <section style={{ background: "#ffffff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  style={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "16px",
                    padding: "28px 24px",
                    background: plan.highlighted ? "#1b0624" : "#edece7",
                  }}
                >
                  {plan.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-14px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          background: "#766a7c",
                          color: "#ffffff",
                          borderRadius: "999px",
                          padding: "4px 14px",
                          fontSize: "11px",
                          fontWeight: 500,
                          letterSpacing: "0.02em",
                        }}
                      >
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div style={{ marginBottom: "24px" }}>
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: 600,
                        color: plan.highlighted ? "#ffffff" : "#292421",
                        marginBottom: "12px",
                        letterSpacing: "-0.1px",
                      }}
                    >
                      {plan.name}
                    </h3>
                    <div style={{ marginBottom: "6px" }}>
                      <span
                        style={{
                          fontSize: plan.price === "Custom" ? "28px" : "36px",
                          fontWeight: 400,
                          color: plan.highlighted ? "#ffffff" : "#1b0624",
                          letterSpacing: "-1.5px",
                          lineHeight: 1,
                        }}
                      >
                        {plan.price}
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                          color: plan.highlighted ? "rgba(255,255,255,0.5)" : "#898683",
                          marginLeft: "6px",
                          lineHeight: 1.3,
                          display: "inline-block",
                        }}
                      >
                        {plan.priceDetail}
                      </span>
                    </div>
                    {plan.savingsNote && (
                      <p
                        style={{
                          fontSize: "11px",
                          color: plan.highlighted ? "rgba(255,255,255,0.42)" : "#b2afae",
                          marginBottom: "10px",
                        }}
                      >
                        {plan.savingsNote}
                      </p>
                    )}
                    <p
                      style={{
                        fontSize: "12px",
                        color: plan.highlighted ? "rgba(255,255,255,0.5)" : "#898683",
                        lineHeight: 1.55,
                      }}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 24px 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "9px",
                      flexGrow: 1,
                    }}
                  >
                    {plan.features.map((feature, idx) => {
                      const isInherited =
                        feature === "Everything in Solo" ||
                        feature === "Everything in Brokerage";
                      return (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            fontSize: isInherited ? "11px" : "13px",
                            color: isInherited
                              ? plan.highlighted ? "rgba(255,255,255,0.32)" : "#b2afae"
                              : plan.highlighted ? "rgba(255,255,255,0.82)" : "#292421",
                            fontWeight: isInherited ? 500 : 400,
                            letterSpacing: isInherited ? "0.04em" : "normal",
                            textTransform: isInherited ? "uppercase" : "none",
                            marginTop: isInherited ? "4px" : "0",
                          }}
                        >
                          {!isInherited && (
                            <span
                              style={{
                                width: "4px",
                                height: "4px",
                                borderRadius: "50%",
                                background: plan.highlighted
                                  ? "rgba(255,255,255,0.35)"
                                  : "#898683",
                                flexShrink: 0,
                                marginTop: "6px",
                              }}
                            />
                          )}
                          <span style={{ lineHeight: 1.5 }}>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => handleSelectPlan(plan)}
                    className="transition-opacity hover:opacity-85"
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "999px",
                      fontSize: "13px",
                      fontWeight: 500,
                      cursor: "pointer",
                      border: plan.highlighted ? "none" : "1px solid rgba(0,0,0,0.16)",
                      background: plan.highlighted ? "#ffffff" : "transparent",
                      color: plan.highlighted ? "#1b0624" : "#000000",
                    }}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Social proof — replace with a real quote or stat when available ── */}
        {/*
        <section style={{ background: "#ffffff", padding: "40px 24px" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: "18px", lineHeight: 1.6, color: "#292421", fontStyle: "italic", marginBottom: "12px" }}>
              "[Real quote from beta user goes here.]"
            </p>
            <p style={{ fontSize: "13px", color: "#898683" }}>
              — Name, Title, Brokerage · City, State
            </p>
          </div>
        </section>
        */}

        {/* ── CTA ── */}
        <section style={{ background: "#1b0624", padding: "96px 24px" }}>
          <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "40px",
                lineHeight: 1.1,
                letterSpacing: "-2px",
                color: "#ffffff",
                fontWeight: 400,
                marginBottom: "16px",
              }}
            >
              Start with one deal. Scale to your whole brokerage.
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "rgba(255,255,255,0.55)",
                marginBottom: "36px",
                lineHeight: 1.71,
              }}
            >
              No contracts. No setup fees. Cancel or change plans anytime.
            </p>
            <div
              style={{
                display: "flex",
                gap: "12px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact#contact-form">
                <button
                  className="transition-opacity hover:opacity-90"
                  style={{
                    background: "#ffffff",
                    color: "#1b0624",
                    borderRadius: "999px",
                    padding: "10px 24px",
                    fontSize: "15px",
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  Talk to Sales
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <button
                onClick={() => {
                  window.location.href = `${APP_URL}/signup`;
                }}
                className="transition-opacity hover:opacity-75"
                style={{
                  background: "transparent",
                  color: "rgba(255,255,255,0.8)",
                  borderRadius: "999px",
                  padding: "8px 20px",
                  fontSize: "15px",
                  border: "1px solid rgba(255,255,255,0.25)",
                  cursor: "pointer",
                  fontWeight: 400,
                }}
              >
                Start Free Trial
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
