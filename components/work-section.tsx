'use client'

import { Button } from '@/components/ui/button'
import { Play, ExternalLink, Award, TrendingUp, Star, Zap } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

export function WorkSection() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: t('work.projects.ecommerce.title'),
      description: t('work.projects.ecommerce.description'),
      category: t('work.projects.ecommerce.category'),
      thumbnail: '/placeholder.svg?height=300&width=400&text=E-commerce+Campaign',
      videoUrl: '#',
      metrics: '+150% Conversions',
      color: 'from-visionx-orange to-orange-400',
      bgGradient: 'from-orange-500/20 to-red-500/20'
    },
    {
      id: 2,
      title: t('work.projects.restaurant.title'),
      description: t('work.projects.restaurant.description'),
      category: t('work.projects.restaurant.category'),
      thumbnail: '/placeholder.svg?height=300&width=400&text=Restaurant+Campaign',
      videoUrl: '#',
      metrics: '+200% Foot Traffic',
      color: 'from-visionx-blue to-blue-400',
      bgGradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 3,
      title: t('work.projects.tech.title'),
      description: t('work.projects.tech.description'),
      category: t('work.projects.tech.category'),
      thumbnail: '/placeholder.svg?height=300&width=400&text=Tech+Startup+Campaign',
      videoUrl: '#',
      metrics: '50K+ Leads',
      color: 'from-visionx-yellow to-yellow-400',
      bgGradient: 'from-yellow-500/20 to-amber-500/20'
    }
  ]

  return (
    <section id="work" className="section-divider py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-work-pattern">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-visionx-orange/10 to-transparent rounded-full blur-3xl animate-blob-bounce"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-visionx-blue/10 to-transparent rounded-full blur-3xl animate-blob-bounce" style={{animationDelay: '10s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-visionx-yellow/5 to-transparent rounded-full blur-3xl animate-blob-bounce" style={{animationDelay: '5s'}}></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass-orange px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-xl">
            <Award className="h-5 w-5 text-visionx-orange" />
            <span className="text-white font-semibold">Award-Winning Campaigns</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-visionx-yellow mb-8">
            {t('work.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('work.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div key={project.id} className="group">
              <div className="glass-dark rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 border border-white/10">
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <img
                    src={project.thumbnail || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="lg" className="bg-white/90 text-visionx-purple hover:bg-white shadow-2xl transform scale-110">
                      <Play className="mr-2 h-6 w-6" />
                      {t('work.watchVideo')}
                    </Button>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className={`bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl`}>
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute top-6 right-6">
                    <div className="glass-dark text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 shadow-xl">
                      <TrendingUp className="h-4 w-4" />
                      <span>{project.metrics}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="h-6 w-6 text-visionx-yellow animate-pulse" fill="currentColor" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-visionx-yellow mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-visionx-orange text-visionx-orange hover:bg-visionx-orange hover:text-white transition-all duration-300 transform hover:scale-105 rounded-xl"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    {t('work.viewProject')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-20">
          <Button 
            size="lg" 
            variant="outline" 
            className="px-12 py-6 text-xl font-bold border-3 border-white text-white hover:bg-white hover:text-visionx-purple transition-all duration-300 transform hover:scale-110 rounded-2xl glass shadow-2xl"
          >
            <Zap className="mr-3 h-6 w-6" />
            {t('work.viewAll')}
          </Button>
        </div> */}
      </div>
    </section>
  )
}
