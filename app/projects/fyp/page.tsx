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
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg dark:prose-invert">
            <header className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-merriweather">Final Year Project</h1>
                <div className="text-gray-600 dark:text-gray-400 mb-8">
                    <time>August 2023 - April 2024</time>
                    <span className="mx-2">•</span>
                    <span>Crowd Counting Research</span>
                </div>
                <CaptionedPicture {...pictures.fyp_1} loading='eager' priority={true} className="w-full rounded-xl shadow-lg"/>
            </header>

            <section className="mb-16">
                <p className="text-lg leading-relaxed mb-8">
                    For my final year in university, I delved into crowd estimation as my topic for my final-year project. Under the tutelage and guidance of my professor Cham Tat Jen, I successfully utilised and improved the <strong>Point-Query Transformer (PET)</strong> crowd counting method, and evaluated it on a <strong>local novel Singaporean crowd dataset</strong> created for this project. The full report can be found <Link href="https://dr.ntu.edu.sg/handle/10356/174984" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">here.</Link>
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">PET Crowd Counting Model 📊</h2>
                <div className="mb-8">
                    <CaptionedPicture {...pictures.pet} className="w-full rounded-xl shadow-lg"/>
                </div>
                <p className="text-lg leading-relaxed">
                    The PET crowd counting method is a transformer-based crowd estimation technique. To summarize, it involves a standard encoder-decoder transformer, modified with a variable rectangle window to deal with queried points of different densities. The densities of each queried point in a crowd image is determined using the <strong>point-query quadtree</strong>, which splits dense points into 4 smaller points for processing. The eventual predictions will then be crafted with the points queried and processed.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Reflections</h2>
                <p className="text-lg leading-relaxed">
                    The journey of the final-year project was not an easy one - countless sleepless nights were spent toiling over training data, hyperparameter tuning, and writing and structuring ideas into a full-fledged report. Time management and efficiency were crucial in carrying the project over the line.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    If I were to change anything in my project, it will be to give more time to my dataset creation and curation, which I felt was slightly lacking. However, I felt that the final-year project was overall well done, with an emphasis on <strong>clarity and solution-finding</strong>.
                </p>
            </section>
        </article>
      </main>
    );
}
