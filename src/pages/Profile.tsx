
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { useProfile } from "@/hooks/useProfile";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Camera, Plus, X, User, MapPin, Phone, Mail } from "lucide-react";

const Profile = () => {
  const { profile, updateSection } = useProfile();
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const [newSkill, setNewSkill] = useState("");
  const [newLanguage, setNewLanguage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        updateSection('personalInfo', {
          ...profile.personalInfo,
          profileImage: imageUrl
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      const updatedSkills = [...profile.professionalInfo.skills, newSkill.trim()];
      updateSection('professionalInfo', {
        ...profile.professionalInfo,
        skills: updatedSkills
      });
      setNewSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    const updatedSkills = profile.professionalInfo.skills.filter(skill => skill !== skillToRemove);
    updateSection('professionalInfo', {
      ...profile.professionalInfo,
      skills: updatedSkills
    });
  };

  const addLanguage = () => {
    if (newLanguage.trim()) {
      const updatedLanguages = [...profile.professionalInfo.languages, newLanguage.trim()];
      updateSection('professionalInfo', {
        ...profile.professionalInfo,
        languages: updatedLanguages
      });
      setNewLanguage("");
    }
  };

  const removeLanguage = (languageToRemove: string) => {
    const updatedLanguages = profile.professionalInfo.languages.filter(lang => lang !== languageToRemove);
    updateSection('professionalInfo', {
      ...profile.professionalInfo,
      languages: updatedLanguages
    });
  };

  const addExperience = () => {
    const newExp = {
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    };
    updateSection('experience', [...profile.experience, newExp]);
  };

  const updateExperience = (index: number, field: string, value: string) => {
    const updatedExperience = profile.experience.map((exp, i) => 
      i === index ? { ...exp, [field]: value } : exp
    );
    updateSection('experience', updatedExperience);
  };

  const removeExperience = (index: number) => {
    const updatedExperience = profile.experience.filter((_, i) => i !== index);
    updateSection('experience', updatedExperience);
  };

  const handleSave = () => {
    toast({
      title: t('profile_updated'),
      description: t('profile_saved_success'),
    });
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('personal_profile')}</h1>
          <p className="text-gray-600">{t('update_personal_info')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Profile Image Section */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>{t('profile_image')}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  {profile.personalInfo.profileImage ? (
                    <img
                      src={profile.personalInfo.profileImage}
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover border-4 border-gray-200"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                  <label
                    htmlFor="profile-image"
                    className={`absolute bottom-0 ${language === 'ar' ? 'left-0' : 'right-0'} bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700`}
                  >
                    <Camera className="w-4 h-4" />
                  </label>
                  <input
                    id="profile-image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </div>
                <p className="text-sm text-gray-600">{t('click_camera_change')}</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">{t('personal_data')}</TabsTrigger>
                <TabsTrigger value="professional">{t('professional_data')}</TabsTrigger>
                <TabsTrigger value="education">{t('education')}</TabsTrigger>
                <TabsTrigger value="experience">{t('experience')}</TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="personal">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('personal_data')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">{t('full_name')}</Label>
                        <Input
                          id="fullName"
                          value={profile.personalInfo.fullName}
                          onChange={(e) => updateSection('personalInfo', {
                            ...profile.personalInfo,
                            fullName: e.target.value
                          })}
                          placeholder={t('enter_full_name')}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">{t('email')}</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profile.personalInfo.email}
                          onChange={(e) => updateSection('personalInfo', {
                            ...profile.personalInfo,
                            email: e.target.value
                          })}
                          placeholder="example@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">{t('phone')}</Label>
                        <Input
                          id="phone"
                          value={profile.personalInfo.phone}
                          onChange={(e) => updateSection('personalInfo', {
                            ...profile.personalInfo,
                            phone: e.target.value
                          })}
                          placeholder="+966 50 123 4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">{t('city')}</Label>
                        <Input
                          id="location"
                          value={profile.personalInfo.location}
                          onChange={(e) => updateSection('personalInfo', {
                            ...profile.personalInfo,
                            location: e.target.value
                          })}
                          placeholder={t('riyadh_city')}
                        />
                      </div>
                      <div>
                        <Label htmlFor="dateOfBirth">{t('date_of_birth')}</Label>
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={profile.personalInfo.dateOfBirth}
                          onChange={(e) => updateSection('personalInfo', {
                            ...profile.personalInfo,
                            dateOfBirth: e.target.value
                          })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="nationality">{t('nationality')}</Label>
                        <Input
                          id="nationality"
                          value={profile.personalInfo.nationality}
                          onChange={(e) => updateSection('personalInfo', {
                            ...profile.personalInfo,
                            nationality: e.target.value
                          })}
                          placeholder={t('saudi')}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Professional Information */}
              <TabsContent value="professional">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('professional_data')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="jobTitle">{t('job_title')}</Label>
                        <Input
                          id="jobTitle"
                          value={profile.professionalInfo.jobTitle}
                          onChange={(e) => updateSection('professionalInfo', {
                            ...profile.professionalInfo,
                            jobTitle: e.target.value
                          })}
                          placeholder={t('web_developer')}
                        />
                      </div>
                      <div>
                        <Label htmlFor="experience">{t('years_experience')}</Label>
                        <Input
                          id="experience"
                          value={profile.professionalInfo.experience}
                          onChange={(e) => updateSection('professionalInfo', {
                            ...profile.professionalInfo,
                            experience: e.target.value
                          })}
                          placeholder={t('three_years')}
                        />
                      </div>
                      <div>
                        <Label htmlFor="salary">{t('expected_salary')}</Label>
                        <Input
                          id="salary"
                          value={profile.professionalInfo.salary}
                          onChange={(e) => updateSection('professionalInfo', {
                            ...profile.professionalInfo,
                            salary: e.target.value
                          })}
                          placeholder={t('salary_range')}
                        />
                      </div>
                      <div>
                        <Label htmlFor="workType">{t('work_type')}</Label>
                        <Input
                          id="workType"
                          value={profile.professionalInfo.workType}
                          onChange={(e) => updateSection('professionalInfo', {
                            ...profile.professionalInfo,
                            workType: e.target.value
                          })}
                          placeholder={t('work_preference')}
                        />
                      </div>
                    </div>

                    {/* Skills */}
                    <div>
                      <Label>{t('skills')}</Label>
                      <div className="flex gap-2 mb-2">
                        <Input
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          placeholder={t('add_new_skill')}
                          onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                        />
                        <Button onClick={addSkill} size="sm">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {profile.professionalInfo.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="flex items-center gap-1">
                            {skill}
                            <button onClick={() => removeSkill(skill)}>
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Languages */}
                    <div>
                      <Label>{t('languages')}</Label>
                      <div className="flex gap-2 mb-2">
                        <Input
                          value={newLanguage}
                          onChange={(e) => setNewLanguage(e.target.value)}
                          placeholder={t('add_new_language')}
                          onKeyPress={(e) => e.key === 'Enter' && addLanguage()}
                        />
                        <Button onClick={addLanguage} size="sm">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {profile.professionalInfo.languages.map((language, index) => (
                          <Badge key={index} variant="outline" className="flex items-center gap-1">
                            {language}
                            <button onClick={() => removeLanguage(language)}>
                              <X className="w-3 h-3" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Summary */}
                    <div>
                      <Label htmlFor="summary">{t('personal_summary')}</Label>
                      <Textarea
                        id="summary"
                        value={profile.summary}
                        onChange={(e) => updateSection('summary', e.target.value)}
                        placeholder={t('write_summary')}
                        rows={4}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Education */}
              <TabsContent value="education">
                <Card>
                  <CardHeader>
                    <CardTitle>{t('education')}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="degree">{t('degree')}</Label>
                        <Input
                          id="degree"
                          value={profile.education.degree}
                          onChange={(e) => updateSection('education', {
                            ...profile.education,
                            degree: e.target.value
                          })}
                          placeholder={t('bachelor_computer')}
                        />
                      </div>
                      <div>
                        <Label htmlFor="university">{t('university')}</Label>
                        <Input
                          id="university"
                          value={profile.education.university}
                          onChange={(e) => updateSection('education', {
                            ...profile.education,
                            university: e.target.value
                          })}
                          placeholder={t('king_saud_university')}
                        />
                      </div>
                      <div>
                        <Label htmlFor="graduationYear">{t('graduation_year')}</Label>
                        <Input
                          id="graduationYear"
                          value={profile.education.graduationYear}
                          onChange={(e) => updateSection('education', {
                            ...profile.education,
                            graduationYear: e.target.value
                          })}
                          placeholder="2020"
                        />
                      </div>
                      <div>
                        <Label htmlFor="gpa">{t('gpa')}</Label>
                        <Input
                          id="gpa"
                          value={profile.education.gpa}
                          onChange={(e) => updateSection('education', {
                            ...profile.education,
                            gpa: e.target.value
                          })}
                          placeholder={t('gpa_value')}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Experience */}
              <TabsContent value="experience">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>{t('work_experience')}</CardTitle>
                      <Button onClick={addExperience} size="sm">
                        <Plus className={`w-4 h-4 ${language === 'ar' ? 'mr-1' : 'ml-1'}`} />
                        {t('add_experience')}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {profile.experience.map((exp, index) => (
                      <div key={index} className="border rounded-lg p-4 space-y-4">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold">{t('experience_number').replace('{index}', (index + 1).toString())}</h4>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => removeExperience(index)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label>{t('company_name')}</Label>
                            <Input
                              value={exp.company}
                              onChange={(e) => updateExperience(index, 'company', e.target.value)}
                              placeholder={t('tech_company')}
                            />
                          </div>
                          <div>
                            <Label>{t('job_position')}</Label>
                            <Input
                              value={exp.position}
                              onChange={(e) => updateExperience(index, 'position', e.target.value)}
                              placeholder={t('web_developer')}
                            />
                          </div>
                          <div>
                            <Label>{t('start_date_label')}</Label>
                            <Input
                              type="date"
                              value={exp.startDate}
                              onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                            />
                          </div>
                          <div>
                            <Label>{t('end_date_label')}</Label>
                            <Input
                              type="date"
                              value={exp.endDate}
                              onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <Label>{t('tasks_description')}</Label>
                          <Textarea
                            value={exp.description}
                            onChange={(e) => updateExperience(index, 'description', e.target.value)}
                            placeholder={t('tasks_placeholder')}
                            rows={3}
                          />
                        </div>
                      </div>
                    ))}
                    {profile.experience.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        <p>{t('no_experience_added')}</p>
                        <p className="text-sm">{t('click_add_experience')}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 text-center">
          <Button onClick={handleSave} size="lg">
            {t('save_profile')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
