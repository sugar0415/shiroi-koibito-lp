'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { ProductFeature } from '@/types'

interface ProductFeaturesSectionProps {
  features: ProductFeature[]
}

export const ProductFeaturesSection: React.FC<ProductFeaturesSectionProps> = ({
  features,
}) => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            白い恋人の特徴
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            厳選された素材と伝統の製法で作られる、こだわりの洋菓子
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card variant="elevated" padding="lg" className="h-full text-center">
                <div className="mb-4 text-5xl">
                  {/* Icon placeholder - you can replace with actual icons */}
                  <span role="img" aria-label={feature.icon}>
                    {feature.icon === 'cookie' && '🍪'}
                    {feature.icon === 'chocolate' && '🍫'}
                    {feature.icon === 'quality' && '⭐'}
                    {feature.icon === 'tradition' && '🏭'}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
