
import Image from "next/image"
import Link from "next/link";
import { products } from "@/src/data/products"

import { ShoppingCart } from 'lucide-react';

const Products = () => {
    return (
        <div className="py-10 px-3 md:px-0">

            <div className="flex flex-wrap items-center justify-between gap-4">
                <div> 
                    <h2 className="text-black font-semibold text-xl md:text-3xl">Best Selling Products</h2>
                    <div className="bg-[#1163CF] md:w-[290px] h-1 md:h-[11px] mt-1 md:mt-4"></div>
                </div>
                <button className="bg-[#0F59B9] rounded py-2 text-sm md:text-[16px] md:py-4 px-12 text-white cursor-pointer">View All</button>
            </div> 

            {/* products  */}
            <div className="mt-5 md:mt-[100px] grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-10">


                   { products?.slice(0, 4).map((item, index) => (
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
                                    <button className="cursor-pointer"> {item?.buttonText} </button>
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
                            </div>



                        </div>
                    ))}



            </div>

        </div>
    )
}

export default Products