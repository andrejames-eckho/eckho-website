import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function AboutPage() {
  return (
    <PageTransition>
      <Navigation />
      <main className="min-h-screen">
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-8">
              About Eckho Systems
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl">
              Our story, mission, and the team behind innovative technology solutions.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  )
}
