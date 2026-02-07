'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { CarouselApi } from '@/components/ui/carousel';

import banner1 from '@/public/banner.jpg';


const slides = [
    {
        title: 'Up to 15% off',
        highlight: 'Voucher',
        description: 'On all types of products',
        image: banner1,
        buttonText: 'Shop Now',
    },
    {
        title: 'Up to 15% off',
        highlight: 'Voucher',
        description: 'On all types of products',
        image: banner1,
        buttonText: 'Shop Now',
    },
    {
        title: 'Up to 15% off',
        highlight: 'Voucher',
        description: 'On all types of products',
        image: banner1,
        buttonText: 'Shop Now',
    },
];

export default function MainBanner() {
    const [api, setApi] = useState<CarouselApi | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Track active slide
    useEffect(() => {
        if (!api) return;

        setActiveIndex(api.selectedScrollSnap());

        api.on("select", () => {
            setActiveIndex(api.selectedScrollSnap());
        });
    }, [api]);

    // Auto slide
    useEffect(() => {
        if (!api || isHovered) return;

        const interval = setInterval(() => {
            api.scrollNext();
        }, 4000);

        return () => clearInterval(interval);
    }, [api, isHovered]);


    return (
        <section className="w-full relative">
            <Carousel
                className="w-full"
                setApi={api}
                opts={{
                    loop: true,
                    align: 'start',
                }}
            >
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index} className="relative h-full">
                            <div className="relative w-full aspect-[21/9] md:aspect-[16/6] lg:aspect-[21/7] overflow-hidden">
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover"
                                />

                                {/* Text & Button Overlay */}
                                <div className='flex items-start justify-start flex-col ml-[78px] mt-[91px]'>
                                    <h2 className="text-5xl text-[#FF36BC] font-medium tracking-tight drop-shadow-lg">
                                        {slide.title}
                                        <span className='block text-center'>
                                            {slide.highlight}
                                        </span>
                                    </h2>

                                    {/* Description */}
                                    <p className="mt-3 md:mt-5 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium opacity-90 max-w-2xl">
                                        {slide.description}
                                    </p>
                                    <div className='ml-20 mt-10'>
                                        <button className=" bg-[#220AF5] w-[140px] h-[50px] rounded-[24px]  text-center text-white font-medium opacity-90 max-w-2xl">
                                            {slide.buttonText}
                                        </button>
                                    </div>


                                </div>


                            </div>



                        </CarouselItem>
                    ))}


                </CarouselContent>
            </Carousel>


            {/* dots  */}
            <div className="flex justify-center gap-2 mt-10 absolute left-1/2 top-72">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`h-2 w-2 bg-white cursor-pointer rounded-full transition-all opacity-90`}
                    />
                ))}
            </div>




        </section>
    );
}