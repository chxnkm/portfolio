import Image from 'next/image'
import UnclickableImage from '@/components/UnclickableImage';
import Link from 'next/link';


export default function Home() {
    return (
      <main>
        <div className="text container mx-auto">
            <div className="mt-32 grid grid-cols-2 gap-24">
                    <div>
                        <div className="docCentral flex flex-col items-center">
                            <UnclickableImage src="/img/fyp/fyp_1.gif" alt="docCentral intro" unoptimized={true}/>
                            <p className='mt-2 font-medium'>Screenshots from crowd detections from the SG-CE dataset.</p>
                        </div>
                    </div>
                    <div className='bg-pastelBeige border-4 p-8 border-slate-700 rounded-lg'>
                        <h1 className="col-span-2 lg:col-start-2 text-left font-belsey">Final Year Project 🕵🏻‍♂️</h1>
                        <p className="text-lg col-span-2 lg:col-start-2 text-justify">
                            For my final year in university, I delved into crowd estimation as my topic for my final-year project. Under the tutelage and guidance of my professor Cham Tat Jen, I successfully utilised and improved the <strong>Point-Query Transformer (PET)</strong> crowd counting method, and evaluated it on a <strong>local novel Singaporean crowd dataset</strong> created for this project; some of the photos from the dataset are shown on the left.<br/><br/>
                            The full report can be found <Link href="https://dr.ntu.edu.sg/handle/10356/174984" className="text-blue-500 underline">here.</Link>
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
                            The PET crowd counting method is a transformer-based crowd estimation technique. To summise, it involves a standard encoder-decoder transformer, modified with a variable rectangle window to deal with queried points of different densities. The densities of each queried point in a crowd image is determined using the <strong>point-query quadtree</strong>, which splits dense points into 4 smaller points for processing. The eventual predictions will then be crafted with the points queried and processed.<br/><br/>
                            The architecture of the PET model is shown on the left.
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
