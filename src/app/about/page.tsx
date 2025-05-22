import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24">
          <div className="relative aspect-square rounded-lg overflow-hidden w-full max-w-xs mx-auto md:max-w-none">
            <Image
              src="/portfolio/1000138350.jpg"
              alt="Dileep, founder of D_Lighted Lens"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          <div>
            <h1 className="font-serif text-4xl font-bold mb-6">
              Hi, I&apos;m Dileep
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              A passionate wedding photographer with over 6 years of experience capturing the most meaningful moments in people&apos;s lives. My journey behind the lens has taken me through countless love stories, each unique and unforgettable. I specialize in documenting weddings with a blend of candid emotion and artistic storytelling, ensuring that every smile, tear, and joyful celebration is preserved beautifully.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              I believe that great photography doesn&apos;t just tell a story — it brings it to life. Whether it&apos;s an intimate ceremony or a grand celebration, my goal is to create timeless images that you&apos;ll cherish for generations. Let&apos;s turn your special day into a visual legacy.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              Let&apos;s Work Together
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* About D_Lighted Lens Section */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Welcome to D_Lighted Lens
          </h2>
          <p className="text-xl font-semibold mb-2">Capturing Love. Framing Life.</p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I&apos;m Dileep — the founder and storyteller behind D_Lighted Lens.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            For over six years, I&apos;ve had the honor of witnessing countless love stories unfold — each one unique, heartfelt, and deeply human. D_Lighted Lens was born from a simple belief: that love is art, and every couple deserves to see their story told with beauty, emotion, and authenticity.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            At D_Lighted Lens, we don&apos;t just photograph weddings — we preserve moments that words can&apos;t quite express. The soft glance between soulmates, the joyous tears of a parent, the laughter that echoes through a celebration — these are the moments that become timeless through our lens.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            We believe in photography that feels — images that not only show how your day looked, but how it felt. With a passion for natural light, genuine emotions, and elegant storytelling, we&apos;re here to create visual poetry that lasts a lifetime.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            This is more than photography. It&apos;s your story, beautifully told.
          </p>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Ready to Create Memories?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s work together to capture your special moments in the most beautiful way possible. I&apos;m excited to hear your story and help you preserve it through photography.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  )
} 