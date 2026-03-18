// Centralized type definitions ensure strict type safety across components and data files.
export interface Project {
  id: string;
  title: string;
  languages: string[];
  category: string;
  githubUrl?: string;
  shortDescription: string;
  detailedDescription: string[];
  imageUrl?: string;
  description?: string;
  additionalNotes?: string | string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  date: string;
  gpa: string;
}