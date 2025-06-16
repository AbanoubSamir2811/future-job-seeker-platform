
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { toast } from "sonner";
import { User } from "lucide-react";

const RegisterCandidate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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
    toast.success("تم إنشاء الحساب بنجاح! تحقق من بريدك الإلكتروني للتفعيل");
    setTimeout(() => {
      navigate("/candidate-dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50" dir="rtl">
      <Navbar />
      
      <div className="flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">إنشاء حساب باحث عن عمل</CardTitle>
            <CardDescription>
              أدخل بياناتك لإنشاء حساب جديد والبدء في البحث عن الوظائف
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName">الاسم الكامل *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="أدخل اسمك الكامل"
                />
              </div>
              
              <div>
                <Label htmlFor="email">البريد الإلكتروني *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@email.com"
                />
              </div>
              
              <div>
                <Label htmlFor="phone">رقم الهاتف</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+966 50 123 4567"
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
              
              <Button type="submit" className="w-full">
                إنشاء الحساب
              </Button>
              
              <div className="text-center text-sm text-gray-600">
                لديك حساب بالفعل؟{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  تسجيل الدخول
                </Link>
              </div>
              
              <div className="text-center text-sm text-gray-600">
                تريد إنشاء حساب شركة؟{" "}
                <Link to="/register-employer" className="text-green-600 hover:underline">
                  سجل كصاحب عمل
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterCandidate;
