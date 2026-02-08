'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

import { shopCategories } from "@/src/data/shopCategoris"
import { categories } from '@/src/data/categories';

const ShopFromCategory = () => {
    return (
        <div className='container mx-auto mt-[100px] pb-10'>


            <div className='relative flex items-center justify-between gap-2'>
                <div>
                    <h2 className='text-3xl font-semibold'>Shop From <span className='text-[#1163CF]'>Top Catagory</span></h2>
                    <div className='w-[330px] h-[11px] bg-[#1163CF] mt-[15px]'></div>
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

                    <CarouselContent className='mt-10 h-[145px] '>
                        {shopCategories?.map((cat, index) => {
                            const Icon = cat?.icon;
                            return (
                                <CarouselItem key={index} className='basis-1/2 md:basis-1/6 gap-10'>
                                    <div className={`${cat?.bg} h-[145px] flex items-center justify-center flex-col gap-4`}>
                                        <Icon className='w-[56px] h-[56px]' />
                                        <h2 className='text-[16px font-normal'> {cat?.name} </h2>
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

export default ShopFromCategory