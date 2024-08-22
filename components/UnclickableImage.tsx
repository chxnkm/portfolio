'use client'

import React from 'react';
import Image from 'next/image';

type UnclickableImageProps = {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const UnclickableImage = ({ width, height, src, alt, loading, priority }: UnclickableImageProps) => {
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <div onContextMenu={handleContextMenu}>
      <Image
        src={src}
        width={width || 0}
        height={0}
        alt={alt}
        sizes="100vw"
        style={{
          width: width || "100%",
          height: "auto"
        }}
        loading={loading || 'lazy'}
        priority={priority || false}

      />
    </div>
  );
};

export default UnclickableImage;