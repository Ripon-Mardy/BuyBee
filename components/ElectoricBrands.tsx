'use client'

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

import { electronicsBrands } from '@/src/data/electronicsBrands';

const ElectoricBrands = () => {
  return (
    <div className='container mx-auto mt-[100px] pb-10 px-3 md:px-0'>


            <div className='relative flex items-center justify-between gap-2'>
                <div>
                    <h2 className='text-xl md:text-3xl font-semibold'>Top Electronic Brands</h2>
                    <div className=' w-full h-1 md:h-[11px] bg-[#1163CF] mt-1'></div>
                </div>

                <div className='absolute right-0 left-0 flex'>

                </div>
            </div>



            {/* items  */}
            <div>
                <Carousel>

                     <div className='flex absolute right-20 -top-5 md:-top-10'>
                         <CarouselPrevious className='md:w-[46px] md:h-[46px]' />
                        <CarouselNext className='md:w-[46px] md:h-[46px]'/>
                    </div>

                    <CarouselContent className='mt-10 space-x-10'>
                        {electronicsBrands?.map((cat, index) => {  
                            return (
                                <CarouselItem key={index} className='md:basis-1/3 gap-10 w-[386px] h-[217px]'>
                                   <div className='relative'>
                                        <h2 className= ' absolute left-10 top-10 text-[#DA1919] font-bold text-2xl leading-6 pl-4'> {cat?.name} </h2>
                                        <div className='w-full'>
                                            <Image src={cat?.image} width={199} height={100} className='w-full object-cover' alt={cat?.name} />
                                        </div>
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                </Carousel>
            </div>



        </div>
  )
}

export default ElectoricBrands