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
 
export default function AutoCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnFocusIn: false })
  )
 
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
  {Array.from({ length: 10 }).map((_, index) => (
    <CarouselItem key={index}>
      <div className="p-1">
        <Card>
          <CardContent className="flex aspect-square items-center justify-center p-6">
            <Image
              src={`/img/carousel/image${index + 1}.jpg`}
              alt={`Image ${index + 1}`}
              width={300}
              height={300}
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