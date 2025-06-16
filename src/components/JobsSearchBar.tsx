
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

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
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">البحث عن الوظائف</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <div className="relative">
            <Search className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="ابحث عن وظيفة أو شركة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
          </div>
        </div>
        
        <div>
          <Select onValueChange={setLocationFilter}>
            <SelectTrigger>
              <SelectValue placeholder="الموقع" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">جميع المواقع</SelectItem>
              <SelectItem value="الرياض">الرياض</SelectItem>
              <SelectItem value="جدة">جدة</SelectItem>
              <SelectItem value="الدمام">الدمام</SelectItem>
              <SelectItem value="مكة">مكة</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Select onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="المجال" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">جميع المجالات</SelectItem>
              <SelectItem value="tech">التكنولوجيا</SelectItem>
              <SelectItem value="marketing">التسويق</SelectItem>
              <SelectItem value="finance">المالية</SelectItem>
              <SelectItem value="hr">الموارد البشرية</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
