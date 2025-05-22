import * as React from 'react'
import { ContactForm } from '../../components/contact-form'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="font-serif text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a question or want to book a session? Fill out the form below and
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Contact Information
              </h2>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-3 sm:gap-4">
                  <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:tdileep2k@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      tdileep2k@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a
                      href="tel:9290083065"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      9290083065
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mt-1" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Tirupati, Andhrapradesh -517501
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Business Hours
              </h2>
              <div className="space-y-1 sm:space-y-2 text-gray-600 dark:text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                Follow Me
              </h2>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://www.instagram.com/d_lighted_lens?igsh=MTg1aTd3a3QzemdwNA=="
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="6" fill="#fff"/>
                    <path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM18 6.5C18.2761 6.5 18.5 6.72386 18.5 7C18.5 7.27614 18.2761 7.5 18 7.5C17.7239 7.5 17.5 7.27614 17.5 7C17.5 6.72386 17.7239 6.5 18 6.5Z" fill="#E1306C"/>
                    <circle cx="12" cy="12" r="3.5" stroke="#E1306C" strokeWidth="1.5"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 