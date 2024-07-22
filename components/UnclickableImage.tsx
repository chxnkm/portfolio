'use client'

import React from 'react';

interface UnclickableImageProps {
  width?: string | number;
  height?: string | number;
  src: string;
  alt: string;
  sizes?: string;
  unoptimized?: boolean;
  priority?: boolean;
}

const UnclickableImage: React.FC<UnclickableImageProps> = ({ width, height, src, alt, sizes, unoptimized, priority }) => {
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <img
        src={src} 
        width={0} 
        height={0} 
        alt={alt} 
        sizes={sizes}
        style={{
          width: width || "100%",
          height: height || "100%"
        }}
        loading='lazy'
      />
    </div>
  );
};

export default UnclickableImage;