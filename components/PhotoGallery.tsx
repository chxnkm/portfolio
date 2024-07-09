'use client'

import React, { useState } from 'react';
import Masonry from 'react-masonry-css';

// Example data for images
const images = [
    { id: 1, src: '/img/misc/main_splash.jpg', description: 'Beautiful scenery' },
    { id: 2, src: '/img/splash.jpg', description: 'City skyline' },
    { id: 3, src: '/img/splash-photos.jpg', description: 'Nature landscape' },
    { id: 4, src: '/img/splash-music.jpg', description: 'Nature landscape' },
    { id: 5, src: '/img/misc/contact_splash.jpg', description: 'Nature landscape' },
    { id: 6, src: '/img/misc/splash_3.jpg', description: 'Nature landscape' },
    { id: 7, src: '/img/misc/main_splash.jpg', description: 'Nature landscape' },
  // Add more images as needed
];

const PhotoGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; description: string } | null>(null);

  const openDialog = (image: { src: string; description: string }) => {
    setSelectedImage(image);
  };

  const closeDialog = () => {
    setSelectedImage(null);
  };

  return (
    <Masonry
      breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image) => (
        <div key={image.id} className="relative">
          <img
            src={image.src}
            alt={image.description}
            className="object-cover w-full h-full"
            onClick={() => openDialog(image)}
          />
        </div>
      ))}

      {/* Dialog component for full-screen view */}


        {selectedImage && (
          <div className="flex items-center justify-center h-screen">
            <div className="max-w-lg p-4 bg-white rounded-lg shadow-lg">
              <img src={selectedImage.src} alt={selectedImage.description} className="w-full h-auto rounded-lg" />
              <p className="mt-2 text-sm text-gray-600">{selectedImage.description}</p>
              <button className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700" onClick={closeDialog}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

    </Masonry>
  );
};

export default PhotoGallery;
