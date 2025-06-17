
import { useState, useEffect } from 'react';

interface ProfileData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    dateOfBirth: string;
    nationality: string;
    profileImage: string;
  };
  professionalInfo: {
    jobTitle: string;
    experience: string;
    skills: string[];
    languages: string[];
    salary: string;
    workType: string;
  };
  education: {
    degree: string;
    university: string;
    graduationYear: string;
    gpa: string;
  };
  experience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  summary: string;
}

const initialProfile: ProfileData = {
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    dateOfBirth: '',
    nationality: '',
    profileImage: ''
  },
  professionalInfo: {
    jobTitle: '',
    experience: '',
    skills: [],
    languages: [],
    salary: '',
    workType: ''
  },
  education: {
    degree: '',
    university: '',
    graduationYear: '',
    gpa: ''
  },
  experience: [],
  summary: ''
};

export const useProfile = () => {
  const [profile, setProfile] = useState<ProfileData>(initialProfile);

  useEffect(() => {
    const stored = localStorage.getItem('userProfile');
    if (stored) {
      setProfile(JSON.parse(stored));
    }
  }, []);

  const updateProfile = (newProfile: ProfileData) => {
    setProfile(newProfile);
    localStorage.setItem('userProfile', JSON.stringify(newProfile));
  };

  const updateSection = (section: keyof ProfileData, data: any) => {
    const updatedProfile = {
      ...profile,
      [section]: data
    };
    updateProfile(updatedProfile);
  };

  return {
    profile,
    updateProfile,
    updateSection
  };
};
