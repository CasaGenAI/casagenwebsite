import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "CasaGen's AI lead finder brought me two off-market deals in my first month. It's a total game-changer and has replaced three other tools I was paying for.",
      name: "Sarah Jenkins",
      title: "Principal Agent, Bellevue WA",
      initials: "SJ",
    },
    {
      quote:
        "The investment analysis is incredibly accurate. I can evaluate 10 properties in the time it used to take me to analyze one. This is the future of real estate investing.",
      name: "Michael Chen",
      title: "Real Estate Investor, San Francisco CA",
      initials: "MC",
    },
    {
      quote:
        "Our whole team switched to CasaGen for transaction management. Everything is organized, deadlines are tracked, and we never miss a beat. Best decision we made this year.",
      name: "Jennifer Rodriguez",
      title: "Brokerage Owner, Austin TX",
      initials: "JR",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            See what real estate professionals are saying about CasaGen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 hover-elevate transition-all duration-300"
              data-testid={`testimonial-card-${index}`}
            >
              <Quote className="h-8 w-8 text-primary mb-6 opacity-50" />
              
              <blockquote className="text-base lg:text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
