import { Header } from "@/components/sharks/header"
import { HeroSection } from "@/components/sharks/hero-section"
import { AboutSection } from "@/components/sharks/about-section"
import { BrandsCarouselSection } from "@/components/sharks/brands-carousel-section"
import { SolutionsSection } from "@/components/sharks/solutions-section"
import { MethodSection } from "@/components/sharks/method-section"
import { CasesSection } from "@/components/sharks/cases-section"
import { FinalCTASection } from "@/components/sharks/final-cta-section"
import { ContactSection } from "@/components/sharks/contact-section"
import { Footer } from "@/components/sharks/footer"
import { SharkFinDivider } from "@/components/sharks/shark-fin-divider"

export default function SharksCompanyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <SharkFinDivider large={true} />
      <BrandsCarouselSection />
      <AboutSection />
      <SolutionsSection />
      <SharkFinDivider />
      <MethodSection />
      <CasesSection />
      <SharkFinDivider />
      <FinalCTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
