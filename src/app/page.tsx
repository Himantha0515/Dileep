import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/portfolio/1000138350.jpg"
            alt="Hero background"
            fill
            sizes="100vw"
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container relative z-10 text-center text-white px-2 sm:px-0">
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            Capturing Life&apos;s Beautiful Moments
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Professional photography services for weddings, portraits, and special events
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/portfolio" className="btn btn-primary">
              View Portfolio
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Create Memories?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to capture your special moments in the most beautiful way
          </p>
          <Link href="/contact" className="btn bg-white text-primary-900 hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Footer with About Link */}
      <footer className="bg-primary-900 text-white py-6 mt-auto">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm">&copy; {new Date().getFullYear()} D_Lighted Lens. All rights reserved.</div>
          <Link href="/about" className="underline hover:text-primary-200">About D_Lighted Lens</Link>
        </div>
      </footer>
    </main>
  )
} 