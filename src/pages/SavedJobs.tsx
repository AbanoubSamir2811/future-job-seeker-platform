
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Building, Trash2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { useSavedJobs } from "@/hooks/useSavedJobs";
import { useToast } from "@/hooks/use-toast";

const SavedJobs = () => {
  const { savedJobs, removeSavedJob } = useSavedJobs();
  const { toast } = useToast();

  const handleRemoveSavedJob = (jobId: number, jobTitle: string) => {
    removeSavedJob(jobId);
    toast({
      title: "تم حذف الوظيفة",
      description: `تم حذف "${jobTitle}" من الوظائف المحفوظة`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">الوظائف المحفوظة</h1>
          <p className="text-gray-600">
            عدد الوظائف المحفوظة: {savedJobs.length}
          </p>
        </div>

        {savedJobs.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              لا توجد وظائف محفوظة
            </h3>
            <p className="text-gray-600 mb-6">
              ابحث عن الوظائف واحفظ المناسبة منها لمراجعتها لاحقاً
            </p>
            <Button asChild>
              <Link to="/jobs">تصفح الوظائف</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {savedJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                      <div className="flex items-center gap-2 mb-2">
                        <Building className="w-4 h-4 text-gray-500" />
                        <span className="text-lg font-medium text-blue-600">
                          {job.company}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild>
                        <Link to={`/job/${job.id}`}>عرض التفاصيل</Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleRemoveSavedJob(job.id, job.title)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
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
                      محفوظة في: {job.savedAt}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedJobs;
