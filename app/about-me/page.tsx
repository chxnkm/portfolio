import Navbar from '@/components/Navbar'
import Image from 'next/image'


export default function Home() {
    return (
      <main>
        <Navbar/> 
        <div className="text container mx-auto">
            <div className="mt-32 grid grid-cols-2 gap-4">
                <div>
                    <Image src="/img/img1.jpg" width={500} height={500} alt="my face"/>
                </div>
                <div>
                    <h1 className="col-span-2 lg:col-start-2 text-right">About Me</h1>
                    <p className="col-span-2 lg:col-start-2 text-right">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                
            </div>
        </div>
        
      </main>
    );
  }