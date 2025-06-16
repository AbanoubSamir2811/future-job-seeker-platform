
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import { Search, Calendar, Bell, FileText } from "lucide-react";

const CandidateDashboard = () => {
  const applications = [
    { company: "شركة التقنية المتقدمة", position: "مطور واجهات أمامية", status: "قيد المراجعة", date: "2024-01-15" },
    { company: "مؤسسة الابتكار", position: "مصمم UI/UX", status: "تم القبول", date: "2024-01-10" },
    { company: "شركة البيانات الذكية", position: "محلل بيانات", status: "مرفوض", date: "2024-01-08" }
  ];

  const suggestedJobs = [
    { title: "مطور تطبيقات الجوال", company: "شركة الحلول الرقمية", location: "الرياض", salary: "8,000 - 12,000 ريال" },
    { title: "مهندس برمجيات", company: "تقنيات المستقبل", location: "جدة", salary: "10,000 - 15,000 ريال" },
    { title: "أخصائي أمن سيبراني", company: "الأمان الإلكتروني", location: "الدمام", salary: "12,000 - 18,000 ريال" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "تم القبول": return "bg-green-100 text-green-800";
      case "مرفوض": return "bg-red-100 text-red-800";
      default: return "bg-yellow-100 text-yellow-800";
    }
  };

  const sidebarItems = [
    { title: "لوحة التحكم", href: "/candidate-dashboard", icon: "dashboard", active: true },
    { title: "ملفي الشخصي", href: "/candidate-profile", icon: "user" },
    { title: "سيرتي الذاتية", href: "/resume", icon: "file" },
    { title: "الوظائف المقترحة", href: "/suggested-jobs", icon: "search" },
    { title: "طلباتي السابقة", href: "/applications", icon: "calendar" },
    { title: "الإشعارات", href: "/notifications", icon: "bell" },
    { title: "الإعدادات", href: "/settings", icon: "settings" }
  ];

  return (
    <DashboardLayout 
      title="لوحة تحكم الباحث عن عمل" 
      userType="candidate"
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
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-gray-600">طلبات مرسلة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <div className="mr-4">
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-gray-600">مقابلات مجدولة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Search className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="mr-4">
                  <p className="text-2xl font-bold">45</p>
                  <p className="text-gray-600">وظائف مقترحة</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Bell className="w-6 h-6 text-red-600" />
                </div>
                <div className="mr-4">
                  <p className="text-2xl font-bold">8</p>
                  <p className="text-gray-600">إشعارات جديدة</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Applications */}
        <Card>
          <CardHeader>
            <CardTitle>طلباتي الأخيرة</CardTitle>
            <CardDescription>آخر الطلبات التي قدمتها للوظائف</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {applications.map((app, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-semibold">{app.position}</h4>
                    <p className="text-gray-600">{app.company}</p>
                    <p className="text-sm text-gray-500">{app.date}</p>
                  </div>
                  <Badge className={getStatusColor(app.status)}>
                    {app.status}
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild variant="outline">
                <Link to="/applications">عرض جميع الطلبات</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Suggested Jobs */}
        <Card>
          <CardHeader>
            <CardTitle>وظائف مقترحة لك</CardTitle>
            <CardDescription>وظائف تناسب ملفك الشخصي ومهاراتك</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {suggestedJobs.map((job, index) => (
                <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{job.title}</h4>
                      <p className="text-gray-600">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.location}</p>
                      <p className="text-green-600 font-medium">{job.salary}</p>
                    </div>
                    <Button>تقديم الآن</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button asChild variant="outline">
                <Link to="/suggested-jobs">عرض المزيد من الوظائف</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CandidateDashboard;
