import { Header } from "@/components/sharks/header"
import { HeroSection } from "@/components/sharks/hero-section"
import { SharkFinTransition } from "@/components/sharks/shark-fin-transition"
import { AboutSection } from "@/components/sharks/about-section"
import { SolutionsSection } from "@/components/sharks/solutions-section"
import { MethodSection } from "@/components/sharks/method-section"
import { CasesSection } from "@/components/sharks/cases-section"
import { FinalCTASection } from "@/components/sharks/final-cta-section"
import { ContactSection } from "@/components/sharks/contact-section"
import { Footer } from "@/components/sharks/footer"

export default function SharksCompanyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Transition */}
      <SharkFinTransition />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Transition */}
      <SharkFinTransition />
      
      {/* Solutions Section */}
      <SolutionsSection />
      
      {/* Transition */}
      <div className="bg-background">
        <SharkFinTransition />
      </div>
      
      {/* Method Section */}
      <MethodSection />
      
      {/* Transition */}
      <SharkFinTransition />
      
      {/* Cases Section */}
      <CasesSection />
      
      {/* Final CTA */}
      <FinalCTASection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
