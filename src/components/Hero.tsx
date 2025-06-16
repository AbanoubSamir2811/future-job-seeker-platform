
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          اكتشف فرصتك المهنية المثالية
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          منصة التوظيف الرائدة في العالم العربي التي تجمع بين أفضل المواهب وأكبر الشركات
          لخلق فرص عمل استثنائية
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex-1">
              <Input 
                placeholder="ابحث عن وظيفة..." 
                className="border-0 text-gray-900 text-lg"
              />
            </div>
            <div className="flex-1">
              <Input 
                placeholder="المدينة أو الموقع..." 
                className="border-0 text-gray-900 text-lg"
              />
            </div>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Search className="w-5 h-5 ml-2" />
              بحث
            </Button>
          </div>
        </div>
        
        {/* Popular Searches */}
        <div className="text-center">
          <p className="text-blue-100 mb-4">عمليات البحث الشائعة:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {["تطوير البرمجيات", "التسويق الرقمي", "إدارة المشاريع", "المحاسبة", "التصميم"].map((tag) => (
              <span 
                key={tag}
                className="bg-white/20 px-4 py-2 rounded-full text-sm hover:bg-white/30 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
