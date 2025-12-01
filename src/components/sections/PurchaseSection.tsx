'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'
import { PurchaseContent } from '@/types'
import { useAnalytics } from '@/hooks'

interface PurchaseSectionProps {
  content: PurchaseContent
}

export const PurchaseSection: React.FC<PurchaseSectionProps> = ({ content }) => {
  const { trackConversion } = useAnalytics()

  const handlePurchaseClick = () => {
    trackConversion('cta_click')
  }

  return (
    <section id="purchase" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ご購入方法
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            オンラインまたは店舗でお求めいただけます
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Online Store */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" padding="lg" className="h-full">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  オンラインストア
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-gray-700">
                  公式オンラインストアで24時間いつでもご購入いただけます。
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900 mb-2">価格情報:</p>
                  <p className="text-2xl font-bold text-blue-600">
                    ¥{content.priceInfo.basePrice.toLocaleString()}〜
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {content.priceInfo.shippingInfo}
                  </p>
                </div>
              </div>

              <Button
                href={content.onlineStoreUrl}
                variant="primary"
                size="lg"
                className="w-full"
                onClick={handlePurchaseClick}
              >
                オンラインストアへ
              </Button>
            </Card>
          </motion.div>

          {/* Physical Stores */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" padding="lg" className="h-full">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏪</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">実店舗</h3>
              </div>

              <div className="space-y-6">
                {content.storeLocations.map((store, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg"
                  >
                    <h4 className="font-bold text-gray-900 mb-2">{store.name}</h4>
                    <p className="text-sm text-gray-700 mb-1">
                      📍 {store.address}
                    </p>
                    <p className="text-sm text-gray-700">⏰ {store.hours}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card variant="elevated" padding="lg" className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              北海道の味をあなたのもとへ
            </h3>
            <p className="text-gray-700 mb-6">
              大切な方への贈り物に、ご自分へのご褒美に。
              <br />
              白い恋人で特別なひとときをお過ごしください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href={content.onlineStoreUrl}
                variant="primary"
                size="lg"
                onClick={handlePurchaseClick}
              >
                今すぐ購入
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                お問い合わせ
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
