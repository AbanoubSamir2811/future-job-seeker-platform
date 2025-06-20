
import { useLanguage } from "@/contexts/LanguageContext";

export const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    { number: "10,000+", label: t('available_jobs') },
    { number: "5,000+", label: t('registered_companies') },
    { number: "50,000+", label: t('job_seekers') },
    { number: "95%", label: t('satisfaction_rate') }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
