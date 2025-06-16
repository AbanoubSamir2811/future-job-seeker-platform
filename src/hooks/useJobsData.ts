
import { useState, useMemo } from "react";

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

export const useJobsData = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const jobs: Job[] = [
    {
      id: 1,
      title: "مطور واجهات أمامية",
      company: "شركة التقنية المتقدمة",
      companyId: 1,
      location: "الرياض",
      salary: "8,000 - 12,000 ريال",
      type: "دوام كامل",
      experience: "2-5 سنوات",
      posted: "منذ يومين",
      featured: true,
      description: "نبحث عن مطور واجهات أمامية محترف للانضمام إلى فريقنا...",
      skills: ["React", "JavaScript", "CSS", "HTML"]
    },
    {
      id: 2,
      title: "مصمم UI/UX",
      company: "مؤسسة الابتكار الرقمي",
      companyId: 2,
      location: "جدة",
      salary: "6,000 - 10,000 ريال",
      type: "دوام كامل",
      experience: "1-3 سنوات",
      posted: "منذ 3 أيام",
      featured: false,
      description: "فرصة رائعة للمصممين المبدعين للعمل على مشاريع مثيرة...",
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
    },
    {
      id: 3,
      title: "مهندس البرمجيات",
      company: "تقنيات المستقبل",
      companyId: 3,
      location: "الدمام",
      salary: "10,000 - 16,000 ريال",
      type: "دوام كامل",
      experience: "3-7 سنوات",
      posted: "منذ أسبوع",
      featured: true,
      description: "انضم إلى فريق هندسة البرمجيات لدينا وساهم في بناء حلول تقنية متطورة...",
      skills: ["Java", "Spring Boot", "MySQL", "Docker"]
    },
    {
      id: 4,
      title: "أخصائي التسويق الرقمي",
      company: "وكالة الإبداع التسويقي",
      companyId: 4,
      location: "الرياض",
      salary: "7,000 - 11,000 ريال",
      type: "دوام كامل",
      experience: "2-4 سنوات",
      posted: "منذ 4 أيام",
      featured: false,
      description: "نحن نبحث عن أخصائي تسويق رقمي لإدارة حملاتنا الإعلانية...",
      skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics"]
    }
  ];

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = !locationFilter || job.location === locationFilter;
      return matchesSearch && matchesLocation;
    });
  }, [searchQuery, locationFilter, jobs]);

  return {
    searchQuery,
    setSearchQuery,
    locationFilter,
    setLocationFilter,
    categoryFilter,
    setCategoryFilter,
    filteredJobs
  };
};
