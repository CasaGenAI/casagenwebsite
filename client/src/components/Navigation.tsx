import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import tamarinIcon from "@assets/tamarin-default-spinner_1761065048248.gif";

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#f6f7f8]/95 dark:bg-[#101c22]/95 backdrop-blur-sm shadow-sm"
          : "bg-[#f6f7f8]/80 dark:bg-[#101c22]/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <img
              src={tamarinIcon}
              alt="CasaGen"
              className="h-10 w-10"
            />
            <span className="text-xl font-black text-[#0d171b] dark:text-slate-50">
              CasaGen
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-base font-semibold transition-colors ${
                  location === link.href
                    ? "text-[#1193d4]"
                    : "text-slate-700 dark:text-slate-300 hover:text-[#1193d4]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="font-semibold text-[#1193d4] hover:bg-[#1193d4]/10"
              asChild
            >
              <a href="https://app.casagen.ai">Log In</a>
            </Button>
            <Button
              className="bg-[#1193d4] hover:bg-[#0e7ab8] text-white font-bold shadow-sm"
              asChild
            >
              <a href="https://app.casagen.ai/signup">Start Free Trial</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-semibold px-2 py-1 ${
                    location === link.href
                      ? "text-[#1193d4]"
                      : "text-slate-700 dark:text-slate-300"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-2">
                <Button
                  variant="ghost"
                  className="w-full font-semibold text-[#1193d4]"
                  asChild
                >
                  <a href="https://app.casagen.ai">Log In</a>
                </Button>
                <Button
                  className="w-full bg-[#1193d4] hover:bg-[#0e7ab8] text-white font-bold"
                  asChild
                >
                  <a href="https://app.casagen.ai/signup">Start Free Trial</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
