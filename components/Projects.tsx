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

import { Skeleton } from "@/components/ui/skeleton"
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

const ITEMS_PER_PAGE = 3;

type Project = {
  date: string;
  name: string;
  description: string;
  image: string;
  href: string;
  skills: string[];
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async (): Promise<any | null> => {
      const docRef = doc(db, "projects", "projects");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const projectArray = Object.keys(data).map(key => data[key]);

        projectArray.sort((a: Project, b: Project) => new Date(b.date).getTime() - new Date(a.date).getTime());

        setProjects(projectArray);
        setNumPages(Math.ceil(projectArray.length / ITEMS_PER_PAGE));
        setIsLoading(false);
      } else {
        console.error("No document found for projects");
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const indexOfLastProject = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - ITEMS_PER_PAGE;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === numPages;

  const SkeletonProject = () => (
    <Card className="bg-[#fdfdfd] border-gray-200 mt-4 shadow-lg rounded-lg overflow-hidden">
      <CardHeader>
        <Skeleton className="h-6 w-[50%]" />
        <Skeleton className="h-4 w-12 mt-4" />
      </CardHeader>
      <CardContent className="flex flex-wrap items-start justify-between">
        <div className="flex flex-col grow max-w-[75%] mt-[2vh]">
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
          <div className="flex flex-wrap items-center justify-start gap-2 mt-8">
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
            <Skeleton className="h-6 w-16" />
          </div>
        </div>
        <div className='mt-4'>
          <Skeleton className="h-[180px] w-[180px]" />
        </div>
      </CardContent>
    </Card>
  );

  return (
    <main>
      <div className="text container mx-auto">
        <div className='mt-8'>
          {isLoading ? (
            <>
              {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                <SkeletonProject key={index} />
              ))}
            </>
          ) : (
            currentProjects.map((project, index) => (
              <a href={project.href} key={index}>
                <Card className="bg-[#fdfdfd] border-gray-200 mt-4 shadow-lg rounded-xl overflow-hidden hover:scale-[1.02] duration-300">
                  <CardHeader>
                    <CardTitle className="font-merriweather text-base sm:text-xl lg:text-3xl">{project.name}</CardTitle>
                    <CardDescription>{new Date(project.date).toDateString().split(' ').slice(1).join(' ')}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap items-start justify-evenly md:justify-between">
                    <div className="flex flex-col md:max-w-[75%]">
                      <p className='m-0'>{project.description}</p>
                      <div className="flex flex-wrap font-merriweather font-medium items-center justify-start gap-2 mt-8 text-base sm:text-lg lg:text-xl">
                        <strong>Skills:</strong>
                        {project.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center justify-center bg-pastel-beige px-2 py-1 md:px-3 rounded-md whitespace-nowrap text-xs md:text-sm">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className='mt-4 hidden lg:block'>
                      <div style={{ width: '180px', height: '180px', backgroundImage: `url(${project.image})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }} />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))
          )}
        </div>
        {!isLoading && numPages > 3 && (
          <Pagination className="mt-8" aria-label="Pagination">
            <PaginationPrevious 
              onClick={() => !isPreviousDisabled && setCurrentPage(prev => prev - 1)}
              className={isPreviousDisabled ? 'pointer-events-none opacity-50' : ''}
              aria-disabled={isPreviousDisabled}
            >
              Previous
            </PaginationPrevious>
            <PaginationContent>
              {Array.from({ length: numPages }, (_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink onClick={() => setCurrentPage(i + 1)}>{i + 1}</PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
            <PaginationNext 
              onClick={() => !isNextDisabled && setCurrentPage(prev => prev + 1)}
              className={isNextDisabled ? 'pointer-events-none opacity-50' : ''}
              aria-disabled={isNextDisabled}
            >
              Next
            </PaginationNext>
          </Pagination>
        )}
      </div>
    </main>
  );
};

export default Projects;