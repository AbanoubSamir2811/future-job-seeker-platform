
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
    'load_more_companies': 'تحميل المزيد من الشركات',
    
    // Register Employer
    'create_company_account': 'إنشاء حساب شركة',
    'enter_company_details': 'أدخل بيانات شركتك لإنشاء حساب جديد والبدء في نشر الوظائف',
    'enter_company_name': 'أدخل اسم الشركة',
    'official_email': 'البريد الإلكتروني الرسمي',
    'work_field': 'مجال العمل',
    'choose_work_field': 'اختر مجال العمل',
    'healthcare': 'الرعاية الصحية',
    'finance_banking': 'المالية والمصرفية',
    'retail_trade': 'التجارة والتجزئة',
    'manufacturing': 'التصنيع',
    'other': 'أخرى',
    'company_website': 'موقع الشركة',
    'company_phone': 'رقم هاتف الشركة',
    'password': 'كلمة المرور',
    'min_8_chars': '8 أحرف على الأقل',
    'confirm_password': 'تأكيد كلمة المرور',
    'reenter_password': 'أعد كتابة كلمة المرور',
    'usage_plan': 'باقة الاستخدام',
    'free_limited': 'مجاني (محدود)',
    'basic_99': 'أساسي - 99 ريال/شهر',
    'premium_199': 'مميز - 199 ريال/شهر',
    'create_company_account_btn': 'إنشاء حساب الشركة',
    'already_have_account': 'لديك حساب بالفعل؟',
    'want_personal_account': 'تريد إنشاء حساب شخصي؟',
    'register_as_candidate': 'سجل كباحث عن عمل',
    
    // Job Details
    'job_not_found': 'الوظيفة غير موجودة',
    'back_to_jobs': 'العودة إلى الوظائف',
    'job_description': 'وصف الوظيفة',
    'requirements': 'المتطلبات',
    'responsibilities': 'المسؤوليات',
    'benefits': 'المزايا',
    'required_skills': 'المهارات المطلوبة',
    'apply_for_job': 'التقديم للوظيفة',
    'apply_now': 'تقدم الآن',
    'save_job': 'حفظ الوظيفة',
    'saved': 'محفوظة',
    'share_job': 'مشاركة الوظيفة',
    'job_info': 'معلومات الوظيفة',
    'work_type_label': 'نوع العمل',
    'required_experience': 'الخبرة المطلوبة',
    'salary': 'الراتب',
    'post_date': 'تاريخ النشر',
    'about_company': 'عن الشركة',
    'tech_company': 'شركة تقنية',
    'view_company_profile': 'عرض ملف الشركة',
    
    // Company Details
    'company_not_found': 'الشركة غير موجودة',
    'back_to_companies': 'العودة إلى الشركات',
    'founded_year': 'تأسست في',
    'benefits_perks': 'المزايا والفوائد',
    'available_positions': 'الوظائف المتاحة',
    'no_jobs_available': 'لا توجد وظائف متاحة حالياً في هذه الشركة',
    'contact_info': 'معلومات الاتصال',
    'quick_stats': 'إحصائيات سريعة',
    'reviews_count': 'عدد التقييمات',
    'founding_year': 'سنة التأسيس',
    'follow_company': 'متابعة الشركة',
    'share_company': 'مشاركة الشركة',
    
    // Login & Register
    'welcome_back': 'مرحباً بعودتك',
    'enter_email': 'أدخل بريدك الإلكتروني',
    'enter_password': 'أدخل كلمة المرور',
    'forgot_password': 'نسيت كلمة المرور؟',
    'dont_have_account': 'ليس لديك حساب؟',
    'create_account': 'إنشاء حساب',
    'first_name': 'الاسم الأول',
    'last_name': 'اسم العائلة',
    'agree_terms': 'أوافق على الشروط والأحكام',
    'already_member': 'عضو بالفعل؟'
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
    'load_more_companies': 'Load More Companies',
    
    // Register Employer
    'create_company_account': 'Create Company Account',
    'enter_company_details': 'Enter your company details to create a new account and start posting jobs',
    'enter_company_name': 'Enter company name',
    'official_email': 'Official Email',
    'work_field': 'Work Field',
    'choose_work_field': 'Choose work field',
    'healthcare': 'Healthcare',
    'finance_banking': 'Finance & Banking',
    'retail_trade': 'Retail & Trade',
    'manufacturing': 'Manufacturing',
    'other': 'Other',
    'company_website': 'Company Website',
    'company_phone': 'Company Phone',
    'password': 'Password',
    'min_8_chars': 'At least 8 characters',
    'confirm_password': 'Confirm Password',
    'reenter_password': 'Re-enter password',
    'usage_plan': 'Usage Plan',
    'free_limited': 'Free (Limited)',
    'basic_99': 'Basic - 99 SAR/month',
    'premium_199': 'Premium - 199 SAR/month',
    'create_company_account_btn': 'Create Company Account',
    'already_have_account': 'Already have an account?',
    'want_personal_account': 'Want to create a personal account?',
    'register_as_candidate': 'Register as Job Seeker',
    
    // Job Details
    'job_not_found': 'Job Not Found',
    'back_to_jobs': 'Back to Jobs',
    'job_description': 'Job Description',
    'requirements': 'Requirements',
    'responsibilities': 'Responsibilities',
    'benefits': 'Benefits',
    'required_skills': 'Required Skills',
    'apply_for_job': 'Apply for Job',
    'apply_now': 'Apply Now',
    'save_job': 'Save Job',
    'saved': 'Saved',
    'share_job': 'Share Job',
    'job_info': 'Job Information',
    'work_type_label': 'Work Type',
    'required_experience': 'Required Experience',
    'salary': 'Salary',
    'post_date': 'Post Date',
    'about_company': 'About Company',
    'tech_company': 'Technology Company',
    'view_company_profile': 'View Company Profile',
    
    // Company Details
    'company_not_found': 'Company Not Found',
    'back_to_companies': 'Back to Companies',
    'founded_year': 'Founded in',
    'benefits_perks': 'Benefits & Perks',
    'available_positions': 'Available Positions',
    'no_jobs_available': 'No jobs currently available at this company',
    'contact_info': 'Contact Information',
    'quick_stats': 'Quick Stats',
    'reviews_count': 'Number of Reviews',
    'founding_year': 'Founding Year',
    'follow_company': 'Follow Company',
    'share_company': 'Share Company',
    
    // Login & Register
    'welcome_back': 'Welcome Back',
    'enter_email': 'Enter your email',
    'enter_password': 'Enter your password',
    'forgot_password': 'Forgot password?',
    'dont_have_account': 'Don\'t have an account?',
    'create_account': 'Create Account',
    'first_name': 'First Name',
    'last_name': 'Last Name',
    'agree_terms': 'I agree to the Terms and Conditions',
    'already_member': 'Already a member?'
  }
};
