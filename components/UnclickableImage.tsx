'use client'

import React from 'react';
import Image from 'next/image';

interface UnclickableImageProps {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  unoptimized?: boolean;
  priority?: boolean;
}

const UnclickableImage: React.FC<UnclickableImageProps> = ({ width, height, src, alt, unoptimized, priority}) => {
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <Image src={src} width={width? width:600} height={height? height:300} alt={alt} unoptimized={unoptimized} priority={priority}/>
    </div>
  );
};

export default UnclickableImage;
