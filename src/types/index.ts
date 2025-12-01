// Image data interface
export interface ImageData {
  src: string
  alt: string
  width: number
  height: number
}

// Product feature interface
export interface ProductFeature {
  id: string
  title: string
  description: string
  icon: string
  image?: ImageData
}

// Product variant interface
export interface ProductVariant {
  id: string
  name: string
  description: string
  image: ImageData
  features: string[]
}

// Timeline item interface
export interface TimelineItem {
  year: string
  event: string
}

// Review interface
export interface Review {
  id: string
  author: string
  location: string
  rating: number
  comment: string
  date: string
}

// Store location interface
export interface StoreLocation {
  name: string
  address: string
  hours: string
}

// Price info interface
export interface PriceInfo {
  basePrice: number
  currency: string
  shippingInfo: string
}

// Navigation section interface
export interface NavigationSection {
  id: string
  label: string
  href: string
}

// Social link interface
export interface SocialLink {
  name: string
  url: string
  icon: string
}

// Contact info interface
export interface ContactInfo {
  email: string
  phone: string
  address: string
}

// Hero content interface
export interface HeroContent {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  backgroundImage: ImageData
}

// Story content interface
export interface StoryContent {
  title: string
  paragraphs: string[]
  timeline: TimelineItem[]
  images: ImageData[]
}

// Purchase content interface
export interface PurchaseContent {
  onlineStoreUrl: string
  storeLocations: StoreLocation[]
  priceInfo: PriceInfo
}

// Site content interface (main content structure)
export interface SiteContent {
  hero: HeroContent
  features: ProductFeature[]
  variants: ProductVariant[]
  story: StoryContent
  gallery: ImageData[]
  reviews: Review[]
  purchase: PurchaseContent
  contact: ContactInfo
}

// Contact form data interface
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Analytics event interface
export interface AnalyticsEvent {
  eventName: string
  timestamp: number
  params: {
    section?: string
    action?: string
    label?: string
    value?: number
  }
}

// Conversion event interface
export interface ConversionEvent extends AnalyticsEvent {
  conversionType: 'cta_click' | 'form_submit' | 'external_link'
  conversionValue?: number
}
