
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { 
  Search, Users, Calendar, FileText, Settings, User, 
  Bell, LogOut, Plus, CreditCard 
} from "lucide-react";

interface SidebarItem {
  title: string;
  href: string;
  icon: string;
  active?: boolean;
}

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  userType: "candidate" | "employer";
  sidebarItems: SidebarItem[];
}

const getIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    dashboard: Settings,
    user: User,
    file: FileText,
    search: Search,
    calendar: Calendar,
    bell: Bell,
    settings: Settings,
    users: Users,
    plus: Plus,
    "credit-card": CreditCard
  };
  return icons[iconName] || Settings;
};

export const DashboardLayout = ({ children, title, userType, sidebarItems }: DashboardLayoutProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, clear auth tokens here
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Top Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            <p className="text-gray-600">
              {userType === "candidate" ? "مرحبًا بك في لوحة تحكم الباحث عن عمل" : "مرحبًا بك في لوحة تحكم صاحب العمل"}
            </p>
          </div>
          
          <div className="flex items-center space-x-4 space-x-reverse">
            <Button variant="ghost" size="sm">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm border-l min-h-screen">
          <nav className="p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item, index) => {
                const IconComponent = getIcon(item.icon);
                return (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className={`flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg transition-colors ${
                        item.active 
                          ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600" 
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
