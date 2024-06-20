'use client'

import React from 'react';
import Image from 'next/image';

interface UnclickableImageProps {
  src: string;
  alt: string;
  unoptimized?: boolean;
}

const UnclickableImage: React.FC<UnclickableImageProps> = ({ src, alt, unoptimized }) => {
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <Image src={src} width={600} height={480} alt={alt} unoptimized={unoptimized}/>
    </div>
  );
};

export default UnclickableImage;
