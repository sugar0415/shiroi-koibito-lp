import { z } from 'zod'

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  email: z.string().email('有効なメールアドレスを入力してください'),
  subject: z.string().min(1, '件名を入力してください'),
  message: z.string().min(10, 'メッセージは10文字以上入力してください'),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>
