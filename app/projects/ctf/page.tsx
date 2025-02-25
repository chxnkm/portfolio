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
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose prose-lg dark:prose-invert">
            <header className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-merriweather">CTF Assignment - Retrospective</h1>
                <div className="text-gray-600 dark:text-gray-400 mb-8">
                    <time>January 2024 - April 2024</time>
                    <span className="mx-2">•</span>
                    <span>Software Security Module</span>
                </div>
                <CaptionedPicture {...pictures.ctfSplash} loading='eager' priority={true} className="w-full rounded-xl shadow-lg"/>
            </header>

            <section className="mb-16">
                <p className="text-lg leading-relaxed">
                    In my final semester in university, I was handed the opportunity to participate in a CTF as one part of a continuous assessment under my software security module.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    The CTF included multiple types of challenges, ranging from simple steganography challenges and SQL-injections to more complicated OSINT and overflow-based tasks.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    Overall, my team, 'sanitycheck', managed to attain the <strong>fastest 25% of submissions with all challenges completed</strong>, and obtaining an <strong>A+</strong> in the post-CTF write-up. Our report can be viewed <Link href='https://docs.google.com/document/d/1mSA6R24XB0T6NnGSDTNbPv5IG0WEnMUkfOjE8nq7HeQ/edit?usp=sharing' className="underline text-blue-500" target="_blank" rel="noopener noreferrer" prefetch={false}>here</Link>.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">Reflections</h2>
                <p className="text-lg leading-relaxed">
                    Overall, I felt that me and my team did a stellar job despite us being first-timers in CTF challenges. The countless practices and hack-the-boxes certainly paid off for the actual CTF, and I am hugely appreciative of my members for our success.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    The importance of teamwork shouldn't be understated - we couldn't have done it without each other. I have also learnt that it's always good to be inquisitive, and to constantly ask questions, in which then one will improve themselves further.
                </p>
            </section>
        </article>
      </main>
    );
}