'use client'

import React from 'react';
import Image from 'next/image';

interface UnclickableImageProps {
  width?: number;
  src: string;
  alt: string;
  unoptimized?: boolean;
  priority?: boolean;
}

const UnclickableImage: React.FC<UnclickableImageProps> = ({ width, src, alt, unoptimized, priority}) => {
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <Image src={src} width={width? width:600} height={200} alt={alt} unoptimized={unoptimized} priority={priority}/>
    </div>
  );
};

export default UnclickableImage;
