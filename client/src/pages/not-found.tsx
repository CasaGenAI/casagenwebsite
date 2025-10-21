import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import tamarinIcon from "@assets/tamarin-default-spinner_1761065048248.gif";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="text-center max-w-md">
          <img
            src={tamarinIcon}
            alt="Lost Tamarin"
            className="w-32 h-32 mx-auto mb-8"
          />
          
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Looks like our tamarin got lost! The page you're looking for doesn't
            exist.
          </p>

          <Button size="lg" asChild data-testid="button-home">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
