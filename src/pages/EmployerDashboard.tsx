
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Users, Calendar, FileText, Settings } from "lucide-react";

const EmployerDashboard = () => {
  const activeJobs = [
    { title: "مطور واجهات أمامية", applicants: 15, posted: "2024-01-10", status: "نشط" },
    { title: "مصمم UI/UX", applicants: 8, posted: "2024-01-08", status: "نشط" },
    { title: "مهندس شبكات", applicants: 23, posted: "2024-01-05", status: "مغلق" }
  ];

  const recentApplicants = [
    { name: "أحمد محمد", position: "مطور واجهات أمامية", experience: "3 سنوات", status: "جديد" },
    { name: "فاطمة علي", position: "مصمم UI/UX", experience: "5 سنوات", status: "تحت المراجعة" },
    { name: "عبدالله سالم", position: "مهندس شبكات", experience: "7 سنوات", status: "مقابلة مجدولة" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "نشط": return "bg-green-100 text-green-800";
      case "مغلق": return "bg-red-100 text-red-800";
      case "جديد": return "bg-blue-100 text-blue-800";
      case "تحت المراجعة": return "bg-yellow-100 text-yellow-800";
      case "مقابلة مجدولة": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const sidebarItems = [
    { title: "لوحة التحكم", href: "/employer-dashboard", icon: "dashboard", active: true },
    { title: "ملف الشركة", href: "/company-profile", icon: "user" },
    { title: "إضافة وظيفة", href: "/post-job", icon: "plus" },
    { title: "الوظائف المنشورة", href: "/posted-jobs", icon: "file" },
    { title: "إدارة المتقدمين", href: "/applicants", icon: "users" },
    { title: "المقابلات", href: "/interviews", icon: "calendar" },
    { title: "خطة الاشتراك", href: "/subscription", icon: "credit-card" },
    { title: "الإعدادات", href: "/settings", icon: "settings" }
  ];

  return (
    <DashboardLayout 
      title="لوحة تحكم صاحب العمل" 
      userType="employer"
      sidebarItems={sidebarItems}
    >
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div className="mr-4">
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-gray-600">وظائف نشطة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div className="mr-4">
                  <p className="text-2xl font-bold">46</p>
                  <p className="text-gray-600">متقدم جديد</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="mr-4">
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-gray-600">مقابلات هذا الأسبوع</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
                <div className="mr-4">
                  <p className="text-2xl font-bold">1,250</p>
                  <p className="text-gray-600">مشاهدات الوظائف</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>إجراءات سريعة</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button asChild className="h-20">
                <Link to="/post-job" className="flex flex-col items-center justify-center">
                  <FileText className="w-6 h-6 mb-2" />
                  نشر وظيفة جديدة
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20">
                <Link to="/applicants" className="flex flex-col items-center justify-center">
                  <Users className="w-6 h-6 mb-2" />
                  مراجعة المتقدمين
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-20">
                <Link to="/interviews" className="flex flex-col items-center justify-center">
                  <Calendar className="w-6 h-6 mb-2" />
                  جدولة مقابلة
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Active Jobs */}
        <Card>
          <CardHeader>
            <CardTitle>الوظائف النشطة</CardTitle>
            <CardDescription>الوظائف المنشورة حاليًا وحالة كل منها</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeJobs.map((job, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold">{job.title}</h4>
                    <p className="text-gray-600">{job.applicants} متقدم</p>
                    <p className="text-sm text-gray-500">نُشرت في {job.posted}</p>
                  </div>
                  <Badge className={getStatusColor(job.status)}>
                    {job.status}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild variant="outline">
                <Link to="/posted-jobs">عرض جميع الوظائف</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Applicants */}
        <Card>
          <CardHeader>
            <CardTitle>المتقدمون الجدد</CardTitle>
            <CardDescription>آخر المتقدمين للوظائف المنشورة</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentApplicants.map((applicant, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold">{applicant.name}</h4>
                    <p className="text-gray-600">{applicant.position}</p>
                    <p className="text-sm text-gray-500">خبرة: {applicant.experience}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusColor(applicant.status)}>
                      {applicant.status}
                    </Badge>
                    <Button size="sm">عرض الملف</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild variant="outline">
                <Link to="/applicants">عرض جميع المتقدمين</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default EmployerDashboard;
