'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-stone-50 relative overflow-hidden">
      {/* Background gradient mesh effect */}
      <div className="absolute inset-0 bg-linear-to-br from-stone-100 via-stone-50 to-stone-100 opacity-50" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Main headline with staggered word animation */}
          <motion.h1 
            variants={containerVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 leading-tight"
          >
            <motion.div variants={itemVariants} className="block">
              Innovation
            </motion.div>
            <motion.div variants={itemVariants} className="block">
              Through
            </motion.div>
            <motion.div variants={itemVariants} className="block">
              Technology
            </motion.div>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed"
          >
            We build cutting-edge digital experiences that drive business transformation and set new standards in technological innovation.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="pt-8"
          >
            <Link
              href="/contact"
              className="inline-block bg-stone-900 text-stone-50 px-8 py-4 rounded-sm text-lg font-medium hover:bg-stone-800 transition-colors duration-300"
            >
              Start Your Journey
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-stone-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
