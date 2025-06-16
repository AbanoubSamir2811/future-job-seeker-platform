
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Users, Building, Calendar, Globe, Star, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { JobCard } from "@/components/JobCard";

const CompanyDetail = () => {
  const { id } = useParams();
  
  // بيانات وهمية للشركات
  const companies = [
    {
      id: 1,
      name: "شركة التقنية المتقدمة",
      logo: "/placeholder.svg",
      industry: "التكنولوجيا",
      location: "الرياض",
      employees: "100-500",
      rating: 4.5,
      reviews: 45,
      founded: "2015",
      website: "www.techadvanced.com",
      description: "شركة رائدة في مجال تطوير البرمجيات والحلول التقنية المبتكرة. نحن نعمل على تطوير تطبيقات ومواقع ويب متطورة باستخدام أحدث التقنيات العالمية. فريقنا المتخصص يضم نخبة من المطورين والمصممين ذوي الخبرة الواسعة.",
      mission: "نسعى لتقديم حلول تقنية مبتكرة تساعد الشركات على النمو والتطور في العصر الرقمي",
      values: ["الابتكار", "الجودة", "الشفافية", "العمل الجماعي"],
      benefits: [
        "راتب تنافسي ومكافآت الأداء",
        "تأمين طبي شامل للموظف والعائلة",
        "إجازة سنوية 30 يوم",
        "بدل مواصلات وسكن",
        "برامج التدريب والتطوير المهني",
        "بيئة عمل مرنة وإمكانية العمل عن بُعد",
        "صالة رياضية مجانية",
        "وجبات مجانية"
      ]
    },
    {
      id: 2,
      name: "مؤسسة الابتكار الرقمي",
      logo: "/placeholder.svg",
      industry: "التسويق الرقمي",
      location: "جدة",
      employees: "50-100",
      rating: 4.2,
      reviews: 28,
      founded: "2018",
      website: "www.digitalinnovation.com",
      description: "متخصصون في الحلول التسويقية الرقمية والتجارة الإلكترونية. نساعد الشركات على بناء حضورها الرقمي وزيادة مبيعاتها من خلال استراتيجيات تسويقية مبتكرة وحملات إعلانية فعالة.",
      mission: "تمكين الشركات من تحقيق النجاح في العالم الرقمي",
      values: ["الإبداع", "النتائج", "التميز", "الاحترافية"],
      benefits: [
        "راتب أساسي مع عمولات مجزية",
        "تأمين صحي شامل",
        "إجازات مرنة",
        "بدلات إضافية",
        "دورات تدريبية متخصصة",
        "بيئة عمل إبداعية",
        "فرص ترقية سريعة"
      ]
    }
  ];

  // وظائف الشركة (بيانات وهمية)
  const companyJobs = [
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
      description: "نبحث عن مطور واجهات أمامية محترف للانضمام إلى فريقنا التقني المتميز.",
      skills: ["React", "JavaScript", "CSS", "HTML"]
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
      description: "فرصة رائعة للمصممين المبدعين للعمل على مشاريع مثيرة ومتنوعة.",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
    }
  ];

  const company = companies.find(c => c.id === parseInt(id || "0"));
  const jobs = companyJobs.filter(job => job.companyId === parseInt(id || "0"));

  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">الشركة غير موجودة</h1>
            <Link to="/companies">
              <Button>العودة إلى الشركات</Button>
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
          <Link to="/companies">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4" />
              العودة إلى الشركات
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
                        <span className="text-gray-500">({company.reviews} تقييم)</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 ml-1" />
                        {company.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 ml-1" />
                        {company.employees} موظف
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 ml-1" />
                        تأسست في {company.founded}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* About Company */}
            <Card>
              <CardHeader>
                <CardTitle>عن الشركة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">{company.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">رسالتنا</h4>
                  <p className="text-gray-700">{company.mission}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">قيمنا</h4>
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
                <CardTitle>المزايا والفوائد</CardTitle>
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
                <CardTitle>الوظائف المتاحة ({jobs.length})</CardTitle>
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
                    لا توجد وظائف متاحة حالياً في هذه الشركة
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
                <CardTitle>معلومات الاتصال</CardTitle>
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
                  <span>{company.employees} موظف</span>
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
                <CardTitle>إحصائيات سريعة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">الوظائف المتاحة:</span>
                  <span className="font-medium">{jobs.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">التقييم:</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{company.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">عدد التقييمات:</span>
                  <span className="font-medium">{company.reviews}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">سنة التأسيس:</span>
                  <span className="font-medium">{company.founded}</span>
                </div>
              </CardContent>
            </Card>

            {/* Follow Company */}
            <Card>
              <CardContent className="pt-6">
                <Button className="w-full mb-3">
                  متابعة الشركة
                </Button>
                <Button variant="outline" className="w-full">
                  مشاركة الشركة
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
