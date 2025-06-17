
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Users, Target, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50" dir="rtl">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              عن منصة التوظيف
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              نحن نسعى لربط أفضل المواهب بأفضل الفرص في العالم العربي من خلال منصة متطورة وسهلة الاستخدام
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">رسالتنا</h2>
                <p className="text-lg text-gray-700 mb-6">
                  نؤمن بأن كل شخص يستحق فرصة عمل تتناسب مع مهاراته وطموحاته. لذلك نسعى لتوفير منصة شاملة تجمع بين الباحثين عن العمل وأصحاب العمل في بيئة آمنة وموثوقة.
                </p>
                <p className="text-lg text-gray-700">
                  هدفنا هو تسهيل عملية البحث عن العمل والتوظيف من خلال استخدام أحدث التقنيات وأفضل الممارسات في مجال الموارد البشرية.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Target className="w-16 h-16 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">هدفنا</h3>
                <p className="text-gray-700">
                  أن نصبح المنصة الرائدة للتوظيف في المنطقة العربية، ونساهم في تطوير سوق العمل وزيادة فرص التوظيف للجميع.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">قيمنا</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>الشفافية</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700">
                    نؤمن بالشفافية الكاملة في جميع عملياتنا ونوفر معلومات واضحة ودقيقة لجميع المستخدمين.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>الجودة</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700">
                    نسعى لتقديم أعلى مستويات الجودة في خدماتنا ونعمل باستمرار على تطوير وتحسين منصتنا.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>الابتكار</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700">
                    نستخدم أحدث التقنيات والحلول المبتكرة لتوفير تجربة استخدام مميزة وفعالة.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">إنجازاتنا</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">10,000+</div>
                <div className="text-gray-300">باحث عن عمل</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">5,000+</div>
                <div className="text-gray-300">وظيفة متاحة</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">1,500+</div>
                <div className="text-gray-300">شركة شريكة</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-gray-300">نسبة رضا المستخدمين</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              انضم إلينا اليوم
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              ابدأ رحلتك المهنية معنا واكتشف الفرص اللامحدودة في سوق العمل
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
                <li><a href="#" className="hover:text-white">نصائح السيرة الذاتية</a></li>
                <li><a href="#" className="hover:text-white">دليل المهنة</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">لأصحاب العمل</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/register-employer" className="hover:text-white">إنشاء حساب</Link></li>
                <li><Link to="/post-job" className="hover:text-white">نشر وظيفة</Link></li>
                <li><a href="#" className="hover:text-white">الأسعار</a></li>
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

export default About;
