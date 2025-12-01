'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card } from '../ui/Card'
import { FormField } from '../ui/FormField'
import { Button } from '../ui/Button'
import { contactFormSchema, ContactFormSchema } from '@/types/schemas'
import { useAnalytics } from '@/hooks'

export const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { trackConversion } = useAnalytics()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormSchema) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log('Form data:', data)
    setIsSubmitted(true)
    trackConversion('form_submit')
    reset()

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ご質問やご要望がございましたら、お気軽にお問い合わせください
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card variant="elevated" padding="lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    送信完了
                  </h3>
                  <p className="text-gray-700">
                    お問い合わせいただきありがとうございます。
                    <br />
                    担当者より折り返しご連絡させていただきます。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <FormField
                    label="お名前"
                    name="name"
                    type="text"
                    required
                    placeholder="山田 太郎"
                    error={errors.name?.message}
                    {...register('name')}
                  />

                  <FormField
                    label="メールアドレス"
                    name="email"
                    type="email"
                    required
                    placeholder="example@email.com"
                    error={errors.email?.message}
                    {...register('email')}
                  />

                  <FormField
                    label="件名"
                    name="subject"
                    type="text"
                    required
                    placeholder="お問い合わせの件名"
                    error={errors.subject?.message}
                    {...register('subject')}
                  />

                  <FormField
                    label="メッセージ"
                    name="message"
                    type="textarea"
                    required
                    placeholder="お問い合わせ内容をご記入ください"
                    rows={6}
                    error={errors.message?.message}
                    {...register('message')}
                  />

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? '送信中...' : '送信する'}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-4">または、以下の連絡先から直接お問い合わせください</p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong>{' '}
                <a href="mailto:info@shiroikoibito.co.jp" className="text-blue-600 hover:underline">
                  info@shiroikoibito.co.jp
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Tel:</strong>{' '}
                <a href="tel:011-666-1481" className="text-blue-600 hover:underline">
                  011-666-1481
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
