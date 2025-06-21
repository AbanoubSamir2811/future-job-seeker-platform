
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface JobsSearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  locationFilter: string;
  setLocationFilter: (location: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
}

export const JobsSearchBar = ({
  searchQuery,
  setSearchQuery,
  locationFilter,
  setLocationFilter,
  categoryFilter,
  setCategoryFilter
}: JobsSearchBarProps) => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{t('search_jobs')}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className={`absolute ${language === 'ar' ? 'right-3' : 'left-3'} top-3 h-4 w-4 text-gray-400`} />
            <Input
              placeholder={t('search_company')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={language === 'ar' ? 'pr-10' : 'pl-10'}
            />
          </div>
        </div>
        
        <div>
          <Select onValueChange={setLocationFilter}>
            <SelectTrigger>
              <SelectValue placeholder={t('location')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('all_locations')}</SelectItem>
              <SelectItem value={t('riyadh')}>{t('riyadh')}</SelectItem>
              <SelectItem value={t('jeddah')}>{t('jeddah')}</SelectItem>
              <SelectItem value={t('dammam')}>{t('dammam')}</SelectItem>
              <SelectItem value={t('mecca')}>{t('mecca')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder={t('all_fields')} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t('all_fields')}</SelectItem>
              <SelectItem value="tech">{t('technology')}</SelectItem>
              <SelectItem value="marketing">{t('marketing')}</SelectItem>
              <SelectItem value="finance">{t('finance')}</SelectItem>
              <SelectItem value="hr">{t('hr')}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
