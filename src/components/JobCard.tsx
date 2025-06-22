
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

interface Job {
  id: number;
  title: string;
  company: string;
  companyId: number;
  location: string;
  salary: string;
  type: string;
  experience: string;
  posted: string;
  featured: boolean;
  description: string;
  skills: string[];
}

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  const { t, language } = useLanguage();

  return (
    <div className={`${language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Card className={`hover:shadow-lg transition-shadow ${job.featured ? 'border-blue-200 bg-blue-50/30' : ''}`}>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <CardTitle className="text-xl">{job.title}</CardTitle>
                {job.featured && (
                  <Badge className="bg-blue-100 text-blue-800">{t('featured')}</Badge>
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
              <Link to={`/job/${job.id}`}>{t('view_details')}</Link>
            </Button>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="flex items-center text-gray-600">
              <MapPin className={`w-4 h-4 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
              <span className={language === 'ar' ? 'mr-1' : 'ml-1'}>{job.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <DollarSign className={`w-4 h-4 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
              <span className={language === 'ar' ? 'mr-1' : 'ml-1'}>{job.salary}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className={`w-4 h-4 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
              <span className={language === 'ar' ? 'mr-1' : 'ml-1'}>{job.type}</span>
            </div>
            <div className="text-gray-500">
              {job.posted}
            </div>
          </div>
          
          <p className="text-gray-700 mb-4 line-clamp-2">
            {job.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {job.skills && job.skills.length > 0 ? (
              job.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))
            ) : (
              <span className="text-gray-500 text-sm">{t('no_skills_listed')}</span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
