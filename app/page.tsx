
import Navbar from '@/components/Navbar'
import AutoCarousel from '@/components/AutoCarousel';
import Image from 'next/image'




export default function Home() {
  return (
    <main>
      <Navbar/> 
      <div className="intro container">
        <h1 className="flex container mx-auto text-6xl mt-32">Hello, I'm Kang Ming.</h1>
        <p className="flex container mx-auto font-medium text-xl">I'm a Computer Science graduate, a software engineer and an avid tinkerer.</p>
        <p className="flex container mx-auto font-medium text-xl">Welcome to my portfolio. Happy browsing!</p>
      </div>
      <div className="container mx-auto">
        <div className="flex">
          <div className="body flex-1  p-8">
            <div>
              <h1 className="text-3xl font-bold mb-4 mt-12">Your Text Here</h1>
              <p>This is the text side of the container.</p>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center bg-white p-8">
            <AutoCarousel/>
          </div>
        </div>
      </div>
      
      
    </main>
  );
}
