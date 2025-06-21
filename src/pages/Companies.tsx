
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navbar } from "@/components/Navbar";
import { Search, MapPin, Users, Building, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Companies = () => {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");

  const companies = [
    {
      id: 1,
      name: language === 'ar' ? "شركة التقنية المتقدمة" : "Advanced Technology Company",
      logo: "/placeholder.svg",
      industry: t('technology'),
      location: t('riyadh'),
      employees: "100-500",
      rating: 4.5,
      reviews: 45,
      openJobs: 12,
      description: language === 'ar' ? 
        "شركة رائدة في مجال تطوير البرمجيات والحلول التقنية المبتكرة" :
        "A leading company in software development and innovative technical solutions",
      founded: "2015",
      website: "www.techadvanced.com"
    },
    {
      id: 2,
      name: language === 'ar' ? "مؤسسة الابتكار الرقمي" : "Digital Innovation Foundation",
      logo: "/placeholder.svg",
      industry: t('digital_marketing'),
      location: t('jeddah'),
      employees: "50-100",
      rating: 4.2,
      reviews: 28,
      openJobs: 8,
      description: language === 'ar' ? 
        "متخصصون في الحلول التسويقية الرقمية والتجارة الإلكترونية" :
        "Specialists in digital marketing solutions and e-commerce",
      founded: "2018",
      website: "www.digitalinnovation.com"
    },
    {
      id: 3,
      name: language === 'ar' ? "تقنيات المستقبل" : "Future Technologies",
      logo: "/placeholder.svg",
      industry: t('technology'),
      location: t('dammam'),
      employees: "200-1000",
      rating: 4.7,
      reviews: 67,
      openJobs: 15,
      description: language === 'ar' ? 
        "شركة متخصصة في الذكاء الاصطناعي وإنترنت الأشياء" :
        "A company specialized in artificial intelligence and IoT",
      founded: "2012",
      website: "www.futuretech.com"
    },
    {
      id: 4,
      name: language === 'ar' ? "وكالة الإبداع التسويقي" : "Creative Marketing Agency",
      logo: "/placeholder.svg",
      industry: t('marketing'),
      location: t('riyadh'),
      employees: "25-50",
      rating: 4.0,
      reviews: 22,
      openJobs: 5,
      description: language === 'ar' ? 
        "وكالة إبداعية متخصصة في التسويق والإعلان" :
        "A creative agency specialized in marketing and advertising",
      founded: "2020",
      website: "www.creativemarketingagency.com"
    }
  ];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.industry.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !locationFilter || locationFilter === "all" || company.location === locationFilter;
    const matchesIndustry = !industryFilter || industryFilter === "all" || company.industry === industryFilter;
    return matchesSearch && matchesLocation && matchesIndustry;
  });

  return (
    <div className={`min-h-screen bg-gray-50 ${language === 'ar' ? 'font-arabic' : 'font-english'}`}>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Search Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('browse_companies')}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className={`absolute ${language === 'ar' ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-gray-400`} />
                <Input
                  placeholder={t('search_company_field')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={language === 'ar' ? 'pr-10' : 'pl-10'}
                />
              </div>
            </div>
            
            <div>
              <Select onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder={t('location')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('all_locations_filter')}</SelectItem>
                  <SelectItem value={t('riyadh')}>{t('riyadh')}</SelectItem>
                  <SelectItem value={t('jeddah')}>{t('jeddah')}</SelectItem>
                  <SelectItem value={t('dammam')}>{t('dammam')}</SelectItem>
                  <SelectItem value={t('mecca')}>{t('mecca')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select onValueChange={setIndustryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder={t('all_fields')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('all_fields_filter')}</SelectItem>
                  <SelectItem value={t('technology')}>{t('technology')}</SelectItem>
                  <SelectItem value={t('digital_marketing')}>{t('digital_marketing')}</SelectItem>
                  <SelectItem value={t('marketing')}>{t('marketing')}</SelectItem>
                  <SelectItem value={t('finance')}>{t('finance')}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {t('found_companies').replace('{count}', filteredCompanies.length.toString())}
          </h2>
          <Select>
            <SelectTrigger className="w-48">
              <SelectValue placeholder={t('sort_by')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">{t('rating')}</SelectItem>
              <SelectItem value="jobs">{t('available_jobs')}</SelectItem>
              <SelectItem value="size">{t('company_size')}</SelectItem>
              <SelectItem value="name">{t('company_name')}</SelectItem>
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
                    <MapPin className={`w-4 h-4 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
                    {company.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className={`w-4 h-4 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
                    {company.employees} {t('employees')}
                  </div>
                  <div className="text-sm text-gray-500">
                    {t('founded_in')} {company.founded}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">
                    {company.openJobs} {t('available_jobs_at')}
                  </Badge>
                  <Button asChild size="sm">
                    <Link to={`/company/${company.id}`}>{t('view_company')}</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            {t('load_more_companies')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Companies;
