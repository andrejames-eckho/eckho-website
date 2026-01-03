'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ContactCTASection() {
  return (
    <section className="py-24 lg:py-32 bg-stone-900 text-stone-50 flex justify-center">
      <div className="max-w-4xl w-full px-8 sm:px-12 lg:px-16 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Let's Build Something Together
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-stone-300 leading-relaxed"
          >
            Ready to transform your ideas into reality? We're here to help you navigate the complex world of technology and create solutions that drive real business value.
          </motion.p>

          {/* Email Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-stone-400 text-lg">
              Or reach us directly at
            </p>
            <a 
              href="mailto:hello@eckhosystems.com"
              className="text-2xl font-medium text-stone-50 hover:text-stone-300 transition-colors duration-200"
            >
              hello@eckhosystems.com
            </a>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <Link
              href="/contact"
              className="inline-flex items-center bg-stone-50 text-stone-900 px-8 py-4 rounded-sm text-lg font-medium hover:bg-stone-100 transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
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

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="pt-12 border-t border-stone-800"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="font-semibold mb-2">Fast Response</h3>
                <p className="text-stone-400 text-sm">We respond within 24 hours</p>
              </div>
              <div>
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-semibold mb-2">Free Consultation</h3>
                <p className="text-stone-400 text-sm">No-obligation initial discussion</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2">Tailored Solutions</h3>
                <p className="text-stone-400 text-sm">Custom approach for every client</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
