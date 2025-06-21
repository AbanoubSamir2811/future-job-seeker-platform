
import { Navbar } from "@/components/Navbar";
import { JobsSearchBar } from "@/components/JobsSearchBar";
import { JobsList } from "@/components/JobsList";
import { useJobsData } from "@/hooks/useJobsData";
import { useLanguage } from "@/contexts/LanguageContext";

const Jobs = () => {
  const { language } = useLanguage();
  const {
    searchQuery,
    setSearchQuery,
    locationFilter,
    setLocationFilter,
    categoryFilter,
    setCategoryFilter,
    filteredJobs
  } = useJobsData();

  return (
    <div className={`min-h-screen bg-gray-50 ${language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <JobsSearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />

        <JobsList jobs={filteredJobs} />
      </div>
    </div>
  );
};

export default Jobs;
