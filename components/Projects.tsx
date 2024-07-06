'use client'

import { useEffect, useState } from 'react';

import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent
} from '@/components/ui/card';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { Project } from '@/lib/projects-api';

const ITEMS_PER_PAGE = 3;

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(1);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('/api/fetch-projects');
      const data = await response.json();
      setProjects(data);
      setNumPages(Math.ceil(data.length / ITEMS_PER_PAGE));
    };

    fetchProjects();
  }, []);

  const indexOfLastProject = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - ITEMS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <main>
      <div className="text container mx-auto">
        <div className='mt-12'>
          {currentProjects.map((project, index) => (
            <a href={project.href} key={index}>
              <Card className="bg-[#fdfdfd] border-gray-200 mt-4 shadow-lg rounded-lg overflow-hidden animate-slideUp">
                <CardHeader>
                  <CardTitle className="font-belsey text-3xl">{project.name}</CardTitle>
                  <CardDescription>{new Date(project.date).toDateString().split(' ').slice(1).join(' ')}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap items-start justify-between mt-[-5%]">
                  <div className="flex flex-col flex-grow max-w-[75%] mt-[2vh]">
                    <p>{project.description}</p>
                    <div className="flex flex-wrap font-belsey font-medium items-center justify-start gap-2 mt-8">
                      <strong>Skills:</strong>
                      {project.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center justify-center bg-pastelBeige py-1 md:px-3 px-2 rounded-md whitespace-nowrap text-xs md:text-sm">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ width: '180px', height: '180px', backgroundImage: `url(${project.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
        <Pagination className="mt-8" aria-label="Pagination">
          <PaginationPrevious onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Previous</PaginationPrevious>
          <PaginationContent>
            {Array.from({ length: numPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink onClick={() => setCurrentPage(i + 1)}>{i + 1}</PaginationLink>
              </PaginationItem>
            ))}
          </PaginationContent>
          <PaginationNext onClick={() => setCurrentPage(prev => Math.min(prev + 1, numPages))}>Next</PaginationNext>
        </Pagination>
      </div>
    </main>
  );
};

export default Projects;
