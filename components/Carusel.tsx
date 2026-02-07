// app/components/PromoCarousel.tsx
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const slides = [
  {
    title: "Up to 15% off Voucher",
    subtitle: "On all types of products",
    imageUrl:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    bgColor: "bg-cyan-500",
    textColor: "text-white",
  },
  {
    title: "Summer Sale – Up to 40% Off",
    subtitle: "Selected fashion items only",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    bgColor: "bg-pink-500",
    textColor: "text-white",
  },
  {
    title: "Flash Deal – 20% Everything",
    subtitle: "Limited time offer",
    imageUrl:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    bgColor: "bg-violet-600",
    textColor: "text-white",
  },
];

export function PromoCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-5xl mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div
              className={`
                relative rounded-2xl overflow-hidden h-[380px] md:h-[420px] lg:h-[480px]
                ${slide.bgColor} flex items-center justify-center
              `}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/20" />

              {/* Content */}
              <div className="relative z-10 text-center px-6 max-w-2xl">
                <h2
                  className={`
                    text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4
                    ${slide.textColor}
                  `}
                >
                  {slide.title}
                </h2>
                <p
                  className={`
                    text-xl md:text-2xl mb-8 ${slide.textColor} font-medium
                  `}
                >
                  {slide.subtitle}
                </p>

                <Button
                  size="lg"
                  className="
                    bg-white text-black hover:bg-gray-100
                    text-lg px-10 py-6 rounded-full font-semibold
                    shadow-lg
                  "
                >
                  Shop Now
                </Button>
              </div>

              {/* Girl with bags – positioned on right */}
              <div className="absolute right-0 bottom-0 hidden md:block w-3/5 lg:w-2/5">
                <Image
                  src={slide.imageUrl}
                  alt="Happy shopper with bags"
                  width={600}
                  height={600}
                  className="object-contain drop-shadow-2xl"
                  priority={index === 0}
                />
              </div>

              {/* Small shopping bag icons decoration */}
              <div className="absolute bottom-6 left-6 opacity-40 hidden lg:block">
                <div className="flex gap-4 text-4xl">
                  🛍️🛒🎁
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-4 md:left-8" />
      <CarouselNext className="right-4 md:right-8" />
    </Carousel>
  );
}