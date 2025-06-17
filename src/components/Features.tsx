
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Users, Calendar, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Search,
      title: t('smart_search'),
      description: t('smart_search_desc')
    },
    {
      icon: Users,
      title: t('wide_network'),
      description: t('wide_network_desc')
    },
    {
      icon: Calendar,
      title: t('interview_management'),
      description: t('interview_management_desc')
    },
    {
      icon: Settings,
      title: t('advanced_tools'),
      description: t('advanced_tools_desc')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('why_choose_us')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features_subtitle')}
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
