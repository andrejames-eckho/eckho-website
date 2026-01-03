import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import HeroSection from '@/components/sections/HeroSection'
import AboutPreviewSection from '@/components/sections/AboutPreviewSection'
import ServicesGridSection from '@/components/sections/ServicesGridSection'
import FeaturedWorkSection from '@/components/sections/FeaturedWorkSection'
import StatsSection from '@/components/sections/StatsSection'
import ContactCTASection from '@/components/sections/ContactCTASection'

export default function Home() {
  return (
    <PageTransition>
      <Navigation />
      <main>
        <HeroSection />
        <AboutPreviewSection />
        <ServicesGridSection />
        <FeaturedWorkSection />
        <StatsSection />
        <ContactCTASection />
      </main>
      <Footer />
    </PageTransition>
  )
}
