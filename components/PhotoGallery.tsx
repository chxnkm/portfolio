'use client'

import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { storage } from '@/lib/firebase';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { motion, AnimatePresence } from 'framer-motion';

const PhotoGallery: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [collections, setCollections] = useState<Array<{ id: string; name: string }>>([]);
  const [images, setImages] = useState<Array<{ id: number; src: string }>>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const fetchCollections = async () => {
      const storageRef = ref(storage, '/');
      let collectionList: Array<{ id: string; name: string }> = [];

      try {
        const rootFolders = await listAll(storageRef);
        rootFolders.prefixes.forEach((folderRef) => {
          collectionList.push({ id: folderRef.name, name: folderRef.name });
        });

        setCollections([{ id: 'all', name: 'All' }, ...collectionList]);
      } catch (error) {
        console.error('Error fetching collections from Firebase:', error);
      }
    };

    fetchCollections();
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setProgress(0);
      let imagesList: Array<{ id: number; src: string }> = [];

      try {
        if (selectedCollection === 'all') {
          const storageRef = ref(storage, '/');
          const rootFolders = await listAll(storageRef);

          await Promise.all(rootFolders.prefixes.map(async (collectionRef) => {
            const imagesInCollection = await listAll(ref(storage, collectionRef.fullPath));
            await Promise.all(imagesInCollection.items.map(async (imageRef) => {
              const url = await getDownloadURL(imageRef);
              imagesList.push({ id: imagesList.length + 1, src: url });
            }));
          }));
        } else {
          const collectionRef = ref(storage, `/${selectedCollection}`);
          const imagesInCollection = await listAll(collectionRef);
          await Promise.all(imagesInCollection.items.map(async (imageRef) => {
            const url = await getDownloadURL(imageRef);
            imagesList.push({ id: imagesList.length + 1, src: url });
          }));
        }

        setImages(imagesList);
      } catch (error) {
        console.error('Error fetching images from Firebase:', error);
      } finally {
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
    setLoading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev > 100) {
          clearInterval(interval);
          setLoading(false);
          setSelectedCollection(collectionId);
          return 100;
        }
        return prev + (100 / 18); // Increment the progress every 100ms
      });
    }, 100);
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
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-1 space-y-2">
        {collections.map((collection) => (
          <Button
            key={collection.id}
            variant={selectedCollection === collection.id ? "default" : "outline"}
            className="w-full justify-start"
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
            <Progress value={progress} className="w-[60%]" />
          </div>
        ) : (
          <Masonry
            breakpointCols={{ default: 3, 900: 2, 700: 1 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {images.map((image, index) => (
              <div key={image.id} className="relative">
                <img
                  src={image.src}
                  alt=""
                  className="object-cover w-full h-full max-h-96"
                  onClick={() => openDialog(image.src, index)}
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
                className="w-[85vw] h-[85vh] object-contain "
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
