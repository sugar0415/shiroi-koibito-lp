'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { ProductVariant } from '@/types'

interface ProductVariantsSectionProps {
  variants: ProductVariant[]
}

export const ProductVariantsSection: React.FC<ProductVariantsSectionProps> = ({
  variants,
}) => {
  const [activeVariant, setActiveVariant] = useState(0)

  return (
    <section id="variants" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            製品ラインナップ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            お好みに合わせて選べる、2つのバリエーション
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-300 p-1 bg-white">
            {variants.map((variant, index) => (
              <button
                key={variant.id}
                onClick={() => setActiveVariant(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeVariant === index
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {variant.name}
              </button>
            ))}
          </div>
        </div>

        {/* Variant Content */}
        <motion.div
          key={activeVariant}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Card variant="elevated" padding="lg" className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg">
                {/* Image placeholder */}
                <div className="flex items-center justify-center text-gray-400">
                  <span className="text-6xl">📦</span>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {variants[activeVariant].name}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {variants[activeVariant].description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">特徴:</h4>
                  <ul className="space-y-2">
                    {variants[activeVariant].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
