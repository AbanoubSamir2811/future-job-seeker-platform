
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, User, Settings, Bookmark } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            منصة التوظيف
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors">
              الوظائف
            </Link>
            <Link to="/companies" className="text-gray-700 hover:text-blue-600 transition-colors">
              الشركات
            </Link>
            <Link to="/saved-jobs" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
              <Bookmark className="w-4 h-4" />
              الوظائف المحفوظة
            </Link>
            <Link to="/profile" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-2">
              <User className="w-4 h-4" />
              الملف الشخصي
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              عن المنصة
            </Link>
          </div>
          
          {/* Auth Buttons */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button asChild variant="ghost">
              <Link to="/login">تسجيل الدخول</Link>
            </Button>
            <Button asChild>
              <Link to="/register-candidate">إنشاء حساب</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
