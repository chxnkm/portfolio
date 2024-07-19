'use client'

import { useEffect, useState } from 'react';
import {
    Card,
    CardContent
} from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Skeleton } from "@/components/ui/skeleton"
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';
import UnclickableImage from './UnclickableImage';

type Experience = {
    name: string;
    link?: string;
    description: string;
    image: string;
    skills: string[];
};

const Experience = () => {
    const [experience, setExperience] = useState<Experience[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchExperience = async (): Promise<any | null> => {
            const docRef = doc(db, "projects", "experience");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const data = docSnap.data();
                const projectArray = Object.keys(data).map(key => data[key]);
                setExperience(projectArray);
                setIsLoading(false);
            } else {
                console.error("No document found for projects");
                setIsLoading(false);
            }
        };

        fetchExperience();
    }, []);

    const SkeletonProject = () => (
        <CarouselItem className="h-full">
            <Card className="bg-[#fdfdfd] border-gray-200 shadow-md rounded-lg overflow-hidden h-full">
                <CardContent className="p-4 sm:p-6 h-full">
                    <div className='grid grid-rows-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full h-full'>
                        <div className='grid grid-rows-[auto_1fr] h-full'>
                            <div className="overflow-y-auto p-4">
                                <Skeleton className='h-6 w-1/2 mb-2' />
                                <Skeleton className='h-4 w-full' />
                                <Skeleton className='h-4 w-full mt-1' />
                            </div>
                            <div className='rounded-md flex flex-col px-4 py-2 mt-2 overflow-hidden'>
                                <Skeleton className='h-4 w-1/4 mb-2' />
                                <div className='flex flex-wrap overflow-y-auto'>
                                    <Skeleton className='h-6 w-16 mr-2 mb-2' />
                                    <Skeleton className='h-6 w-16 mr-2 mb-2' />
                                    <Skeleton className='h-6 w-16 mr-2 mb-2' />
                                    <Skeleton className='h-6 w-16 mr-2 mb-2' />
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:flex justify-center items-center sm:h-[350px] p-8">
                            <Skeleton className='h-full w-full' />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </CarouselItem>
    );

    return (
        <main className="grid grid-cols-8 px-4 max-w-[1400px] mt-4 lg:mt-12">
            <div className="col-span-1"></div>
            {isLoading ? (
                <div className="col-span-6">
                    <Carousel className='w-full'>
                        <CarouselContent className="h-full">
                            {Array(3).fill(0).map((_, index) => (
                                <SkeletonProject key={index} />
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            ) : (
                <Carousel className='col-span-6 max-w-screen sm:h-full'>
                    <CarouselContent className="h-full">
                        {experience.map((exp, index) => (
                            <CarouselItem key={index} className="min-h-[400px]">
                                <Card className="bg-[#fdfdfd] border-gray-200 shadow-md rounded-lg overflow-hidden h-full">
                                    <CardContent className="p-4 sm:p-6 h-full">
                                        <div className='grid grid-rows-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full h-full'>
                                            <div className='grid grid-rows-[auto_1fr] h-full'>
                                                <div className="overflow-y-auto p-4 border-[1.5px] border-black rounded-lg bg-pastelBeige">
                                                    <h2 className="text-sm sm:text-xl font-belsey font-extrabold mb-2">{exp.name}</h2>
                                                    <p className="text-xs md:text-sm sm:text-base font-medium">
                                                        {exp.description}
                                                        {exp.link && (
                                                            <><br /><br /><a href={exp.link} target="_blank" rel="noopener noreferrer">
                                                                <span className="inline-flex items-center bg-pastelOrange rounded-full px-2 sm:px-4 py-1 text-xs md:text-sm lg:text-[0.85rem] mb-[-2%]">
                                                                    Learn More <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-caret-right-fill responsive-svg" viewBox="0 0 16 16">
                                                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                                                    </svg>
                                                                </span>
                                                            </a></>
                                                        )}
                                                    </p>
                                                </div>
                                                <div className='rounded-md flex flex-col px-4 py-2 mt-2 overflow-hidden'>
                                                    <p className='text-xs md:text-sm lg:text-base font-semibold font-belsey mb-4'>Skills:</p>
                                                    <div className='flex flex-wrap overflow-y-auto'>
                                                        {exp.skills.map((skill, skillIndex) => (
                                                            <span key={skillIndex} className="inline-flex items-center bg-pastelBeige rounded-md px-2 sm:px-4 py-1 text-[0.7rem] sm:text-xs md:text-sm lg:text-[0.85rem] font-belsey mr-2 mb-2">
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden sm:flex justify-center items-center sm:h-[350px] p-8">
                                                <UnclickableImage src={exp.image} alt={exp.name} width={300} priority={true} />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='hidden sm:flex border-0' />
                    <CarouselNext className='hidden sm:flex border-0' />
                </Carousel>
            )}
            <div className="col-span-1"></div>
        </main>
    );
};

export default Experience;
