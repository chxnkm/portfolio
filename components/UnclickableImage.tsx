'use client'

import React from 'react';

type UnclickableImageProps = {
  width?: string | number;
  height?: string | number;
  src: string;
  alt: string;
}

const UnclickableImage = ({ width, height, src, alt} : UnclickableImageProps) => {
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <img
        src={src} 
        width={width} 
        height={0} 
        alt={alt} 
        sizes='(min-width: 1360px) 403px, (min-width: 1040px) calc(32vw - 26px), (min-width: 640px) 403px, (min-width: 380px) calc(76.25vw - 70px), calc(13.33vw + 156px)'
        style={{
          maxWidth: width || "100%",
          height: height || "100%"
        }}
        loading='lazy'

      />
    </div>
  );
};

export default UnclickableImage;