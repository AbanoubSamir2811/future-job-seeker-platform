
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, Calendar, Settings } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Search,
      title: "بحث ذكي",
      description: "محرك بحث متطور يساعدك في العثور على الوظائف المناسبة لمهاراتك وخبراتك"
    },
    {
      icon: Users,
      title: "شبكة واسعة",
      description: "اتصل مع آلاف أصحاب العمل والمرشحين من جميع أنحاء العالم العربي"
    },
    {
      icon: Calendar,
      title: "إدارة المقابلات",
      description: "نظام متكامل لجدولة وإدارة المقابلات بين أصحاب العمل والمرشحين"
    },
    {
      icon: Settings,
      title: "أدوات متقدمة",
      description: "مجموعة شاملة من الأدوات لإدارة الملف الشخصي والتقديم على الوظائف"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            لماذا تختار منصتنا؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نوفر لك أفضل الأدوات والخدمات لتحقيق أهدافك المهنية بسهولة وفعالية
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
