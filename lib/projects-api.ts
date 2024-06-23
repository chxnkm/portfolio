// lib/projectsAPI.ts
import fs from 'fs';
import path from 'path';

export type Project = {
  date: string;  // Change this to string as JSON doesn't have a Date type
  name: string;
  description: string;
  image: string;
  href: string;
};

export const fetchProjects = async (): Promise<Project[]> => {
  const filePath = (path.join('data', 'projects.json'));
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const projectsData = JSON.parse(jsonData).projects;

  const projects = projectsData.map((project: Project) => ({
    ...project,
    date: new Date(project.date).toISOString(),  // Convert to ISO string for easy sorting
  }));

  projects.sort((a: Project, b: Project) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return projects;
};