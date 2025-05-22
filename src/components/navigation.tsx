'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon, HomeIcon, PhotoIcon, Cog6ToothIcon, UserCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { ThemeToggle } from './theme-toggle'

const navigation = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Portfolio', href: '/portfolio', icon: PhotoIcon },
  { name: 'Services', href: '/services', icon: Cog6ToothIcon },
  { name: 'About', href: '/about', icon: UserCircleIcon },
  { name: 'Contact', href: '/contact', icon: EnvelopeIcon },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  // Color backgrounds for each option
  const bgColors = [
    'bg-gradient-to-r from-pink-200 via-pink-100 to-pink-50 dark:from-pink-900 dark:via-pink-800 dark:to-pink-700', // Home
    'bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700', // Portfolio
    'bg-gradient-to-r from-green-200 via-green-100 to-green-50 dark:from-green-900 dark:via-green-800 dark:to-green-700', // Services
    'bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-50 dark:from-yellow-900 dark:via-yellow-800 dark:to-yellow-700', // About
    'bg-gradient-to-r from-purple-200 via-purple-100 to-purple-50 dark:from-purple-900 dark:via-purple-800 dark:to-purple-700', // Contact
  ]

  return (
    <>
      {/* Desktop Navigation */}
      <header className="hidden md:block fixed inset-x-0 top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <nav className="container flex items-center justify-between py-3 md:py-4">
          {/* SVG Logo as Home Button */}
          <Link href="/" className="flex items-center group" aria-label="D_Lighted Lens Home">
            <span className="mr-2">
              <svg width="32" height="32" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="10" width="30" height="20" rx="4" fill="#fff" stroke="#e11d48" strokeWidth="2.5"/>
                <circle cx="19" cy="20" r="7" fill="#f9fafb" stroke="#e11d48" strokeWidth="2.5"/>
                <circle cx="19" cy="20" r="3.5" fill="#e11d48"/>
                <rect x="12" y="6" width="14" height="6" rx="2" fill="#e11d48"/>
              </svg>
            </span>
            <span className="font-serif text-lg md:text-xl font-extrabold tracking-tight text-primary-900 dark:text-primary-100 group-hover:text-primary-600 transition-colors">
              D_Lighted Lens
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-3 md:gap-6">
            {navigation.map((item, idx) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 md:px-5 py-2 rounded-2xl font-medium transition-all shadow-sm border border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-lg flex items-center gap-2
                    ${bgColors[idx]}
                    ${
                      pathname === item.href
                        ? 'text-primary-900 dark:text-primary-100 font-bold scale-110 shadow-md border-primary-400 dark:border-primary-700 ring-2 ring-primary-300 dark:ring-primary-700'
                        : 'text-gray-700 dark:text-gray-200'
                    }
                  `}
                  style={{ boxShadow: pathname === item.href ? '0 4px 24px 0 rgba(225,29,72,0.10)' : undefined }}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{item.name}</span>
                </Link>
              )
            })}
            <ThemeToggle />
          </div>
        </nav>
      </header>

      {/* Mobile Top Bar with Logo */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 flex items-center px-4 py-2 shadow-sm">
        <Link href="/" className="flex items-center group" aria-label="D_Lighted Lens Home">
          <span className="mr-2">
            <svg width="28" height="28" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="10" width="30" height="20" rx="4" fill="#fff" stroke="#e11d48" strokeWidth="2.5"/>
              <circle cx="19" cy="20" r="7" fill="#f9fafb" stroke="#e11d48" strokeWidth="2.5"/>
              <circle cx="19" cy="20" r="3.5" fill="#e11d48"/>
              <rect x="12" y="6" width="14" height="6" rx="2" fill="#e11d48"/>
            </svg>
          </span>
          <span className="font-serif text-base font-extrabold tracking-tight text-primary-900 dark:text-primary-100 group-hover:text-primary-600 transition-colors">
            D_Lighted Lens
          </span>
        </Link>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed md:hidden bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 flex justify-around py-1.5 sm:py-2 shadow-2xl">
        {navigation.map((item, idx) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center px-1.5 sm:px-2 py-1 rounded-xl font-medium text-xs transition-all shadow-sm border border-gray-200 dark:border-gray-700 hover:scale-110 hover:shadow-lg
                ${bgColors[idx]}
                ${
                  pathname === item.href
                    ? 'text-primary-900 dark:text-primary-100 font-bold scale-110 shadow-md border-primary-400 dark:border-primary-700 ring-2 ring-primary-300 dark:ring-primary-700'
                    : 'text-gray-700 dark:text-gray-200'
                }
              `}
              style={{ boxShadow: pathname === item.href ? '0 4px 24px 0 rgba(225,29,72,0.10)' : undefined }}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6 mb-0.5" />
              <span className="text-[10px] sm:text-xs">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </>
  )
} 