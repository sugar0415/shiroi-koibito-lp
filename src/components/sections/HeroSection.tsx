'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { HeroContent } from '@/types'

interface HeroSectionProps {
  content: HeroContent
}

export const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100"
    >
      <div className="absolute inset-0 bg-black opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            {content.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto"
          >
            {content.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button href={content.ctaLink} variant="primary" size="lg">
              {content.ctaText}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-900 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gray-900 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
