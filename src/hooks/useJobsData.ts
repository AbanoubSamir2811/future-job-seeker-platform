
import { useState, useMemo } from "react";
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

export const useJobsData = () => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const getJobsData = (): Job[] => {
    if (language === 'ar') {
      return [
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
          description: "نبحث عن مطور واجهات أمامية محترف للانضمام إلى فريقنا التقني المميز وتطوير تطبيقات ويب حديثة ومبتكرة",
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
          description: "فرصة رائعة للمصممين المبدعين للعمل على مشاريع مثيرة وتصميم واجهات مستخدم متطورة وسهلة الاستخدام",
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
          description: "انضم إلى فريق هندسة البرمجيات لدينا وساهم في بناء حلول تقنية متطورة وأنظمة برمجية عالية الجودة",
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
          description: "نحن نبحث عن أخصائي تسويق رقمي متمرس لإدارة حملاتنا الإعلانية وتطوير استراتيجيات التسويق الرقمي",
          skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics"]
        }
      ];
    } else {
      return [
        {
          id: 1,
          title: "Frontend Developer",
          company: "Advanced Technology Co.",
          companyId: 1,
          location: "Riyadh",
          salary: "8,000 - 12,000 SAR",
          type: "Full-time",
          experience: "2-5 years",
          posted: "2 days ago",
          featured: true,
          description: "We are looking for a professional frontend developer to join our exceptional technical team and develop modern and innovative web applications",
          skills: ["React", "JavaScript", "CSS", "HTML"]
        },
        {
          id: 2,
          title: "UI/UX Designer",
          company: "Digital Innovation Foundation",
          companyId: 2,
          location: "Jeddah",
          salary: "6,000 - 10,000 SAR",
          type: "Full-time",
          experience: "1-3 years",
          posted: "3 days ago",
          featured: false,
          description: "Great opportunity for creative designers to work on exciting projects and design advanced and user-friendly interfaces",
          skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"]
        },
        {
          id: 3,
          title: "Software Engineer",
          company: "Future Technologies",
          companyId: 3,
          location: "Dammam",
          salary: "10,000 - 16,000 SAR",
          type: "Full-time",
          experience: "3-7 years",
          posted: "1 week ago",
          featured: true,
          description: "Join our software engineering team and contribute to building advanced technical solutions and high-quality software systems",
          skills: ["Java", "Spring Boot", "MySQL", "Docker"]
        },
        {
          id: 4,
          title: "Digital Marketing Specialist",
          company: "Creative Marketing Agency",
          companyId: 4,
          location: "Riyadh",
          salary: "7,000 - 11,000 SAR",
          type: "Full-time",
          experience: "2-4 years",
          posted: "4 days ago",
          featured: false,
          description: "We are looking for an experienced digital marketing specialist to manage our advertising campaigns and develop digital marketing strategies",
          skills: ["Google Ads", "Facebook Ads", "SEO", "Analytics"]
        }
      ];
    }
  };

  const jobs = getJobsData();

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           job.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = !locationFilter || locationFilter === "all" || job.location === locationFilter;
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
