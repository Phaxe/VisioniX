'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Globe, Menu, X } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage, t, isLoading } = useLanguage()

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'work', href: '#work' },
    { key: 'contact', href: '#contact' }
  ]

  if (isLoading) {
    return (
      <nav className="w-full bg-visionx-purple backdrop-blur-md border-b border-white/10 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="loading-shimmer h-8 w-24 rounded"></div>
            <div className="hidden md:flex space-x-8">
              <div className="loading-shimmer h-4 w-16 rounded"></div>
              <div className="loading-shimmer h-4 w-16 rounded"></div>
              <div className="loading-shimmer h-4 w-16 rounded"></div>
              <div className="loading-shimmer h-4 w-16 rounded"></div>
            </div>
            <div className="loading-shimmer h-8 w-20 rounded"></div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="w-full bg-visionx-purple backdrop-blur-md border-b border-white/10 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Text Only */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-visionx-yellow">
              VisioniX
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-white hover:text-visionx-orange px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-white/10"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </div>
          </div>

          {/* Language Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-white hover:bg-visionx-orange hover:text-white transition-all duration-300"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-visionx-orange hover:text-white transition-all duration-300"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-visionx-purple border-t border-white/10">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-white hover:text-visionx-orange hover:bg-white/10 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
