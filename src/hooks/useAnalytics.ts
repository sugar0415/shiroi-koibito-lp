'use client'

import { useCallback } from 'react'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

export function useAnalytics() {
  const trackPageView = useCallback(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: window.location.pathname,
      })
    }
  }, [])

  const trackEvent = useCallback(
    (eventName: string, params?: Record<string, any>) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, params)
      }
    },
    []
  )

  const trackConversion = useCallback((conversionType: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        conversion_type: conversionType,
        timestamp: Date.now(),
      })
    }
  }, [])

  return {
    trackPageView,
    trackEvent,
    trackConversion,
  }
}
