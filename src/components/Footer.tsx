'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
    { name: 'Cloud Solutions', href: '/services/cloud-solutions' },
    { name: 'Consulting', href: '/services/consulting' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
}

const socialLinks = [
  { name: 'Twitter', href: '#', icon: '𝕏' },
  { name: 'LinkedIn', href: '#', icon: 'in' },
  { name: 'GitHub', href: '#', icon: '⚡' },
]

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-50 flex justify-center">
      <div className="max-w-7xl w-full px-8 sm:px-12 lg:px-16 xl:px-20">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center mb-6">
                  <span className="text-2xl font-bold text-stone-50">Eckho</span>
                  <span className="text-2xl font-light text-stone-400">Systems</span>
                </Link>
                <p className="text-stone-400 text-sm leading-relaxed mb-8">
                  Innovation through technology. We build cutting-edge digital experiences that drive business transformation.
                </p>
                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-stone-800 rounded-sm flex items-center justify-center text-stone-400 hover:bg-stone-700 hover:text-stone-50 transition-colors duration-200"
                      aria-label={social.name}
                    >
                      <span className="text-sm font-medium">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-stone-50 font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-stone-400 hover:text-stone-50 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-stone-50 font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-stone-400 hover:text-stone-50 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-stone-50 font-semibold mb-6">Let's Connect</h3>
              <p className="text-stone-400 text-sm mb-6">
                Ready to transform your business with innovative technology solutions?
              </p>
              <Link
                href="/contact"
                className="inline-block bg-stone-50 text-stone-900 px-6 py-3 rounded-sm text-sm font-medium hover:bg-stone-100 transition-colors duration-200"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-stone-400 text-sm"
            >
              © {new Date().getFullYear()} Eckho Systems. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-6"
            >
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-stone-400 hover:text-stone-50 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
