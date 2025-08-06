'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Phone, MapPin, Send, Clock, MessageCircle, CheckCircle, X, Sparkles, Heart } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

export function ContactSection() {
  const { t, isLoading } = useLanguage()
  const [email, setEmail] = useState('')
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setShowPopup(true)
      setEmail('')
    }
  }

  const closePopup = () => {
    setShowPopup(false)
  }

  if (isLoading) {
    return (
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="loading-shimmer h-8 w-64 mx-auto mb-8 rounded"></div>
          <div className="loading-shimmer h-4 w-96 mx-auto mb-16 rounded"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="loading-shimmer h-32 rounded-3xl"></div>
              <div className="loading-shimmer h-32 rounded-3xl"></div>
              <div className="loading-shimmer h-32 rounded-3xl"></div>
            </div>
            <div className="loading-shimmer h-96 rounded-3xl"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="section-divider py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Elegant Light Background */}
      <div className="absolute inset-0 bg-white/90"></div>
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-visionx-orange/8 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-visionx-blue/8 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-visionx-yellow/8 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '8s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-visionx-purple/10 to-visionx-orange/10 text-visionx-purple px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
            <MessageCircle className="h-5 w-5" />
            <span className="font-semibold">Let's Talk</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-visionx-yellow mb-8">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-visionx-purple mb-8">
              {t('contact.info.title')}
            </h3>
            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="bg-gradient-to-br from-visionx-orange to-orange-400 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-7 w-7 text-visionx-purple" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-visionx-purple mb-2">{t('contact.info.email.title')}</h4>
                  <p className="text-gray-600 text-lg">hello@visionx.com</p>
                </div>
              </div>
              {/* <div className="flex items-start space-x-6 group">
                <div className="bg-gradient-to-br from-visionx-blue to-blue-400 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-7 w-7 text-visionx-purple" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-visionx-purple mb-2">{t('contact.info.phone.title')}</h4>
                  <p className="text-gray-600 text-lg">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="bg-gradient-to-br from-visionx-yellow to-yellow-400 p-4 rounded-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-7 w-7 text-visionx-purple" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-visionx-purple mb-2">{t('contact.info.address.title')}</h4>
                  <p className="text-gray-600 text-lg">{t('contact.info.address.value')}</p>
                </div>
              </div> */}
            </div>

            <div className="mt-12 p-8 glass-white rounded-3xl border border-gray-200 shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-visionx-orange" />
                <h4 className="text-xl font-bold text-visionx-purple">{t('contact.response.title')}</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">{t('contact.response.description')}</p>
            </div>
          </div>

          {/* Simplified Contact Form */}
          <div>
            <div className="glass-white rounded-3xl p-10 shadow-2xl border border-gray-200">
              <div className="text-center mb-8">
                <Sparkles className="h-12 w-12 text-visionx-yellow mx-auto mb-4 animate-pulse" />
                <h3 className="text-3xl font-bold text-visionx-purple mb-2">Get Started Today</h3>
                <p className="text-gray-600">Join the future of advertising</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-visionx-purple mb-3">
                    {t('contact.form.email')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full h-14 border-2 border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-visionx-orange rounded-xl transition-colors duration-300 shadow-sm"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-16 text-visionx-purple bg-gradient-to-r from-visionx-orange to-visionx-yellow hover:from-orange-600 hover:to-yellow-500  text-xl font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Send className="mr-3 h-7 w-7 text-visionx-purple" />
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-10 max-w-md w-full mx-4 shadow-3xl transform animate-in zoom-in duration-500 border-2 border-gray-100">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-xl">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <div className="flex justify-center mb-4">
                <Heart className="h-8 w-8 text-red-500 animate-pulse" fill="currentColor" />
              </div>
              <h3 className="text-3xl font-bold text-visionx-purple mb-4">{t('contact.popup.title')}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                {t('contact.popup.message')}
              </p>
              <Button 
                onClick={closePopup}
                className="bg-gradient-to-r from-visionx-orange to-visionx-yellow hover:from-orange-600 hover:to-yellow-500 text-white px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                {t('contact.popup.close')}
              </Button>
            </div>
            <button
              onClick={closePopup}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-full hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
