
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navbar } from "@/components/Navbar";
import { Search, MapPin, Users, Building, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Companies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");

  const companies = [
    {
      id: 1,
      name: "شركة التقنية المتقدمة",
      logo: "/placeholder.svg",
      industry: "التكنولوجيا",
      location: "الرياض",
      employees: "100-500",
      rating: 4.5,
      reviews: 45,
      openJobs: 12,
      description: "شركة رائدة في مجال تطوير البرمجيات والحلول التقنية المبتكرة",
      founded: "2015",
      website: "www.techadvanced.com"
    },
    {
      id: 2,
      name: "مؤسسة الابتكار الرقمي",
      logo: "/placeholder.svg",
      industry: "التسويق الرقمي",
      location: "جدة",
      employees: "50-100",
      rating: 4.2,
      reviews: 28,
      openJobs: 8,
      description: "متخصصون في الحلول التسويقية الرقمية والتجارة الإلكترونية",
      founded: "2018",
      website: "www.digitalinnovation.com"
    },
    {
      id: 3,
      name: "تقنيات المستقبل",
      logo: "/placeholder.svg",
      industry: "التكنولوجيا",
      location: "الدمام",
      employees: "200-1000",
      rating: 4.7,
      reviews: 67,
      openJobs: 15,
      description: "شركة متخصصة في الذكاء الاصطناعي وإنترنت الأشياء",
      founded: "2012",
      website: "www.futuretech.com"
    },
    {
      id: 4,
      name: "وكالة الإبداع التسويقي",
      logo: "/placeholder.svg",
      industry: "التسويق",
      location: "الرياض",
      employees: "25-50",
      rating: 4.0,
      reviews: 22,
      openJobs: 5,
      description: "وكالة إبداعية متخصصة في التسويق والإعلان",
      founded: "2020",
      website: "www.creativemarketingagency.com"
    }
  ];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.industry.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !locationFilter || company.location === locationFilter;
    const matchesIndustry = !industryFilter || company.industry === industryFilter;
    return matchesSearch && matchesLocation && matchesIndustry;
  });

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">تصفح الشركات</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="ابحث عن شركة أو مجال..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10"
                />
              </div>
            </div>
            
            <div>
              <Select onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="الموقع" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">جميع المواقع</SelectItem>
                  <SelectItem value="الرياض">الرياض</SelectItem>
                  <SelectItem value="جدة">جدة</SelectItem>
                  <SelectItem value="الدمام">الدمام</SelectItem>
                  <SelectItem value="مكة">مكة</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select onValueChange={setIndustryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="المجال" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">جميع المجالات</SelectItem>
                  <SelectItem value="التكنولوجيا">التكنولوجيا</SelectItem>
                  <SelectItem value="التسويق الرقمي">التسويق الرقمي</SelectItem>
                  <SelectItem value="التسويق">التسويق</SelectItem>
                  <SelectItem value="المالية">المالية</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            تم العثور على {filteredCompanies.length} شركة
          </h2>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="ترتيب حسب" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">التقييم</SelectItem>
              <SelectItem value="jobs">عدد الوظائف</SelectItem>
              <SelectItem value="size">حجم الشركة</SelectItem>
              <SelectItem value="name">اسم الشركة</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Building className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{company.name}</CardTitle>
                      <CardDescription>{company.industry}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{company.rating}</span>
                    <span className="text-sm text-gray-500">({company.reviews})</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-700 mb-4 line-clamp-2">
                  {company.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 ml-1" />
                    {company.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 ml-1" />
                    {company.employees} موظف
                  </div>
                  <div className="text-sm text-gray-500">
                    تأسست في {company.founded}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">
                    {company.openJobs} وظيفة متاحة
                  </Badge>
                  <Button asChild size="sm">
                    <Link to={`/company/${company.id}`}>عرض الشركة</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            تحميل المزيد من الشركات
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Companies;
