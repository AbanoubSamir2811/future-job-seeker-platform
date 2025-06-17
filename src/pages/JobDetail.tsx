
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Building, Calendar, Users, ArrowRight, Bookmark, BookmarkCheck, Share2, Send } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { useSavedJobs } from "@/hooks/useSavedJobs";
import { useToast } from "@/hooks/use-toast";

const JobDetail = () => {
  const { id } = useParams();
  const { saveJob, removeSavedJob, isJobSaved } = useSavedJobs();
  const { toast } = useToast();
  
  // هذه البيانات يجب أن تأتي من API أو قاعدة بيانات
  // لكن الآن سنستخدم بيانات وهمية
  const jobs = [
    {
      id: 1,
      title: "مطور واجهات أمامية",
      company: "شركة التقنية المتقدمة",
      companyId: 1,
      location: "الرياض",
      salary: "8,000 - 12,000 ريال",
      type: "دوام كامل",
      experience: "2-5 سنوات",
      posted: "منذ يومين",
      featured: true,
      description: "نبحث عن مطور واجهات أمامية محترف للانضمام إلى فريقنا التقني المتميز. ستكون مسؤولاً عن تطوير واجهات المستخدم التفاعلية والمتجاوبة باستخدام أحدث التقنيات. نحن نقدم بيئة عمل محفزة وفرص نمو مهني ممتازة.",
      skills: ["React", "JavaScript", "CSS", "HTML"],
      requirements: [
        "خبرة لا تقل عن سنتين في تطوير الواجهات الأمامية",
        "إتقان React.js و JavaScript الحديث",
        "خبرة في HTML5 و CSS3",
        "معرفة بأدوات البناء مثل Webpack أو Vite",
        "فهم مبادئ التصميم المتجاوب",
        "القدرة على العمل ضمن فريق",
        "إجادة اللغة الإنجليزية"
      ],
      responsibilities: [
        "تطوير واجهات المستخدم التفاعلية",
        "تحويل التصاميم إلى كود قابل للتشغيل",
        "ضمان التوافق مع المتصفحات المختلفة",
        "تحسين أداء التطبيق",
        "العمل مع فريق التصميم والخلفية",
        "كتابة كود نظيف وقابل للصيانة",
        "المشاركة في مراجعة الكود"
      ],
      benefits: [
        "راتب تنافسي",
        "تأمين طبي شامل",
        "إجازة سنوية 30 يوم",
        "بدل مواصلات",
        "فرص تدريب وتطوير مهني",
        "بيئة عمل مرنة",
        "مكافآت الأداء"
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
      title: "تم إرسال طلب التقديم",
      description: `تم إرسال طلبك للتقديم على وظيفة "${job?.title}" بنجاح!`,
    });
  };

  const handleSaveJob = () => {
    if (!job) return;
    
    if (isJobSaved(job.id)) {
      removeSavedJob(job.id);
      toast({
        title: "تم إلغاء حفظ الوظيفة",
        description: `تم إزالة "${job.title}" من الوظائف المحفوظة`,
      });
    } else {
      saveJob(job);
      toast({
        title: "تم حفظ الوظيفة",
        description: `تم حفظ "${job.title}" في قائمة الوظائف المحفوظة`,
      });
    }
  };

  const handleShareJob = () => {
    if (navigator.share) {
      navigator.share({
        title: job?.title,
        text: `تحقق من هذه الوظيفة: ${job?.title} في ${job?.company}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "تم نسخ الرابط",
        description: "تم نسخ رابط الوظيفة إلى الحافظة",
      });
    }
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">الوظيفة غير موجودة</h1>
            <Link to="/jobs">
              <Button>العودة إلى الوظائف</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/jobs">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              العودة إلى الوظائف
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
                        <Badge className="bg-blue-100 text-blue-800">مميزة</Badge>
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
                        <MapPin className="w-4 h-4 ml-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <DollarSign className="w-4 h-4 ml-1" />
                        {job.salary}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 ml-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar className="w-4 h-4 ml-1" />
                        {job.posted}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>وصف الوظيفة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{job.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>المتطلبات</CardTitle>
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
                <CardTitle>المسؤوليات</CardTitle>
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
                <CardTitle>المزايا</CardTitle>
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
                <CardTitle>المهارات المطلوبة</CardTitle>
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
                <CardTitle>التقديم للوظيفة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg" onClick={handleApplyNow}>
                  <Send className="w-4 h-4 ml-2" />
                  تقدم الآن
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleSaveJob}
                >
                  {isJobSaved(job.id) ? (
                    <>
                      <BookmarkCheck className="w-4 h-4 ml-2" />
                      محفوظة
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-4 h-4 ml-2" />
                      حفظ الوظيفة
                    </>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleShareJob}
                >
                  <Share2 className="w-4 h-4 ml-2" />
                  مشاركة الوظيفة
                </Button>
              </CardContent>
            </Card>

            {/* Job Info */}
            <Card>
              <CardHeader>
                <CardTitle>معلومات الوظيفة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">نوع العمل:</span>
                  <span className="font-medium">{job.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الخبرة المطلوبة:</span>
                  <span className="font-medium">{job.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الموقع:</span>
                  <span className="font-medium">{job.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الراتب:</span>
                  <span className="font-medium">{job.salary}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">تاريخ النشر:</span>
                  <span className="font-medium">{job.posted}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>عن الشركة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">{job.company}</h4>
                    <p className="text-sm text-gray-600">شركة تقنية</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link to={`/company/${job.companyId}`}>
                    عرض ملف الشركة
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
