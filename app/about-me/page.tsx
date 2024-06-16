import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from "next/link"


export default function Home() {
    return (
      <main>
        <Navbar/> 
        <div className="text container mx-auto">
            <div className="mt-32 grid grid-cols-2 gap-4">
                <div>
                    <Image src="/img/me.jpg" width={600} height={900} alt="my face"/>
                </div>
                <div>
                    <h1 className="col-span-2 lg:col-start-2 text-right">About Me 😄</h1>
                    <p className="text-xl col-span-2 lg:col-start-2 text-justify">
                        Hello all, Kang Ming here. A graduate Computer Science student from Nanyang Technological University, I am an aspiring <strong>software engineer</strong> and <strong>data analyst</strong>.
                        <br /><br/>
                        With a multitude of projects I have worked on in my university tenure, I have amassed robust skills in <strong>full-stack development,</strong> as well as <strong>machine learning and GPT-related technologies</strong>.
                        <br /><br/>
                        I am open to any software-related full-time opportunities in Singapore. My résumé is linked <Link href="/resume/RESUME_KANG_MING.pdf" className="text-blue-500 underline">here</Link>, and I am contactable via my <Link href="mailto:ckangming0@gmail.com" className="text-blue-500 underline">email</Link> too.
                    </p>
                </div>
                
            </div>
        </div>
        
      </main>
    );
  }