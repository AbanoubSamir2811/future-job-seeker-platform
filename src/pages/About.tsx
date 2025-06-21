
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Users, Target, Award, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t, language } = useLanguage();

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-green-50 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {t('about_platform')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('hero_subtitle')}
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t('our_mission')}</h2>
                <p className="text-lg text-gray-700 mb-6">
                  {t('mission_text')}
                </p>
                <p className="text-lg text-gray-700">
                  {t('mission_text2')}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Target className="w-16 h-16 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-4">{t('our_goal')}</h3>
                <p className="text-gray-700">
                  {t('goal_text')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{t('our_values')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>{t('transparency')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700">
                    {t('transparency_desc')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>{t('quality')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700">
                    {t('quality_desc')}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>{t('innovation')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-700">
                    {t('innovation_desc')}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-white mb-12">{t('our_achievements')}</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">10,000+</div>
                <div className="text-gray-300">{t('job_seekers_count')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">5,000+</div>
                <div className="text-gray-300">{t('available_jobs_count')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">1,500+</div>
                <div className="text-gray-300">{t('partner_companies')}</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-gray-300">{t('user_satisfaction')}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('join_us_today')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('join_us_desc')}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/register-candidate">{t('register_job_seeker')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link to="/register-employer">{t('register_employer_btn')}</Link>
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
              <h3 className="text-xl font-bold mb-4">{t('job_platform')}</h3>
              <p className="text-gray-400">
                {t('best_platform')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('quick_links')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/jobs" className="hover:text-white">{t('jobs')}</Link></li>
                <li><Link to="/companies" className="hover:text-white">{t('companies')}</Link></li>
                <li><Link to="/about" className="hover:text-white">{t('about')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('for_job_seekers')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/register-candidate" className="hover:text-white">{t('register')}</Link></li>
                <li><a href="#" className="hover:text-white">Resume Tips</a></li>
                <li><a href="#" className="hover:text-white">Career Guide</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('for_employers')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/register-employer" className="hover:text-white">{t('register')}</Link></li>
                <li><Link to="/post-job" className="hover:text-white">Post Job</Link></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 {t('job_platform')}. {t('rights_reserved')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
