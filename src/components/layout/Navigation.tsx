'use client'

import React, { useState } from 'react'
import { NavigationSection } from '@/types'

interface NavigationProps {
  sections: NavigationSection[]
  activeSection: string
  onNavigate: (sectionId: string) => void
  isScrolled: boolean
}

export const Navigation: React.FC<NavigationProps> = ({
  sections,
  activeSection,
  onNavigate,
  isScrolled,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={section.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigate(section.id)
                }}
                className={`transition-colors hover:text-blue-600 ${
                  activeSection === section.id
                    ? 'text-blue-600 font-semibold'
                    : isScrolled
                    ? 'text-gray-700'
                    : 'text-white'
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Toggle */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="メニューを開く"
      >
        <svg
          className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <ul className="py-4">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={section.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigate(section.id)
                  }}
                  className={`block px-6 py-3 transition-colors hover:bg-gray-100 ${
                    activeSection === section.id
                      ? 'text-blue-600 font-semibold bg-blue-50'
                      : 'text-gray-700'
                  }`}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
