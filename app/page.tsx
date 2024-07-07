import ContactForm from "@/components/ContactForm";
import Projects from "@/components/Projects";
import UnclickableImage from "@/components/UnclickableImage";


export default function Home() {
  return (
    <main>
      <div className='bg-image-with-opacity min-w-full flex items-center justify-center animate-slideUp'>
  <div className="intro container mx-auto">
    <div className='flex gap-12'>
      <div className="intro-words flex-1">
        <h1 className="container mt-32 text-6xl font-belsey font-black">Hello, I'm <span className="text-text leading-custom"><br/>Kang Ming.</span></h1>
        <p className="container text-2xl font-bold">I'm a <span className="text-pastelBlue">Computer Science graduate</span>,<br/><span className="text-pastelRed">software engineer</span>, and <br/>an <span className="text-pastelOrange">avid tinkerer and hobbyist</span>.</p>
        <p className="container text-xl font-medium mb-12">Welcome to my portfolio. Happy browsing!</p>
      </div>
      <div className='intro-image flex items-center justify-center overflow-clip'>
        <div className="w-0 h-0 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full">
          <div style={{
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/img/misc/main_splash.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '50%',
          }} />
        </div>
      </div>
    </div>        
  </div>
</div>

      <div className="about-me container mx-auto">
      <div className="mt-32 grid grid-cols-2 gap-24 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
                <div className="mt-20">
                    <UnclickableImage width={480} src="/img/misc/me.jpg" alt="my face" />
                </div>
                <div className='col-span-2 lg:col-start-2'>
                    <h1 className="text-left font-belsey text-2xl sm:text-3xl md:text-4xl lg:text-5xl">About Me 😄</h1>
                    <p className="text-xl text-justify">
                        Hello all, Kang Ming here. A graduate Computer Science student from Nanyang Technological University, I am an aspiring <strong>software engineer</strong> and <strong>data analyst</strong>.
                        <br /><br/>
                        With a multitude of projects I have worked on in my university tenure, I have amassed robust skills in <strong>full-stack development, data analytics,</strong> as well as <strong>machine learning and GPT-related technologies</strong>.
                        <br /><br/>
                        In my free time, I pursue photography (in both film and digital formats), jam to nostalgic tunes with my guitar and drums, and am an avid <i>Fallout</i> franchise lover.
                        <br/><br/>
                        Curently, I am open to any software-related full-time opportunities in Singapore. Please feel free to <a href='/contact' className="underline text-blue-500">contact me</a> using this form.
                    </p>
                </div>
                
            </div>
      </div>
      <div id='projects' className=" mt-[6vh] container mx-auto animate-slideUp">
          <h1 className="text-4xl font-black font-belsey">Projects and Work Experience 👨🏻‍💻</h1>
          <p className="text-lg mt-12">Click on each card to learn more!</p>
      </div>
      <Projects/>
    </main>
  );
}
