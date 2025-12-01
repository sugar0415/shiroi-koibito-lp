import React from 'react'
import { ContactInfo, SocialLink } from '@/types'

interface FooterProps {
  contactInfo: ContactInfo
  socialLinks?: SocialLink[]
}

export const Footer: React.FC<FooterProps> = ({ contactInfo, socialLinks = [] }) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">白い恋人</h3>
            <p className="text-gray-400">
              北海道を代表する洋菓子として、
              <br />
              上質な味わいをお届けしています。
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">お問い合わせ</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li>{contactInfo.address}</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">リンク</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  利用規約
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  特定商取引法に基づく表記
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        {socialLinks.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-800">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {currentYear} 白い恋人 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
