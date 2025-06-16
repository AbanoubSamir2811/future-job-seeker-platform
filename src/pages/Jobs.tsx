
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navbar } from "@/components/Navbar";
import { Search, MapPin, Clock, DollarSign, Building } from "lucide-react";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const jobs = [
    {
      id: 1,
      title: "مطور واجهات أمامية",
      company: "شركة التقنية المتقدمة",
      companyId: 1,
      location: "الرياض",
      salary: "8,000 - 12,000 ريال",
      type: "دوام كامل",
      experience: "2-5 سنوات",
      posted: "منذ يومين",
      featured: true,
      description: "نبحث عن مطور واجهات أمامية محترف للانضمام إلى فريقنا...",
      skills: ["React", "JavaScript", "CSS", "HTML"]
    },
    {
      id: 2,
      title: "مصمم UI/UX",
      company: "مؤسسة الابتكار الرقمي",
      companyId: 2,
      location: "جدة",
      salary: "6,000 - 10,000 ريال",
      type: "دوام كامل",
      experience: "1-3 سنوات",
      posted: "منذ 3 أيام",
      featured: false,
      description: "فرصة رائعة للمصممين المبدعين للعمل على مشاريع مثيرة...",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
    },
    {
      id: 3,
      title: "مهندس البرمجيات",
      company: "تقنيات المستقبل",
      companyId: 3,
      location: "الدمام",
      salary: "10,000 - 16,000 ريال",
      type: "دوام كامل",
      experience: "3-7 سنوات",
      posted: "منذ أسبوع",
      featured: true,
      description: "انضم إلى فريق هندسة البرمجيات لدينا وساهم في بناء حلول تقنية متطورة...",
      skills: ["Java", "Spring Boot", "MySQL", "Docker"]
    },
    {
      id: 4,
      title: "أخصائي التسويق الرقمي",
      company: "وكالة الإبداع التسويقي",
      companyId: 4,
      location: "الرياض",
      salary: "7,000 - 11,000 ريال",
      type: "دوام كامل",
      experience: "2-4 سنوات",
      posted: "منذ 4 أيام",
      featured: false,
      description: "نحن نبحث عن أخصائي تسويق رقمي لإدارة حملاتنا الإعلانية...",
      skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics"]
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !locationFilter || job.location === locationFilter;
    return matchesSearch && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">البحث عن الوظائف</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="ابحث عن وظيفة أو شركة..."
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
              <Select onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="المجال" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">جميع المجالات</SelectItem>
                  <SelectItem value="tech">التكنولوجيا</SelectItem>
                  <SelectItem value="marketing">التسويق</SelectItem>
                  <SelectItem value="finance">المالية</SelectItem>
                  <SelectItem value="hr">الموارد البشرية</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            تم العثور على {filteredJobs.length} وظيفة
          </h2>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="ترتيب حسب" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">الأحدث</SelectItem>
              <SelectItem value="salary-high">الراتب (الأعلى أولاً)</SelectItem>
              <SelectItem value="salary-low">الراتب (الأقل أولاً)</SelectItem>
              <SelectItem value="company">اسم الشركة</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className={`hover:shadow-lg transition-shadow ${job.featured ? 'border-blue-200 bg-blue-50/30' : ''}`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      {job.featured && (
                        <Badge className="bg-blue-100 text-blue-800">مميزة</Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="w-4 h-4 text-gray-500" />
                      <Link 
                        to={`/company/${job.companyId}`}
                        className="text-lg font-medium text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        {job.company}
                      </Link>
                    </div>
                  </div>
                  <Button asChild>
                    <Link to={`/job/${job.id}`}>عرض التفاصيل</Link>
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 ml-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-4 h-4 ml-1" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 ml-1" />
                    {job.type}
                  </div>
                  <div className="text-gray-500">
                    {job.posted}
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 line-clamp-2">
                  {job.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            تحميل المزيد من الوظائف
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
