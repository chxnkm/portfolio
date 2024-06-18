import AutoCarousel from '@/components/AutoCarousel';
import Image from 'next/image';

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
      <div className='w-screen bg-pastelBeige border-b-4 border-dcYellow'>
      <div className="intro container mx-auto">
        <div className='flex gap-12'>
          <div className="intro-words flex-1">
            <h1 className="container mt-32 text-6xl font-belsey font-black">
              Hello, I'm <span className="text-dcYellow leading-custom"><br/>Kang Ming.</span>
            </h1>
            <p className="container text-2xl font-bold">I'm a <span className="text-pastelGreen">Computer Science graduate</span>, <br/>a <span className="text-pastelRed">software engineer</span>, and <br/>an <span className="text-pastelOrange">avid tinkerer and hobbyist</span>.</p>
            <p className="container text-xl font-medium">Welcome to my portfolio. Happy browsing!</p>
          </div>
          <div className='intro-image flex-1 items-center justify-center my-12 pl-8'>
            
            <div style={{ width: '480px', height: '480px', backgroundImage: 'url("/img/misc/main_splash.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '2vh'}}></div>
      </div>
      </div>
        
        
      </div>
      </div>
      
      <div className="container mx-auto">
        <div className="flex">
          <div className="body flex-1  p-8">
            <div>
              <h1 className="text-3xl font-bold mb-4 mt-12">Past Projects</h1>
              <p>Some of my past projects include:</p>
              {test}
              <ul>
                  <li>
                    s
                  </li>
                  <li>
                    s
                  </li>
                </ul>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center bg-white p-8">
            <AutoCarousel basePath='/img/' images={images}/>
          </div>
        </div>
      </div>
      
    </main>
  );
}
