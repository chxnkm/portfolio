import Projects from "@/components/project";


export default function Home() {
  return (
    <main>
      <div className='w-screen bg-image-with-opacity'>
      <div className="intro container mx-auto">
        <div className='flex gap-12'>
          <div className="intro-words flex-1">
          <h1 className="container mt-32 text-6xl font-belsey font-black">Hello, I'm <span className="text-text leading-custom"><br/><a href='/about-me' className="hover:underline">Kang Ming.</a></span>
          </h1>
            <p className="container text-2xl font-bold">I'm a <span className="text-pastelBlue">Computer Science graduate</span>,<br/><span className="text-pastelRed">software engineer</span>, and <br/>an <span className="text-pastelOrange">avid tinkerer and hobbyist</span>.</p>
            <p className="container text-xl font-medium">Welcome to my portfolio. Happy browsing!</p>
          </div>
          <div className='intro-image flex-1 items-center justify-center my-12 pl-8'>
            <div style={{
              width: '480px',
              height: '480px',
              backgroundImage: 'url("/img/misc/main_splash.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              clipPath: 'polygon(62% 7%, 100% 1%, 87% 81%, 18% 100%, 3% 27%)',
              borderRadius: '70%',
              boxShadow: '0 0 20px 10px rgba(0, 0, 0, 0.7)'
            }} />
          </div>
        </div>        
      </div>
      </div>
      <div className=" mt-12 container mx-auto">
          <h1 className="text-4xl font-black font-belsey">My Projects 👨🏻‍💻</h1>
          <p className="text-lg mt-12">Click on each card to learn more!</p>
        </div>
      <Projects/>
    </main>
  );
}
