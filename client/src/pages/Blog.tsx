import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "Why Brokerage Compliance Is the Next Competitive Advantage",
      excerpt:
        "Compliance isn't just risk mitigation — it's a growth lever. Learn how top brokerages are using AI to turn oversight into a selling point for recruiting agents.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Compliance",
    },
    {
      title: "How AI Flags Transaction Issues Before They Become Problems",
      excerpt:
        "A deep dive into how CasaGen's AI monitors every transaction in real time, catching missing documents, missed deadlines, and compliance gaps automatically.",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "AI & Technology",
    },
    {
      title: "Off-Market Deals: The Unfair Advantage Your Agents Need",
      excerpt:
        "How AI scans tax records, ownership data, and market signals to surface deals before they hit the MLS — and why brokerages should care.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Off-Market",
    },
    {
      title: "Case Study: How One Brokerage Cut Compliance Reviews by 80%",
      excerpt:
        "See how a 40-agent brokerage eliminated manual compliance checks and gave their admin team hours back every week with automated workflows.",
      date: "February 28, 2024",
      readTime: "4 min read",
      category: "Success Stories",
    },
    {
      title: "The Brokerage Admin Dashboard: Full Visibility in One Place",
      excerpt:
        "Agent performance, deal flow, compliance status, and pipeline health — a walkthrough of the tools that give brokerage owners complete control.",
      date: "February 20, 2024",
      readTime: "5 min read",
      category: "Product Features",
    },
    {
      title: "Building an Agent-First Brokerage: Tools That Help, Not Hinder",
      excerpt:
        "The best brokerages give agents tools they actually want to use. Here's how to balance compliance oversight with agent productivity.",
      date: "February 15, 2024",
      readTime: "6 min read",
      category: "Best Practices",
    },
  ];

  return (
    <div className="min-h-screen bg-[hsl(225,25%,6%)]">
      <Navigation />

      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-500/6 rounded-full blur-[120px]" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Insights & Resources
            </h1>
            <p className="text-xl lg:text-2xl text-slate-400">
              Compliance best practices, AI trends, and strategies for modern brokerages
              and their agents.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="group glass-card-hover rounded-2xl overflow-hidden flex flex-col"
                  data-testid={`blog-post-${index}`}
                >
                  <div className="h-48 bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10" />

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-sky-300 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-sm text-slate-400 mb-4 line-clamp-3 flex-grow leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full justify-between text-slate-400 hover:text-white hover:bg-white/5"
                      data-testid={`button-read-${index}`}
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="relative py-20 lg:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sky-500/[0.02] to-transparent" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Stay Updated
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Subscribe to our newsletter for weekly insights, market updates, and
              exclusive content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all"
                data-testid="input-newsletter-email"
              />
              <Button
                className="bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 text-white font-semibold rounded-xl border-0 shadow-lg shadow-sky-500/25"
                data-testid="button-newsletter-subscribe"
              >
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
