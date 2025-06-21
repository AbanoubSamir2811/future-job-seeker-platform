
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";
import { Heart, MapPin, Calendar, Building, Trash2 } from "lucide-react";
import { useSavedJobs } from "@/hooks/useSavedJobs";
import { useLanguage } from "@/contexts/LanguageContext";

const SavedJobs = () => {
  const { savedJobs, removeSavedJob } = useSavedJobs();
  const { t, language } = useLanguage();

  const handleUnsaveJob = (jobId: number) => {
    removeSavedJob(jobId);
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('saved_jobs')}</h1>
          <p className="text-gray-600">
            {savedJobs.length === 0 
              ? t('no_saved_jobs_desc')
              : `${savedJobs.length} ${t('saved_jobs').toLowerCase()}`
            }
          </p>
        </div>

        {savedJobs.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('no_saved_jobs')}</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {t('no_saved_jobs_desc')}
              </p>
              <Link to="/jobs">
                <Button>{t('browse_jobs')}</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {savedJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                          <div className="flex items-center text-gray-600 mb-2">
                            <Building className="w-4 h-4 mr-2" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center text-gray-600 mb-2">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{job.posted}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {job.featured && (
                            <Badge variant="secondary">{t('featured')}</Badge>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleUnsaveJob(job.id)}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">{t('salary')}:</span>
                            <p className="font-semibold">{job.salary}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">{t('work_type')}:</span>
                            <p className="font-semibold">{job.type}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">{t('experience')}:</span>
                            <p className="font-semibold">{job.experience || t('not_specified')}</p>
                          </div>
                          <div>
                            <span className="text-gray-500">{t('post_date')}:</span>
                            <p className="font-semibold">{job.posted}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-gray-700 line-clamp-2">{job.description || t('no_description')}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {job.skills && job.skills.length > 0 ? (
                            <>
                              {job.skills.slice(0, 3).map((skill, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                              {job.skills.length > 3 && (
                                <Badge variant="outline" className="text-xs">
                                  +{job.skills.length - 3}
                                </Badge>
                              )}
                            </>
                          ) : (
                            <Badge variant="outline" className="text-xs text-gray-500">
                              {t('no_skills_listed')}
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/job/${job.id}`}>{t('view_details')}</Link>
                          </Button>
                          <Button size="sm">{t('apply_now')}</Button>
                        </div>
                      </div>
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
