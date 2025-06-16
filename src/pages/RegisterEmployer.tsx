
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { toast } from "sonner";
import { Users } from "lucide-react";

const RegisterEmployer = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    industry: "",
    website: "",
    phone: "",
    plan: "free"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast.error("كلمات المرور غير متطابقة");
      return;
    }

    if (formData.password.length < 8) {
      toast.error("كلمة المرور يجب أن تكون 8 أحرف على الأقل");
      return;
    }

    // Simulate registration
    toast.success("تم إنشاء حساب الشركة بنجاح! تحقق من بريدك الإلكتروني للتفعيل");
    setTimeout(() => {
      navigate("/employer-dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50" dir="rtl">
      <Navbar />
      
      <div className="flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">إنشاء حساب شركة</CardTitle>
            <CardDescription>
              أدخل بيانات شركتك لإنشاء حساب جديد والبدء في نشر الوظائف
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="companyName">اسم الشركة *</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="أدخل اسم الشركة"
                />
              </div>
              
              <div>
                <Label htmlFor="email">البريد الإلكتروني الرسمي *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="info@company.com"
                />
              </div>
              
              <div>
                <Label htmlFor="industry">مجال العمل *</Label>
                <Select onValueChange={(value) => handleSelectChange("industry", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر مجال العمل" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">التكنولوجيا</SelectItem>
                    <SelectItem value="healthcare">الرعاية الصحية</SelectItem>
                    <SelectItem value="finance">المالية والمصرفية</SelectItem>
                    <SelectItem value="education">التعليم</SelectItem>
                    <SelectItem value="retail">التجارة والتجزئة</SelectItem>
                    <SelectItem value="manufacturing">التصنيع</SelectItem>
                    <SelectItem value="other">أخرى</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="website">موقع الشركة</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://www.company.com"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">رقم هاتف الشركة</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+966 11 123 4567"
                />
              </div>
              
              <div>
                <Label htmlFor="password">كلمة المرور *</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="8 أحرف على الأقل"
                />
              </div>
              
              <div>
                <Label htmlFor="confirmPassword">تأكيد كلمة المرور *</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="أعد كتابة كلمة المرور"
                />
              </div>
              
              <div>
                <Label htmlFor="plan">باقة الاستخدام</Label>
                <Select onValueChange={(value) => handleSelectChange("plan", value)} defaultValue="free">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">مجاني (محدود)</SelectItem>
                    <SelectItem value="basic">أساسي - 99 ريال/شهر</SelectItem>
                    <SelectItem value="premium">مميز - 199 ريال/شهر</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button type="submit" className="w-full">
                إنشاء حساب الشركة
              </Button>
              
              <div className="text-center text-sm text-gray-600">
                لديك حساب بالفعل؟{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  تسجيل الدخول
                </Link>
              </div>
              
              <div className="text-center text-sm text-gray-600">
                تريد إنشاء حساب شخصي؟{" "}
                <Link to="/register-candidate" className="text-green-600 hover:underline">
                  سجل كباحث عن عمل
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterEmployer;
