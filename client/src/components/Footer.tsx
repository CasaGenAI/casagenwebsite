import { Link } from "wouter";
import tamarinIcon from "@assets/tamarin-default-spinner_1761065048248.gif";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Request a Demo", href: "/contact#contact-form" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer style={{ background: "#f7f7f5", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "64px 24px" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-75 transition-opacity"
              style={{ textDecoration: "none", marginBottom: "12px", display: "inline-flex" }}
            >
              <img src={tamarinIcon} alt="CasaGen" style={{ height: "28px", width: "28px" }} />
              <span style={{ fontSize: "16px", fontWeight: 700, color: "#000000" }}>CasaGen</span>
            </Link>
            <p style={{ fontSize: "13px", color: "#898683", lineHeight: 1.6, marginTop: "4px" }}>
              From contract to close — compliance, commissions, and CE in one platform.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#898683",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "16px",
                }}
              >
                {section.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-black transition-colors"
                      style={{ fontSize: "13px", color: "#898683", textDecoration: "none" }}
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(0,0,0,0.06)",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "12px", color: "#b2afae" }}>
            &copy; {currentYear} CasaGen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
