
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { JobCard } from "./JobCard";

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
  return (
    <>
      {/* Results Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          تم العثور على {jobs.length} وظيفة
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
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <Button variant="outline" size="lg">
          تحميل المزيد من الوظائف
        </Button>
      </div>
    </>
  );
};
