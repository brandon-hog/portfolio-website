// Abstracting static data from UI components adheres to the single responsibility principle and simplifies future updates.
import type { Project, Education } from '../types/index';

export const EDUCATION_DATA: Education[] = [
  {
    id: 'uwf',
    degree: 'Bachelor of Science in Computer Science', // [cite: 5]
    institution: 'University of West Florida', // [cite: 5]
    location: 'Pensacola, FL', // [cite: 5]
    date: 'May 2026', // [cite: 9]
    gpa: '4.00', // [cite: 9]
  },
  {
    id: 'psc',
    degree: 'Associate of Arts (General Studies)', // [cite: 6]
    institution: 'Pensacola State College', // [cite: 6]
    location: 'Pensacola, FL', // [cite: 6]
    date: 'December 2023', // [cite: 10]
    gpa: '4.00', // [cite: 11]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'unix-file-system',
    title: 'Unix-Like File System', // [cite: 34]
    languages: ['C++'], // [cite: 34]
    category: 'Systems Engineering',
    shortDescription: 'A persistent file system with an Inode-based architecture.', // [cite: 35]
    detailedDescription: [
      'Engineered a persistent file system with an Inode-based architecture.', // [cite: 35]
      'Implemented a system-wide Open File Table and a linked-list free-block manager.', // [cite: 35]
      'Utilized a Read-Modify-Write cycle to manage arbitrary data streams across physical block boundaries.' // [cite: 35]
    ]
  },
  {
    id: 'minesweeper',
    title: 'MineSweeper', // [cite: 36]
    languages: ['C++'], // [cite: 36]
    category: 'Application Development',
    shortDescription: 'Terminal-based MineSweeper simulation with recursive cell clearing.', // [cite: 37, 39]
    detailedDescription: [
      'Developed a C++ program that simulates the game MineSweeper via the terminal.', // [cite: 37]
      'The program was split into multiple dynamically allocated classes, leveraging memory management skills.', // [cite: 38]
      'The click function is implemented recursively, where it will check all eight cells surrounding it.', // [cite: 39]
      'Spreads the cleared cells if all eight surrounding cells are clear, otherwise numbers the cell with surrounding mines.' // [cite: 39]
    ]
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website', // [cite: 40]
    languages: ['JavaScript', 'HTML', 'CSS'], // [cite: 40]
    category: 'Web Development',
    shortDescription: 'Personal portfolio highlighting projects and education.', // [cite: 41, 42]
    detailedDescription: [
      'Designed and deployed a personal portfolio website using vanilla HTML, CSS and JavaScript.', // [cite: 41]
      'Hosted the application on GitHub Pages for public access.', // [cite: 41]
      'The site highlights my education, projects, and includes interactive elements such as animated navigation buttons.' // [cite: 42]
    ]
  }
];