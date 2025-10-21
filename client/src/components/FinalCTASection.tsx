import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary to-chart-1 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Stop Searching. Start Closing.
        </h2>
        
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          See what our AI can do for your business. Start your 14-day free trial
          today. No credit card required.
        </p>

        <Button
          size="lg"
          className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all duration-300"
          asChild
          data-testid="button-final-cta"
        >
          <Link href="/signup" className="flex items-center gap-2">
            Start Your Free Trial
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>

        <p className="text-sm text-white/70 mt-4">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
}
