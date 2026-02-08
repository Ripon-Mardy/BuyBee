'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

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


  useEffect(() => {
    if (!api) return;

    setActiveIndex(api.selectedScrollSnap());

    api.on('select', () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);




  useEffect(() => {
    if (!api || isHovered) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 9000);

    return () => clearInterval(interval);
  }, [api, isHovered]);

  return (
    <section
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        className="w-full"
        setApi={setApi}
        opts={{ loop: true }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full aspect-[21/9] md:aspect-[16/6] overflow-hidden">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                {/* Overlay */}
                <div className="absolute left-6 md:left-16 top-1/2 -translate-y-1/2">
                  <h2 className="text-4xl md:text-5xl text-[#FF36BC] font-medium leading-tight">
                    {slide.title}
                    <span className="block">{slide.highlight}</span>
                  </h2>

                  <p className="mt-4 text-white text-lg md:text-xl">
                    {slide.description}
                  </p>

                  <button className="mt-6 bg-[#220AF5] px-8 py-3 rounded-full text-white font-medium">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 w-2 rounded-full transition-all
              ${
                activeIndex === index
                  ? 'bg-white w-4'
                  : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </section>
  );
}
