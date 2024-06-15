
import Navbar from '@/components/Navbar'
import AutoCarousel from '@/components/AutoCarousel';
import Image from 'next/image'




export default function Home() {
  return (
    <main>
      <Navbar/> 
      <div className="intro container mx-auto">
        <div className='flex'>
          <div className="intro-words flex-1">
            <h1 className="container mt-32 text-5xl">
              Hello, I'm <span className="text-pastelBlue">Kang Ming.</span>
            </h1>
            <p className="container text-xl font-medium">I'm a Computer Science graduate, a software engineer, and an avid tinkerer.</p>
            <p className="container text-xl font-medium">Welcome to my portfolio. Happy browsing!</p>
          </div>
        <div className='intro-image flex-1 items-center justify-center mt-12'>
          <AutoCarousel length={3} basePath='/img/'/>
          {/* <Image
              src={'/img/splash.jpg'}
              alt={'lolie'}
              width={640}
              height={480}
            /> */}
        </div>
      </div>
        
        
      </div>
      <div className="container mx-auto">
        <div className="flex">
          <div className="body flex-1  p-8">
            <div>
              <h1 className="text-3xl font-bold mb-4 mt-12">Past Projects</h1>
              <p>Some of my past projects include:</p>
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
            <AutoCarousel length={3} basePath='/img/'/>
          </div>
        </div>
      </div>
      
      
    </main>
  );
}
