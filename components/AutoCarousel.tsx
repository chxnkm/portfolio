'use client'

import * as React from 'react'
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function AutoCarousel({ basePath = '/img/', length = 3 }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnFocusIn: false })
  )

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
        {Array.from({ length }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <Image
                    src={`${basePath}img${index + 1}.jpg`}
                    alt={`Image ${index + 1}`}
                    width={1080}
                    height={1080}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
