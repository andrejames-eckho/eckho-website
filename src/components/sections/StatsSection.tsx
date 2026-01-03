'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const stats = [
  { id: 1, value: 12, suffix: '+', label: 'Years Experience' },
  { id: 2, value: 250, suffix: '+', label: 'Projects Completed' },
  { id: 3, value: 98, suffix: '%', label: 'Client Satisfaction' },
  { id: 4, value: 50, suffix: '+', label: 'Team Members' }
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isVisible) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isVisible, value])

  return (
    <motion.div
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-stone-900 mb-4">
        {count}{suffix}
      </div>
      <div className="text-stone-600 text-lg font-medium">
        {stats.find(stat => stat.value === value)?.label}
      </div>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="py-24 lg:py-32 bg-stone-50 flex justify-center">
      <div className="max-w-4xl w-full px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
            Numbers That Matter
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Our track record speaks for itself. We've helped countless businesses achieve their digital transformation goals.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-stone-600 text-lg leading-relaxed">
              These metrics represent more than just numbers—they represent real business impact, 
              successful partnerships, and the trust our clients place in us to deliver exceptional 
              technology solutions that drive growth and innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
