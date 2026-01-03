'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center ${
          scrolled
            ? 'bg-stone-50/80 backdrop-blur-md border-b border-stone-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl w-full px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-stone-900">Eckho</span>
              <span className="text-2xl font-light text-stone-600">Systems</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-stone-600 hover:text-stone-900 transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-stone-900 text-stone-50 px-4 py-2 rounded-sm text-sm font-medium hover:bg-stone-800 transition-colors duration-200">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex items-center justify-center w-8 h-8"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                className="w-6 h-5 relative"
              >
                <motion.span
                  variants={{
                    open: { rotate: 45, y: 8 },
                    closed: { rotate: 0, y: 0 }
                  }}
                  className="absolute h-0.5 w-6 bg-stone-900 top-0 left-0"
                />
                <motion.span
                  variants={{
                    open: { opacity: 0 },
                    closed: { opacity: 1 }
                  }}
                  className="absolute h-0.5 w-6 bg-stone-900 top-2 left-0"
                />
                <motion.span
                  variants={{
                    open: { rotate: -45, y: -8 },
                    closed: { rotate: 0, y: 0 }
                  }}
                  className="absolute h-0.5 w-6 bg-stone-900 top-4 left-0"
                />
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="fixed inset-0 bg-stone-900/50" onClick={() => setIsOpen(false)} />
            <div className="fixed right-0 top-0 h-full w-64 bg-stone-50 shadow-xl">
              <div className="flex justify-between items-center p-6 border-b border-stone-200">
                <span className="text-xl font-bold text-stone-900">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <span className="text-2xl text-stone-900">×</span>
                </button>
              </div>
              <nav className="p-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 text-stone-600 hover:text-stone-900 transition-colors duration-200 text-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="mt-6 w-full bg-stone-900 text-stone-50 px-4 py-3 rounded-sm text-sm font-medium hover:bg-stone-800 transition-colors duration-200">
                  Get Started
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
