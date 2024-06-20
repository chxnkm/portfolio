import AutoCarousel from '@/components/AutoCarousel';

const images = [
  { src: 'img1.jpg', href: '/projects/internship' },
  { src: 'img2.jpg', href: '/projects/fyp' },
  { src: 'img3.jpg', href: '/projects/ctf' },
  { src: 'img4.jpg', href: '/hobbies/jamband' },
  { src: 'img5.jpg', href: '/hobbies/photos' },
  // Add more images as needed
];


export default function Home() {
  return (
    <main>
      <div className='w-screen bg-pastelBeige'>
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

      <div className="container mx-auto">
            <div className="mt-16 grid grid-cols-2 gap-24">
                <div>
                <h1 className="text-5 xl font-belsey font-black">
              What's Happening?
            </h1>

                </div>
                <div className='col-span-2 lg:col-start-2'>
                    <AutoCarousel basePath='/img/' images={images}/>
                </div>
                
            </div>
        </div>
      
    </main>
  );
}
