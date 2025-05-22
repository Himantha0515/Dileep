'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  eventType: z.enum(['wedding', 'portrait', 'event', 'other']),
  eventDate: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Construct WhatsApp message
      const message =
        `New Photography Inquiry!%0A` +
        `Name: ${encodeURIComponent(data.name)}%0A` +
        `Email: ${encodeURIComponent(data.email)}%0A` +
        (data.phone ? `Phone: ${encodeURIComponent(data.phone)}%0A` : '') +
        `Event Type: ${encodeURIComponent(data.eventType)}%0A` +
        (data.eventDate ? `Event Date: ${encodeURIComponent(data.eventDate)}%0A` : '') +
        `Message: ${encodeURIComponent(data.message)}`

      // WhatsApp URL (international format, no + or dashes)
      const whatsappUrl = `https://wa.me/919908871025?text=${message}`

      // Open WhatsApp (works for both mobile and web)
      window.open(whatsappUrl, '_blank')

      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          {...register('phone')}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
        />
      </div>

      <div>
        <label htmlFor="eventType" className="block text-sm font-medium">
          Event Type
        </label>
        <select
          id="eventType"
          {...register('eventType')}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
        >
          <option value="wedding">Wedding</option>
          <option value="portrait">Portrait</option>
          <option value="event">Event</option>
          <option value="other">Other</option>
        </select>
        {errors.eventType && (
          <p className="mt-1 text-sm text-red-600">{errors.eventType.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="eventDate" className="block text-sm font-medium">
          Event Date (optional)
        </label>
        <input
          type="date"
          id="eventDate"
          {...register('eventDate')}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className="rounded-md bg-green-50 p-4 dark:bg-green-900">
          <p className="text-sm text-green-800 dark:text-green-200">
            Thank you for your message! We&apos;ll get back to you soon.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-md bg-red-50 p-4 dark:bg-red-900">
          <p className="text-sm text-red-800 dark:text-red-200">
            Something went wrong. Please try again later.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
} 