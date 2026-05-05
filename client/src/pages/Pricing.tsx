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
    id: "per-deal",
    name: "Per-Deal",
    price: "$15",
    priceDetail: "per transaction",
    savingsNote: "No monthly fees",
    description: "For solo TCs. Pay only when you close.",
    features: [
      "PSA parsing + auto-task creation",
      "50-state compliance baseline",
      "Document storage + audit trail",
      "Human review queue — nothing closes without sign-off",
    ],
    cta: "Start Processing — $15 per transaction",
    highlighted: false,
    badge: null,
    isContactUs: false,
  },
  {
    id: "team",
    name: "Team",
    price: "$199",
    priceDetail: "/mo · up to 15 seats",
    savingsNote: "Save $480/year on annual billing",
    description: "For small brokerages running unlimited deals.",
    features: [
      "Everything in Per-Deal",
      "Unlimited transactions (up to 100 pages per document)",
      "Agent profiles + role-based permissions",
      "CE credit tracking + license verification",
      "Tamper-proof audit trail — legally defensible for disputes",
      "Team pipeline view",
      "AI-drafted email replies",
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
    price: "$549",
    priceDetail: "/mo · up to 50 seats",
    savingsNote: "Save $1,320/year on annual billing",
    description: "For brokerages that need compliance depth and agent management.",
    features: [
      "Everything in Team",
      "Automatic commission calculation from parsed PSA",
      "Commission dashboard + CSV export",
      "Quick audit mode",
      "Custom reporting",
      "Onboarding workflows",
      "Priority support + guided onboarding",
    ],
    cta: "Start 14-Day Free Trial",
    highlighted: true,
    badge: "Best Value",
    isContactUs: false,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    priceDetail: "unlimited seats",
    savingsNote: "Starting at $1,500/mo",
    description: "For large and multi-office brokerages with custom requirements.",
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

const faqData = [
  {
    question: "Is 'unlimited transactions' truly unlimited?",
    answer: "Unlimited transactions covers standard residential PSAs up to 100 pages per document. Commercial transactions or documents over 100 pages — contact us.",
  },
  {
    question: "What integrations are available on Enterprise?",
    answer: "Enterprise plans include a dedicated resource to scope and build the integrations your brokerage needs — CRM, accounting, SSO, and more. Nothing is pre-built; we build it with you. Contact us to discuss your requirements.",
  },
];

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
              Pay per deal as a solo TC, or run your entire brokerage on one subscription.
            </p>
            <p style={{ fontSize: "13px", color: "#b2afae" }}>
              14-day free trial on all subscription plans · No credit card required · Cancel anytime
            </p>
          </div>
        </section>

        {/* ── Pricing Cards ── */}
        <section style={{ background: "#ffffff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
                        feature === "Everything in Per-Deal" ||
                        feature === "Everything in Team" ||
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

        {/* ── Value comparison ── */}
        <section style={{ background: "#f7f7f5", padding: "64px 24px" }}>
          <div style={{ maxWidth: "580px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "32px",
                lineHeight: 1.2,
                letterSpacing: "-0.96px",
                color: "#1b0624",
                fontWeight: 400,
                textAlign: "center",
                marginBottom: "12px",
              }}
            >
              Replace three tools with one
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "#898683",
                textAlign: "center",
                marginBottom: "32px",
                lineHeight: 1.71,
              }}
            >
              A typical brokerage running separate tools pays more — and still has compliance gaps.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
              {[
                { name: "Transaction management (Dotloop / SkySlope)", price: "$340+/mo" },
                { name: "CE tracking platform", price: "$50–100/mo" },
                { name: "Commission management (Brokermint)", price: "$184+/mo" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 20px",
                    borderRadius: "12px",
                    background: "#edece7",
                  }}
                >
                  <span style={{ fontSize: "14px", color: "#292421" }}>{item.name}</span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#898683",
                      fontWeight: 500,
                      flexShrink: 0,
                      marginLeft: "16px",
                    }}
                  >
                    {item.price}
                  </span>
                </div>
              ))}

              {/* Subtotal */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 20px",
                }}
              >
                <span style={{ fontSize: "13px", color: "#898683" }}>
                  Combined — with compliance gaps
                </span>
                <span style={{ fontSize: "13px", color: "#898683", fontWeight: 500 }}>
                  $574–$624/mo
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "2px 0" }}>
                <div style={{ flexGrow: 1, height: "1px", background: "rgba(0,0,0,0.08)" }} />
                <span style={{ fontSize: "12px", color: "#b2afae" }}>vs.</span>
                <div style={{ flexGrow: 1, height: "1px", background: "rgba(0,0,0,0.08)" }} />
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 20px",
                  borderRadius: "12px",
                  background: "#1b0624",
                }}
              >
                <span style={{ fontSize: "14px", color: "#ffffff", fontWeight: 500 }}>
                  CasaGen Brokerage — replaces all three
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.65)",
                    fontWeight: 500,
                    flexShrink: 0,
                    marginLeft: "16px",
                  }}
                >
                  $549/mo
                </span>
              </div>
            </div>

            <p
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "#898683",
                lineHeight: 1.65,
              }}
            >
              Separate tools also mean fragmented audit trails, manual data entry between systems, and no unified compliance view.
            </p>
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

        {/* ── FAQ ── */}
        <section style={{ background: "#ffffff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "32px",
                lineHeight: 1.2,
                letterSpacing: "-0.96px",
                color: "#1b0624",
                fontWeight: 400,
                textAlign: "center",
                marginBottom: "40px",
              }}
            >
              Questions
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {faqData.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "#edece7",
                    borderRadius: "16px",
                    padding: "24px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 500,
                      color: "#292421",
                      marginBottom: "8px",
                      letterSpacing: "-0.15px",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.question}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#898683", lineHeight: 1.65 }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

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
