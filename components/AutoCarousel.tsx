'use client'

import * as React from 'react'
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

interface ImageObject {
  src: string;
  href: string;
}

interface AutoCarouselProps {
  basePath?: string;
  images: ImageObject[];
}

export default function AutoCarousel({ basePath = '/img/', images }: AutoCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnFocusIn: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xl"
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <a href={image.href}>
                    <Image
                      src={`${basePath}${image.src}`}
                      alt={`Image ${index + 1}`}
                      width={1080}
                      height={1080}
                    />
                  </a>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
