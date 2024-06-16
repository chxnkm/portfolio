import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'


export default function Home() {
    return (
      <main>
        <Navbar/> 
        <div className="text container mx-auto">
            <div className="mt-32 grid grid-cols-2 gap-4">
                    <div>
                        <div className="docCentral flex flex-col items-center">
                            <Image src="/img/img1.jpg" width={600} height={900} alt="docCentral intro"/>
                            <p className='mt-2 font-medium'>Me and the docCentral team!</p>
                        </div>

                        <div className="docCentral flex flex-col items-center mt-12">
                            <Image src="/img/internship/doccentral_gif.gif" width={600} height={900} alt="docCentral intro" />
                            <p className='mt-2 font-medium'>docCentral landing page.</p>
                        </div>
                        <div className="docCentral flex flex-col items-center mt-12">
                            <Image src="/img/internship/guide.gif" width={600} height={900} alt="docCentral intro" />
                            <p className='mt-2 font-medium'>Screengrabs of the guide for docCentral.</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="col-span-2 lg:col-start-2 text-right">Internship at <span className="text-cpfGreen">CPF Board</span></h1>
                        <p className="text-xl col-span-2 lg:col-start-2 text-justify">
                            In the beginning of 2023, I was grateful to be offered the opportunity to intern at the CPF Board under the <strong>Frontier Products Team.</strong>
                            <br /><br/>
                            In my short 5-month tenure, I have been greatly exposed to industrial-standard full-stack development, and had the chance to be part of two projects - a<strong> QA-bot </strong> leveraging <strong>GPT technologies,</strong> and docCentral, a <strong>full-stack document templating webapp and plugin</strong> for Microsoft Word.
                        </p>
                        <h1 className="col-span-2 lg:col-start-2 text-right mt-16"><span className="text-qaPurple">GPT-powered QA Bot</span></h1>
                        <p className="text-xl col-span-2 lg:col-start-2 text-justify">
                            In the beginning of 2023, I was grateful to be offered the opportunity to intern at the CPF Board under the <strong>Frontier Products Team.</strong>
                            <br /><br/>
                            In my short 5-month tenure, I have been greatly exposed to industrial-standard full-stack development, and had the chance to be part of two projects - a<strong> QA-bot </strong> leveraging <strong>GPT technologies,</strong> and docCentral, a <strong>full-stack document templating webapp and plugin</strong> for Microsoft Word.
                        </p>
                        <h1 className="col-span-2 lg:col-start-2 text-right mt-16"><span className="text-dcYellow">docCentral</span></h1>
                        <p className="text-xl col-span-2 lg:col-start-2 text-justify">
                            In the beginning of 2023, I was grateful to be offered the opportunity to intern at the CPF Board under the <strong>Frontier Products Team.</strong>
                            <br /><br/>
                            In my short 5-month tenure, I have been greatly exposed to industrial-standard full-stack development, and had the chance to be part of two projects - a<strong> QA-bot </strong> leveraging <strong>GPT technologies,</strong> and docCentral, a <strong>full-stack document templating webapp and plugin</strong> for Microsoft Word.
                        </p>
                    </div>
            </div>
        </div>
        <Footer/>
      </main>
    );
  }