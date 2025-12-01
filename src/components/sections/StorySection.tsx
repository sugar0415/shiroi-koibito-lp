'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { StoryContent } from '@/types'

interface StorySectionProps {
  content: StoryContent
}

export const StorySection: React.FC<StorySectionProps> = ({ content }) => {
  return (
    <section id="story" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {content.title}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Story Paragraphs */}
          <div className="mb-16 space-y-6">
            {content.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              歴史
            </h3>
            <div className="space-y-8">
              {content.timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-24 text-2xl font-bold text-blue-600">
                    {item.year}
                  </div>
                  <div className="flex-grow">
                    <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-4 float-left" />
                    <p className="text-lg text-gray-700">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden"
              >
                {/* Image placeholder */}
                <div className="flex items-center justify-center text-gray-400">
                  <span className="text-6xl">🏭</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
