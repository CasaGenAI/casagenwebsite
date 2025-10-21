import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { FeatureSection } from "@/components/FeatureSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <SocialProofSection />
        
        {/* Feature 1: AI Lead Generation */}
        <FeatureSection
          headline="Find Leads No One Else Can See."
          description="Stop competing for the same public listings. Our AI Lead Specialist sifts through tax records, owner history, and proxy data to find hidden, off-market opportunities. Just ask in plain English."
          checklist={[
            "Find long-term owners ready to sell",
            "Identify likely investment properties",
            "Uncover out-of-state owners",
          ]}
          visualPlaceholder="AI Lead Generation Chat Demo"
          reversed={false}
        />
        
        {/* Feature 2: AI Property Analysis */}
        <div className="bg-muted/20">
          <FeatureSection
            headline="Analyze Any Deal in 30 Seconds."
            description="Never guess on an investment again. Our AI Copilot analyzes any property and gives you an instant breakdown of its investment potential, risks, and neighborhood quality."
            checklist={[
              "AI-powered investment & risk scores",
              "Interactive Flip vs. Rental calculator",
              "In-depth school, transportation, and market data",
            ]}
            visualPlaceholder="Property Analysis Dashboard"
            reversed={true}
          />
        </div>
        
        {/* Feature 3: All-in-One Platform */}
        <FeatureSection
          headline="Your Entire Business, All in One Place."
          description="Ditch the spreadsheets and scattered apps. Our Transaction Manager turns every deal into a simple checklist. All your deadlines, client tasks, and market news are automatically organized in your Master Calendar."
          checklist={[
            "Automated transaction timelines",
            "Integrated calendar for deadlines and tasks",
            "Curated market news feed",
          ]}
          visualPlaceholder="Transaction & Calendar Management"
          reversed={false}
        />
        
        <TestimonialsSection />
        
        <FinalCTASection />
      </main>
      
      <Footer />
    </div>
  );
}
