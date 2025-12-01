'use client'

import React from 'react'
import { Navigation } from './Navigation'
import { Button } from '../ui/Button'
import { NavigationSection } from '@/types'

interface HeaderProps {
  isScrolled: boolean
  activeSection: string
}

export const Header: React.FC<HeaderProps> = ({ isScrolled, activeSection }) => {
  const sections: NavigationSection[] = [
    { id: 'hero', label: 'ホーム', href: '#hero' },
    { id: 'features', label: '特徴', href: '#features' },
    { id: 'story', label: 'ストーリー', href: '#story' },
    { id: 'reviews', label: 'レビュー', href: '#reviews' },
    { id: 'purchase', label: '購入', href: '#purchase' },
    { id: 'contact', label: 'お問い合わせ', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <a
            href="#hero"
            className={`transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
          >
            白い恋人
          </a>
        </div>

        <Navigation
          sections={sections}
          activeSection={activeSection}
          onNavigate={(sectionId) => {
            const element = document.getElementById(sectionId)
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' })
            }
          }}
          isScrolled={isScrolled}
        />

        <Button href="#purchase" variant="primary" size="sm">
          購入する
        </Button>
      </div>
    </header>
  )
}
