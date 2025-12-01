'use client'

import { useState, useEffect } from 'react'
import { Header, Footer } from '@/components/layout'
import {
  HeroSection,
  ProductFeaturesSection,
  ProductVariantsSection,
  StorySection,
  GallerySection,
  ReviewsSection,
  PurchaseSection,
  ContactSection,
} from '@/components/sections'
import { useScrollPosition, useActiveSection } from '@/hooks'
import { SiteContent } from '@/types'
import contentData from '@/data/content.json'

export default function Home() {
  const [content, setContent] = useState<SiteContent | null>(null)
  const { scrollY } = useScrollPosition()
  const activeSection = useActiveSection([
    'hero',
    'features',
    'variants',
    'story',
    'gallery',
    'reviews',
    'purchase',
    'contact',
  ])

  const isScrolled = scrollY > 50

  useEffect(() => {
    setContent(contentData as SiteContent)
  }, [])

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <>
      <Header isScrolled={isScrolled} activeSection={activeSection} />

      <main>
        <HeroSection content={content.hero} />
        <ProductFeaturesSection features={content.features} />
        <ProductVariantsSection variants={content.variants} />
        <StorySection content={content.story} />
        <GallerySection images={content.gallery} />
        <ReviewsSection reviews={content.reviews} />
        <PurchaseSection content={content.purchase} />
        <ContactSection />
      </main>

      <Footer contactInfo={content.contact} />
    </>
  )
}
