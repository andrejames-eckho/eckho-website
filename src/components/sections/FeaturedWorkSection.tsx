'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const featuredProjects = [
  {
    id: 1,
    title: 'FinTech Revolution',
    client: 'Global Bank Inc.',
    type: 'Mobile Banking Platform',
    description: 'Complete digital transformation of traditional banking services',
    image: '/api/placeholder/600/400',
    href: '/work/fintech-revolution'
  },
  {
    id: 2,
    title: 'Healthcare AI',
    client: 'MedTech Solutions',
    type: 'AI Diagnostic Tool',
    description: 'Machine learning platform for early disease detection',
    image: '/api/placeholder/600/400',
    href: '/work/healthcare-ai'
  },
  {
    id: 3,
    title: 'Smart City',
    client: 'Municipal Government',
    type: 'IoT Infrastructure',
    description: 'Connected city management system for urban optimization',
    image: '/api/placeholder/600/400',
    href: '/work/smart-city'
  },
  {
    id: 4,
    title: 'E-commerce Evolution',
    client: 'Retail Giant Co.',
    type: 'Cloud Platform',
    description: 'Scalable e-commerce solution handling millions of transactions',
    image: '/api/placeholder/600/400',
    href: '/work/ecommerce-evolution'
  },
  {
    id: 5,
    title: 'Education Portal',
    client: 'EduTech Systems',
    type: 'Learning Platform',
    description: 'Interactive online education platform with virtual classrooms',
    image: '/api/placeholder/600/400',
    href: '/work/education-portal'
  }
]

export default function FeaturedWorkSection() {
  return (
    <section className="py-24 lg:py-32 bg-stone-100 flex justify-center">
      <div className="max-w-6xl w-full px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Discover how we've helped industry leaders transform their businesses through innovative technology solutions.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex space-x-8 overflow-x-auto pb-8"
            style={{
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            } as React.CSSProperties}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-none w-80 lg:w-96 group"
              >
                <Link href={project.href} className="block">
                  {/* Project Card */}
                  <div className="relative overflow-hidden rounded-lg bg-stone-200 hover:shadow-xl transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative aspect-video bg-stone-300 overflow-hidden">
                      {/* Placeholder for project image */}
                      <div className="absolute inset-0 bg-linear-to-br from-stone-400 to-stone-600 flex items-center justify-center">
                        <div className="text-center text-stone-100">
                          <div className="w-16 h-16 bg-stone-700/50 rounded-lg mx-auto mb-4 flex items-center justify-center">
                            <span className="text-2xl font-bold">{project.title.charAt(0)}</span>
                          </div>
                          <p className="text-sm font-medium">Project Image</p>
                        </div>
                      </div>
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center text-stone-50 p-6">
                          <p className="text-lg font-medium mb-2">View Case Study</p>
                          <svg 
                            className="w-6 h-6 mx-auto" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6 bg-stone-50">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-stone-600 uppercase tracking-wider">
                            {project.type}
                          </span>
                          <span className="text-sm text-stone-500">
                            {project.client}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-stone-900 group-hover:text-stone-700 transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-stone-600 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/work"
            className="inline-flex items-center bg-stone-900 text-stone-50 px-8 py-4 rounded-sm text-lg font-medium hover:bg-stone-800 transition-colors duration-300"
          >
            View All Work
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
