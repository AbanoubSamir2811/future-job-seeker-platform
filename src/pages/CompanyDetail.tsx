
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Users, Building, Calendar, Globe, Star, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { JobCard } from "@/components/JobCard";
import { useLanguage } from "@/contexts/LanguageContext";

const CompanyDetail = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();
  
  // بيانات وهمية للشركات
  const companies = [
    {
      id: 1,
      name: language === 'ar' ? "شركة التقنية المتقدمة" : "Advanced Technology Company",
      logo: "/placeholder.svg",
      industry: language === 'ar' ? "التكنولوجيا" : "Technology",
      location: language === 'ar' ? "الرياض" : "Riyadh",
      employees: "100-500",
      rating: 4.5,
      reviews: 45,
      founded: "2015",
      website: "www.techadvanced.com",
      description: language === 'ar' ? 
        "شركة رائدة في مجال تطوير البرمجيات والحلول التقنية المبتكرة. نحن نعمل على تطوير تطبيقات ومواقع ويب متطورة باستخدام أحدث التقنيات العالمية. فريقنا المتخصص يضم نخبة من المطورين والمصممين ذوي الخبرة الواسعة." :
        "A leading company in software development and innovative technical solutions. We develop advanced applications and websites using the latest global technologies. Our specialized team includes elite developers and designers with extensive experience.",
      mission: language === 'ar' ? 
        "نسعى لتقديم حلول تقنية مبتكرة تساعد الشركات على النمو والتطور في العصر الرقمي" :
        "We strive to provide innovative technical solutions that help companies grow and develop in the digital age",
      values: language === 'ar' ? ["الابتكار", "الجودة", "الشفافية", "العمل الجماعي"] : ["Innovation", "Quality", "Transparency", "Teamwork"],
      benefits: language === 'ar' ? [
        "راتب تنافسي ومكافآت الأداء",
        "تأمين طبي شامل للموظف والعائلة",
        "إجازة سنوية 30 يوم",
        "بدل مواصلات وسكن",
        "برامج التدريب والتطوير المهني",
        "بيئة عمل مرنة وإمكانية العمل عن بُعد",
        "صالة رياضية مجانية",
        "وجبات مجانية"
      ] : [
        "Competitive salary and performance bonuses",
        "Comprehensive health insurance for employee and family",
        "30 days annual leave",
        "Transportation and housing allowance",
        "Training and professional development programs",
        "Flexible work environment and remote work options",
        "Free gym",
        "Free meals"
      ]
    },
    {
      id: 2,
      name: language === 'ar' ? "مؤسسة الابتكار الرقمي" : "Digital Innovation Institute",
      logo: "/placeholder.svg",
      industry: language === 'ar' ? "التسويق الرقمي" : "Digital Marketing",
      location: language === 'ar' ? "جدة" : "Jeddah",
      employees: "50-100",
      rating: 4.2,
      reviews: 28,
      founded: "2018",
      website: "www.digitalinnovation.com",
      description: language === 'ar' ? 
        "متخصصون في الحلول التسويقية الرقمية والتجارة الإلكترونية. نساعد الشركات على بناء حضورها الرقمي وزيادة مبيعاتها من خلال استراتيجيات تسويقية مبتكرة وحملات إعلانية فعالة." :
        "Specialists in digital marketing solutions and e-commerce. We help companies build their digital presence and increase sales through innovative marketing strategies and effective advertising campaigns.",
      mission: language === 'ar' ? 
        "تمكين الشركات من تحقيق النجاح في العالم الرقمي" :
        "Empowering companies to achieve success in the digital world",
      values: language === 'ar' ? ["الإبداع", "النتائج", "التميز", "الاحترافية"] : ["Creativity", "Results", "Excellence", "Professionalism"],
      benefits: language === 'ar' ? [
        "راتب أساسي مع عمولات مجزية",
        "تأمين صحي شامل",
        "إجازات مرنة",
        "بدلات إضافية",
        "دورات تدريبية متخصصة",
        "بيئة عمل إبداعية",
        "فرص ترقية سريعة"
      ] : [
        "Base salary with attractive commissions",
        "Comprehensive health insurance",
        "Flexible leave",
        "Additional allowances",
        "Specialized training courses",
        "Creative work environment",
        "Fast promotion opportunities"
      ]
    }
  ];

  // وظائف الشركة (بيانات وهمية)
  const companyJobs = [
    {
      id: 1,
      title: language === 'ar' ? "مطور واجهات أمامية" : "Frontend Developer",
      company: language === 'ar' ? "شركة التقنية المتقدمة" : "Advanced Technology Company",
      companyId: 1,
      location: language === 'ar' ? "الرياض" : "Riyadh",
      salary: language === 'ar' ? "8,000 - 12,000 ريال" : "8,000 - 12,000 SAR",
      type: language === 'ar' ? "دوام كامل" : "Full Time",
      experience: language === 'ar' ? "2-5 سنوات" : "2-5 years",
      posted: language === 'ar' ? "منذ يومين" : "2 days ago",
      featured: true,
      description: language === 'ar' ? 
        "نبحث عن مطور واجهات أمامية محترف للانضمام إلى فريقنا التقني المتميز." :
        "We are looking for a professional frontend developer to join our outstanding technical team.",
      skills: ["React", "JavaScript", "CSS", "HTML"]
    },
    {
      id: 2,
      title: language === 'ar' ? "مصمم UI/UX" : "UI/UX Designer",
      company: language === 'ar' ? "مؤسسة الابتكار الرقمي" : "Digital Innovation Institute",
      companyId: 2,
      location: language === 'ar' ? "جدة" : "Jeddah",
      salary: language === 'ar' ? "6,000 - 10,000 ريال" : "6,000 - 10,000 SAR",
      type: language === 'ar' ? "دوام كامل" : "Full Time",
      experience: language === 'ar' ? "1-3 سنوات" : "1-3 years",
      posted: language === 'ar' ? "منذ 3 أيام" : "3 days ago",
      featured: false,
      description: language === 'ar' ? 
        "فرصة رائعة للمصممين المبدعين للعمل على مشاريع مثيرة ومتنوعة." :
        "A great opportunity for creative designers to work on exciting and diverse projects.",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
    }
  ];

  const company = companies.find(c => c.id === parseInt(id || "0"));
  const jobs = companyJobs.filter(job => job.companyId === parseInt(id || "0"));

  if (!company) {
    return (
      <div className={`min-h-screen bg-gray-50 ${language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('company_not_found')}</h1>
            <Link to="/companies">
              <Button>{t('back_to_companies')}</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gray-50 ${language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/companies">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              {t('back_to_companies')}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={company.logo} alt={company.name} />
                    <AvatarFallback>
                      <Building className="w-10 h-10" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="text-3xl mb-2">{company.name}</CardTitle>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{company.industry}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{company.rating}</span>
                        <span className="text-gray-500">({company.reviews} {language === 'ar' ? 'تقييم' : 'reviews'})</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className={`w-4 h-4 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
                        {company.location}
                      </div>
                      <div className="flex items-center">
                        <Users className={`w-4 h-4 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
                        {company.employees} {t('employees')}
                      </div>
                      <div className="flex items-center">
                        <Calendar className={`w-4 h-4 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
                        {language === 'ar' ? `تأسست في ${company.founded}` : `Founded in ${company.founded}`}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* About Company */}
            <Card>
              <CardHeader>
                <CardTitle>{t('about_company')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">{company.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">{t('our_mission')}</h4>
                  <p className="text-gray-700">{company.mission}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">{t('our_values')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.values.map((value, index) => (
                      <Badge key={index} variant="outline">
                        {value}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>{t('benefits_perks')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {company.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 ml-2">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Company Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>{t('available_positions')} ({jobs.length})</CardTitle>
              </CardHeader>
              <CardContent>
                {jobs.length > 0 ? (
                  <div className="space-y-4">
                    {jobs.map((job) => (
                      <JobCard key={job.id} job={job} />
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    {t('no_jobs_available')}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>{t('contact_info')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <a 
                    href={`https://${company.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {company.website}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{company.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span>{company.employees} {t('employees')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-gray-500" />
                  <span>{company.industry}</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>{t('quick_stats')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('available_jobs_count')}:</span>
                  <span className="font-medium">{jobs.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('rating')}:</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{company.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('reviews_count')}:</span>
                  <span className="font-medium">{company.reviews}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('founding_year')}:</span>
                  <span className="font-medium">{company.founded}</span>
                </div>
              </CardContent>
            </Card>

            {/* Follow Company */}
            <Card>
              <CardContent className="pt-6">
                <Button className="w-full mb-3">
                  {t('follow_company')}
                </Button>
                <Button variant="outline" className="w-full">
                  {t('share_company')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
