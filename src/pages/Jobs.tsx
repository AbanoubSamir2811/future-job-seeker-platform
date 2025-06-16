
import { Navbar } from "@/components/Navbar";
import { JobsSearchBar } from "@/components/JobsSearchBar";
import { JobsList } from "@/components/JobsList";
import { useJobsData } from "@/hooks/useJobsData";

const Jobs = () => {
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
    <div className="min-h-screen bg-gray-50" dir="rtl">
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
