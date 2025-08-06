'use client'

import React, { useState, useCallback, useEffect, createContext, useContext } from 'react'

type Language = 'en' | 'ar'
type Translations = Record<string, any>

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string, params?: Record<string, any>) => string;
  isLoading: boolean;
  isRTL: boolean;
}

// Default translations to prevent errors during loading
const defaultTranslations = {
  en: {
    nav: { home: 'Home', about: 'About', work: 'Our Work', contact: 'Contact' },
    hero: {
      badge: 'AI-Powered Advertising',
      title: { line1: 'Create Amazing', line2: 'Interactive Ads' },
      subtitle: 'Transform your brand with AI-powered interactive advertisements.',
      cta: { primary: 'Get Started', secondary: 'Watch Demo' },
      features: { ai: 'AI-Powered', creative: 'Creative Solutions', fast: 'Lightning Fast' }
    },
    about: {
      title: 'Why Choose VisionX?',
      subtitle: 'We use cutting-edge AI technology to create interactive advertisements.',
      features: {
        ai: { title: 'AI Technology', description: 'Advanced machine learning algorithms.' },
        targeting: { title: 'Smart Targeting', description: 'Reach the right audience.' },
        speed: { title: 'Fast Delivery', description: 'From concept to campaign launch.' },
        engagement: { title: 'High Engagement', description: 'Interactive elements and gamification.' }
      },
      cta: { title: 'Ready to Transform?', description: 'Join hundreds of companies.' },
      stats: { campaigns: 'Successful Campaigns', satisfaction: 'Client Satisfaction', support: 'Support Available' }
    },
    work: {
      title: 'Our Latest Work',
      subtitle: 'Discover how we\'ve helped brands create engaging campaigns.',
      projects: {
        ecommerce: { title: 'E-commerce Revolution', description: 'Interactive product showcase.', category: 'E-commerce' },
        restaurant: { title: 'Restaurant Chain Campaign', description: 'Location-based interactive ads.', category: 'Food & Beverage' },
        tech: { title: 'Tech Startup Launch', description: 'Gamified ad experience.', category: 'Technology' }
      },
      watchVideo: 'Watch Video',
      viewProject: 'View Project',
      viewAll: 'View All Projects'
    },
    contact: {
      title: 'Let\'s Create Something Amazing',
      subtitle: 'Ready to revolutionize your advertising?',
      info: {
        title: 'Get in Touch',
        email: { title: 'Email Us' },
        phone: { title: 'Call Us' },
        address: { title: 'Visit Us', value: '123 Innovation Street, Tech City, TC 12345' }
      },
      response: { title: 'Quick Response', description: 'We typically respond within 24 hours.' },
      form: { name: 'Full Name', email: 'Email Address', company: 'Company Name', message: 'Tell us about your project', submit: 'Send Message' },
      popup: { title: 'Thank You!', message: 'We will contact you as soon as possible.', close: 'Close' }
    },
    footer: {
      description: 'Creating the future of interactive advertising.',
      quickLinks: { title: 'Quick Links' },
      contact: { title: 'Contact Info' },
      madeWith: 'Made with',
      byTeam: 'by VisionX Team',
      copyright: '© {year} VisionX. All rights reserved.'
    }
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'من نحن', work: 'أعمالنا', contact: 'تواصل معنا' },
    hero: {
      badge: 'إعلانات مدعومة بالذكاء الاصطناعي',
      title: { line1: 'أنشئ إعلانات', line2: 'تفاعلية مذهلة' },
      subtitle: 'حوّل علامتك التجارية بإعلانات تفاعلية مدعومة بالذكاء الاصطناعي.',
      cta: { primary: 'ابدأ الآن', secondary: 'شاهد العرض' },
      features: { ai: 'مدعوم بالذكاء الاصطناعي', creative: 'حلول إبداعية', fast: 'سريع البرق' }
    },
    about: {
      title: 'لماذا تختار VisionX؟',
      subtitle: 'نستخدم أحدث تقنيات الذكاء الاصطناعي لإنشاء إعلانات تفاعلية.',
      features: {
        ai: { title: 'تقنية الذكاء الاصطناعي', description: 'خوارزميات التعلم الآلي المتقدمة.' },
        targeting: { title: 'استهداف ذكي', description: 'الوصول للجمهور المناسب.' },
        speed: { title: 'تسليم سريع', description: 'من الفكرة إلى إطلاق الحملة.' },
        engagement: { title: 'تفاعل عالي', description: 'عناصر تفاعلية وميزات الألعاب.' }
      },
      cta: { title: 'مستعد لتحويل إعلاناتك؟', description: 'انضم لمئات الشركات.' },
      stats: { campaigns: 'حملة ناجحة', satisfaction: 'رضا العملاء', support: 'دعم متاح' }
    },
    work: {
      title: 'أحدث أعمالنا',
      subtitle: 'اكتشف كيف ساعدنا العلامات التجارية في إنشاء حملات إعلانية تفاعلية.',
      projects: {
        ecommerce: { title: 'ثورة التجارة الإلكترونية', description: 'عرض تفاعلي للمنتجات.', category: 'التجارة الإلكترونية' },
        restaurant: { title: 'حملة سلسلة مطاعم', description: 'إعلانات تفاعلية قائمة على الموقع.', category: 'الطعام والمشروبات' },
        tech: { title: 'إطلاق شركة تقنية ناشئة', description: 'تجربة إعلانية تفاعلية.', category: 'التكنولوجيا' }
      },
      watchVideo: 'شاهد الفيديو',
      viewProject: 'عرض المشروع',
      viewAll: 'عرض جميع المشاريع'
    },
    contact: {
      title: 'لننشئ شيئاً مذهلاً',
      subtitle: 'مستعد لثورة في إعلاناتك؟',
      info: {
        title: 'تواصل معنا',
        email: { title: 'راسلنا' },
        phone: { title: 'اتصل بنا' },
        address: { title: 'زرنا', value: '123 شارع الابتكار، مدينة التقنية، TC 12345' }
      },
      response: { title: 'استجابة سريعة', description: 'نرد عادة على جميع الاستفسارات خلال 24 ساعة.' },
      form: { name: 'الاسم الكامل', email: 'عنوان البريد الإلكتروني', company: 'اسم الشركة', message: 'أخبرنا عن مشروعك', submit: 'إرسال الرسالة' },
      popup: { title: 'شكراً لك!', message: 'سنتواصل معك في أقرب وقت ممكن.', close: 'إغلاق' }
    },
    footer: {
      description: 'نصنع مستقبل الإعلانات التفاعلية بحلول مدعومة بالذكاء الاصطناعي.',
      quickLinks: { title: 'روابط سريعة' },
      contact: { title: 'معلومات التواصل' },
      madeWith: 'صُنع بـ',
      byTeam: 'من قبل فريق VisionX',
      copyright: '© {year} VisionX. جميع الحقوق محفوظة.'
    }
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')
  const [translations, setTranslations] = useState<Record<Language, Translations>>(defaultTranslations)
  const [isLoading, setIsLoading] = useState(true)

  // Load translations
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const [enResponse, arResponse] = await Promise.allSettled([
          fetch('/locales/en.json'),
          fetch('/locales/ar.json')
        ])
        
        let enData = defaultTranslations.en
        let arData = defaultTranslations.ar
        
        if (enResponse.status === 'fulfilled' && enResponse.value.ok) {
          enData = await enResponse.value.json()
        }
        
        if (arResponse.status === 'fulfilled' && arResponse.value.ok) {
          arData = await arResponse.value.json()
        }
        
        setTranslations({
          en: enData,
          ar: arData
        })
      } catch (error) {
        console.warn('Failed to load translations, using defaults:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadTranslations()
  }, [])

  // Apply RTL/LTR direction and font
  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    
    if (language === 'ar') {
      html.setAttribute('dir', 'rtl')
      html.setAttribute('lang', 'ar')
      body.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
    } else {
      html.setAttribute('dir', 'ltr')
      html.setAttribute('lang', 'en')
      body.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
    }
  }, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en')
  }, [])

  const t = useCallback((key: string, params?: Record<string, any>) => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    if (typeof value === 'string' && params) {
      return value.replace(/\{(\w+)\}/g, (match, key) => params[key] || match)
    }
    
    return value || key
  }, [language, translations])

  const value = { 
    language, 
    toggleLanguage, 
    t, 
    isLoading,
    isRTL: language === 'ar'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
