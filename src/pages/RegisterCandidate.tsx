
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { toast } from "sonner";
import { User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const RegisterCandidate = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
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
      toast.error(language === 'ar' ? "كلمات المرور غير متطابقة" : "Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      toast.error(language === 'ar' ? "كلمة المرور يجب أن تكون 8 أحرف على الأقل" : "Password must be at least 8 characters");
      return;
    }

    // Simulate registration
    toast.success(language === 'ar' ? 
      "تم إنشاء الحساب بنجاح! تحقق من بريدك الإلكتروني للتفعيل" :
      "Account created successfully! Check your email for verification");
    setTimeout(() => {
      navigate("/candidate-dashboard");
    }, 2000);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-green-50 ${language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <div className="flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">
              {language === 'ar' ? "إنشاء حساب باحث عن عمل" : "Create Job Seeker Account"}
            </CardTitle>
            <CardDescription>
              {language === 'ar' ? 
                "أدخل بياناتك لإنشاء حساب جديد والبدء في البحث عن الوظائف" :
                "Enter your details to create a new account and start job searching"}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName">
                  {language === 'ar' ? "الاسم الكامل *" : "Full Name *"}
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder={language === 'ar' ? "أدخل اسمك الكامل" : "Enter your full name"}
                />
              </div>
              
              <div>
                <Label htmlFor="email">
                  {language === 'ar' ? "البريد الإلكتروني *" : "Email *"}
                </Label>
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
                <Label htmlFor="phone">
                  {language === 'ar' ? "رقم الهاتف" : "Phone Number"}
                </Label>
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
                <Label htmlFor="password">
                  {language === 'ar' ? "كلمة المرور *" : "Password *"}
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder={language === 'ar' ? "8 أحرف على الأقل" : "At least 8 characters"}
                />
              </div>
              
              <div>
                <Label htmlFor="confirmPassword">
                  {language === 'ar' ? "تأكيد كلمة المرور *" : "Confirm Password *"}
                </Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder={language === 'ar' ? "أعد كتابة كلمة المرور" : "Re-enter password"}
                />
              </div>
              
              <Button type="submit" className="w-full">
                {language === 'ar' ? "إنشاء الحساب" : "Create Account"}
              </Button>
              
              <div className="text-center text-sm text-gray-600">
                {language === 'ar' ? "لديك حساب بالفعل؟" : "Already have an account?"}{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  {t('login')}
                </Link>
              </div>
              
              <div className="text-center text-sm text-gray-600">
                {language === 'ar' ? "تريد إنشاء حساب شركة؟" : "Want to create a company account?"}{" "}
                <Link to="/register-employer" className="text-green-600 hover:underline">
                  {language === 'ar' ? "سجل كصاحب عمل" : "Register as Employer"}
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
