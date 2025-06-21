import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

const translations = {
  ar: {
    // Navbar
    'job_platform': 'منصة التوظيف',
    'jobs': 'الوظائف',
    'companies': 'الشركات',
    'saved_jobs': 'الوظائف المحفوظة',
    'profile': 'الملف الشخصي',
    'about': 'عن المنصة',
    'login': 'تسجيل الدخول',
    'register': 'إنشاء حساب',
    
    // Hero Section
    'hero_title': 'اكتشف فرصتك المهنية المثالية',
    'hero_subtitle': 'منصة التوظيف الرائدة في العالم العربي التي تجمع بين أفضل المواهب وأكبر الشركات لخلق فرص عمل استثنائية',
    'search_job': 'ابحث عن وظيفة...',
    'search_location': 'المدينة أو الموقع...',
    'search_button': 'بحث',
    'popular_searches': 'عمليات البحث الشائعة:',
    
    // Features
    'why_choose_us': 'لماذا تختار منصتنا؟',
    'features_subtitle': 'نوفر لك أفضل الأدوات والخدمات لتحقيق أهدافك المهنية بسهولة وفعالية',
    'smart_search': 'بحث ذكي',
    'smart_search_desc': 'محرك بحث متطور يساعدك في العثور على الوظائف المناسبة لمهاراتك وخبراتك',
    'wide_network': 'شبكة واسعة',
    'wide_network_desc': 'اتصل مع آلاف أصحاب العمل والمرشحين من جميع أنحاء العالم العربي',
    'interview_management': 'إدارة المقابلات',
    'interview_management_desc': 'نظام متكامل لجدولة وإدارة المقابلات بين أصحاب العمل والمرشحين',
    'advanced_tools': 'أدوات متقدمة',
    'advanced_tools_desc': 'مجموعة شاملة من الأدوات لإدارة الملف الشخصي والتقديم على الوظائف',
    
    // Stats
    'available_jobs': 'وظيفة متاحة',
    'registered_companies': 'شركة مسجلة',
    'job_seekers': 'باحث عن عمل',
    'satisfaction_rate': 'معدل الرضا',
    
    // CTA
    'start_career': 'ابدأ رحلتك المهنية اليوم',
    'cta_subtitle': 'انضم إلى آلاف الباحثين عن العمل وأصحاب العمل واكتشف الفرص المناسبة لك',
    'register_candidate': 'سجل كباحث عن عمل',
    'register_employer': 'سجل كصاحب عمل',
    
    // Profile
    'personal_profile': 'الملف الشخصي',
    'personal_info': 'المعلومات الشخصية',
    'professional_info': 'المعلومات المهنية',
    'education': 'التعليم',
    'experience': 'الخبرات',
    'summary': 'نبذة مختصرة',
    'full_name': 'الاسم الكامل',
    'email': 'البريد الإلكتروني',
    'phone': 'رقم الهاتف',
    'location': 'الموقع',
    'date_of_birth': 'تاريخ الميلاد',
    'nationality': 'الجنسية',
    'profile_image': 'صورة الملف الشخصي',
    'job_title': 'المسمى الوظيفي',
    'years_experience': 'سنوات الخبرة',
    'skills': 'المهارات',
    'languages': 'اللغات',
    'expected_salary': 'الراتب المتوقع',
    'work_type': 'نوع العمل',
    'degree': 'الدرجة العلمية',
    'university': 'الجامعة',
    'graduation_year': 'سنة التخرج',
    'gpa': 'المعدل',
    'company': 'الشركة',
    'position': 'المنصب',
    'start_date': 'تاريخ البداية',
    'end_date': 'تاريخ النهاية',
    'description': 'الوصف',
    'save': 'حفظ',
    'upload_image': 'رفع صورة',
    'add_experience': 'إضافة خبرة',
    'remove': 'حذف',
    
    // Footer
    'quick_links': 'روابط سريعة',
    'for_job_seekers': 'للباحثين',
    'for_employers': 'لأصحاب العمل',
    'rights_reserved': 'جميع الحقوق محفوظة.',
    
    // Jobs
    'search_jobs': 'البحث عن الوظائف',
    'search_company': 'ابحث عن وظيفة أو شركة...',
    'all_locations': 'جميع المواقع',
    'all_fields': 'جميع المجالات',
    'riyadh': 'الرياض',
    'jeddah': 'جدة',
    'dammam': 'الدمام',
    'mecca': 'مكة',
    'technology': 'التكنولوجيا',
    'marketing': 'التسويق',
    'finance': 'المالية',
    'hr': 'الموارد البشرية',
    'found_jobs': 'تم العثور على {count} وظيفة',
    'sort_by': 'ترتيب حسب',
    'latest': 'الأحدث',
    'salary_high': 'الراتب (الأعلى أولاً)',
    'salary_low': 'الراتب (الأقل أولاً)',
    'view_details': 'عرض التفاصيل',
    'load_more': 'تحميل المزيد من الوظائف',
    'featured': 'مميزة',
    
    // Saved Jobs
    'no_saved_jobs': 'لا توجد وظائف محفوظة',
    'no_saved_jobs_desc': 'لم تقم بحفظ أي وظائف بعد. ابدأ بالبحث عن الوظائف وحفظ المفضلة لديك.',
    'browse_jobs': 'تصفح الوظائف',
    'unsave_job': 'إلغاء الحفظ',
    
    // About Page
    'about_platform': 'عن منصة التوظيف',
    'our_mission': 'رسالتنا',
    'mission_text': 'نؤمن بأن كل شخص يستحق فرصة عمل تتناسب مع مهاراته وطموحاته. لذلك نسعى لتوفير منصة شاملة تجمع بين الباحثين عن العمل وأصحاب العمل في بيئة آمنة وموثوقة.',
    'mission_text2': 'هدفنا هو تسهيل عملية البحث عن العمل والتوظيف من خلال استخدام أحدث التقنيات وأفضل الممارسات في مجال الموارد البشرية.',
    'our_goal': 'هدفنا',
    'goal_text': 'أن نصبح المنصة الرائدة للتوظيف في المنطقة العربية، ونساهم في تطوير سوق العمل وزيادة فرص التوظيف للجميع.',
    'our_values': 'قيمنا',
    'transparency': 'الشفافية',
    'transparency_desc': 'نؤمن بالشفافية الكاملة في جميع عملياتنا ونوفر معلومات واضحة ودقيقة لجميع المستخدمين.',
    'quality': 'الجودة',
    'quality_desc': 'نسعى لتقديم أعلى مستويات الجودة في خدماتنا ونعمل باستمرار على تطوير وتحسين منصتنا.',
    'innovation': 'الابتكار',
    'innovation_desc': 'نستخدم أحدث التقنيات والحلول المبتكرة لتوفير تجربة استخدام مميزة وفعالة.',
    'our_achievements': 'إنجازاتنا',
    'job_seekers_count': 'باحث عن عمل',
    'available_jobs_count': 'وظيفة متاحة',
    'partner_companies': 'شركة شريكة',
    'user_satisfaction': 'نسبة رضا المستخدمين',
    'join_us_today': 'انضم إلينا اليوم',
    'join_us_desc': 'ابدأ رحلتك المهنية معنا واكتشف الفرص اللامحدودة في سوق العمل',
    'register_job_seeker': 'سجل كباحث عن عمل',
    'register_employer_btn': 'سجل كصاحب عمل',
    'best_platform': 'أفضل منصة للبحث عن الوظائف والمواهب في العالم العربي',
    
    // Companies
    'browse_companies': 'تصفح الشركات',
    'search_company_field': 'ابحث عن شركة أو مجال...',
    'all_locations_filter': 'جميع المواقع',
    'all_fields_filter': 'جميع المجالات',
    'digital_marketing': 'التسويق الرقمي',
    'found_companies': 'تم العثور على {count} شركة',
    'rating': 'التقييم',
    'company_size': 'حجم الشركة',
    'company_name': 'اسم الشركة',
    'employees': 'موظف',
    'founded_in': 'تأسست في',
    'available_jobs_at': 'وظيفة متاحة',
    'view_company': 'عرض الشركة',
    'load_more_companies': 'تحميل المزيد من الشركات'
  },
  en: {
    // Navbar
    'job_platform': 'Job Platform',
    'jobs': 'Jobs',
    'companies': 'Companies',
    'saved_jobs': 'Saved Jobs',
    'profile': 'Profile',
    'about': 'About',
    'login': 'Login',
    'register': 'Register',
    
    // Hero Section
    'hero_title': 'Discover Your Perfect Career Opportunity',
    'hero_subtitle': 'The leading job platform in the Arab world that connects the best talents with the biggest companies to create exceptional job opportunities',
    'search_job': 'Search for jobs...',
    'search_location': 'City or location...',
    'search_button': 'Search',
    'popular_searches': 'Popular searches:',
    
    // Features
    'why_choose_us': 'Why Choose Our Platform?',
    'features_subtitle': 'We provide you with the best tools and services to achieve your career goals easily and effectively',
    'smart_search': 'Smart Search',
    'smart_search_desc': 'Advanced search engine that helps you find jobs suitable for your skills and experience',
    'wide_network': 'Wide Network',
    'wide_network_desc': 'Connect with thousands of employers and candidates from all over the Arab world',
    'interview_management': 'Interview Management',
    'interview_management_desc': 'Integrated system for scheduling and managing interviews between employers and candidates',
    'advanced_tools': 'Advanced Tools',
    'advanced_tools_desc': 'Comprehensive set of tools for managing profiles and applying for jobs',
    
    // Stats
    'available_jobs': 'Available Jobs',
    'registered_companies': 'Registered Companies',
    'job_seekers': 'Job Seekers',
    'satisfaction_rate': 'Satisfaction Rate',
    
    // CTA
    'start_career': 'Start Your Career Journey Today',
    'cta_subtitle': 'Join thousands of job seekers and employers and discover the right opportunities for you',
    'register_candidate': 'Register as Job Seeker',
    'register_employer': 'Register as Employer',
    
    // Profile
    'personal_profile': 'Personal Profile',
    'personal_info': 'Personal Information',
    'professional_info': 'Professional Information',
    'education': 'Education',
    'experience': 'Experience',
    'summary': 'Summary',
    'full_name': 'Full Name',
    'email': 'Email',
    'phone': 'Phone',
    'location': 'Location',
    'date_of_birth': 'Date of Birth',
    'nationality': 'Nationality',
    'profile_image': 'Profile Image',
    'job_title': 'Job Title',
    'years_experience': 'Years of Experience',
    'skills': 'Skills',
    'languages': 'Languages',
    'expected_salary': 'Expected Salary',
    'work_type': 'Work Type',
    'degree': 'Degree',
    'university': 'University',
    'graduation_year': 'Graduation Year',
    'gpa': 'GPA',
    'company': 'Company',
    'position': 'Position',
    'start_date': 'Start Date',
    'end_date': 'End Date',
    'description': 'Description',
    'save': 'Save',
    'upload_image': 'Upload Image',
    'add_experience': 'Add Experience',
    'remove': 'Remove',
    
    // Footer
    'quick_links': 'Quick Links',
    'for_job_seekers': 'For Job Seekers',
    'for_employers': 'For Employers',
    'rights_reserved': 'All rights reserved.',
    
    // Jobs
    'search_jobs': 'Search Jobs',
    'search_company': 'Search for job or company...',
    'all_locations': 'All Locations',
    'all_fields': 'All Fields',
    'riyadh': 'Riyadh',
    'jeddah': 'Jeddah',
    'dammam': 'Dammam',
    'mecca': 'Mecca',
    'technology': 'Technology',
    'marketing': 'Marketing',
    'finance': 'Finance',
    'hr': 'Human Resources',
    'found_jobs': 'Found {count} jobs',
    'sort_by': 'Sort by',
    'latest': 'Latest',
    'salary_high': 'Salary (High to Low)',
    'salary_low': 'Salary (Low to High)',
    'view_details': 'View Details',
    'load_more': 'Load More Jobs',
    'featured': 'Featured',
    
    // Saved Jobs
    'no_saved_jobs': 'No Saved Jobs',
    'no_saved_jobs_desc': 'You haven\'t saved any jobs yet. Start browsing jobs and save your favorites.',
    'browse_jobs': 'Browse Jobs',
    'unsave_job': 'Unsave Job',
    
    // About Page
    'about_platform': 'About Job Platform',
    'our_mission': 'Our Mission',
    'mission_text': 'We believe that everyone deserves a job opportunity that matches their skills and aspirations. Therefore, we strive to provide a comprehensive platform that brings together job seekers and employers in a safe and reliable environment.',
    'mission_text2': 'Our goal is to facilitate the job search and recruitment process by using the latest technologies and best practices in human resources.',
    'our_goal': 'Our Goal',
    'goal_text': 'To become the leading recruitment platform in the Arab region, and contribute to developing the labor market and increasing employment opportunities for everyone.',
    'our_values': 'Our Values',
    'transparency': 'Transparency',
    'transparency_desc': 'We believe in complete transparency in all our operations and provide clear and accurate information to all users.',
    'quality': 'Quality',
    'quality_desc': 'We strive to provide the highest levels of quality in our services and continuously work to develop and improve our platform.',
    'innovation': 'Innovation',
    'innovation_desc': 'We use the latest technologies and innovative solutions to provide an outstanding and effective user experience.',
    'our_achievements': 'Our Achievements',
    'job_seekers_count': 'job seekers',
    'available_jobs_count': 'available jobs',
    'partner_companies': 'partner companies',
    'user_satisfaction': 'user satisfaction rate',
    'join_us_today': 'Join Us Today',
    'join_us_desc': 'Start your career journey with us and discover unlimited opportunities in the job market',
    'register_job_seeker': 'Register as Job Seeker',
    'register_employer_btn': 'Register as Employer',
    'best_platform': 'The best platform for finding jobs and talents in the Arab world',
    
    // Companies
    'browse_companies': 'Browse Companies',
    'search_company_field': 'Search for company or field...',
    'all_locations_filter': 'All Locations',
    'all_fields_filter': 'All Fields',
    'digital_marketing': 'Digital Marketing',
    'found_companies': 'Found {count} companies',
    'rating': 'Rating',
    'company_size': 'Company Size',
    'company_name': 'Company Name',
    'employees': 'employees',
    'founded_in': 'Founded in',
    'available_jobs_at': 'available jobs',
    'view_company': 'View Company',
    'load_more_companies': 'Load More Companies'
  }
};
