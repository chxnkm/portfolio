import AutoCarousel from "@/components/AutoCarousel";
import Projects from "@/components/Projects";
import UnclickableImage from "@/components/UnclickableImage";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const images = [
  { src: 'misc/main_splash.jpg'},
  { src: 'misc/splash_2.jpg'},
  { src: 'misc/splash_3.jpg'},
  // Add more images as needed
];


export default function Home() {
  return (
    <main>
      <div className='bg-image-with-opacity min-w-full flex items-center justify-center animate-slideUp'>
        <div className="intro container mx-auto">
          <div className='grid grid-cols-1 lg:grid-cols-6 items-center justify-center gap-12'>
            <div className="intro-words col-span-1 lg:col-span-4 text-center lg:text-left lg:pl-8">
              <h1 className="mt-20 text-6xl font-belsey font-black">Hello, I&apos;m <span className="text-text leading-custom"><br />Kang Ming.</span></h1>
              <p className="text-2xl font-bold">I&apos;m a <span className="text-pastelBlue">Computer Science graduate</span>,<br /><span className="text-pastelRed">software engineer</span>, and <br />an <span className="text-pastelOrange">avid tinkerer and hobbyist</span>.</p>
              <p className="text-xl font-medium mb-12">Welcome to my portfolio. Happy browsing!</p>
            </div>
            <div className='intro-image col-span-1 lg:col-span-2 mt-20 hidden lg:flex pr-8 items-center justify-center overflow-clip'>
              <AutoCarousel basePath='/img/' images={images} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-me lg:container mx-auto px-4">
        <div className="lg:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-24">
          <div className="mt-20 order-1 lg:order-1 flex justify-center lg:justify-start">
            <div className="flex flex-col items-center lg:items-start">
              <UnclickableImage width={480} src="/img/misc/me.jpg" alt="my face" />
                  <div className="flex mt-4 space-x-4">
                    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                      <GitHubIcon style={{ fontSize: 40 }} />
                    </a>
                    <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon style={{ fontSize: 40 }} />
                    </a>
                    <a href="mailto:your-email@example.com">
                      <EmailIcon style={{ fontSize: 40 }} />
                    </a>
                  </div>
                </div>
            </div>
          <div className='order-2 lg:order-2'>
            <h1 className="text-center lg:text-left font-belsey text-2xl sm:text-3xl md:text-4xl lg:text-5xl">About Me 😄</h1>
            <p className="text-md lg:text-lg text-justify">
              Hello all, Kang Ming here. A graduate Computer Science student from Nanyang Technological University, I am an aspiring <strong>software engineer</strong> and <strong>data analyst</strong>.
              <br /><br/>
              With a multitude of projects I have worked on in my university tenure, I have amassed robust skills in <strong>full-stack development, data analytics,</strong> as well as <strong>machine learning and GPT-related technologies</strong>.
              <br /><br/>
              In my free time, I pursue photography (in both film and digital formats), jam to nostalgic tunes with my guitar and drums, and am an avid <i>Fallout</i> franchise lover.
              <br/><br/>
              Currently, I am open to any software-related full-time opportunities in Singapore. Please feel free to <a href='/contact' className="underline text-blue-500">contact me</a> using this form.
            </p>
          </div>
        </div>
      </div>
      <div id='projects' className=" mt-[6vh] container mx-auto animate-slideUp">
          <h1 className="text-4xl font-black font-belsey">Projects and Work Experience 👨🏻‍💻</h1>
          <p className="text-lg mt-6">Click on each card to learn more!</p>
      </div>
      <Projects/>
    </main>
  );
}
