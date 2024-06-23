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

const ITEMS_PER_PAGE = 5;

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
        <div className="col-span-2 lg:col-start-2 text-center mt-32 gap-8">
          <h1 className="font-black font-belsey">My Projects 👨🏻‍💻</h1>
          <p className="text-xl mt-12">Click on each card to learn more!</p>
        </div>
        <div className='mt-12'>
          {currentProjects.map((project, index) => (
            <a href={project.href}>
            <Card key={index} className="bg-[#fdfdfd] border-gray-200 mt-4 shadow-lg rounded-lg overflow-hidden animate-slideUp">
              <CardHeader>
                <CardTitle className="font-belsey text-3xl">{project.name}</CardTitle>
                <CardDescription>{new Date(project.date).toDateString().split(' ').slice(1).join(' ')}</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-between mt-[-5%]">
                <p className="flex-grow max-w-[75%]">{project.description}</p>
                <div style={{ width: '150px', height: '150px', backgroundImage: `url(${project.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}/>
              </CardContent>
            </Card>
            </a>
          ))}
        </div>
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                aria-disabled={currentPage === 1}
                className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
              />
            </PaginationItem>
            {[...Array(numPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink 
                  onClick={() => setCurrentPage(index + 1)}
                  aria-current={currentPage === index + 1 ? 'page' : undefined}
                  className="cursor-pointer"
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, numPages))}
                aria-disabled={currentPage === numPages}
                className={`${currentPage === numPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </main>
  );
};

export default Projects;
