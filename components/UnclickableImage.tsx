'use client'

import React from 'react';
import Image from 'next/image';

interface UnclickableImageProps {
  width?: string | number;
  height?: string | number;
  src: string;
  alt: string;
  unoptimized?: boolean;
  priority?: boolean;
}

const UnclickableImage: React.FC<UnclickableImageProps> = ({ width, height, src, alt, unoptimized, priority }) => {
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <Image 
        src={src} 
        width={0} 
        height={0} 
        alt={alt} 
        sizes='100vw'
        unoptimized={unoptimized} 
        priority={priority}
        style={{
          width: width || "100%",
          height: height || "100%"
        }}
      />
    </div>
  );
};

export default UnclickableImage;