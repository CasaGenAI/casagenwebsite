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
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-[hsl(225,25%,4%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src={tamarinIcon}
                alt="CasaGen"
                className="h-8 w-8"
              />
              <span className="text-xl font-extrabold text-white tracking-tight">
                CasaGen
              </span>
            </Link>
            <p className="text-sm text-slate-500 mb-4 leading-relaxed">
              AI compliance and agent tools for modern brokerages.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-widest">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
                      data-testid={`link-footer-${link.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-sm text-slate-600 text-center">
            &copy; {currentYear} CasaGen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
