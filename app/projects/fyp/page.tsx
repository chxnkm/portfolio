import UnclickableImage from '@/components/UnclickableImage';
import Link from 'next/link';


export default function Home() {
    return (
      <main>
        <div className="text container mx-auto">
        
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
            <div className='bg-pastelBeige border-4 p-8 border-slate-700 rounded-lg order-2 mb-8 lg:mb-0'>
                <h1 className="text-left font-belsey text-lg sm:text-xl md:text-2xl lg:text-5xl">Final Year Project 🕵🏻‍♂️</h1>
                <p className="text-sm md:text-lg text-justify mt-4">
                    For my final year in university, I delved into crowd estimation as my topic for my final-year project. Under the tutelage and guidance of my professor Cham Tat Jen, I successfully utilised and improved the <strong>Point-Query Transformer (PET)</strong> crowd counting method, and evaluated it on a <strong>local novel Singaporean crowd dataset</strong> created for this project; some of the photos from the dataset are shown below.<br/><br/>
                    The full report can be found <Link href="https://dr.ntu.edu.sg/handle/10356/174984" className="text-blue-500 underline">here.</Link>
                </p>    
            </div>
            <div className="docCentral flex flex-col items-center order-1">
                <UnclickableImage src="/img/fyp/fyp_1.gif" alt="docCentral intro" unoptimized={true}/>
                <p className='mt-2 font-medium text-center'>Screenshots from crowd detections from the SG-CE dataset.</p>
            </div>
        </div>
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
            <div className='order-2 mb-8 lg:mb-0'>
                <h1 className="text-left font-belsey text-2xl sm:text-3xl md:text-4xl lg:text-5xl"><span className="text-red-500">PET Crowd Counting Model 📊</span></h1>
                <p className="text-sm md:text-lg text-justify mt-4">
                    The PET crowd counting method is a transformer-based crowd estimation technique. To summarize, it involves a standard encoder-decoder transformer, modified with a variable rectangle window to deal with queried points of different densities. The densities of each queried point in a crowd image is determined using the <strong>point-query quadtree</strong>, which splits dense points into 4 smaller points for processing. The eventual predictions will then be crafted with the points queried and processed.<br/><br/>
                    The architecture of the PET model is shown on the right.
                </p>   
            </div>
            <div className="docCentral flex flex-col items-center order-1">
                <UnclickableImage width={400} src="/img/fyp/pet.png" alt="PET model infrastructure"/>
                <p className='mt-2 font-medium text-center'>The PET Crowd Counting Model (Liu et. al., 2023)</p>
            </div>
        </div>

        <div className="mt-32 bg-pastelBeige border-4 p-8 border-slate-700 rounded-lg">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left font-belsey"><span className="text-cpfGreen">Reflections</span></h1>
                <p className="text-sm md:text-lg text-justify mt-4">
                    The journey of the final-year project was not an easy one - countless sleepless nights were spent toiling over training data, hyperparameter tuning, and writing and structuring ideas into a full-fledged report. Time management and efficiency were crucial in carrying the project over the line.<br/><br/>
                    If I were to change anything in my project, it will be to give more time to my dataset creation and curation, which I felt was slightly lacking. However, I felt that the final-year project was overall well done, with an emphasis on <strong>clarity and solution-finding</strong>.
                </p>  
            </div>
        </div>
      </main>
    );
  }
