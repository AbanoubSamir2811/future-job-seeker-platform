
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { toast } from "sonner";
import { LogIn } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login - in real app, check credentials against backend
    if (formData.email && formData.password) {
      toast.success("تم تسجيل الدخول بنجاح!");
      
      // Route based on email domain or user type (simplified)
      if (formData.email.includes("company") || formData.email.includes("corp")) {
        navigate("/employer-dashboard");
      } else {
        navigate("/candidate-dashboard");
      }
    } else {
      toast.error("يرجى إدخال البريد الإلكتروني وكلمة المرور");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50" dir="rtl">
      <Navbar />
      
      <div className="flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LogIn className="w-8 h-8 text-blue-600" />
            </div>
            <CardTitle className="text-2xl">تسجيل الدخول</CardTitle>
            <CardDescription>
              أدخل بياناتك للوصول إلى حسابك
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email">البريد الإلكتروني</Label>
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
                <Label htmlFor="password">كلمة المرور</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="أدخل كلمة المرور"
                />
              </div>
              
              <div className="text-left">
                <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                  نسيت كلمة المرور؟
                </Link>
              </div>
              
              <Button type="submit" className="w-full">
                تسجيل الدخول
              </Button>
              
              <div className="text-center text-sm text-gray-600">
                ليس لديك حساب؟{" "}
                <Link to="/register-candidate" className="text-blue-600 hover:underline">
                  إنشاء حساب جديد
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
