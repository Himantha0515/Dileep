'use client'

import * as React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const portfolioItems = [
  {
    id: 1,
    title: 'Wedding Closeup',
    image: '/portfolio/1000138346.jpg',
    description: 'A closeup of the bride and groom, adorned in traditional attire.'
  },
  {
    id: 2,
    title: 'Couple on the Beach',
    image: '/portfolio/1000138350.jpg',
    description: 'A couple walking hand in hand on the beach, full of happiness.'
  },
  {
    id: 3,
    title: 'Bride in the Garden',
    image: '/portfolio/1000138354.jpg',
    description: 'A bride standing gracefully in a lush garden, surrounded by palm trees.'
  },
  {
    id: 4,
    title: 'Traditional Portrait',
    image: '/portfolio/1000138358.jpg',
    description: 'A traditional portrait capturing the essence of the moment.'
  },
  {
    id: 5,
    title: 'Candid Wedding Moment',
    image: '/portfolio/1000138362.jpg',
    description: 'A candid moment from a vibrant wedding celebration.'
  },
  {
    id: 6,
    title: 'Joyful Bride',
    image: '/portfolio/1000138366.jpg',
    description: 'A joyful bride radiating happiness on her special day.'
  },
  {
    id: 7,
    title: 'Elegant Bride',
    image: '/portfolio/1000138370.jpg',
    description: 'An elegant bride in a beautiful pose.'
  },
  {
    id: 8,
    title: 'Classic Wedding',
    image: '/portfolio/1000138374.jpg',
    description: 'A classic wedding moment captured in timeless style.'
  },
  {
    id: 9,
    title: 'Joyful Bride 2',
    image: '/portfolio/IMG-20250522-WA0014.jpg',
    description: 'Another joyful bride radiating happiness on her special day.'
  }
]

export default function PortfolioPage() {
  const [selectedImage, setSelectedImage] = useState(null as typeof portfolioItems[0] | null)

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-serif text-4xl font-bold mb-4">Portfolio</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore my latest work and photography collections
          </p>
        </div>
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 sm:p-4">
                <h3 className="font-serif text-base sm:text-lg font-bold text-white mb-1 drop-shadow">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-200 drop-shadow">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-2"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-full max-w-2xl sm:max-w-4xl mx-auto">
              <button
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300"
                onClick={() => setSelectedImage(null)}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="mt-2 sm:mt-4 text-center text-white">
                <h3 className="font-serif text-lg sm:text-2xl font-bold mb-1 sm:mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-xs sm:text-base text-gray-300">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
} 