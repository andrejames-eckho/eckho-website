'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices for optimal performance and user experience.',
    icon: '🌐',
    href: '/services/web-development'
  },
  {
    id: 2,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile solutions that deliver seamless experiences across all devices.',
    icon: '📱',
    href: '/services/mobile-apps'
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to power your digital transformation.',
    icon: '☁️',
    href: '/services/cloud-solutions'
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that leverage cutting-edge AI technologies to automate and optimize your processes.',
    icon: '🤖',
    href: '/services/ai-machine-learning'
  },
  {
    id: 5,
    title: 'Digital Strategy',
    description: 'Strategic consulting to align technology initiatives with your business goals and market opportunities.',
    icon: '📊',
    href: '/services/digital-strategy'
  },
  {
    id: 6,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure regulatory compliance.',
    icon: '🔒',
    href: '/services/cybersecurity'
  }
]

export default function ServicesGridSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-24 lg:py-32 bg-stone-50 flex justify-center">
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
            What We Do
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Comprehensive technology services designed to transform your business and accelerate growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group bg-stone-100 border border-stone-200 rounded-lg p-8 hover:border-stone-400 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-stone-200 rounded-lg flex items-center justify-center mb-6 group-hover:bg-stone-300 transition-colors duration-300">
                <span className="text-2xl">{service.icon}</span>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-stone-900 group-hover:text-stone-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Link */}
            <div className="text-center mt-6">
              <Link
                href={service.href}
                className="inline-flex items-center text-stone-900 font-medium hover:text-stone-700 transition-colors duration-200 group/link"
              >
                Learn More
                <svg 
                  className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
