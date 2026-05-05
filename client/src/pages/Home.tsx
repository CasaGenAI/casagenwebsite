import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Zap, Users, GraduationCap } from "lucide-react";

// Pre-computed Pacific Northwest conifer treeline path
function buildTreelinePath(): string {
  const width = 1440;
  const baseY = 540;
  let d = `M0,${baseY}`;
  for (let x = 0; x < width; x += 16) {
    const h = 55 + Math.sin(x * 0.044) * 22 + Math.sin(x * 0.109) * 13 + Math.sin(x * 0.024) * 16;
    const peakY = Math.round(baseY - Math.max(h, 18));
    const valleyY = baseY - 10;
    d += ` L${x + 8},${peakY} L${x + 16},${valleyY}`;
  }
  d += ` L${width},${baseY} L${width},720 L0,720 Z`;
  return d;
}
const TREELINE = buildTreelinePath();

function PNWLandscape() {
  return (
    <svg
      viewBox="0 0 1440 720"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pnw-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#bccfe0" />
          <stop offset="36%" stopColor="#d0c4a2" />
          <stop offset="66%" stopColor="#dcd4bc" />
          <stop offset="100%" stopColor="#e8dece" />
        </linearGradient>
        <linearGradient id="pnw-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8d8e6" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#a8bac8" stopOpacity="0.62" />
        </linearGradient>
        <linearGradient id="pnw-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7a9076" />
          <stop offset="100%" stopColor="#5e7060" />
        </linearGradient>
        <linearGradient id="pnw-ridge" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3c5242" />
          <stop offset="100%" stopColor="#2a3c30" />
        </linearGradient>
        <linearGradient id="pnw-trees" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c3024" />
          <stop offset="100%" stopColor="#101e16" />
        </linearGradient>
        <linearGradient id="pnw-mist" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(228,218,204,0)" />
          <stop offset="55%" stopColor="rgba(228,218,204,0.20)" />
          <stop offset="100%" stopColor="rgba(228,218,204,0.52)" />
        </linearGradient>
        <linearGradient id="pnw-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="1440" height="720" fill="url(#pnw-sky)" />
      <path
        d="M0,392 L95,308 L195,330 L315,264 L415,288 L510,230 L580,186 L630,150
           L668,114 L692,94 L710,80 L720,75 L730,80 L748,94 L772,114 L810,150
           L860,186 L930,230 L1025,288 L1125,264 L1245,330 L1345,308 L1440,392
           L1440,720 L0,720 Z"
        fill="url(#pnw-far)"
      />
      <path d="M703,96 L714,82 L720,75 L726,82 L737,96 L730,110 L724,103 L720,99 L716,103 L710,110 Z" fill="#eae8e2" opacity="0.95" />
      <path d="M710,110 L718,102 L720,99 L722,102 L730,110 L724,118 L720,114 L716,118 Z" fill="#dcdad4" opacity="0.7" />
      <path
        d="M0,444 L82,386 L174,404 L282,358 L392,382 L502,344 L612,368 L722,352
           L832,370 L942,350 L1052,374 L1162,356 L1282,379 L1382,362 L1440,378
           L1440,720 L0,720 Z"
        fill="url(#pnw-mid)"
      />
      <path
        d="M0,490 L78,458 L172,472 L268,444 L368,462 L468,438 L568,458 L668,442
           L768,460 L868,444 L968,462 L1068,448 L1168,465 L1268,450 L1368,466
           L1440,458 L1440,720 L0,720 Z"
        fill="url(#pnw-ridge)"
      />
      <path d={TREELINE} fill="url(#pnw-trees)" />
      <rect x="0" y="455" width="1440" height="265" fill="url(#pnw-mist)" />
      <rect x="0" y="572" width="1440" height="148" fill="url(#pnw-fade)" />
    </svg>
  );
}

const features = [
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "AI Compliance Engine",
    description: "Flags every compliance gap the moment a PSA is uploaded — not at closing.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Automated Task + Email Management",
    description: "Tasks assigned from the contract. Inbox monitored. Nothing chased manually.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Brokerage Admin Dashboard",
    description: "Every agent, every deal, every compliance risk — visible in one place.",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Agent & Education Portal",
    description: "CE tracking, license tracking, commission management, and onboarding.",
  },
];

const steps = [
  { number: "01", title: "Upload or connect your PSA", description: "AI semantically parses the contract, extracts every deadline, identifies all parties, and matches compliance rules for your state — in under 60 seconds." },
  { number: "02", title: "Orchestrate every task automatically", description: "Tasks are assigned to the right parties from the document. Email threads are monitored. Completions are reviewed with attached proof before a human approves." },
  { number: "03", title: "Close with a complete audit trail", description: "Every action documented, every compliance rule checked, every deadline tracked. Your brokerage closes with confidence and a complete record." },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "#292421" }}>
          <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#898683", flexShrink: 0, display: "inline-block", marginTop: "7px" }} />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ShowcaseLabel({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "#898683", textTransform: "uppercase" as const, display: "block", marginBottom: "16px" }}>
      {children}
    </span>
  );
}

function ShowcaseHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 style={{ fontSize: "32px", lineHeight: 1.2, letterSpacing: "-0.96px", color: "#1b0624", fontWeight: 400, marginBottom: "16px" }}>
      {children}
    </h3>
  );
}

function ShowcaseBody({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: "16px", lineHeight: 1.71, color: "#898683", marginBottom: "24px" }}>
      {children}
    </p>
  );
}


export default function Home() {
  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <Navigation />

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden" style={{ minHeight: "720px" }}>
          <PNWLandscape />

          <div
            className="relative mx-auto px-6 text-center flex flex-col items-center"
            style={{ maxWidth: "840px", paddingTop: "184px", paddingBottom: "100px" }}
          >
            <h1
              style={{
                fontSize: "clamp(36px, 5vw, 68px)",
                lineHeight: 1.05,
                letterSpacing: "clamp(-1.5px, -0.05em, -3.4px)",
                color: "#1b0624",
                fontWeight: 400,
                marginBottom: "20px",
                maxWidth: "760px",
              }}
            >
              From contract to close — every deadline tracked, every rule checked.
            </h1>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.71,
                color: "#898683",
                marginBottom: "40px",
                maxWidth: "520px",
              }}
            >
              Automated compliance review, task assignment, and deadline tracking the moment a PSA is uploaded. Nothing slips. Nothing is chased manually. Your brokerage stays informed at every step.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <a href="/contact#contact-form">
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
                >
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </button>
              </a>
              <Link href="/pricing">
                <button
                  className="transition-opacity hover:opacity-70"
                  style={{
                    background: "transparent",
                    color: "#000000",
                    borderRadius: "999px",
                    padding: "8px 20px",
                    fontSize: "15px",
                    border: "1px solid #000000",
                    cursor: "pointer",
                    fontWeight: 400,
                  }}
                >
                  Start Free Trial
                </button>
              </Link>
            </div>
          </div>

          <div
            className="absolute bottom-0 inset-x-0 pointer-events-none"
            style={{ height: "100px", background: "linear-gradient(to bottom, transparent, #ffffff)" }}
          />
        </section>

        {/* ── Marketing Video ── */}
        <section style={{ background: "#ffffff", padding: "64px 24px 0" }}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <div
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                background: "#edece7",
                boxShadow: "rgba(0,0,0,0.05) 0px 0px 0px 1px inset",
                width: "100%",
                aspectRatio: "16/9",
                position: "relative",
              }}
            >
              <video
                controls
                playsInline
                preload="metadata"
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
                }}
              >
                <source src="/videos/casagen_v3_final.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </section>

        {/* ── Copilot value prop ── */}
        <section style={{ background: "#f7f7f5", padding: "64px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
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
                A copilot that only asks for your approval
              </h2>
              <p style={{ fontSize: "16px", lineHeight: 1.71, color: "#898683", maxWidth: "480px", margin: "0 auto" }}>
                Upload a PSA. Within 5 minutes, your timeline, task list, contacts, and compliance status are built — pulled directly from the document. You review. You approve. Done.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                {
                  number: "01",
                  title: "Timeline",
                  body: "Every deadline extracted from the contract and sequenced automatically.",
                },
                {
                  number: "02",
                  title: "Tasks",
                  body: "Each action assigned to the right party — lender, agent, or title — from the PSA.",
                },
                {
                  number: "03",
                  title: "Contacts",
                  body: "Every party identified from the document. No manual entry.",
                },
                {
                  number: "04",
                  title: "Compliance status",
                  body: "Rules checked against 50-state coverage and federal requirements. Gaps flagged.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    padding: "24px",
                    boxShadow: "rgba(0,0,0,0.05) 0px 0px 0px 1px inset",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <span style={{ fontSize: "11px", fontWeight: 600, color: "#b2afae", letterSpacing: "0.06em" }}>
                    {item.number}
                  </span>
                  <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#1b0624", letterSpacing: "-0.2px", lineHeight: 1.3 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#898683", lineHeight: 1.6 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ textAlign: "center", marginTop: "24px", fontSize: "13px", color: "#b2afae" }}>
              All four — in under 5 minutes from a single PSA upload.
            </p>
          </div>
        </section>

        {/* ── Who this is for ── */}
        <section style={{ background: "#ffffff", padding: "64px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div
                style={{
                  background: "#edece7",
                  borderRadius: "16px",
                  padding: "32px 28px",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "#898683", textTransform: "uppercase", marginBottom: "12px" }}>
                  For transaction coordinators
                </p>
                <h3 style={{ fontSize: "20px", lineHeight: 1.3, letterSpacing: "-0.4px", color: "#1b0624", fontWeight: 400, marginBottom: "10px" }}>
                  Stop chasing deadlines. Start closing deals.
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#898683" }}>
                  Upload a PSA and get a complete task list, auto-assigned to every party in the contract. Track everything from one dashboard — no spreadsheets, no missed contingencies.
                </p>
              </div>
              <div
                style={{
                  background: "#1b0624",
                  borderRadius: "16px",
                  padding: "32px 28px",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginBottom: "12px" }}>
                  For brokerages
                </p>
                <h3 style={{ fontSize: "20px", lineHeight: 1.3, letterSpacing: "-0.4px", color: "#ffffff", fontWeight: 400, marginBottom: "10px" }}>
                  Protect your license. Scale your team.
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: "rgba(255,255,255,0.55)" }}>
                  Monitor every deal across every agent in real time. Compliance gaps are surfaced at intake — not after the fact. CE tracking and commission management built in.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── How it works — position 2 ── */}
        <section style={{ background: "#f7f7f5", padding: "80px 24px" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: "32px",
                lineHeight: 1.2,
                letterSpacing: "-0.96px",
                color: "#1b0624",
                fontWeight: 400,
                textAlign: "center",
                marginBottom: "48px",
              }}
            >
              Get started in minutes
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  style={{
                    background: "#ffffff",
                    borderRadius: "16px",
                    padding: "24px",
                    display: "flex",
                    gap: "20px",
                    alignItems: "flex-start",
                    boxShadow: "rgba(0,0,0,0.05) 0px 0px 0px 1px inset",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "#898683", fontWeight: 600, letterSpacing: "0.05em", minWidth: "24px", paddingTop: "2px" }}>
                    {step.number}
                  </span>
                  <div>
                    <h3 style={{ fontSize: "15px", lineHeight: 1.4, color: "#292421", fontWeight: 500, marginBottom: "4px" }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#898683" }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Feature Cards ── */}
        <section style={{ background: "#ffffff", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
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
              Everything a brokerage needs to close clean
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  style={{
                    background: "#edece7",
                    borderRadius: "16px",
                    padding: "28px 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: "rgba(0,0,0,0.07)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#898683",
                      flexShrink: 0,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "15px", lineHeight: 1.4, letterSpacing: "-0.2px", color: "#292421", fontWeight: 500, marginBottom: "4px" }}>
                      {feature.title}
                    </h3>
                    <p style={{ fontSize: "13px", lineHeight: 1.5, color: "#898683" }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Feature Showcase ── */}
        <section style={{ background: "#f7f7f5", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

            {/* 1 — Regulatory Intelligence */}
            <div className="grid lg:grid-cols-2 gap-16 items-center" style={{ marginBottom: "96px" }}>
              <div>
                <ShowcaseLabel>Regulatory Intelligence</ShowcaseLabel>
                <ShowcaseHeading>Know your compliance gaps before your buyer's agent does</ShowcaseHeading>
                <ShowcaseBody>
                  The moment you upload a PSA, CasaGen checks it against 50-state rules and federal requirements including RESPA and TRID. Hard deadlines, conditional contingencies, and missing disclosures — all flagged before anyone touches the file.
                </ShowcaseBody>
                <BulletList items={[
                  "Knows the difference between hard deadlines and contingent ones",
                  "50-state coverage — federal RESPA and TRID included",
                  "Issues flagged at intake, not discovered at closing",
                ]} />
              </div>
              <div style={{ borderRadius: "24px", overflow: "hidden", background: "#f7f7f5", boxShadow: "rgba(0,0,0,0.08) 0px 0px 0px 1px inset" }}>
                <img src="/images/screen-compliance.png" alt="CasaGen compliance checklist" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>

            {/* 2 — Task & Email Automation */}
            <div className="grid lg:grid-cols-2 gap-16 items-center" style={{ marginBottom: "96px" }}>
              <div className="order-2 lg:order-1" style={{ borderRadius: "24px", overflow: "hidden", background: "#f7f7f5", boxShadow: "rgba(0,0,0,0.08) 0px 0px 0px 1px inset" }}>
                <img src="/images/screen-timeline.png" alt="CasaGen task timeline" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div className="order-1 lg:order-2">
                <ShowcaseLabel>Task & Email Automation</ShowcaseLabel>
                <ShowcaseHeading>Tasks assign themselves. Emails close themselves.</ShowcaseHeading>
                <ShowcaseBody>
                  You upload the PSA. CasaGen identifies every required action and sends it to the right person — lender, agent, or title — directly from the document. When replies come in, they're matched to the right transaction automatically. Nothing lands in a black hole.
                </ShowcaseBody>
                <BulletList items={[
                  "Tasks go to the right party — pulled directly from the contract",
                  "Incoming emails matched to open transactions automatically",
                  "Nothing closes until a human has reviewed and confirmed",
                ]} />
              </div>
            </div>

            {/* 3 — Brokerage Admin Dashboard */}
            <div className="grid lg:grid-cols-2 gap-16 items-center" style={{ marginBottom: "96px" }}>
              <div>
                <ShowcaseLabel>Brokerage Admin</ShowcaseLabel>
                <ShowcaseHeading>Full visibility — before problems reach closing</ShowcaseHeading>
                <ShowcaseBody>
                  Monitor every agent, every deal, and every compliance risk from one dashboard. Issues are flagged the moment a PSA is uploaded, not discovered after the fact when it's too late to fix without delays.
                </ShowcaseBody>
                <BulletList items={[
                  "Real-time compliance risk across all active transactions",
                  "Agent activity and pipeline health across your whole brokerage",
                  "Quick audit mode — scan your entire brokerage for open issues",
                ]} />
              </div>
              <div style={{ borderRadius: "24px", overflow: "hidden", background: "#f7f7f5", boxShadow: "rgba(0,0,0,0.08) 0px 0px 0px 1px inset" }}>
                <img src="/images/screen-dashboard.png" alt="CasaGen brokerage dashboard" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
            </div>

            {/* 4 — Agent & Education Portal */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1" style={{ borderRadius: "24px", overflow: "hidden", background: "#f7f7f5", boxShadow: "rgba(0,0,0,0.08) 0px 0px 0px 1px inset" }}>
                <img src="/images/screen-submission.png" alt="CasaGen brokerage submission" style={{ width: "100%", height: "auto", display: "block" }} />
              </div>
              <div className="order-1 lg:order-2">
                <ShowcaseLabel>Agent & Education Portal</ShowcaseLabel>
                <ShowcaseHeading>One place to manage your agents — without a separate HR tool</ShowcaseHeading>
                <ShowcaseBody>
                  Onboard new agents, track CE deadlines, manage commission splits, and control who sees what — all in one place, without spreadsheets.
                </ShowcaseBody>
                <BulletList items={[
                  "Continuing education tracking and deadline alerts",
                  "Commission split administration and CSV export",
                  "Agent onboarding workflows and license tracking",
                ]} />
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section style={{ background: "#1b0624", padding: "100px 24px" }}>
          <div style={{ maxWidth: "520px", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "44px",
                lineHeight: 1.1,
                letterSpacing: "-2.2px",
                color: "#ffffff",
                fontWeight: 400,
                marginBottom: "16px",
              }}
            >
              Ready to close clean?
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.71,
                color: "rgba(255,255,255,0.58)",
                maxWidth: "400px",
                margin: "0 auto 36px",
              }}
            >
              See CasaGen handle a real PSA — compliance review, task assignment, and deadline tracking in under 60 seconds.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
              <a href="/contact#contact-form">
                <button
                  className="transition-opacity hover:opacity-90"
                  style={{
                    background: "#ffffff",
                    color: "#1b0624",
                    borderRadius: "999px",
                    padding: "12px 28px",
                    fontSize: "15px",
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  Request a Demo
                  <ArrowRight className="h-4 w-4" />
                </button>
              </a>
              <Link href="/pricing">
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", cursor: "pointer" }}
                  className="hover:text-white/70 transition-colors">
                  From $15/transaction or $199/mo for teams — see pricing →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
