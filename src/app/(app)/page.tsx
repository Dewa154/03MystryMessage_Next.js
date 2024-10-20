"use client"

import * as React from "react"
 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Autoplay from "embla-carousel-autoplay"
import messages from "@/messages.json"
import { Mail } from "lucide-react"

function Home() {
  return (
    <>
    <main className='flex-grow flex flex-col items-center justify-center px-4 md:px-24 py-12'>
      <section className='text-center mb-8 md:mb-12'>
        <h1 className='text-3xl md:text-5xl font-bold'>Dive into the world of Anonymous Conversations</h1>
        <p className='mt-3 md:mt-4 text-base md:text-lg'>Explore Mystery Message - Where your identity remains a secret.</p>
      </section>
      <Carousel
       plugins={[Autoplay({delay: 2000})]}
       className="w-full max-w-xs">
        <CarouselContent>
          {
            messages.map((message, index) => (
              <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardHeader>
                  <CardTitle>{message.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col md:flex-row items-start space-y-2 md:space-y-0 md:space-x-4">
                    <Mail className="flex-shrink-0" />
                    <div>
                      <p>{message.content}</p>
                      <p className="text-xs text-muted-foreground">
                        {message.received}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
    <footer  className="fixed bottom-0 left-0 right-0 p-5 text-center bg-gray-900 text-white">
      © 2023 Mystery Message. All rights reserved.
    </footer>
    </>
  )
}

export default Home
