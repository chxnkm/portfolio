import UnclickableImage from '@/components/UnclickableImage';
import { Button } from '@/components/ui/button';

export default function Home() {
    return (
      <main>
        <div className="text container mx-auto">
        
            <div className="mt-32 grid grid-cols-2 gap-4 sm:gap-4 md:gap-8 lg:gap-16 xl:gap-24">
                    <div>
                        
                        <div className="flex flex-col items-center">
                            <UnclickableImage src="/img/img3.jpg" alt="Completed CTF" />
                            <p className='mt-2 font-medium'>All challenges completed 😎</p>
                        </div>
                    </div>
                    <div className='bg-pastelBeige border-4 p-8 border-slate-700 rounded-lg overflow-hidden max-w-4xl mx-auto'>
                      <h1 className="col-span-2 lg:col-start-2 text-left font-belsey break-words text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                          CTF Assignment - Retrospective
                      </h1>
                      <p className="col-span-2 lg:col-start-2 text-justify break-words text-sm sm:text-base md:text-medium lg:text-lg">
                      In my final semester in university, I was handed the opportunity to participate in a CTF as one part of a continuous assessment under my software security module.
                      <br /><br/>
                      The CTF included multiple types of challenges, ranging from simple steganography challenges and SQL-injections to more complicated OSINT and overflow-based tasks.
                      <br/><br/>
                      Overall, my team, 'sanitycheck', managed to attain the <strong>fastest 25% of submissions with all challenges completed</strong>, and obtaining an <strong>A+</strong> in the post-CTF write-up.
                  </p>  
                </div>
            </div>
            <div className="mt-32 bg-pastelBeige border-4 p-8 border-slate-700 rounded-lg">
                    <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-left font-belsey"><span className="text-cpfGreen">Reflections</span></h1>
                        <p className="text-lg col-span-2 lg:col-start-2 text-justify">
                          Overall, I felt that me and my team did a stellar job despite us being first-timers in CTF challenges. The countless practices and hack-the-boxes certainly paid off for the actual CTF, and I am hugely appreciative of my members for our success. 
                          <br/><br/>
                          The importance of teamwork shouldn't be understated - we couldn't have done it without each other. I have also learnt that it's always good to be inquisitive, and to constantly ask questions, in which then one will improve themselves further.

                        </p>  
                    </div>
                    
            </div>
        </div>
      </main>
    );
}