
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, language } = useLanguage();

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-green-50 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <Features />
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('start_career')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('cta_subtitle')}
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link to="/register-candidate">{t('register_candidate')}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Link to="/register-employer">{t('register_employer')}</Link>
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
                {t('hero_subtitle')}
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
                <li><Link to="/resume-tips" className="hover:text-white">Resume Tips</Link></li>
                <li><Link to="/career-guide" className="hover:text-white">Career Guide</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">{t('for_employers')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/register-employer" className="hover:text-white">{t('register')}</Link></li>
                <li><Link to="/post-job" className="hover:text-white">Post Job</Link></li>
                <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
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

export default Index;
