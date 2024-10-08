import dynamic from 'next/dynamic';
import Link from 'next/link';

const CaptionedPicture = dynamic (() => import("@/components/CaptionedPicture"));

const pictures = {
    ctfSplash: {
        src: '/img/ctf/ctf-splash.webp',
        alt: 'Completed CTF',
        caption: 'All challenges completed 😎'
    }
}

export default function Home() {
    return (
        <main>
            <div>
                <section className="mt-8 flex flex-col md:flex-row gap-4 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
                    <div className='flex-1 bg-pastelBeige border-[2.5px] p-8 border-slate-700 rounded-lg order-1 mb-8 lg:mb-0'>
                        <h1 className="text-left font-belsey ">CTF Assignment - Retrospective</h1>
                        <p className="md:text-lg text-justify mt-4">
                            In my final semester in university, I was handed the opportunity to participate in a CTF as one part of a continuous assessment under my software security module.
                            <br /><br />
                            The CTF included multiple types of challenges, ranging from simple steganography challenges and SQL-injections to more complicated OSINT and overflow-based tasks.
                            <br /><br />
                            Overall, my team, &apos;sanitycheck&apos;, managed to attain the <strong>fastest 25% of submissions with all challenges completed</strong>, and obtaining an <strong>A+</strong> in the post-CTF write-up. Our report can be viewed <Link href='https://docs.google.com/document/d/1mSA6R24XB0T6NnGSDTNbPv5IG0WEnMUkfOjE8nq7HeQ/edit?usp=sharing' className="underline text-blue-500" target="_blank" rel="noopener noreferrer" prefetch={false}>here</Link>.
                        </p>
                    </div>
                    <div className='flex-1 order-2 mb-8 lg:mb-0'>
                        <CaptionedPicture {...pictures.ctfSplash} loading='eager' priority={true}/>
                    </div>
                </section>

                <section className="mt-20 lg:mt-32 bg-pastelBeige border-[2.5px] p-8 border-slate-700 rounded-lg">
                    <h1 className="text-left font-belsey"><span className="text-text">Reflections</span></h1>
                    <p className="md:text-lg text-justify mt-4">
                        Overall, I felt that me and my team did a stellar job despite us being first-timers in CTF challenges. The countless practices and hack-the-boxes certainly paid off for the actual CTF, and I am hugely appreciative of my members for our success.
                        <br /><br />
                        The importance of teamwork shouldn&apos;t be understated - we couldn&apos;t have done it without each other. I have also learnt that it&apos;s always good to be inquisitive, and to constantly ask questions, in which then one will improve themselves further.
                    </p>
                </section>

            </div>
        </main>
    );
}