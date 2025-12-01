'use client'

import { useState, useEffect } from 'react'

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollY, scrollDirection }
}
