
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { DashboardLayout } from "@/components/DashboardLayout";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    department: "",
    experience: "",
    skills: "",
    description: "",
    salary: "",
    salaryVisible: true,
    jobType: "",
    location: "",
    deadline: "",
    featured: false,
    externalRedirect: false,
    externalUrl: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.location) {
      toast.error("يرجى تعبئة جميع الحقول المطلوبة");
      return;
    }

    // Simulate job posting
    toast.success("تم نشر الوظيفة بنجاح!");
    setTimeout(() => {
      navigate("/employer-dashboard");
    }, 2000);
  };

  const sidebarItems = [
    { title: "لوحة التحكم", href: "/employer-dashboard", icon: "dashboard" },
    { title: "ملف الشركة", href: "/company-profile", icon: "user" },
    { title: "إضافة وظيفة", href: "/post-job", icon: "plus", active: true },
    { title: "الوظائف المنشورة", href: "/posted-jobs", icon: "file" },
    { title: "إدارة المتقدمين", href: "/applicants", icon: "users" },
    { title: "المقابلات", href: "/interviews", icon: "calendar" },
    { title: "خطة الاشتراك", href: "/subscription", icon: "credit-card" },
    { title: "الإعدادات", href: "/settings", icon: "settings" }
  ];

  return (
    <DashboardLayout 
      title="نشر وظيفة جديدة" 
      userType="employer"
      sidebarItems={sidebarItems}
    >
      <Card className="max-w-4xl">
        <CardHeader>
          <CardTitle>إنشاء إعلان وظيفة</CardTitle>
          <CardDescription>
            أدخل تفاصيل الوظيفة لنشرها على المنصة
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="title">المسمى الوظيفي *</Label>
                <Input
                  id="title"
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="مثال: مطور واجهات أمامية"
                />
              </div>
              
              <div>
                <Label htmlFor="department">المجال/القسم</Label>
                <Select onValueChange={(value) => handleSelectChange("department", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المجال" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">التكنولوجيا</SelectItem>
                    <SelectItem value="marketing">التسويق</SelectItem>
                    <SelectItem value="finance">المالية</SelectItem>
                    <SelectItem value="hr">الموارد البشرية</SelectItem>
                    <SelectItem value="operations">العمليات</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="experience">الخبرة المطلوبة</Label>
                <Select onValueChange={(value) => handleSelectChange("experience", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر مستوى الخبرة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="entry">مبتدئ (0-2 سنة)</SelectItem>
                    <SelectItem value="mid">متوسط (2-5 سنوات)</SelectItem>
                    <SelectItem value="senior">متقدم (5-10 سنوات)</SelectItem>
                    <SelectItem value="expert">خبير (+10 سنوات)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="jobType">نوع الوظيفة</Label>
                <Select onValueChange={(value) => handleSelectChange("jobType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر نوع الوظيفة" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fulltime">دوام كامل</SelectItem>
                    <SelectItem value="parttime">دوام جزئي</SelectItem>
                    <SelectItem value="remote">عمل عن بعد</SelectItem>
                    <SelectItem value="contract">عقد مؤقت</SelectItem>
                    <SelectItem value="internship">تدريب</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="skills">المهارات الأساسية</Label>
              <Input
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                placeholder="React, JavaScript, Node.js (افصل بفاصلة)"
              />
            </div>

            <div>
              <Label htmlFor="description">الوصف التفصيلي *</Label>
              <Textarea
                id="description"
                name="description"
                required
                value={formData.description}
                onChange={handleInputChange}
                placeholder="اكتب وصفًا شاملاً للوظيفة والمهام المطلوبة..."
                rows={6}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="salary">الراتب (ريال سعودي)</Label>
                <Input
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                  placeholder="8,000 - 12,000"
                />
                <div className="flex items-center space-x-2 space-x-reverse mt-2">
                  <Checkbox
                    id="salaryVisible"
                    checked={formData.salaryVisible}
                    onCheckedChange={(checked) => handleCheckboxChange("salaryVisible", checked as boolean)}
                  />
                  <Label htmlFor="salaryVisible" className="text-sm">إظهار الراتب للمتقدمين</Label>
                </div>
              </div>
              
              <div>
                <Label htmlFor="location">الموقع *</Label>
                <Input
                  id="location"
                  name="location"
                  required
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="الرياض، المملكة العربية السعودية"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="deadline">آخر موعد للتقديم</Label>
              <Input
                id="deadline"
                name="deadline"
                type="date"
                value={formData.deadline}
                onChange={handleInputChange}
              />
            </div>

            <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold">خيارات إضافية</h3>
              
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id="featured"
                  checked={formData.featured}
                  onCheckedChange={(checked) => handleCheckboxChange("featured", checked as boolean)}
                />
                <Label htmlFor="featured">وظيفة مميزة (50 ريال إضافي)</Label>
              </div>
              
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id="externalRedirect"
                  checked={formData.externalRedirect}
                  onCheckedChange={(checked) => handleCheckboxChange("externalRedirect", checked as boolean)}
                />
                <Label htmlFor="externalRedirect">توجيه للتقديم على موقع خارجي</Label>
              </div>
              
              {formData.externalRedirect && (
                <div>
                  <Label htmlFor="externalUrl">رابط التقديم الخارجي</Label>
                  <Input
                    id="externalUrl"
                    name="externalUrl"
                    type="url"
                    value={formData.externalUrl}
                    onChange={handleInputChange}
                    placeholder="https://company.com/careers/apply"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <Button type="submit" className="flex-1">
                نشر الوظيفة الآن
              </Button>
              <Button type="button" variant="outline" className="flex-1">
                حفظ كمسودة
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default PostJob;
