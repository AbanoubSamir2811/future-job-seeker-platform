
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, User, Settings, Bookmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export const Navbar = () => {
  const { t } = useLanguage();

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            {t('job_platform')}
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('jobs')}
            </Link>
            <Link to="/companies" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('companies')}
            </Link>
            <Link to="/saved-jobs" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
              <Bookmark className="w-4 h-4" />
              {t('saved_jobs')}
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
              <User className="w-4 h-4" />
              {t('profile')}
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              {t('about')}
            </Link>
          </div>
          
          {/* Auth Buttons & Language Toggle */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <LanguageToggle />
            <Button asChild variant="ghost">
              <Link to="/login">{t('login')}</Link>
            </Button>
            <Button asChild>
              <Link to="/register-candidate">{t('register')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
