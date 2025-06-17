
import { useState, useEffect } from 'react';

interface SavedJob {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  posted: string;
  savedAt: string;
}

export const useSavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState<SavedJob[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('savedJobs');
    if (stored) {
      setSavedJobs(JSON.parse(stored));
    }
  }, []);

  const saveJob = (job: any) => {
    const savedJob: SavedJob = {
      id: job.id,
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      type: job.type,
      posted: job.posted,
      savedAt: new Date().toLocaleDateString('ar-SA')
    };

    const updatedJobs = [...savedJobs, savedJob];
    setSavedJobs(updatedJobs);
    localStorage.setItem('savedJobs', JSON.stringify(updatedJobs));
  };

  const removeSavedJob = (jobId: number) => {
    const updatedJobs = savedJobs.filter(job => job.id !== jobId);
    setSavedJobs(updatedJobs);
    localStorage.setItem('savedJobs', JSON.stringify(updatedJobs));
  };

  const isJobSaved = (jobId: number) => {
    return savedJobs.some(job => job.id === jobId);
  };

  return {
    savedJobs,
    saveJob,
    removeSavedJob,
    isJobSaved
  };
};
