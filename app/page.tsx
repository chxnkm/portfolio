'use client'

import React, { useEffect } from 'react';
import { startTyping } from '@/lib/typingAnimation';

import AutoCarousel from "@/components/AutoCarousel";
import Projects from "@/components/Projects";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Experience from '@/components/Experience';

const images = [
  { src: 'misc/main_splash.jpg' },
  { src: 'misc/splash_2.jpg' },
  { src: 'misc/splash_3.jpg' },
  // Add more images as needed
];

export default function Home() {
  useEffect(() => {
    startTyping();
  }, []);
  return (
    <main>
      <div className='bg-image-with-opacity bg-image min-w-full flex items-center justify-center animate-slideUp'>
        <div className="intro container mx-auto">
          <div className="intro-words text-center lg:pl-8">
            <h1 className="mt-16 text-3xl sm:text-5xl lg:text-6xl font-belsey font-black">
              Hello, I&apos;m <span className="text-text leading-custom"><br />
                <span id="typing-text" /></span><span className="caret">|</span></h1>
            <p className="text-lg sm:text-xl lg:text-2xl font-bold">I&apos;m a Computer Science graduate,<br />software engineer, and <br />an avid tinkerer and hobbyist.</p>
            <p className="text-base sm:text-lg lg:text-xl font-medium mb-12">Welcome to my portfolio. Happy browsing!</p>
          </div>
        </div>
      </div>

      <div className="about-me lg:container mx-auto px-4">
        <div className="mt-8 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24">
          <div className="order-1 lg:order-none flex justify-center lg:justify-start">
            <div className="flex flex-col items-center lg:items-start ">
              <AutoCarousel basePath='/img/' images={images} />
            </div>
          </div>
          <div className='order-2 lg:order-none'>
            <h1 className="text-center lg:text-left font-belsey text-2xl sm:text-3xl md:text-4xl lg:text-5xl">About Me</h1>
            <div className="flex mt-4 space-x-4 justify-center lg:justify-normal">
              <a className='icon-appear' href="https://github.com/chxnkm" target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{ fontSize: 24 }} className='hover:scale-110' />
              </a>
              <a className='icon-appear' href="https://linkedin.com/in/ckangming" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{ fontSize: 24 }} className='hover:scale-110' />
              </a>
              <a className='icon-appear' href="mailto:ckangming0.com">
                <EmailIcon style={{ fontSize: 24 }} className='hover:scale-110' />
              </a>
            </div>
            <p className="text-base lg:text-lg text-left lg:pr-8">
              A Computer Science graduate from Nanyang Technological University, I am an aspiring <strong>software engineer</strong> and <strong>data analyst</strong>.
              <br /><br />
              Having worked on a multitude of projects during my university tenure, I have amassed robust skills in <strong>full-stack development, data analytics,</strong> as well as <strong>machine learning and Generative AI-enabled applications</strong>.
              <br /><br />
              In my free time, I pursue <a href='/hobbies/photography' className="underline text-blue-500">photography</a> (in both film and digital formats), jam to nostalgic tunes with my guitar and drums, and am an avid <i>Fallout</i> franchise lover. Check out my hobbies <a href='/hobbies' className="underline text-blue-500">here!</a>
              <br /><br />
              Currently, I am open to any full-time software-related opportunities in Singapore. Please feel free to contact me <a href='/contact' className="underline text-blue-500">using this form</a> or at my socials above.
            </p>
          </div>
        </div>
      </div>
      <div id='experience' className=" mt-16 lg:mt-24 container mx-auto animate-slideUp">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-belsey">My Experience 👨🏻‍💼</h1>
        <p className="text-lg mt-6">Swipe on each card to see more!</p>
      </div>
      <Experience/>
      <div id='projects' className=" mt-16 lg:mt-32 container mx-auto animate-slideUp">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black font-belsey">Projects and Work Write-ups 👨🏻‍💻</h1>
        <p className="text-lg mt-6">Click on each card to learn more!</p>
      </div>
      <Projects />
    </main>
  );
}
