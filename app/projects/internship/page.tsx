import UnclickableImage from '@/components/UnclickableImage';


export default function Home() {
    return (
      <main>
        <div className="text container mx-auto">
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
                <div className='bg-pastelBeige border-[2.5px] p-8 border-slate-700 rounded-lg order-2 mb-8 lg:mb-0'>
                    <h1 className="text-left font-belsey text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Internship at <span className="text-cpfGreen">CPF Board</span></h1>
                    <p className="text-sm md:text-lg text-justify mt-4">
                        In the beginning of 2023, I was grateful to be offered the opportunity to intern at the CPF Board under the <strong>Frontier Products Team.</strong>
                        <br /><br/>
                        In my short 5-month tenure, I have been greatly exposed to industrial-standard full-stack development, and had the chance to be part of two projects - a<strong> QA-bot </strong> leveraging <strong>GPT technologies,</strong> and docCentral, a <strong>full-stack document templating webapp and plugin</strong> for Microsoft Word.
                    </p>    
                </div>
                <div className="docCentral flex flex-col items-center order-1">
                    <UnclickableImage src="/img/internship/intern-splash.jpg" alt="docCentral intro" />
                    <p className='mt-2 font-medium text-center'>Me and the docCentral team!</p> 
                </div>
            </div>
            <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
                <div className='order-2 mb-8 lg:mb-0'>
                    <h1 className="text-left font-belsey text-xl sm:text-2xl md:text-3xl lg:text-4xl"><span className="text-qaPurple">GPT-powered QA Bot 🤖</span></h1>
                    <p className="text-sm md:text-lg text-justify mt-4">
                        One of the products I worked on was spear-heading my team&apos;s large-language model (LLM) stack. We decided to venture and try out to create a GPT-powered question-answering bot capable of answering user-inputted queries about CPF. I worked on many aspects of the project, first by understanding the system of a language model, and started by collecting data from the CPF website via website automated website scraping with <strong>Selenium</strong>.
                        <br/><br/>
                        Leveraging the <strong>OpenAI GPT API</strong>, as well as a simple React-stack application, we were able to create a proof-of-concept, which received very positive feedback from the board of directors. We even presented the product in a inter-department sharing, where it also similarly was received very positively.
                    </p>   
                </div>
                <div className="docCentral flex flex-col items-center order-1">
                    <UnclickableImage src="/img/internship/chatcentral.jpg" alt="GPT-QA Bot example" />
                    <p className='mt-2 font-medium text-center'>GPT-powered QA Bot in practice.</p>
                </div>
            </div>

            <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
                <div className='order-2 mb-8 lg:mb-0'>
                    <h1 className="text-left font-belsey text-xl sm:text-2xl md:text-3xl lg:text-4xl"><span className="text-dcYellow">docCentral 📑</span></h1>
                    <p className="text-sm md:text-lg text-justify mt-4">
                        docCental is a document templating plugin for Microsoft Word that enables government officers to create documents from templates in a seamless and time-saving method. It consists of a Next.js-based webapp and a Microsoft Word XML Add-in. It taps on FormSG as an input for the document, which can be templated through the add-in, and outputs a completed document to one&apos;s desired email.
                        <br/><br/>
                        The main motivations of creating docCentral was to reduce repetitive document filling, where most of the document does not change, and only pertinent fields like the name, date and so on need to be modified. It streamlines workflow and improves productivity. Upon rolling out in a pilot to various interested governmental agencies, many express great interest in using the product.
                    </p>   
                </div>
                <div className="docCentral flex flex-col items-center order-1">
                    <UnclickableImage src="/img/internship/guide.gif" alt="docCentral intro"/>
                    <p className='mt-2 font-medium text-center'>Screengrabs of the guide for docCentral.</p>
                </div>
            </div>
        </div>
      </main>
    );
  }
