'use client'

import { Button } from '@/components/ui/button'
import { Instagram, Phone, Mail, MapPin, Heart, Zap } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
)

export function Footer() {
  const { t, isLoading } = useLanguage()

  if (isLoading) {
    return (
      <footer className="bg-footer-pattern text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2 space-y-4">
              <div className="loading-shimmer h-8 w-32 rounded"></div>
              <div className="loading-shimmer h-4 w-64 rounded"></div>
              <div className="loading-shimmer h-4 w-48 rounded"></div>
            </div>
            <div className="space-y-4">
              <div className="loading-shimmer h-6 w-24 rounded"></div>
              <div className="loading-shimmer h-4 w-16 rounded"></div>
              <div className="loading-shimmer h-4 w-20 rounded"></div>
            </div>
            <div className="space-y-4">
              <div className="loading-shimmer h-6 w-28 rounded"></div>
              <div className="loading-shimmer h-4 w-32 rounded"></div>
              <div className="loading-shimmer h-4 w-24 rounded"></div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-footer-pattern">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-visionx-orange/8 to-transparent rounded-full blur-3xl animate-blob-bounce"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-visionx-blue/8 to-transparent rounded-full blur-3xl animate-blob-bounce" style={{animationDelay: '12s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-visionx-yellow/5 to-transparent rounded-full blur-3xl animate-blob-bounce" style={{animationDelay: '6s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="h-10 w-10 text-visionx-yellow animate-pulse" />
              <div className="text-4xl font-bold text-gradient-yellow">VisioniX</div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md text-lg leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-visionx-orange text-visionx-orange hover:bg-visionx-orange hover:text-white transition-all duration-300 transform hover:scale-110 rounded-2xl glass-orange shadow-xl"
              >
                <TikTokIcon className="h-6 w-6 mr-3" />
                TikTok
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-visionx-blue text-visionx-blue hover:bg-visionx-blue hover:text-white transition-all duration-300 transform hover:scale-110 rounded-2xl glass-blue shadow-xl"
              >
                <Instagram className="h-6 w-6 mr-3" />
                Instagram
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-visionx-yellow">{t('footer.quickLinks.title')}</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-visionx-orange transition-colors duration-300 text-lg hover:translate-x-2 transform inline-block">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-visionx-orange transition-colors duration-300 text-lg hover:translate-x-2 transform inline-block">{t('nav.about')}</a></li>
              <li><a href="#work" className="text-gray-300 hover:text-visionx-orange transition-colors duration-300 text-lg hover:translate-x-2 transform inline-block">{t('nav.work')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-visionx-orange transition-colors duration-300 text-lg hover:translate-x-2 transform inline-block">{t('nav.contact')}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-visionx-yellow">{t('footer.contact.title')}</h3>
            <div className="space-y-6">
              {/* <div className="flex items-center space-x-4 text-gray-300 group">
                <div className="bg-visionx-orange/20 p-2 rounded-lg group-hover:bg-visionx-orange/30 transition-colors duration-300">
                  <Phone className="h-5 w-5 text-visionx-orange" />
                </div>
                <span className="text-lg">+1 (555) 123-4567</span>
              </div> */}
              <div className="flex items-center space-x-4 text-gray-300 group">
                <div className="bg-visionx-blue/20 p-2 rounded-lg group-hover:bg-visionx-blue/30 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-visionx-blue" />
                </div>
                <span className="text-lg">hello@visionx.com</span>
              </div>
              {/* <div className="flex items-start space-x-4 text-gray-300 group">
                <div className="bg-visionx-yellow/20 p-2 rounded-lg group-hover:bg-visionx-yellow/30 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-visionx-yellow mt-1" />
                </div>
                <span className="text-lg">123 Innovation Street<br />Tech City, TC 12345</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-400 text-lg">{t('footer.madeWith')}</span>
            <Heart className="h-5 w-5 text-red-500 animate-pulse" fill="currentColor" />
            <span className="text-gray-400 text-lg">{t('footer.byTeam')}</span>
          </div>
          <p className="text-gray-400 text-lg">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
