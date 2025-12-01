import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '白い恋人 | 北海道を代表する洋菓子',
  description: '北海道の銘菓「白い恋人」。ラングドシャクッキーにホワイトチョコレートを挟んだ上質な味わいをお楽しみください。',
  keywords: ['白い恋人', '北海道', '洋菓子', 'お土産', 'ラングドシャ', 'チョコレート'],
  openGraph: {
    title: '白い恋人 | 北海道を代表する洋菓子',
    description: '北海道の銘菓「白い恋人」。ラングドシャクッキーにホワイトチョコレートを挟んだ上質な味わいをお楽しみください。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '白い恋人 | 北海道を代表する洋菓子',
    description: '北海道の銘菓「白い恋人」。ラングドシャクッキーにホワイトチョコレートを挟んだ上質な味わいをお楽しみください。',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
