import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Find Off-Market Deals.{" "}
              <span className="text-primary">Analyze Investments.</span>{" "}
              Manage Your Entire Pipeline.{" "}
              <span className="text-primary">All with AI.</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto lg:mx-0">
              CasaGen is the all-in-one platform for real estate professionals.
              Our AI specialists find leads you can't, our copilot analyzes deals
              in seconds, and our dashboard manages your transactions from start
              to close.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                asChild
                data-testid="button-hero-trial"
              >
                <a href="https://app.casagen.ai">Start Your 30-Day Free Trial</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                data-testid="button-hero-demo"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Request a Demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: Video Placeholder */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-card border border-card-border">
              <div className="aspect-video bg-gradient-to-br from-primary/10 via-card to-primary/5 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                    <Play className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Demo Video
                  </p>
                  <p className="text-sm text-muted-foreground">
                    See CasaGen in action
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-chart-2/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
