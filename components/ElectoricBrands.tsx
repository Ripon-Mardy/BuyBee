'use client'

import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

import { electronicsBrands } from '@/src/data/electronicsBrands';

const ElectoricBrands = () => {
  return (
    <div className='container mx-auto mt-[100px] pb-10'>


            <div className='relative flex items-center justify-between gap-2'>
                <div>
                    <h2 className='text-3xl font-semibold'>Top Electronic Brands</h2>
                    <div className='w-[290px] h-[11px] bg-[#1163CF] mt-[15px]'></div>
                </div>

                <div className='absolute right-0 left-0 flex'>

                </div>
            </div>



            {/* items  */}
            <div>
                <Carousel>

                     <div className='flex absolute right-20 -top-10'>
                         <CarouselPrevious className='w-[46px] h-[46px]' />
                        <CarouselNext className='w-[46px] h-[46px]'/>
                    </div>

                    <CarouselContent className='mt-10 space-x-10'>
                        {electronicsBrands?.map((cat, index) => {  
                            return (
                                <CarouselItem key={index} className='basis-1/3 gap-10 w-[386px] h-[217px]'>
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