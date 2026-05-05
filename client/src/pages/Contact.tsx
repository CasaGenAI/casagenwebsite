import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Mail, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";


const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: "8px",
  border: "1px solid rgba(0,0,0,0.15)",
  background: "#eeeeee",
  fontSize: "14px",
  color: "#000000",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 500,
  color: "#292421",
  marginBottom: "6px",
};

const AGENT_COUNT_OPTIONS = [
  "Just me (solo TC)",
  "2–5 agents",
  "6–15 agents",
  "16–50 agents",
  "50+ agents",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    agentCount: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (window.location.hash === "#contact-form") {
      setTimeout(() => {
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Prepend agent count to message so it reaches the backend
    const messageWithContext = form.agentCount
      ? `Team size: ${form.agentCount}\n\n${form.message}`
      : form.message;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || undefined,
          message: messageWithContext,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

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
              Get in touch
            </h1>
            <p style={{ fontSize: "16px", lineHeight: 1.71, color: "#898683", maxWidth: "420px", margin: "0 auto" }}>
              Reach out directly or fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>
        </section>

        {/* ── Contact Methods ── */}
        <section style={{ background: "#ffffff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto" }}>

            {/* Email */}
            <a
              href="mailto:info@casagen.ai"
              className="hover:opacity-75 transition-opacity"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                borderRadius: "16px",
                padding: "20px 24px",
                background: "#edece7",
                textDecoration: "none",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(0,0,0,0.07)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: "#898683",
                }}
              >
                <Mail className="h-5 w-5" />
              </div>
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#292421", marginBottom: "2px" }}>
                  Email Us
                </h3>
                <p style={{ fontSize: "14px", color: "#898683" }}>info@casagen.ai</p>
              </div>
              <svg className="h-4 w-4" style={{ color: "#b2afae" }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Contact Form */}
            <div
              id="contact-form"
              style={{
                borderRadius: "16px",
                padding: "32px",
                background: "#edece7",
                boxShadow: "rgba(0,0,0,0.05) 0px 0px 0px 1px inset",
              }}
            >
              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "24px 0" }}>
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <CheckCircle className="h-6 w-6" style={{ color: "#292421" }} />
                  </div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 400,
                      color: "#1b0624",
                      letterSpacing: "-0.4px",
                      marginBottom: "8px",
                    }}
                  >
                    Message sent
                  </h3>
                  <p style={{ fontSize: "14px", color: "#898683", lineHeight: 1.65 }}>
                    We'll get back to you within 24 hours at {form.email}.
                  </p>
                </div>
              ) : (
                <>
                  <h2
                    style={{
                      fontSize: "20px",
                      lineHeight: 1.4,
                      letterSpacing: "-0.4px",
                      color: "#1b0624",
                      fontWeight: 500,
                      marginBottom: "24px",
                    }}
                  >
                    Send us a message
                  </h2>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label style={labelStyle} htmlFor="name">Full name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="email">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="jane@brokerage.com"
                          value={form.email}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    {/* Brokerage + Agent count */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label style={labelStyle} htmlFor="company">Brokerage name</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Acme Realty"
                          value={form.company}
                          onChange={handleChange}
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={labelStyle} htmlFor="agentCount">Number of agents</label>
                        <select
                          id="agentCount"
                          name="agentCount"
                          value={form.agentCount}
                          onChange={handleChange}
                          style={{ ...inputStyle, color: form.agentCount ? "#000000" : "#444444" }}
                        >
                          <option value="" disabled>Select range</option>
                          {AGENT_COUNT_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={labelStyle} htmlFor="message">What are you looking for?</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your brokerage and what you're trying to solve..."
                        value={form.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                      />
                    </div>

                    {/* Error */}
                    {status === "error" && (
                      <p style={{ fontSize: "13px", color: "#c0392b", lineHeight: 1.5 }}>
                        {errorMessage}
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="transition-opacity hover:opacity-85"
                      style={{
                        background: "#160f0c",
                        color: "#ffffff",
                        borderRadius: "999px",
                        padding: "11px 24px",
                        fontSize: "14px",
                        fontWeight: 500,
                        border: "none",
                        cursor: status === "submitting" ? "not-allowed" : "pointer",
                        opacity: status === "submitting" ? 0.6 : 1,
                        alignSelf: "flex-start",
                      }}
                    >
                      {status === "submitting" ? "Sending…" : "Send message"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
