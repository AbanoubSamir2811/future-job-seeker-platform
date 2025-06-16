
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, Calendar, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50" dir="rtl">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Features />
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              ابدأ رحلتك المهنية اليوم
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              انضم إلى آلاف الباحثين عن العمل وأصحاب العمل واكتشف الفرص المناسبة لك
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/register-candidate">سجل كباحث عن عمل</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link to="/register-employer">سجل كصاحب عمل</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">منصة التوظيف</h3>
              <p className="text-gray-400">
                أفضل منصة للبحث عن الوظائف والمواهب في العالم العربي
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/jobs" className="hover:text-white">الوظائف</Link></li>
                <li><Link to="/companies" className="hover:text-white">الشركات</Link></li>
                <li><Link to="/about" className="hover:text-white">عن المنصة</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">للباحثين</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/register-candidate" className="hover:text-white">إنشاء حساب</Link></li>
                <li><Link to="/resume-tips" className="hover:text-white">نصائح السيرة الذاتية</Link></li>
                <li><Link to="/career-guide" className="hover:text-white">دليل المهنة</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">لأصحاب العمل</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/register-employer" className="hover:text-white">إنشاء حساب</Link></li>
                <li><Link to="/post-job" className="hover:text-white">نشر وظيفة</Link></li>
                <li><Link to="/pricing" className="hover:text-white">الأسعار</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 منصة التوظيف. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
