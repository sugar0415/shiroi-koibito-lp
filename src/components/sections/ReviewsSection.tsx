'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { Review } from '@/types'

interface ReviewsSectionProps {
  reviews: Review[]
  averageRating?: number
  totalReviews?: number
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  reviews,
  averageRating,
  totalReviews,
}) => {
  const [currentReview, setCurrentReview] = useState(0)

  const calculateAverageRating = () => {
    if (averageRating) return averageRating
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0)
    return sum / reviews.length
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span
        key={index}
        className={`text-2xl ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ))
  }

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            お客様の声
          </h2>
          <div className="flex justify-center items-center mb-4">
            {renderStars(Math.round(calculateAverageRating()))}
            <span className="ml-4 text-2xl font-bold text-gray-900">
              {calculateAverageRating().toFixed(1)}
            </span>
          </div>
          <p className="text-xl text-gray-600">
            {totalReviews || reviews.length}件のレビュー
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Review Slider */}
          <div className="relative">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card variant="elevated" padding="lg">
                <div className="text-center mb-6">
                  {renderStars(reviews[currentReview].rating)}
                </div>

                <p className="text-lg text-gray-700 mb-6 italic">
                  "{reviews[currentReview].comment}"
                </p>

                <div className="text-center">
                  <p className="font-semibold text-gray-900">
                    {reviews[currentReview].author}
                  </p>
                  <p className="text-gray-600">{reviews[currentReview].location}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {new Date(reviews[currentReview].date).toLocaleDateString('ja-JP')}
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
              aria-label="前のレビュー"
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
              onClick={nextReview}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
              aria-label="次のレビュー"
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

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentReview ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`レビュー${index + 1}に移動`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
