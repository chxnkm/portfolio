import dynamic from "next/dynamic";
const PhotoGallery = dynamic(() => import("@/components/PhotoGallery").then((mod) => mod.default));

export default function Component() {
    return (
        <main>
            <div className='min-w-full flex items-center justify-center'>
                <div className="intro container mx-auto">
                    <div className="intro-words text-center lg:pl-8">
                        <h1 className="mt-8 font-belsey font-black">
                            Photography</h1>
                        <p className="text-lg font-bold">These are some of the pictures I&apos;ve taken. Click on each one to see a bigger version!</p>
                    </div>
                </div>
            </div>
            <div className="px-16 mt-8">
                <PhotoGallery />

            </div>
        </main>

    )
}