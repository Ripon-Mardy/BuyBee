"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import type { CarouselApi } from "@/components/ui/carousel";

const slides = [
  {
    title: "Up to 15% off",
    highlight: "Voucher",
    description: "On all types of products",
    image: "/images/hero-shopping.png",
  },
  {
    title: "Big Sale",
    highlight: "New Arrivals",
    description: "Limited time offer",
    image: "/images/hero-shopping.png",
  },
  {
    title: "Best Deals",
    highlight: "Today Only",
    description: "Shop before it ends",
    image: "/images/hero-shopping.png",
  },
];

export default function HeroCarousel() {
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
    <section
      className="w-full bg-[#9fdbe3] w-[300px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 py-14">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index}>
                <div>

                  {/* LEFT CONTENT */}
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                      <span className="text-pink-500">
                        {slide.title}
                      </span>
                      <br />
                      <span className="text-pink-500">
                        {slide.highlight}
                      </span>
                    </h1>

                    <p className="mt-4 text-white text-lg">
                      {slide.description}
                    </p>

                    <Button className="mt-6 rounded-full px-6">
                      Shop Now
                    </Button>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="flex justify-center">
                    <Image
                      src={slide.image}
                      alt="Shopping banner"
                      width={450}
                      height={450}
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* BULLET DOTS */}
        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-white w-5"
                  : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
