import Image from 'next/image'
import Link from "next/link"
import DownloadCard from '@/components/ui/DownloadCard';


export default function Home() {
    return (
      <main>
        <div className="container mx-auto">
            <div className="mt-32 grid grid-cols-2 gap-24">
                <div>
                    <Image src="/img/misc/me.jpg" width={600} height={900} alt="my face"/>
                </div>
                <div className='col-span-2 lg:col-start-2'>
                    <h1 className="text-left">About Me 😄</h1>
                    <p className="text-xl text-justify">
                        Hello all, Kang Ming here. A graduate Computer Science student from Nanyang Technological University, I am an aspiring <strong>software engineer</strong> and <strong>data analyst</strong>.
                        <br /><br/>
                        With a multitude of projects I have worked on in my university tenure, I have amassed robust skills in <strong>full-stack development,</strong> as well as <strong>machine learning and GPT-related technologies</strong>.
                        <br /><br/>
                        I am open to any software-related full-time opportunities in Singapore. I am contactable via my <Link href="mailto:ckangming0@gmail.com" className="text-blue-500 underline">email</Link>, and my résumé is available for download below.
                    </p>
                    <DownloadCard fileName='Download my résumé!' fileUrl='/resume/RESUME_KANG_MING.pdf'></DownloadCard>
                </div>
                
            </div>
        </div>
        
      </main>
    );
  }