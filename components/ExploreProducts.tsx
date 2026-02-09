import Image from 'next/image';
import Link from 'next/link';

import { Funnel, ChevronDown, ShoppingCart, Star } from 'lucide-react';

import { products } from '@/src/data/products';

const ExploreProducts = () => {
    return (
        <div className='mt-20 px-3 md:px-0'>

            <div className='flex flex-wrap items-center justify-between md:gap-5'>
                <div>
                    <h1 className='text-xl md:text-3xl font-semibold'>Explore Our Products</h1>
                    <div className='bg-[#1163CF] w-full md:w-[282px] h-1 md:h-[11px] mt-1 md:mt-2'></div>
                </div>

                <div className='flex items-center justify-center gap-5 md:gap-20'>
                    <div className='flex items-center justify-center gap-2 text-sm'>
                        <Funnel className='w-4 h-4' />
                        <span>Filters</span>
                    </div>
                    <div className='flex items-center justify-between gap-1 md:gap-5 text-sm'>
                        <h2>Sort By</h2>
                        <ChevronDown />
                    </div>
                </div>
            </div>


            {/* products  */}
            <div>
                <div className='grid grid-cols-2  xl:grid-cols-4 gap-10 my-10'>
                    {products?.map((item, index) => (
                        <div key={index} className="">

                            <div className="relative  rounded">
                                {/* discount  */}
                                {item?.discount && (
                                    <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs md:text-sm font-bold px-2.5 py-1 rounded">
                                        {item?.discount}
                                    </div>
                                )}


                                <div className=" aspect-square flex items-center justify-center flex-col bg-[#F5F5F5]">
                                    <div className="w-[190px]">
                                        <Image src={item?.image} width={100} height={100} layout="responsive" className="w-full" alt={item?.name} />
                                    </div>

                                </div>
                                <Link href={'/product-details'} className="flex items-center justify-center gap-2 cursor-pointer text-white bg-[#1163CF] font-normal h-[41px] text-sm rounded-b">
                                    <ShoppingCart className="w-5 h-5" />
                                    <button className='cursor-pointer'> {item?.buttonText} </button>
                                </Link>

                                <div className="mt-4 space-y-1">
                                    <h2 className="text-[16px] font-medium"> {item?.name} </h2>
                                    <div className="flex items-center gap-2">
                                        <h2 className='text-[#DB4444] font-medium'>${item?.discountedPrice} </h2>
                                        {item?.discountedPrice !== item.originalPrice && (
                                            <span className="text-sm text-gray-500 line-through">
                                                ${item.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                {/* star  */}
                                <div className='mt-2 flex items-center justify-start gap-2'>
                                    <div className='flex items-start justify-start gap-1'>
                                        <Star className='w-3 h-3 text-yellow-500' /> <Star className='w-3 h-3 text-yellow-500' /> <Star className='w-3 h-3 text-yellow-500' /> <Star className='w-3 h-3 text-yellow-500' /> <Star className='w-3 h-3 text-yellow-500' />
                                    </div>
                                    <span className='text-sm opacity-50'> (65) </span>
                                </div>
                            </div>



                        </div>
                    ))}
                </div>

              <div className='text-center'>
                 <button className="bg-[#0F59B9] rounded text-sm md:[text-16px] py-2 md:py-4 px-12 text-white cursor-pointer">View All</button>
              </div>
            </div>




        </div>
    )
}

export default ExploreProducts