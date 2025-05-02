'use client';

import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PhotoGallery.module.css';
import { CldImage } from 'next-cloudinary';
import { Skeleton } from './ui/skeleton';

const getBlurredPlaceholder = (src: string) => {
  const parts = src.split('/');
  const indexOfUpload = parts.indexOf('upload');
  if (indexOfUpload !== -1) {
    parts.splice(indexOfUpload + 1, 0, 'w_100,e_blur:1000,q_auto,f_auto');
  }
  return parts.join('/');
};

const PhotoGallery: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [collections, setCollections] = useState<Array<any>>([]);
  const [images, setImages] = useState<Array<{ id: number; src: string }>>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [buttonCooldown, setButtonCooldown] = useState(false);

  useEffect(() => {
    const fetchImageFolders = async () => {
      const res = await fetch('/api/fetch-images');
      if (!res.ok) {
        throw new Error('Failed to fetch images, try again later.');
      }
      const folderData = await res.json();
      const allFolder = {
        folderName: 'All',
        folderData: {
          resources: folderData.flatMap((folder: { folderData: { resources: any; }; }) => folder.folderData.resources)
        }
      };

      // Combine the "All" folder with the individual folders
      const allCollections = [allFolder, ...folderData];

      setCollections(allCollections);
      setSelectedCollection('All'); // Ensure "All" is selected by default
      
    };
    fetchImageFolders();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesList: Array<{ id: number; src: string }> = [];

      try {
        const fetchCollectionImages = async (folderData: any) => {
          const resources = folderData.resources;
          let loadedImages = 0;

          const urls = resources.map((resource: any) => {
            const url = resource.secure_url;
            loadedImages++;
            return url;
          });

          return urls.map((url: string, index: number) => ({ id: imagesList.length + index + 1, src: url }));
        };

        if (selectedCollection === 'all') {
          const allFolders = collections; // `collections` would hold the entire response structure
          const allImages = allFolders.map((folder: any) => fetchCollectionImages(folder.folderData));
          const resolvedImages = await Promise.all(allImages);
          setImages(resolvedImages.flat());
        } else {
          // Filter the selected collection from your `collections` state
          const selectedFolder = collections.find((folder: any) => folder.folderName === selectedCollection);
          if (selectedFolder) {
            const imagesInCollection = await fetchCollectionImages(selectedFolder.folderData);
            setImages(imagesInCollection);
          }
        }
      } catch (error) {
        console.error('Error fetching images. Try again later.', error);
      }
    };

    fetchImages();
  }, [selectedCollection, collections]);

  const handleCollectionChange = (collectionId: string) => {
    if (collectionId === selectedCollection) {
      return; // Exit early if trying to click on the same collection
    }
    setImages([]);
    setSelectedCollection(collectionId);
    setButtonCooldown(true);
    setTimeout(() => setButtonCooldown(false), 250);
  };

  const openDialog = (src: string, index: number) => {
    setSelectedImage(src);
    setCurrentIndex(index);
  };

  const closeDialog = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      const newIndex = currentIndex + 1;
      setSelectedImage(images[newIndex].src);
      setCurrentIndex(newIndex);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setSelectedImage(images[newIndex].src);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="col-span-1 space-y-2">
        {collections.map((collection, index) => (
          <Button
            key={collection.folderName}
            variant={selectedCollection === collection.folderName ? "default" : "outline"}
            className="w-full md:justify-center"
            onClick={() => handleCollectionChange(collection.folderName)}
            disabled={buttonCooldown}
          >
            {collection.folderName}
          </Button>
        ))}
      </div>
      <div className="col-span-3">
        <Masonry
          breakpointCols={{ default: 3, 900: 2, 700: 1 }}
          className={styles.masonryGrid}
          columnClassName={styles.masonryGridColumn}
        >
          {images.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="relative max-w-[600px]"
            >
              {buttonCooldown ? (
                <Skeleton className="w-full h-48 bg-gray-200 rounded-none" /> // Adjust height as needed
              ) : (
                  <CldImage
                    src={image.src}
                    alt=""
                    onClick={() => openDialog(image.src, index)}
                    width={600}
                    height={0}
                    priority={index < 12}
                    loading={index > 12 ? 'lazy' : 'eager'}
                    placeholder='blur'
                    blurDataURL={getBlurredPlaceholder(image.src)}
                  />
              )}
            </div>
          ))}
        </Masonry>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-20"
            onClick={closeDialog}
            initial={{ opacity: 0.25 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-[85%] max-h-screen flex items-center justify-center">

              <motion.img
                src={selectedImage}
                alt=""
                className="w-[78vw] h-[78vh] md:w-[83vw] md:h-[83vh] object-contain"
                initial={{ opacity: 0.25 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
              />
              {currentIndex > 0 && (
                <button
                  className="absolute flex left-[-2rem] rounded-full justify-start"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                  </svg>
                </button>
              )}
              {currentIndex < images.length - 1 && (
                <button
                  className="absolute flex right-[-2rem] rounded-full justify-end"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;