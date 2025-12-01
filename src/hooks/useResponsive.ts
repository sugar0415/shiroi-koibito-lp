'use client'

import { useState, useEffect } from 'react'

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl'

export function useResponsive() {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    breakpoint: 'md' as Breakpoint,
  })

  useEffect(() => {
    const updateResponsive = () => {
      const width = window.innerWidth

      const isMobile = width < 768
      const isTablet = width >= 768 && width < 1024
      const isDesktop = width >= 1024

      let breakpoint: Breakpoint = 'md'
      if (width < 640) {
        breakpoint = 'sm'
      } else if (width >= 640 && width < 768) {
        breakpoint = 'md'
      } else if (width >= 768 && width < 1024) {
        breakpoint = 'lg'
      } else {
        breakpoint = 'xl'
      }

      setState({
        isMobile,
        isTablet,
        isDesktop,
        breakpoint,
      })
    }

    updateResponsive()

    window.addEventListener('resize', updateResponsive)

    return () => {
      window.removeEventListener('resize', updateResponsive)
    }
  }, [])

  return state
}
