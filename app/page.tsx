import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
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
      <Navbar/> 
      <div className="intro container mx-auto">
        <div className='flex'>
          <div className="intro-words flex-1">
            <h1 className="container mt-32 text-6xl">
              Hello, I'm <span className="text-pastelBlue"><br/>Kang Ming.</span>
            </h1>
            <p className="container text-2xl font-medium">I'm a <strong><span className="text-pastelGreen">Computer Science graduate</span>, a <span className="text-pastelRed">software engineer</span>, and an <span className="text-pastelOrange">avid tinkerer</span>.</strong></p>
            <p className="container text-xl font-medium">Welcome to my portfolio. Happy browsing!</p>
          </div>
        <div className='intro-image flex-1 items-center justify-center mt-12'>
          <AutoCarousel basePath='/img/' images={images}/>
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
            <AutoCarousel basePath='/img/' images={images}/>
          </div>
        </div>
      </div>
      
      <Footer/>
    </main>
  );
}
