import ContactForm from "@/components/ContactForm";
import UnclickableImage from "@/components/UnclickableImage";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto mt-12 px-4">
        <h1 className="text-center font-belsey text-2xl sm:text-4xl lg:text-5xl mb-8 animate-slideUp">
          Thank you for visiting my portfolio!
        </h1>
        <ContactForm />
        <div className="flex flex-col items-center mt-12">
          <p className="mb-4 font-bold">Picture of the Month:</p>
          <UnclickableImage width={900} src='/img/misc/contact_splash.jpg' alt='Panoramic Photo in Korea' />
          <p className="mt-4 text-gray-600"><i>Playground</i>, Han River, Seoul, 2024</p>
        </div>
        
      </div>
    </main>
  );
}
