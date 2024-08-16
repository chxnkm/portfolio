'use client'

import * as React from 'react'
import Autoplay from "embla-carousel-autoplay"
import UnclickableImage from './UnclickableImage'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

type ImageObject = {
  src: string;
  href?: string;
} 

type AutoCarouselProps = {
  basePath?: string;
  images: ImageObject[];
}

export default function AutoCarousel({ basePath = '/img/', images }: AutoCarouselProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnFocusIn: false })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-[80%] max-w-xl m-auto"
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
              <Card className='bg-inherit border-slate-0 mb-8'>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <a href={image.href}>
                    <UnclickableImage src={`${basePath}${image.src}`} alt={`Image ${index + 1}`} />
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
