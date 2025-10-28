import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Check, Sparkles, TrendingUp, FileText } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI Lead Generation",
      description: "Find off-market opportunities no one else can see with our AI Lead Specialist.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Property Analysis",
      description: "Analyze any deal in minutes with AI-powered investment scores and insights.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Transaction Management",
      description: "Manage your entire pipeline from one place with automated workflows.",
    },
  ];

  const steps = [
    { number: "1", title: "Sign Up", description: "Create your account in seconds." },
    { number: "2", title: "Add Properties", description: "Import your listings and client data." },
    { number: "3", title: "Close Deals", description: "Streamline your workflow and grow." },
  ];

  return (
    <div className="min-h-screen bg-[#f6f7f8] dark:bg-[#101c22]">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative pt-20 lg:pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center py-10 lg:py-20">
              {/* Hero Image/Video */}
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-[#1193d4]/20 via-white dark:via-slate-800 to-[#1193d4]/10">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/FullSite.mov" type="video/mp4" />
                    <source src="/videos/FullSite.mov" type="video/quicktime" />
                  </video>
                </div>
              </div>

              {/* Hero Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-[#0d171b] dark:text-slate-50 mb-6">
                  Find Off-Market Deals.{" "}
                  <span className="text-[#1193d4]">Analyze Investments.</span>{" "}
                  Manage Your Entire Pipeline.
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                  CasaGen is the all-in-one platform for real estate professionals. Our AI finds leads you can't, analyzes deals in seconds, and manages your transactions from start to close.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="h-12 px-6 bg-[#1193d4] hover:bg-[#0e7ab8] text-white font-bold text-base rounded-lg shadow-sm"
                    asChild
                  >
                    <a href="https://app.casagen.ai">Start Your 30-Day Free Trial</a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-12 px-6 bg-[#1193d4]/10 hover:bg-[#1193d4]/20 text-[#1193d4] border-0 font-bold text-base rounded-lg"
                    asChild
                  >
                    <a href="/contact">Request a Demo</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="py-20 lg:py-32 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-black text-[#0d171b] dark:text-slate-50 mb-4 tracking-tight">
                Everything You Need to Succeed
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Our platform is designed to streamline your workflow, so you can focus on what matters most: closing deals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 p-6 text-center items-center hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1193d4]/10 text-[#1193d4]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0d171b] dark:text-slate-50 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Showcase with Videos */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div>
                <h3 className="text-3xl font-black text-[#0d171b] dark:text-slate-50 mb-4 tracking-tight">
                  Find Leads No One Else Can See
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  Stop competing for the same public listings. Our AI Lead Specialist sifts through tax records, owner history, and proxy data to find hidden opportunities.
                </p>
                <ul className="space-y-3">
                  {["Find long-term owners ready to sell", "Identify likely investment properties", "Uncover out-of-state owners"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1193d4]/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-[#1193d4]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <video autoPlay loop muted playsInline className="w-full">
                  <source src="/videos/leads.mov" type="video/mp4" />
                  <source src="/videos/leads.mov" type="video/quicktime" />
                </video>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
                <video autoPlay loop muted playsInline className="w-full">
                  <source src="/videos/property-detail.mov" type="video/mp4" />
                  <source src="/videos/property-detail.mov" type="video/quicktime" />
                </video>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl font-black text-[#0d171b] dark:text-slate-50 mb-4 tracking-tight">
                  Analyze Any Deal in Minutes
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  Never guess on an investment again. Our AI Copilot analyzes any property and gives you detailed breakdowns.
                </p>
                <ul className="space-y-3">
                  {["AI-powered investment & risk scores", "Interactive Flip vs. Rental calculator", "In-depth market data"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1193d4]/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-[#1193d4]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-black text-[#0d171b] dark:text-slate-50 mb-4 tracking-tight">
                  Your Entire Business, All in One Place
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  Ditch the spreadsheets and scattered apps. Our Transaction Manager turns every deal into a simple checklist.
                </p>
                <ul className="space-y-3">
                  {["Automated transaction timelines", "Integrated calendar for deadlines", "Curated market news feed"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1193d4]/10 flex items-center justify-center">
                        <Check className="h-3 w-3 text-[#1193d4]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <video autoPlay loop muted playsInline className="w-full">
                  <source src="/videos/transaction.mov" type="video/mp4" />
                  <source src="/videos/transaction.mov" type="video/quicktime" />
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 bg-white dark:bg-slate-900/50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-center text-[#0d171b] dark:text-slate-50 mb-12 tracking-tight">
              Get Started in Minutes
            </h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1193d4]/10 flex items-center justify-center">
                    <span className="text-xl font-black text-[#1193d4]">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#0d171b] dark:text-slate-50 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1193d4] to-[#0e7ab8]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
              Ready to Elevate Your Real Estate Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join top-performing agents who use CasaGen to close more deals, faster.
            </p>
            <Button
              size="lg"
              className="h-14 px-8 bg-white text-[#1193d4] hover:bg-slate-50 font-bold text-lg rounded-lg shadow-xl"
              asChild
            >
              <a href="https://app.casagen.ai">Start Your Free Trial</a>
            </Button>
            <p className="text-sm text-white/80 mt-4">
              No credit card required • 30-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
