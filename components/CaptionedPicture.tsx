import dynamic from 'next/dynamic';

const UnclickableImage = dynamic(() => import("@/components/UnclickableImage"));

type CaptionedPicture = {
    src: string;
    alt: string;
    caption: string
    width?: number;
}

const CaptionedPicture = ({src, alt, caption, width}: CaptionedPicture) => {
    return (
        <figcaption className="flex flex-col items-center order-1">
            <UnclickableImage src={src} alt={alt} width={width}/>    
            <p className='mt-2 font-medium text-center lg:text-base'>{caption}</p>
        </figcaption>
    );
}

export default CaptionedPicture;