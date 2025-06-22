
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { JobCard } from "./JobCard";
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

interface JobsListProps {
  jobs: Job[];
}

export const JobsList = ({ jobs }: JobsListProps) => {
  const { t, language } = useLanguage();

  return (
    <div className={`${language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Results Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {t('found_jobs').replace('{count}', jobs.length.toString())}
        </h2>
        <Select>
          <SelectTrigger className="w-48">
            <SelectValue placeholder={t('sort_by')} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="latest">{t('latest')}</SelectItem>
            <SelectItem value="salary-high">{t('salary_high')}</SelectItem>
            <SelectItem value="salary-low">{t('salary_low')}</SelectItem>
            <SelectItem value="company">{t('company')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Jobs List */}
      <div className="space-y-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline" size="lg">
          {t('load_more')}
        </Button>
      </div>
    </div>
  );
};
