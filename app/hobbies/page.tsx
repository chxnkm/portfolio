import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      <div className='min-w-full flex items-center justify-center'>
        <div className="intro container mx-auto">
          <div className="intro-words text-center">
            <h1 className="mt-8 text-3xl sm:text-5xl lg:text-6xl font-belsey font-black">
              Hobbies</h1>
            <p className="text-sm sm:text-base lg:text-lg font-medium">When I&apos;m not busy coding, here&apos;s what I&apos;m doing.
              <br />
              Click on each card to take a look!</p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 px-8 gap-8 mt-12">
        <div className="col-span-1">
          <a href="/hobbies/photography">
            <Card className="relative min-h-[40vh] flex items-center justify-center hover:scale-[1.02] duration-300">
              <img src='/img/components/splash-photos.webp' alt='Music Splash' className='absolute inset-0 object-cover w-full h-full opacity-40 rounded-lg' />
              <h1 className="text-4xl text-center font-belsey font-black z-10">
                Photography
              </h1>
            </Card>
          </a>
        </div>
        <div className="col-span-1">
          <a href="/hobbies/music">
            <Card className="relative min-h-[40vh] flex items-center justify-center hover:scale-[1.02] duration-300">
              <img src='/img/components/splash-music.webp' alt='Music Splash' className='absolute inset-0 object-cover w-full h-full opacity-40 rounded-lg' />
              <h1 className="relative text-4xl text-center font-belsey font-black z-10">
                Music
              </h1>
            </Card>
          </a>
        </div>
      </div>
    </main>
  );
}