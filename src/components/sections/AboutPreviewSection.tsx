'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutPreviewSection() {
  return (
    <section className="py-24 lg:py-32 bg-stone-100 flex justify-center">
      <div className="max-w-6xl w-full px-8 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-stone-600 uppercase tracking-wider">
                About Eckho
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight"
            >
              Pioneering Digital Excellence
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="space-y-6 text-stone-600 text-lg leading-relaxed max-w-3xl text-center">
                <p>
                  Founded with a vision to revolutionize the digital landscape, Eckho Systems has been at the forefront of technological innovation for over a decade. We combine cutting-edge expertise with deep industry knowledge to deliver solutions that not only meet today's needs but anticipate tomorrow's challenges.
                </p>
                <p>
                  Our team of expert engineers, designers, and strategists work collaboratively to transform complex problems into elegant, scalable solutions that drive measurable business results.
                </p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Link
                href="/about"
                className="inline-flex items-center text-stone-900 font-medium hover:text-stone-700 transition-colors duration-200 group"
              >
                Learn More
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Placeholder for image/graphic */}
            <div className="relative aspect-square lg:aspect-4/3 bg-linear-to-br from-stone-200 to-stone-300 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-stone-400 rounded-full mx-auto flex items-center justify-center">
                    <span className="text-3xl font-bold text-stone-100">ES</span>
                  </div>
                  <p className="text-stone-600 font-medium">Visual Content</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -top-10 -right-10 w-40 h-40 bg-stone-400/20 rounded-full"
              />
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-stone-600/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
