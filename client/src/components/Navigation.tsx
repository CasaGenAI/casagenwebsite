import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import tamarinIcon from "@assets/tamarin-default-spinner_1761065048248.gif";
import { APP_URL } from "@/config";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/features", label: "Features" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        background: isScrolled ? "rgba(255,255,255,0.88)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px) saturate(180%)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(16px) saturate(180%)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
      }}
    >
      <nav style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "64px" }}>

          {/* Logo */}
          <Link
            href="/"
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center gap-2.5 hover:opacity-75 transition-opacity"
            style={{ textDecoration: "none" }}
          >
            <img src={tamarinIcon} alt="CasaGen" style={{ height: "34px", width: "34px" }} />
            <span style={{ fontSize: "17px", fontWeight: 700, color: "#000000", letterSpacing: "-0.3px" }}>
              CasaGen
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center" style={{ gap: "2px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "6px 14px",
                  fontSize: "14px",
                  fontWeight: location === link.href ? 500 : 400,
                  color: location === link.href ? "#000000" : "#898683",
                  borderRadius: "999px",
                  textDecoration: "none",
                  background: location === link.href ? "rgba(0,0,0,0.05)" : "transparent",
                  transition: "color 0.2s, background 0.2s",
                }}
                className="hover:text-black"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center" style={{ gap: "8px" }}>
            <a
              href={APP_URL}
              className="hover:bg-black/5 transition-colors"
              style={{
                padding: "7px 18px",
                fontSize: "14px",
                color: "#000000",
                fontWeight: 400,
                borderRadius: "999px",
                border: "1px solid rgba(0,0,0,0.18)",
                background: "transparent",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Log In
            </a>
            <Link href="/pricing">
              <span
                className="hover:opacity-85 transition-opacity"
                style={{
                  display: "inline-block",
                  padding: "7px 18px",
                  fontSize: "14px",
                  color: "#ffffff",
                  fontWeight: 500,
                  borderRadius: "999px",
                  background: "#160f0c",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Start Free Trial
              </span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "#000000",
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden"
            style={{
              paddingBottom: "16px",
              borderTop: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", paddingTop: "8px" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    padding: "10px 14px",
                    fontSize: "14px",
                    color: location === link.href ? "#000000" : "#898683",
                    borderRadius: "8px",
                    textDecoration: "none",
                    background: location === link.href ? "rgba(0,0,0,0.04)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  marginTop: "12px",
                  paddingTop: "12px",
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <a
                  href={APP_URL}
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    fontSize: "14px",
                    color: "#000000",
                    border: "1px solid rgba(0,0,0,0.18)",
                    borderRadius: "999px",
                    textDecoration: "none",
                  }}
                >
                  Log In
                </a>
                <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                  <span
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "10px",
                      fontSize: "14px",
                      color: "#ffffff",
                      background: "#160f0c",
                      borderRadius: "999px",
                      textDecoration: "none",
                      fontWeight: 500,
                      cursor: "pointer",
                    }}
                  >
                    Start Free Trial
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
