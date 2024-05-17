import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <main>
      <Navbar/> 
      <div className="intro container">
        <h1 className="flex container mx-auto text-6xl mt-32">Hello, I'm Kang Ming.</h1>
        <p className="flex container mx-auto font-medium text-xl">I'm a Computer Science graduate, a software engineer and an avid tinkerer.</p>
      </div>
      
    </main>
  );
}
