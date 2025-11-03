import { Card } from "@/components/ui/card";
import Image from "next/image";

type Hobby = {
  title: string;
  image: string;
  alt: string;
  link: string;
}

const HobbyCard = ({title, image, alt, link}: Hobby) => {
  return (
    <a href={link}>
      <Card className="relative min-h-[60vh] flex items-center justify-center hover:scale-[1.02] duration-300">
        <Image src={image} alt={alt} fill={true} className='absolute inset-0 object-cover w-full h-full opacity-40 rounded-lg' />
        <h1 className="text-center font-merriweather font-black z-10 text-5xl">
          {title}
        </h1>
      </Card>
    </a>
  );
}

const hobbies = {
  photography: {
    title: 'Photography',
    image: '/img/components/splash-photos.webp',
    alt: 'Photography',
    link: '/hobbies/photography'
  },
  music: {
    title: 'Music',
    image: '/img/components/splash-music.webp',
    alt: 'Music',
    link: '/hobbies/music'
  }
}

export default function Home() {
  return (
    <main>
      <section className='min-w-full flex items-center justify-center'>
        <div className="intro container mx-auto">
          <div className="intro-words text-center">
            <h1 className="mt-8 lg:text-6xl font-merriweather font-black">
              Hobbies</h1>
            <p className="sm:text-base lg:text-lg font-medium">When I&apos;m not busy coding, here&apos;s what I&apos;m doing.
              <br />
              Click on each card to take a look!</p>
          </div>
        </div>
      </section>
      <div className="grid lg:grid-cols-2 px-8 gap-8 mt-12">
        {Object.values(hobbies).map((hobby) => (
          <HobbyCard key={hobby.title} {...hobby} />
        ))}
      </div>
    </main>
  );
}