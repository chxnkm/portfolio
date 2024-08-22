import dynamic from 'next/dynamic';

const UnclickableImage = dynamic(() => import("@/components/UnclickableImage"));

type CaptionedPicture = {
    src: string;
    alt: string;
    caption: string
    width?: number;
    loading?: 'lazy' | 'eager';
    priority?: boolean;
}

const CaptionedPicture = ({src, alt, caption, width, loading, priority}: CaptionedPicture) => {
    return (
        <figcaption className="flex flex-col items-center order-1">
            <UnclickableImage src={src} alt={alt} width={width} loading={loading} priority={priority}/>    
            <p className='mt-2 font-medium text-center lg:text-base'>{caption}</p>
        </figcaption>
    );
}

export default CaptionedPicture;