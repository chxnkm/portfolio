'use client'

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { startTyping } from '@/lib/typingAnimation';
import Image from 'next/image';

const AutoCarousel = dynamic(() => import('@/components/AutoCarousel'));
const Projects = dynamic(() => import('@/components/Projects'));
const Experience = dynamic(() => import('@/components/Experience'));

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const images = [
  { src: 'misc/main_splash.webp' },
  { src: 'misc/splash_2.webp' },
  { src: 'misc/splash_3.webp' },
  // Add more images as needed
];

export default function Home() {
  useEffect(() => {
    startTyping();
  }, []);

  return (
    <main>
      <section className='relative min-w-full flex items-center justify-center h-[500px]'>
        <Image fill={true} src='/img/components/splash.webp' alt='Heading Splash' className='hidden lg:block inset-0 object-cover w-full h-full opacity-15' loading='eager' priority={true} />
        <Image fill={true} src='/img/components/splash-medium.webp' alt='Heading Splash' className='hidden lg:hidden md:block inset-0 object-cover w-full h-full opacity-15' loading='eager' priority={true} />
        <Image fill={true} src='/img/components/splash-small.webp' alt='Heading Splash' className='block md:hidden inset-0 object-cover w-full h-full opacity-15' loading='eager' priority={true} />
        <div className="intro container mx-auto absolute inset-0 flex items-center justify-center">
          <div className="intro-words text-center lg:pl-8">
            <h1 className="mt-16 text-3xl sm:text-5xl lg:text-6xl font-merriweather">
              Hello, I&apos;m <span className="text-text leading-custom"><br />
                <span id="typing-text" /></span><span className="caret">|</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold">
              I&apos;m a Computer Science graduate,<br />software engineer, and <br />a tinkerer and hobbyist.
            </p>
            <p className="text-base sm:text-lg lg:text-xl font-medium mb-12">
              Welcome to my portfolio. Happy browsing!
            </p>
          </div>
        </div>
      </section>


      <section className="about-me lg:container mx-auto px-4">
        <div className="mt-8 lg:mt-16 flex flex-col md:flex-row gap-8 lg:gap-16 xl:gap-24">
          <div className="order-1 flex-1 justify-center lg:justify-start">
            <AutoCarousel basePath='/img/' images={images} />
          </div>
          <div className='order-2 flex-1'>
            <h2 className="lg:text-4xl text-center lg:text-left font-merriweather ">About Me</h2>
            <div className="flex mt-4 space-x-4 justify-center lg:justify-normal">
              <a
                className='github-icon icon-appear'
                href="https://github.com/chxnkm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Link">
                <GitHubIcon style={{ fontSize: 24 }} className='hover:scale-110' />
              </a>
              <a
                className='linkedin-icon icon-appear'
                href="https://linkedin.com/in/ckangming"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Link">
                <LinkedInIcon style={{ fontSize: 24 }} className='hover:scale-110' />
              </a>
              <a
                className='email-icon icon-appear'
                href="mailto:me@chenkm.com"
                aria-label="Email Link">
                <EmailIcon style={{ fontSize: 24 }} className='hover:scale-110' />
              </a>
            </div>
            <p className="text-left lg:pr-8">
              A Computer Science graduate from Nanyang Technological University, I am an aspiring <strong>software engineer</strong> and <strong>data analyst</strong>.
              <br /><br />
              Having worked on a multitude of projects during my university tenure, I have amassed robust skills in <strong>full-stack development, data analytics,</strong> as well as <strong>machine learning and Generative AI-enabled applications</strong>. During my <a href='/projects/internship' className="underline text-blue-800">internship,</a> I&apos;ve worked on two projects, tapping into Generative AI and creating templating solutions for Government officers.
              <br /><br />
              In my free time, I pursue <a href='/hobbies/photography' className="underline text-blue-800">photography</a> (in both film and digital formats), jam to nostalgic tunes with my guitar and drums, and am an avid <i>Fallout</i> franchise lover. Check out my hobbies <a href='/hobbies' className="underline text-blue-800">here!</a>
              <br /><br />
              Currently, I am working as a Software Consultant at the CPF Board. Please feel free to contact me <a href='/contact' className="underline text-blue-800">using this form</a> or at my socials above if you have any questions or would like to collaborate!
            </p>
          </div>
        </div>
      </section>
      <section id='experience' className=" mt-20 lg:mt-28 container mx-auto">
        <h2 className="lg:text-4xl font-merriweather">My Experience 👨🏻‍💼</h2>
        <p className="text-lg mt-6">Swipe on each card to see more!</p>
      </section>
      <Experience />
      <section id='projects' className=" mt-16 lg:mt-32 container mx-auto">
        <h2 className="lg:text-4xl font-merriweather">Projects and Work Write-ups 👨🏻‍💻</h2>
        <p className="text-lg mt-6">Click on each card to learn more!</p>
      </section>
      <Projects />
    </main>
  );
}
