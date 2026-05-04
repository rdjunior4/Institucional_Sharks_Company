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
      <HeroSection />
      <SharkFinTransition variant="dark-to-light" />
      <AboutSection />
      <SharkFinTransition variant="light-to-dark" />
      <SolutionsSection />
      <SharkFinTransition variant="dark-to-light" />
      <MethodSection />
      <CasesSection />
      <SharkFinTransition variant="light-to-dark" />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
