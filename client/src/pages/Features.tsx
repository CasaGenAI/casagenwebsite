import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import {
  ShieldCheck,
  Scale,
  Zap,
  Users,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Semantic PSA Intelligence",
    description:
      "Vision Language Models parse every Purchase and Sale Agreement semantically — not just as text. The system distinguishes hard deadlines from conditional contingencies and extracts every party for automatic task assignment.",
    highlights: [
      "Hard vs. conditional deadline detection",
      "Cross-document entity extraction for auto-assignment",
      "35 minutes of manual entry reduced to 60 seconds",
    ],
  },
  {
    icon: Scale,
    title: "Regulatory Rule Engine",
    description:
      "State and federal compliance rules are automatically matched against your PSA at the moment of upload — covering CA DRE, TREC, Florida DBPR, and more, with federal RESPA and TRID monitoring built in. High-risk flags surface before they reach closing, not after.",
    highlights: [
      "State rule databases: CA, FL, TX, NC and more",
      "Federal RESPA and TRID monitoring built in",
      "Intake-level detection — caught before, not after the fact",
    ],
  },
  {
    icon: Zap,
    title: "Agentic Task Orchestration",
    description:
      "AI identifies every required action in the contract, assigns tasks to parties retrieved directly from the document, and monitors email threads to confirm completion. The system moves from passive notification to active orchestration.",
    highlights: [
      "Entity-based auto-assignment from PSA — lenders, agents, title",
      "Thread-aware inbox triage — no manual bcc required",
      "Human-in-the-loop proof review before task close",
    ],
  },
  {
    icon: Users,
    title: "Brokerage Admin Dashboard",
    description:
      "Real-time visibility into every agent, every deal, and every compliance risk across your brokerage. Leaderboards, quick audit modes, and multi-tier oversight give brokers full control — and early warning.",
    highlights: [
      "Intake-level compliance risk detection across all transactions",
      "Agent performance leaderboards and pipeline analytics",
      "Multi-tenant oversight for multi-office brokerages",
    ],
  },
  {
    icon: GraduationCap,
    title: "Agent & Education Portal",
    description:
      "A dedicated hub for everything your agents need beyond the deal. Manage onboarding, track continuing education requirements, administer commission splits, and control role-based permissions — all in one place.",
    highlights: [
      "CE credit tracking and state deadline alerts",
      "Commission split administration and disbursement management",
      "Agent onboarding workflows and license tracking",
    ],
  },
];

// Capability comparison table data
const capabilityTable = [
  { capability: "Data Extraction", mechanism: "VLM-based Semantic Parsing", impact: "35 min of entry → 60 seconds" },
  { capability: "Task Assignment", mechanism: "Entity Recognition & CRM Sync", impact: "Eliminates manual contact entry" },
  { capability: "Email Triage", mechanism: "Thread-Aware NLP", impact: "Matches emails to files automatically" },
  { capability: "Compliance Review", mechanism: "RegTech Integration", impact: "Continuous state and federal monitoring" },
  { capability: "Admin Oversight", mechanism: "Multi-Tenant Dashboards", impact: "Real-time brokerage-wide risk visibility" },
];

export default function Features() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navigation />

      <main style={{ paddingTop: "64px" }}>
        {/* ── Hero ── */}
        <section style={{ background: "#f7f7f5", padding: "80px 24px" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto", textAlign: "center" }}>
            <h1
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                lineHeight: 1.05,
                letterSpacing: "clamp(-1.5px, -0.04em, -2.6px)",
                color: "#1b0624",
                fontWeight: 400,
                marginBottom: "20px",
              }}
            >
              The compliance infrastructure modern brokerages need
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.6,
                color: "#898683",
                maxWidth: "540px",
                margin: "0 auto 36px",
              }}
            >
              From semantic PSA parsing to agentic task orchestration — built on the regulatory frameworks that govern real estate, not bolted on after the fact.
            </p>
            <Link href="/pricing">
              <button
                className="transition-opacity hover:opacity-85"
                style={{
                  background: "#160f0c",
                  color: "#ffffff",
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
                data-testid="button-features-trial"
              >
                Start 14-Day Free Trial
                <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
        </section>

        {/* ── Capability Table ── */}
        <section style={{ background: "#ffffff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "24px",
                lineHeight: 1.3,
                letterSpacing: "-0.72px",
                color: "#1b0624",
                fontWeight: 400,
                textAlign: "center",
                marginBottom: "32px",
              }}
            >
              From document storage to agentic orchestration
            </h2>
            <div
              style={{
                background: "#edece7",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                    <th style={{ textAlign: "left", padding: "14px 20px", fontSize: "11px", fontWeight: 600, color: "#898683", letterSpacing: "0.08em", textTransform: "uppercase" }}>Capability</th>
                    <th style={{ textAlign: "left", padding: "14px 20px", fontSize: "11px", fontWeight: 600, color: "#898683", letterSpacing: "0.08em", textTransform: "uppercase" }}>Technical Mechanism</th>
                    <th style={{ textAlign: "left", padding: "14px 20px", fontSize: "11px", fontWeight: 600, color: "#898683", letterSpacing: "0.08em", textTransform: "uppercase" }}>Operational Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {capabilityTable.map((row, i) => (
                    <tr
                      key={i}
                      style={{ borderBottom: i < capabilityTable.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none" }}
                    >
                      <td style={{ padding: "14px 20px", fontSize: "13px", fontWeight: 500, color: "#292421" }}>{row.capability}</td>
                      <td style={{ padding: "14px 20px", fontSize: "13px", color: "#898683" }}>{row.mechanism}</td>
                      <td style={{ padding: "14px 20px", fontSize: "13px", color: "#292421" }}>{row.impact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── Feature Cards — 5 Pillars ── */}
        <section style={{ background: "#f7f7f5", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <h2
                style={{
                  fontSize: "32px",
                  lineHeight: 1.2,
                  letterSpacing: "-0.96px",
                  color: "#1b0624",
                  fontWeight: 400,
                  marginBottom: "12px",
                }}
              >
                Five pillars, one platform
              </h2>
              <p style={{ fontSize: "16px", color: "#898683", lineHeight: 1.71, maxWidth: "440px", margin: "0 auto" }}>
                Each capability is designed to eliminate a specific category of manual work in real estate transactions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    style={{
                      background: "#ffffff",
                      borderRadius: "16px",
                      padding: "32px 28px",
                      boxShadow: "rgba(0,0,0,0.05) 0px 0px 0px 1px inset",
                    }}
                    data-testid={`feature-card-${index}`}
                  >
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: "#edece7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                        color: "#898683",
                      }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3
                      style={{
                        fontSize: "17px",
                        lineHeight: 1.35,
                        letterSpacing: "-0.3px",
                        color: "#1b0624",
                        fontWeight: 500,
                        marginBottom: "10px",
                      }}
                    >
                      {feature.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.65,
                        color: "#898683",
                        marginBottom: "20px",
                      }}
                    >
                      {feature.description}
                    </p>

                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                      {feature.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          style={{ fontSize: "13px", color: "#292421", display: "flex", alignItems: "flex-start", gap: "8px" }}
                        >
                          <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#898683", flexShrink: 0, marginTop: "7px" }} />
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

        {/* ── CTA ── */}
        <section style={{ background: "#1b0624", padding: "96px 24px" }}>
          <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
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
              Ready to run a smarter brokerage?
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.71,
                color: "rgba(255,255,255,0.58)",
                marginBottom: "36px",
                maxWidth: "400px",
                margin: "0 auto 36px",
              }}
            >
              Join brokerages that use CasaGen to stay compliant, close faster, and scale with confidence.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/pricing">
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
                  data-testid="button-features-cta"
                >
                  Start 14-Day Free Trial
                </button>
              </Link>
              <Link href="/contact#contact-form">
                <button
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
                  data-testid="button-features-demo"
                >
                  Request a Demo
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
