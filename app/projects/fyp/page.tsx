import Image from 'next/image'
import UnclickableImage from '@/components/UnclickableImage';


export default function Home() {
    return (
      <main>
        <div className="text container mx-auto">
            <div className="mt-32 grid grid-cols-2 gap-24">
                    <div>
                        <div className="docCentral flex flex-col items-center">
                            <UnclickableImage src="/img/fyp/fyp_1.gif" alt="docCentral intro" unoptimized={true}/>
                            <p className='mt-2 font-medium'>Screenshots from crowd detections in Singapore.</p>
                        </div>
                    </div>
                    <div>
                        <h1 className="col-span-2 lg:col-start-2 text-left font-belsey">Final Year Project 🕵🏻‍♂️</h1>
                        <p className="text-lg col-span-2 lg:col-start-2 text-justify">
                            For my final year in university, I delved into crowd estimation as my topic for my final-year project. Under the tutelage and guidance of my professor Cham Tat Jen, I successfully utilised and improved the <strong>Point-Query Transformer (PET)</strong> crowd counting method, and evaluated it on a <strong>local novel Singaporean crowd dataset</strong> created for this project.
                        </p>    
                    </div>
            </div>
            <div className="mt-32 grid grid-cols-2 gap-24">
                    <div>
                        <div className="docCentral flex flex-col items-center">
                            <UnclickableImage src="/img/fyp/pet.png" alt="PET model infrastructure"/>
                            <p className='mt-2 font-medium'>The PET Crowd Counting Model (Liu et. al., 2023)</p>
                        </div>
                    </div>
                    <div>
                    <h1 className="text-4xl col-span-2 lg:col-start-2 text-left"><span className="text-red-500">PET Crowd Counting Model 📊</span></h1>
                        <p className="text-lg col-span-2 lg:col-start-2 text-justify">
                            One of the products I worked on was spear-heading my team's large-language model (LLM) stack. We decided to venture and try out to create a GPT-powered question-answering bot capable of answering user-inputted queries about CPF. I worked on many aspects of the project, first by understanding the system of a language model, and started by collecting data from the CPF website via website automated website scraping with <strong>Selenium</strong>.
                            <br/><br/>
                            Leveraging the <strong>OpenAI GPT API</strong>, as well as a simple React-stack application, we were able to create a proof-of-concept, which received very positive feedback from the board of directors. We even presented the product in a inter-department sharing, where it also similarly was received very positively.
                        </p>   
                    </div>
            </div>
            <div className="mt-32 grid grid-cols-2 gap-24">
                    <div>
                        <div className="docCentral flex flex-col items-center">
                            <Image src="/img/internship/guide.gif" width={600} height={900} alt="docCentral intro" unoptimized={true}/>
                            <p className='mt-2 font-medium'>Screengrabs of the guide for docCentral.</p>
                        </div>
                    </div>
                    <div>
                    <h1 className="text-4xl col-span-2 lg:col-start-2 text-left"><span className="text-cpfGreen">Reflections</span></h1>
                        <p className="text-lg col-span-2 lg:col-start-2 text-justify">
                            docCental is a document templating plugin for Microsoft Word that enables government officers to create documents from templates in a seamless and time-saving method. It consists of a Next.js-based webapp and a Microsoft Word XML Add-in. It taps on FormSG as an input for the document, which can be templated through the add-in, and outputs a completed document to one's desired email.
                            <br/><br/>
                            The main motivations of creating docCentral was to reduce repetitive document filling, where most of the document does not change, and only pertinent fields like the name, date and so on need to be modified. It streamlines workflow and improves productivity. Upon rolling out in a pilot to various interested governmental agencies, many express great interest in using the product.

                        </p>   
                    </div>
            </div>
        </div>
      </main>
    );
  }
