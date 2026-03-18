// Abstracting static data from UI components adheres to the single responsibility principle and simplifies future updates.
import type { Project, Education } from '../types/index';

export const EDUCATION_DATA: Education[] = [
  {
    id: 'uwf',
    degree: 'Bachelor of Science in Computer Science', 
    institution: 'University of West Florida', 
    location: 'Pensacola, FL', 
    date: 'May 2026', 
    gpa: '4.00', 
  },
  {
    id: 'psc',
    degree: 'Associate of Arts (General Studies)', 
    institution: 'Pensacola State College', 
    location: 'Pensacola, FL', 
    date: 'December 2023', 
    gpa: '4.00', 
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'unix-file-system',
    title: 'Unix-Like File System', 
    languages: ['C++'], 
    category: 'Systems Engineering',
    shortDescription: 'A persistent file system with an Inode-based architecture.', 
    description: 'A Unix-inspired file system that emphasizes durability and efficient data access through an Inode-based design.',
    detailedDescription: [
      'Engineered a persistent file system with an Inode-based architecture.', 
      'Implemented a system-wide Open File Table and a linked-list free-block manager.', 
      'Utilized a Read-Modify-Write cycle to manage arbitrary data streams across physical block boundaries.' 
    ],
    imageUrl: '/projects/unix-file-system.png',
    additionalNotes: [
      'Simulated low-level disk operations to mirror real-world filesystem behavior.',
      'Designed with extensibility in mind to accommodate future features like permissions or journaling.'
    ]
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website', 
    languages: ['Vite', 'React', 'TailwindCSS', 'Javascript', 'HTML'], 
    category: 'Web Development',
    shortDescription: 'Personal portfolio highlighting projects and education.', 
    description: 'A fast, minimal portfolio built with modern tooling to showcase projects and academic work.',
    detailedDescription: [
      'Designed and deployed a personal portfolio website on Github Pages with a custom domain using brandonmh.dev.',
      'Utilized Vite, React, TailwindCSS, and React-router to build the website and display my project portfolio and education.' 
    ],
    imageUrl: '/projects/portfolio-website.png',
    additionalNotes: [
      'Continuously evolving to reflect new projects and experiments.',
      'Acts as a sandbox for trying new UI patterns and performance optimizations.'
    ]
  },
  {
    id: 'library-spring-react',
    title: 'Library Management System', 
    languages: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Docker'], 
    category: 'Full-Stack Development',
    githubUrl: "https://github.com/brandon-hog/library-spring-react",
    shortDescription: 'Containerized library application with a React frontend and a secure Spring Boot REST API.', 
    description: 'A full-stack library application that manages user registration and book checkouts utilizing stateless JWT authentication, BCrypt hashing, and a PostgreSQL database.',
    detailedDescription: [
      'Developed a containerized full-stack library application featuring a React/TypeScript frontend and a secure Java Spring Boot REST API.', 
      'Managed user registration and book checkouts utilizing stateless JWT authentication, BCrypt hashing, and PostgreSQL via Spring Data JPA.', 
      'Leveraged Vite, React Router, and Tailwind CSS to build a responsive client interface for seamless user interaction and inventory management.' 
    ],
    imageUrl: '/projects/library-spring-react.png',
    additionalNotes: [
      'Architected utilizing Spring MVC patterns to ensure robust separation of concerns and testability.',
      'Designed to easily accommodate future features such as kiosk checkout modes and external ISBN data imports.',
    ]
  },
  {
    id: 'minesweeper',
    title: 'MineSweeper', 
    languages: ['C++'], 
    category: 'Application Development',
    shortDescription: 'Terminal-based MineSweeper simulation with recursive cell clearing.', 
    description: 'A classic Minesweeper implementation focused on clean recursion and memory-safe design in C++.',
    detailedDescription: [
      'Developed a C++ program that simulates the game MineSweeper via the terminal.', 
      'The program was split into multiple dynamically allocated classes, leveraging memory management skills.', 
      'The click function is implemented recursively, where it will check all eight cells surrounding it.', 
      'Spreads the cleared cells if all eight surrounding cells are clear, otherwise numbers the cell with surrounding mines.' 
    ],
    imageUrl: '/projects/minesweeper.png',
    additionalNotes: [
      'Provides a foundation for adding GUI bindings in the future.',
      'Emphasizes testability by isolating game logic from I/O concerns.'
    ]
  },
];