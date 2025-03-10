import React from 'react'
import TestimonialCard from './testimonial-card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

function Testimonial() {
  return (
    <div className='flex flex-col gap-4 mb-10 w-full mx-auto text-center'>
          <h1 className='text-[32px] sm:text-[40px] lg:text-[48px] font-light leading-[102%] w-[40%] mx-auto text-header-foreground'>What Our Customers Say</h1>
          <div className='bg-destructive h-[7px] w-[5%] mx-auto mb-2'></div>
          {/* <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[25%_50%_25%] text-start gap-6 overflow-auto'>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
          </div> */}
          <Carousel className="w-full lg:w-[100%] mx-auto py-4">
          <CarouselContent className="-ml-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/2">
                <div className="p-1">
                  <TestimonialCard />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  )
}

export default Testimonial