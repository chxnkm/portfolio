import dynamic from 'next/dynamic';

import Link from 'next/link';
const CaptionedPicture = dynamic(() => import("@/components/CaptionedPicture"));

const pictures = {
    pet: {
        src: '/img/fyp/pet.png',
        alt: 'PET model infrastructure',
        caption: 'The PET Crowd Counting Model (Liu et. al., 2023)',
        width: 400
    },
    fyp_1: {
        src: '/img/fyp/fyp_1.gif',
        alt: 'docCentral intro',
        caption: 'Screenshots from crowd detections from the SG-CE dataset.'
    }
}

export default function Home() {
    return (
        <main>
            <div>
                <section className="mt-8 flex flex-col md:flex-row gap-4 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
                    <div className='flex-1 bg-pastelBeige border-[2.5px] p-8 border-slate-700 rounded-lg order-1 mb-8 lg:mb-0'>
                        <h1 className="text-left font-belsey ">Final Year Project 🕵🏻‍♂️</h1>
                        <p className="md:text-lg text-justify mt-4">
                            For my final year in university, I delved into crowd estimation as my topic for my final-year project. Under the tutelage and guidance of my professor Cham Tat Jen, I successfully utilised and improved the <strong>Point-Query Transformer (PET)</strong> crowd counting method, and evaluated it on a <strong>local novel Singaporean crowd dataset</strong> created for this project; some of the photos from the dataset are shown below.<br /><br />
                            The full report can be found <Link href="https://dr.ntu.edu.sg/handle/10356/174984" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">here.</Link>
                        </p>
                    </div>
                    <div className='flex-1 order-2 mb-8 lg:mb-0'>
                        <CaptionedPicture {...pictures.fyp_1} loading='eager' priority={true} />
                    </div>
                </section>
                <section className="mt-20 md:mt-32 flex flex-col md:flex-row gap-4 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
                    <div className='flex-1 order-1 mb-8 lg:mb-0'>
                        <h1 className="text-left font-belsey text-xl sm:text-2xl md:text-3xl lg:text-4xl"><span className="text-red-500">PET Crowd Counting Model 📊</span></h1>
                        <p className="md:text-lg text-justify mt-4">
                            The PET crowd counting method is a transformer-based crowd estimation technique. To summarize, it involves a standard encoder-decoder transformer, modified with a variable rectangle window to deal with queried points of different densities. The densities of each queried point in a crowd image is determined using the <strong>point-query quadtree</strong>, which splits dense points into 4 smaller points for processing. The eventual predictions will then be crafted with the points queried and processed.<br /><br />
                            The architecture of the PET model is shown on the left.
                        </p>
                    </div>
                    <div className='flex-1 order-2 mb-8 lg:mb-0'>
                        <CaptionedPicture {...pictures.pet} />
                    </div>
                </section>

                <section className="mt-20 md:mt-32 bg-pastelBeige border-[2.5px] p-8 border-slate-700 rounded-lg">
                    <h1 className="text-left font-belsey"><span className="text-text">Reflections</span></h1>
                    <p className="md:text-lg text-justify mt-4">
                        The journey of the final-year project was not an easy one - countless sleepless nights were spent toiling over training data, hyperparameter tuning, and writing and structuring ideas into a full-fledged report. Time management and efficiency were crucial in carrying the project over the line.<br /><br />
                        If I were to change anything in my project, it will be to give more time to my dataset creation and curation, which I felt was slightly lacking. However, I felt that the final-year project was overall well done, with an emphasis on <strong>clarity and solution-finding</strong>.
                    </p>
                </section>
            </div>
        </main>
    );
}
