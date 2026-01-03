import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'

export default function WorkPage() {
  return (
    <PageTransition>
      <Navigation />
      <main className="min-h-screen">
        <div className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-8">
              Our Work
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl">
              Explore our portfolio of innovative projects and successful partnerships.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  )
}
