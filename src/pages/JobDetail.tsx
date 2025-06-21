
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Building, Calendar, Users, ArrowRight, Bookmark, BookmarkCheck, Share2, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { useSavedJobs } from "@/hooks/useSavedJobs";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const JobDetail = () => {
  const { id } = useParams();
  const { saveJob, removeSavedJob, isJobSaved } = useSavedJobs();
  const { toast } = useToast();
  const { t, language } = useLanguage();
  
  // هذه البيانات يجب أن تأتي من API أو قاعدة بيانات
  // لكن الآن سنستخدم بيانات وهمية
  const jobs = [
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
        "نبحث عن مطور واجهات أمامية محترف للانضمام إلى فريقنا التقني المتميز. ستكون مسؤولاً عن تطوير واجهات المستخدم التفاعلية والمتجاوبة باستخدام أحدث التقنيات. نحن نقدم بيئة عمل محفزة وفرص نمو مهني ممتازة." :
        "We are looking for a professional frontend developer to join our outstanding technical team. You will be responsible for developing interactive and responsive user interfaces using the latest technologies. We offer a stimulating work environment and excellent career growth opportunities.",
      skills: ["React", "JavaScript", "CSS", "HTML"],
      requirements: language === 'ar' ? [
        "خبرة لا تقل عن سنتين في تطوير الواجهات الأمامية",
        "إتقان React.js و JavaScript الحديث",
        "خبرة في HTML5 و CSS3",
        "معرفة بأدوات البناء مثل Webpack أو Vite",
        "فهم مبادئ التصميم المتجاوب",
        "القدرة على العمل ضمن فريق",
        "إجادة اللغة الإنجليزية"
      ] : [
        "At least 2 years of experience in frontend development",
        "Proficiency in React.js and modern JavaScript",
        "Experience with HTML5 and CSS3",
        "Knowledge of build tools like Webpack or Vite",
        "Understanding of responsive design principles",
        "Ability to work in a team",
        "Proficiency in English"
      ],
      responsibilities: language === 'ar' ? [
        "تطوير واجهات المستخدم التفاعلية",
        "تحويل التصاميم إلى كود قابل للتشغيل",
        "ضمان التوافق مع المتصفحات المختلفة",
        "تحسين أداء التطبيق",
        "العمل مع فريق التصميم والخلفية",
        "كتابة كود نظيف وقابل للصيانة",
        "المشاركة في مراجعة الكود"
      ] : [
        "Develop interactive user interfaces",
        "Convert designs into executable code",
        "Ensure cross-browser compatibility",
        "Optimize application performance",
        "Work with design and backend teams",
        "Write clean and maintainable code",
        "Participate in code reviews"
      ],
      benefits: language === 'ar' ? [
        "راتب تنافسي",
        "تأمين طبي شامل",
        "إجازة سنوية 30 يوم",
        "بدل مواصلات",
        "فرص تدريب وتطوير مهني",
        "بيئة عمل مرنة",
        "مكافآت الأداء"
      ] : [
        "Competitive salary",
        "Comprehensive health insurance",
        "30 days annual leave",
        "Transportation allowance",
        "Training and professional development opportunities",
        "Flexible work environment",
        "Performance bonuses"
      ]
    },
    {
      id: 2,
      title: "مصمم UI/UX",
      company: "مؤسسة الابتكار الرقمي",
      companyId: 2,
      location: "جدة",
      salary: "6,000 - 10,000 ريال",
      type: "دوام كامل",
      experience: "1-3 سنوات",
      posted: "منذ 3 أيام",
      featured: false,
      description: "فرصة رائعة للمصممين المبدعين للعمل على مشاريع مثيرة ومتنوعة في مجال التصميم الرقمي.",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
      requirements: [
        "خبرة في تصميم UI/UX",
        "إتقان أدوات التصميم",
        "فهم مبادئ تجربة المستخدم",
        "القدرة على التعامل مع العملاء"
      ],
      responsibilities: [
        "تصميم واجهات المستخدم",
        "إجراء بحوث المستخدمين",
        "إنشاء النماذج الأولية",
        "اختبار قابلية الاستخدام"
      ],
      benefits: [
        "راتب تنافسي",
        "تأمين صحي",
        "إجازات مرنة",
        "بدلات إضافية"
      ]
    }
  ];

  const job = jobs.find(j => j.id === parseInt(id || "0"));

  const handleApplyNow = () => {
    toast({
      title: language === 'ar' ? "تم إرسال طلب التقديم" : "Application Sent",
      description: language === 'ar' ? 
        `تم إرسال طلبك للتقديم على وظيفة "${job?.title}" بنجاح!` :
        `Your application for "${job?.title}" has been sent successfully!`,
    });
  };

  const handleSaveJob = () => {
    if (!job) return;
    
    if (isJobSaved(job.id)) {
      removeSavedJob(job.id);
      toast({
        title: language === 'ar' ? "تم إلغاء حفظ الوظيفة" : "Job Unsaved",
        description: language === 'ar' ? 
          `تم إزالة "${job.title}" من الوظائف المحفوظة` :
          `"${job.title}" has been removed from saved jobs`,
      });
    } else {
      saveJob(job);
      toast({
        title: language === 'ar' ? "تم حفظ الوظيفة" : "Job Saved",
        description: language === 'ar' ? 
          `تم حفظ "${job.title}" في قائمة الوظائف المحفوظة` :
          `"${job.title}" has been saved to your saved jobs`,
      });
    }
  };

  const handleShareJob = () => {
    if (navigator.share) {
      navigator.share({
        title: job?.title,
        text: language === 'ar' ? 
          `تحقق من هذه الوظيفة: ${job?.title} في ${job?.company}` :
          `Check out this job: ${job?.title} at ${job?.company}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: language === 'ar' ? "تم نسخ الرابط" : "Link Copied",
        description: language === 'ar' ? "تم نسخ رابط الوظيفة إلى الحافظة" : "Job link has been copied to clipboard",
      });
    }
  };

  if (!job) {
    return (
      <div className={`min-h-screen bg-gray-50 ${language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('job_not_found')}</h1>
            <Link to="/jobs">
              <Button>{t('back_to_jobs')}</Button>
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
          <Link to="/jobs">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              {t('back_to_jobs')}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-2xl">{job.title}</CardTitle>
                      {job.featured && (
                        <Badge className="bg-blue-100 text-blue-800">{t('featured')}</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Building className="w-5 h-5 text-gray-500" />
                      <Link 
                        to={`/company/${job.companyId}`}
                        className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {job.company}
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className={`w-4 h-4 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className={`w-4 h-4 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
                        {job.salary}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className={`w-4 h-4 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
                        {job.type}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className={`w-4 h-4 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
                        {job.posted}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('job_description')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('requirements')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 ml-2">•</span>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('responsibilities')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 ml-2">•</span>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('benefits')}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-purple-600 ml-2">•</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('required_skills')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card>
              <CardHeader>
                <CardTitle>{t('apply_for_job')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg" onClick={handleApplyNow}>
                  <Send className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                  {t('apply_now')}
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleSaveJob}
                >
                  {isJobSaved(job.id) ? (
                    <>
                      <BookmarkCheck className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                      {t('saved')}
                    </>
                  ) : (
                    <>
                      <Bookmark className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                      {t('save_job')}
                    </>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleShareJob}
                >
                  <Share2 className={`w-4 h-4 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                  {t('share_job')}
                </Button>
              </CardContent>
            </Card>

            {/* Job Info */}
            <Card>
              <CardHeader>
                <CardTitle>{t('job_info')}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('work_type_label')}:</span>
                  <span className="font-medium">{job.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('required_experience')}:</span>
                  <span className="font-medium">{job.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('location')}:</span>
                  <span className="font-medium">{job.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('salary')}:</span>
                  <span className="font-medium">{job.salary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">{t('post_date')}:</span>
                  <span className="font-medium">{job.posted}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('about_company')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{job.company}</h4>
                    <p className="text-sm text-gray-600">{t('tech_company')}</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/company/${job.companyId}`}>
                    {t('view_company_profile')}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
