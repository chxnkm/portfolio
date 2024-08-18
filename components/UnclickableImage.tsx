'use client'

import React from 'react';
import Image from 'next/image';

type UnclickableImageProps = {
  width?: number;
  height?: number;
  src: string;
  alt: string;
}

const UnclickableImage = ({ width, height, src, alt }: UnclickableImageProps) => {
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <Image
        src={src}
        width={width || 0}
        height={height || 0}
        alt={alt}
        sizes="100vw"
        style={{
          width: width || "100%",
          height: height || "auto"
        }}
        loading='lazy'

      />
    </div>
  );
};

export default UnclickableImage;