import type { CSSProperties } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Why Brokerage Compliance Is the Next Competitive Advantage",
    excerpt:
      "Compliance isn't just risk mitigation — it's a growth lever. Learn how top brokerages are using AI to turn oversight into a selling point for recruiting agents.",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Compliance",
  },
  {
    title: "How AI Flags Transaction Issues Before They Become Problems",
    excerpt:
      "A deep dive into how CasaGen's AI monitors every transaction in real time, catching missing documents, missed deadlines, and compliance gaps automatically.",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "AI & Technology",
  },
  {
    title: "Off-Market Deals: The Unfair Advantage Your Agents Need",
    excerpt:
      "How AI scans tax records, ownership data, and market signals to surface deals before they hit the MLS — and why brokerages should care.",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Off-Market",
  },
  {
    title: "Case Study: How One Brokerage Cut Compliance Reviews by 80%",
    excerpt:
      "See how a 40-agent brokerage eliminated manual compliance checks and gave their admin team hours back every week with automated workflows.",
    date: "February 28, 2024",
    readTime: "4 min read",
    category: "Success Stories",
  },
  {
    title: "The Brokerage Admin Dashboard: Full Visibility in One Place",
    excerpt:
      "Agent performance, deal flow, compliance status, and pipeline health — a walkthrough of the tools that give brokerage owners complete control.",
    date: "February 20, 2024",
    readTime: "5 min read",
    category: "Product Features",
  },
  {
    title: "Building an Agent-First Brokerage: Tools That Help, Not Hinder",
    excerpt:
      "The best brokerages give agents tools they actually want to use. Here's how to balance compliance oversight with agent productivity.",
    date: "February 15, 2024",
    readTime: "6 min read",
    category: "Best Practices",
  },
];

export default function Blog() {
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
              Insights & resources
            </h1>
            <p style={{ fontSize: "16px", lineHeight: 1.71, color: "#898683" }}>
              Compliance best practices, AI trends, and strategies for modern brokerages and their agents.
            </p>
          </div>
        </section>

        {/* ── Blog Posts ── */}
        <section style={{ background: "#ffffff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post, index) => (
                <div
                  key={index}
                  style={{
                    background: "#edece7",
                    borderRadius: "16px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  className="transition-opacity hover:opacity-85"
                  data-testid={`blog-post-${index}`}
                >
                  {/* Image placeholder */}
                  <div
                    style={{
                      height: "160px",
                      background: "linear-gradient(135deg, rgba(27,6,36,0.06) 0%, rgba(118,106,124,0.08) 100%)",
                    }}
                  />

                  <div style={{ padding: "24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <div style={{ marginBottom: "12px" }}>
                      <span
                        style={{
                          display: "inline-block",
                          background: "rgba(0,0,0,0.07)",
                          color: "#898683",
                          borderRadius: "999px",
                          padding: "3px 10px",
                          fontSize: "11px",
                          fontWeight: 500,
                          letterSpacing: "0.03em",
                        }}
                      >
                        {post.category}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "16px",
                        lineHeight: 1.4,
                        letterSpacing: "-0.2px",
                        color: "#1b0624",
                        fontWeight: 500,
                        marginBottom: "10px",
                      }}
                    >
                      {post.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "13px",
                        color: "#898683",
                        lineHeight: 1.65,
                        marginBottom: "16px",
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      } as CSSProperties}
                    >
                      {post.excerpt}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "16px",
                        borderTop: "1px solid rgba(0,0,0,0.06)",
                      }}
                    >
                      <div style={{ display: "flex", gap: "12px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "#b2afae" }}>
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: "#b2afae" }}>
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="h-3.5 w-3.5" style={{ color: "#898683" }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Newsletter CTA ── */}
        <section style={{ background: "#f7f7f5", padding: "80px 24px" }}>
          <div style={{ maxWidth: "480px", margin: "0 auto", textAlign: "center" }}>
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
              Stay updated
            </h2>
            <p style={{ fontSize: "16px", color: "#898683", lineHeight: 1.71, marginBottom: "28px" }}>
              Weekly insights, market updates, and exclusive content for modern brokerages.
            </p>
            <div style={{ display: "flex", gap: "8px", maxWidth: "400px", margin: "0 auto" }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  flexGrow: 1,
                  padding: "10px 16px",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.15)",
                  background: "#eeeeee",
                  fontSize: "14px",
                  color: "#000000",
                  outline: "none",
                }}
                data-testid="input-newsletter-email"
              />
              <button
                className="transition-opacity hover:opacity-85"
                style={{
                  background: "#160f0c",
                  color: "#ffffff",
                  borderRadius: "8px",
                  padding: "10px 18px",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
                data-testid="button-newsletter-subscribe"
              >
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
