'use client';

import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { storage } from '@/lib/firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { motion, AnimatePresence } from 'framer-motion';
import styles from './PhotoGallery.module.css';
import Image from 'next/image';


const PhotoGallery: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [collections, setCollections] = useState<Array<{ id: string; name: string }>>([]);
  const [images, setImages] = useState<Array<{ id: number; src: string }>>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [actualProgress, setActualProgress] = useState<number>(0);
  const [displayedProgress, setDisplayedProgress] = useState<number>(0);

  useEffect(() => {
    const fetchCollections = async () => {
      const storageRef = ref(storage, '/images');
      let collectionList: Array<{ id: string; name: string }> = [];

      try {
        const rootFolders = await listAll(storageRef);
        collectionList = rootFolders.prefixes.map((folderRef) => ({
          id: folderRef.name,
          name: folderRef.name
        }));
        setCollections([{ id: 'all', name: 'All' }, ...collectionList]);
      } catch (error) {
        console.error('Error fetching collections. Please try again later.', error);
      }
    };

    fetchCollections();
  }, []);

  useEffect(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (displayedProgress < actualProgress) {
        setDisplayedProgress(prev => Math.min(prev + 3.5, actualProgress));
      }
    });
    return () => cancelAnimationFrame(animationFrame);
  }, [displayedProgress, actualProgress]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setActualProgress(0);
      setDisplayedProgress(0);

      // Add a small delay
      await new Promise(resolve => setTimeout(resolve, 100));

      const startTime = Date.now();
      const imagesList: Array<{ id: number; src: string }> = [];
      const storageRef = ref(storage, '/images');

      try {
        const fetchCollectionImages = async (collectionRef: any) => {
          const imagesInCollection = await listAll(collectionRef);
          const totalImages = imagesInCollection.items.length;
          let loadedImages = 0;

          const urls = await Promise.all(imagesInCollection.items.map(async (imageRef) => {
            const url = await getDownloadURL(imageRef);
            loadedImages++;
            setActualProgress((loadedImages / totalImages) * 100);
            return url;
          }));

          return urls.map((url, index) => ({ id: imagesList.length + index + 1, src: url }));
        };

        if (selectedCollection === 'all') {
          const rootFolders = await listAll(storageRef);
          const allImages = await Promise.all(rootFolders.prefixes.map(fetchCollectionImages));
          setImages(allImages.flat());
        } else {
          const collectionRef = ref(storageRef, `/${selectedCollection}`);
          const imagesInCollection = await fetchCollectionImages(collectionRef);
          setImages(imagesInCollection);
        }
      } catch (error) {
        console.error('Error fetching images. Try again later.', error);
      } finally {
        const endTime = Date.now();
        const loadingTime = endTime - startTime;
        const minLoadingTime = 1000; // 1 second minimum

        if (loadingTime < minLoadingTime) {
          await new Promise(resolve => setTimeout(resolve, minLoadingTime - loadingTime));
        }

        setLoading(false);
      }
    };

    fetchImages();
  }, [selectedCollection]);

  const handleCollectionChange = (collectionId: string) => {
    if (collectionId === selectedCollection) {
      return; // Exit early if trying to click on the same collection
    }
    setImages([]);
    setSelectedCollection(collectionId);
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
        {collections.map((collection) => (
          <Button
            key={collection.id}
            variant={selectedCollection === collection.id ? "default" : "outline"}
            className="w-full md:justify-start"
            onClick={() => handleCollectionChange(collection.id)}
            disabled={loading}
          >
            {collection.name}
          </Button>
        ))}
      </div>
      <div className="col-span-3">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <Progress value={displayedProgress} className="w-full lg:w-[60%]" />
          </div>
        ) : (
          <Masonry
            breakpointCols={{ default: 3, 900: 2, 700: 1 }}
            className={styles.masonryGrid}
            columnClassName={styles.masonryGridColumn}
          >
            {images.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="relative w-full"
              >
                <Image
                  src={image.src}
                  alt=""
                  onClick={() => openDialog(image.src, index)}
                  width={0}
                  height={0}
                  priority={index < 12}
                  loading={index > 12? 'lazy' : 'eager'}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </Masonry>
        )}
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
                alt="Portfolio Image"
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