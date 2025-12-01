'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Modal } from '../ui/Modal'
import { ImageData } from '@/types'

interface GallerySectionProps {
  images: ImageData[]
}

export const GallerySection: React.FC<GallerySectionProps> = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    } else {
      setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }
  }

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ギャラリー
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            美しい白い恋人の世界をご覧ください
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Image placeholder */}
              <div className="flex items-center justify-center text-gray-400">
                <span className="text-6xl">📸</span>
                <span className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {index + 1} / {images.length}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Modal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          className="max-w-6xl w-full"
        >
          <div className="p-4">
            <div className="relative aspect-w-16 aspect-h-9 bg-gray-900 rounded-lg flex items-center justify-center min-h-[60vh]">
              {/* Image placeholder */}
              <div className="flex items-center justify-center text-gray-400">
                <span className="text-8xl">📸</span>
              </div>

              {/* Navigation buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateLightbox('prev')
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all"
                aria-label="前の画像"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateLightbox('next')
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 transition-all"
                aria-label="次の画像"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                {currentImageIndex + 1} / {images.length}
              </p>
              <p className="text-lg font-medium text-gray-900 mt-2">
                {images[currentImageIndex].alt}
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </section>
  )
}
