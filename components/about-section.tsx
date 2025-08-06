'use client'

import { Brain, Target, Zap, Users, Shield, Sparkles, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

export function AboutSection() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Brain,
      title: t('about.features.ai.title'),
      description: t('about.features.ai.description'),
      color: 'from-visionx-blue to-blue-400',
      bgColor: 'bg-visionx-blue/10'
    },
    {
      icon: Target,
      title: t('about.features.targeting.title'),
      description: t('about.features.targeting.description'),
      color: 'from-visionx-orange to-orange-400',
      bgColor: 'bg-visionx-orange/10'
    },
    {
      icon: Zap,
      title: t('about.features.speed.title'),
      description: t('about.features.speed.description'),
      color: 'from-visionx-yellow to-yellow-400',
      bgColor: 'bg-visionx-yellow/10'
    },
    {
      icon: Users,
      title: t('about.features.engagement.title'),
      description: t('about.features.engagement.description'),
      color: 'from-visionx-purple to-purple-400',
      bgColor: 'bg-visionx-purple/10'
    }
  ]

  return (
    <section id="about" className="section-divider py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Light Background with Subtle Patterns */}
      <div className="absolute inset-0 bg-white/80"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-0 w-80 h-80 bg-visionx-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-visionx-orange/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-visionx-yellow/5 rounded-full blur-3xl animate-float" style={{animationDelay: '6s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-visionx-purple/10 to-visionx-blue/10 text-visionx-purple px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">Trusted by 500+ Companies</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-visionx-yellow mb-8">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-hero-pattern rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100 hover:border-gray-200">
                <div className={`${feature.bgColor} rounded-2xl p-4 mb-6 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`border  rounded-xl p-3`}>
                    <feature.icon className="h-8 w-8 text-visionx-yellow" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative">
          <div className="bg-visionx-gradient-reverse rounded-3xl p-12 text-white text-center shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="flex justify-center mb-6">
                <Sparkles className="h-12 w-12 text-visionx-yellow animate-pulse" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-hero-pattern">{t('about.cta.title')}</h3>
              <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">{t('about.cta.description')}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-bold mb-3 text-visionx-yellow">500+</div>
                  <div className="text-lg opacity-90">{t('about.stats.campaigns')}</div>
                </div>
                <div className="glass rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-bold mb-3 text-visionx-yellow">98%</div>
                  <div className="text-lg opacity-90">{t('about.stats.satisfaction')}</div>
                </div>
                <div className="glass rounded-3xl p-8 hover:scale-105 transition-transform duration-300">
                  <div className="text-5xl font-bold mb-3 text-visionx-yellow">24/7</div>
                  <div className="text-lg opacity-90">{t('about.stats.support')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
