import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Wedding Photography',
    description:
      'Capture your special day with our comprehensive wedding photography packages. From the ceremony to the reception, we&apos;ll document every precious moment.',
    image: '/portfolio/1000138346.jpg',
    features: [
      'Full day coverage',
      'Engagement session',
      'Online gallery',
      'High-resolution digital files',
      'Custom wedding album',
    ],
    price: 'Starting at $2,500',
  },
  {
    title: 'Portrait Sessions',
    description:
      'Professional portrait sessions for individuals, families, and couples. Perfect for capturing special moments and creating lasting memories.',
    image: '/portfolio/1000138366.jpg',
    features: [
      '1-2 hour session',
      'Multiple outfit changes',
      'Online gallery',
      'High-resolution digital files',
      'Print credit',
    ],
    price: 'Starting at $350',
  },
  {
    title: 'Event Photography',
    description:
      'Document your special events with our professional event photography services. From corporate events to birthday parties, we&apos;ve got you covered.',
    image: '/portfolio/1000138354.jpg',
    features: [
      'Full event coverage',
      'Online gallery',
      'High-resolution digital files',
      'Quick turnaround',
      'Print options available',
    ],
    price: 'Starting at $500',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl font-bold mb-4">
            Photography Services
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover our range of professional photography services tailored to
            your needs
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div
                className={`relative aspect-[4/3] rounded-lg overflow-hidden w-full max-w-xs mx-auto md:max-w-none ${
                  index % 2 === 1 ? 'md:col-start-2' : ''
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                  {service.description}
                </p>

                <div className="mb-4 sm:mb-6">
                  <h3 className="font-medium mb-2 sm:mb-3">Package Includes:</h3>
                  <ul className="space-y-1 sm:space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-600 dark:text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 text-primary-600 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center">
                  <Link
                    href="/contact"
                    className="btn btn-primary inline-flex items-center gap-2"
                  >
                    Book Now
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="font-serif text-3xl font-bold mb-6">
            Custom Packages Available
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Don&apos;t see exactly what you&apos;re looking for? Contact us to discuss
            custom photography packages tailored to your specific needs.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  )
} 