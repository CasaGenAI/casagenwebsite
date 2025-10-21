import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Signup() {
  const benefits = [
    "14-day free trial",
    "No credit card required",
    "Full platform access",
    "Cancel anytime",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Start Your Free Trial Today
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of real estate professionals who are closing more
                deals with CasaGen's AI-powered platform.
              </p>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-chart-2/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-4 w-4 text-chart-2" />
                    </div>
                    <span className="text-foreground font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Create Your Account
              </h2>

              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    data-testid="input-signup-name"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    data-testid="input-signup-email"
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    data-testid="input-signup-password"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    placeholder="Your brokerage or company"
                    data-testid="input-signup-company"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  data-testid="button-signup-submit"
                >
                  Start Free Trial
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/login" className="text-primary hover:underline font-semibold">
                    Log in
                  </Link>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
