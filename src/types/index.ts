// Centralized type definitions ensure strict type safety across components and data files.
export interface Project {
  id: string;
  title: string;
  languages: string[];
  category: string;
  shortDescription: string;
  detailedDescription: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  date: string;
  gpa: string;
}