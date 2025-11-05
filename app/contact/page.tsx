import dynamic from 'next/dynamic';

const ContactForm = dynamic (() => import("@/components/ContactForm"));
const CaptionedPicture = dynamic (() => import("@/components/CaptionedPicture"));

const picture = {
    src: '/img/misc/contact_splash.webp',
    alt: 'Panoramic Photo in Korea',
    caption: 'Playground, Han River, Seoul, 2024',
    width: 800  
}

export default function Home() {
  return (
    <main>
      <div className="container mx-auto mt-12 px-4">
        <h1 className="text-center font-merriweather mb-8 text-3xl font-bold">
          Thank you for visiting my portfolio!
        </h1>
        <ContactForm />
        <CaptionedPicture {...picture} />
      </div>
    </main>
  );
}
