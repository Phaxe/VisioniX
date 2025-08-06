'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Eye, Zap, Target, Star, Sparkles } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

export function HeroSection() {
  const { t, isLoading } = useLanguage()

  if (isLoading) {
    return (
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-hero-pattern">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="loading-shimmer h-8 w-64 mx-auto mb-8 rounded"></div>
            <div className="loading-shimmer h-16 w-96 mx-auto mb-4 rounded"></div>
            <div className="loading-shimmer h-16 w-80 mx-auto mb-8 rounded"></div>
            <div className="loading-shimmer h-6 w-full max-w-4xl mx-auto mb-12 rounded"></div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <div className="loading-shimmer h-14 w-40 rounded-2xl"></div>
              <div className="loading-shimmer h-14 w-40 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="home" className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-hero-pattern">
      {/* Animated Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-visionx-orange/20 rounded-full blur-3xl animate-blob-bounce"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-visionx-blue/20 rounded-full blur-3xl animate-blob-bounce" style={{animationDelay: '7s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-visionx-yellow/15 rounded-full blur-3xl animate-blob-bounce" style={{animationDelay: '14s'}}></div>
      
      {/* Decorative Stars */}
      <div className="absolute top-32 left-20 animate-sparkle">
        <Star className="h-6 w-6 text-visionx-yellow opacity-60" fill="currentColor" />
      </div>
      <div className="absolute top-48 right-32 animate-sparkle" style={{animationDelay: '1s'}}>
        <Star className="h-4 w-4 text-visionx-orange opacity-40" fill="currentColor" />
      </div>
      <div className="absolute bottom-32 right-20 animate-sparkle" style={{animationDelay: '2s'}}>
        <Star className="h-5 w-5 text-visionx-blue opacity-50" fill="currentColor" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2 glass-orange px-6 py-3 rounded-full text-sm font-medium shadow-2xl animate-pulse-glow">
              <Eye className="h-5 w-5 text-visionx-orange" />
              <span className="text-white font-semibold">{t('hero.badge')}</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="block text-white drop-shadow-2xl">{t('hero.title.line1')}</span>
            <span className="block text-gradient-yellow">
              {t('hero.title.line2')}
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            {t('hero.subtitle')}
          </p>
          

        </div>

        {/* Enhanced Hero Visual */}
        <div className="relative">
          <div className="glass-dark rounded-3xl p-10 shadow-2xl border-2 border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="glass-orange rounded-3xl p-10 text-center group hover:scale-105 transition-all duration-500 transform hover:rotate-2">
                <div className="bg-gradient-to-br from-visionx-orange to-orange-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl font-bold mb-4 text-white">AI Vision</div>
                <div className="text-white/80 text-lg">{t('hero.features.ai')}</div>
              </div>
              <div className="glass-blue rounded-3xl p-10 text-center group hover:scale-105 transition-all duration-500 transform hover:-rotate-1">
                <div className="bg-gradient-to-br from-visionx-blue to-blue-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl font-bold mb-4 text-white">Creative</div>
                <div className="text-white/80 text-lg">{t('hero.features.creative')}</div>
              </div>
              <div className="glass rounded-3xl p-10 text-center group hover:scale-105 transition-all duration-500 transform hover:rotate-1">
                <div className="bg-gradient-to-br from-visionx-yellow to-yellow-400 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <div className="text-3xl font-bold mb-4 text-white">Targeted</div>
                <div className="text-white/80 text-lg">{t('hero.features.fast')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
