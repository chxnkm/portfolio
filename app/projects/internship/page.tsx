import dynamic from 'next/dynamic';

const CaptionedPicture = dynamic (() => import("@/components/CaptionedPicture"));

const pictures = {
    internship: {
        src: '/img/internship/intern-splash.webp',
        alt: 'docCentral intro',
        caption: 'Me and the docCentral team!'
    },
    guide: {
        src: '/img/internship/guide.webp',
        alt: 'docCentral intro',
        caption: 'Screengrabs of the guide for docCentral.'
    },
    chatCentral: {
        src: '/img/internship/chatcentral.webp',
        alt: 'GPT-QA Bot example',
        caption: 'GPT-powered QA Bot in practice.'
    }   
}

export default function Home() {
    return (
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article>
            <header className="mb-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 font-merriweather">My Internship Journey at CPF Board</h1>
                <div className="text-gray-600 dark:text-gray-400 mb-8">
                    <time>January - May 2023</time>
                </div>
                <CaptionedPicture {...pictures.internship} loading='eager' priority={true} className="w-full rounded-xl shadow-lg"/>
            </header>

            <section className="mb-16">
                <p className="text-lg leading-relaxed mb-8">
                    In the beginning of 2023, I was grateful to be offered the opportunity to intern at the CPF Board under the <strong>Frontier Products Team</strong>. During my short 5-month tenure, I gained invaluable exposure to industrial-standard full-stack development and had the privilege of contributing to two significant projects.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-qaPurple">GPT-powered QA Bot 🤖</h2>
                <div className="mb-8">
                    <CaptionedPicture {...pictures.chatCentral} width={480} className="w-full rounded-xl shadow-lg"/>
                </div>
                <p className="text-lg leading-relaxed">
                    I led the development of our team&apos;s large-language model (LLM) stack, creating a GPT-powered question-answering bot for CPF-related queries. The project began with automated data collection from the CPF website using <strong>Selenium</strong>.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    Using the <strong>OpenAI GPT API</strong> and a React-based application, we developed a proof-of-concept that received enthusiastic feedback from the board of directors. The success of our inter-department presentation further validated the potential of this technology.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-dcYellow">docCentral 📑</h2>
                <div className="mb-8">
                    <CaptionedPicture {...pictures.guide} width={480} className="w-full rounded-xl shadow-lg"/>
                </div>
                <p className="text-lg leading-relaxed">
                    docCentral revolutionizes document creation for government officers through a seamless Microsoft Word plugin. Built with Next.js and Microsoft Word XML Add-in technology, it integrates with FormSG to streamline document templating and delivery.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    The project addresses the challenge of repetitive document filling by automating the process of updating key fields while maintaining document consistency. Following a successful pilot program, multiple government agencies have expressed strong interest in adopting the solution.
                </p>
            </section>
        </article>
      </main>
    );
}
