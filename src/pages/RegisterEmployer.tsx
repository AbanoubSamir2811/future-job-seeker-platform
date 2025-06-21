
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
import { useLanguage } from "@/contexts/LanguageContext";

const RegisterEmployer = () => {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
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
      toast.error(language === 'ar' ? "كلمات المرور غير متطابقة" : "Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      toast.error(language === 'ar' ? "كلمة المرور يجب أن تكون 8 أحرف على الأقل" : "Password must be at least 8 characters");
      return;
    }

    // Simulate registration
    toast.success(language === 'ar' ? "تم إنشاء حساب الشركة بنجاح! تحقق من بريدك الإلكتروني للتفعيل" : "Company account created successfully! Check your email for activation");
    setTimeout(() => {
      navigate("/employer-dashboard");
    }, 2000);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-green-50 ${language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <div className="flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">{t('create_company_account')}</CardTitle>
            <CardDescription>
              {t('enter_company_details')}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="companyName">{t('company_name')} *</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder={t('enter_company_name')}
                />
              </div>
              
              <div>
                <Label htmlFor="email">{t('official_email')} *</Label>
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
                <Label htmlFor="industry">{t('work_field')} *</Label>
                <Select onValueChange={(value) => handleSelectChange("industry", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('choose_work_field')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tech">{t('technology')}</SelectItem>
                    <SelectItem value="healthcare">{t('healthcare')}</SelectItem>
                    <SelectItem value="finance">{t('finance_banking')}</SelectItem>
                    <SelectItem value="education">{t('education')}</SelectItem>
                    <SelectItem value="retail">{t('retail_trade')}</SelectItem>
                    <SelectItem value="manufacturing">{t('manufacturing')}</SelectItem>
                    <SelectItem value="other">{t('other')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="website">{t('company_website')}</Label>
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
                <Label htmlFor="phone">{t('company_phone')}</Label>
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
                <Label htmlFor="password">{t('password')} *</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder={t('min_8_chars')}
                />
              </div>
              
              <div>
                <Label htmlFor="confirmPassword">{t('confirm_password')} *</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder={t('reenter_password')}
                />
              </div>
              
              <div>
                <Label htmlFor="plan">{t('usage_plan')}</Label>
                <Select onValueChange={(value) => handleSelectChange("plan", value)} defaultValue="free">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="free">{t('free_limited')}</SelectItem>
                    <SelectItem value="basic">{t('basic_99')}</SelectItem>
                    <SelectItem value="premium">{t('premium_199')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button type="submit" className="w-full">
                {t('create_company_account_btn')}
              </Button>
              
              <div className="text-center text-sm text-gray-600">
                {t('already_have_account')}{" "}
                <Link to="/login" className="text-blue-600 hover:underline">
                  {t('login')}
                </Link>
              </div>
              
              <div className="text-center text-sm text-gray-600">
                {t('want_personal_account')}{" "}
                <Link to="/register-candidate" className="text-green-600 hover:underline">
                  {t('register_as_candidate')}
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
