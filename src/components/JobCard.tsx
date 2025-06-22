
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

  // ترجمة البيانات حسب اللغة المختارة
  const getTranslatedJobData = () => {
    if (language === 'ar') {
      return {
        title: job.title === 'Frontend Developer' ? 'مطور واجهات أمامية' :
               job.title === 'Backend Developer' ? 'مطور خلفية' :
               job.title === 'UI/UX Designer' ? 'مصمم واجهة المستخدم' :
               job.title === 'Data Scientist' ? 'عالم بيانات' :
               job.title,
        company: job.company === 'Tech Solutions' ? 'شركة الحلول التقنية' :
                 job.company === 'Digital Innovations' ? 'الابتكارات الرقمية' :
                 job.company === 'Creative Agency' ? 'وكالة الإبداع' :
                 job.company === 'Data Corp' ? 'شركة البيانات' :
                 job.company,
        location: job.location === 'Riyadh' ? 'الرياض' :
                  job.location === 'Jeddah' ? 'جدة' :
                  job.location === 'Dammam' ? 'الدمام' :
                  job.location,
        type: job.type === 'Full-time' ? 'دوام كامل' :
              job.type === 'Part-time' ? 'دوام جزئي' :
              job.type === 'Remote' ? 'عن بعد' :
              job.type,
        experience: job.experience === '2-3 years' ? '2-3 سنوات' :
                   job.experience === '1-2 years' ? '1-2 سنة' :
                   job.experience === '3-5 years' ? '3-5 سنوات' :
                   job.experience,
        posted: job.posted === '2 days ago' ? 'منذ يومين' :
               job.posted === '1 week ago' ? 'منذ أسبوع' :
               job.posted === '3 days ago' ? 'منذ 3 أيام' :
               job.posted,
        description: job.description.includes('We are looking for') ? 
                    'نبحث عن مطور واجهات أمامية معرف للانضمام إلى فريقنا...' :
                    job.description.includes('Join our team') ?
                    'انضم إلى فريقنا كمطور خلفية وساعدنا في بناء...' :
                    job.description
      };
    }
    return job;
  };

  const translatedJob = getTranslatedJobData();

  return (
    <div className={`${language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Card className={`hover:shadow-lg transition-shadow ${job.featured ? 'border-blue-200 bg-blue-50/30' : ''}`}>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <CardTitle className="text-xl">{translatedJob.title}</CardTitle>
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
                  {translatedJob.company}
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
              <span className={language === 'ar' ? 'mr-1' : 'ml-1'}>{translatedJob.location}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <DollarSign className={`w-4 h-4 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
              <span className={language === 'ar' ? 'mr-1' : 'ml-1'}>{job.salary}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className={`w-4 h-4 ${language === 'ar' ? 'ml-1' : 'mr-1'}`} />
              <span className={language === 'ar' ? 'mr-1' : 'ml-1'}>{translatedJob.type}</span>
            </div>
            <div className="text-gray-500">
              {translatedJob.posted}
            </div>
          </div>
          
          <p className="text-gray-700 mb-4 line-clamp-2">
            {translatedJob.description}
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
