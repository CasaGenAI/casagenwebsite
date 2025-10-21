import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "How AI is Transforming Real Estate Lead Generation",
      excerpt:
        "Discover how artificial intelligence is helping agents find off-market deals and identify motivated sellers before the competition.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "AI & Technology",
    },
    {
      title: "5 Market Trends Every Real Estate Investor Should Watch",
      excerpt:
        "Stay ahead of the curve with these emerging trends that are reshaping the real estate investment landscape in 2024.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Market Insights",
    },
    {
      title: "Streamlining Your Transaction Pipeline: A Complete Guide",
      excerpt:
        "Learn proven strategies to manage multiple deals efficiently and never miss a critical deadline again.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Best Practices",
    },
    {
      title: "The Future of Real Estate: Predictions for 2025",
      excerpt:
        "Expert analysis on how technology, demographics, and market forces will shape the industry over the next year.",
      date: "February 28, 2024",
      readTime: "8 min read",
      category: "Industry Trends",
    },
    {
      title: "Case Study: How Sarah Closed 3 Deals in One Month with CasaGen",
      excerpt:
        "See how one agent leveraged AI-powered lead generation to triple her closing rate and grow her business.",
      date: "February 20, 2024",
      readTime: "4 min read",
      category: "Success Stories",
    },
    {
      title: "Understanding Investment Scores: A Deep Dive",
      excerpt:
        "Learn how our AI calculates investment potential and risk scores to help you make better property decisions.",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Product Features",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Stay informed with the latest trends, tips, and success stories
              from the real estate industry.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover-elevate transition-all duration-300 flex flex-col"
                  data-testid={`blog-post-${index}`}
                >
                  <div className="h-48 bg-gradient-to-br from-primary/10 via-card to-muted/30" />
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-base text-muted-foreground mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      className="w-full justify-between"
                      data-testid={`button-read-${index}`}
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 lg:py-24 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for weekly insights, market updates, and
              exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-input bg-background text-foreground"
                data-testid="input-newsletter-email"
              />
              <Button data-testid="button-newsletter-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
