// components/PromoSlider.tsx
'use client';

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


const slides = [
  {
    title: "Up to 15% off",
    highlight: "Voucher",
    subtitle: "On all types of products",
    imageUrl:
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d26?w=800&auto=format&fit=crop&q=80",
    bg: "bg-[#00BFFF]", // cyan-blue
  },
  {
    title: "Summer Flash Sale",
    highlight: "Up to 40% Off",
    subtitle: "Selected items only",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=80",
    bg: "bg-pink-500",
  },
  {
    title: "New Season Deals",
    highlight: "20% Everything",
    subtitle: "Limited time offer",
    imageUrl:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&auto=format&fit=crop&q=80",
    bg: "bg-violet-600",
  },
];

export default function PromoSlider() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  // Sync current slide index when carousel changes
  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    api.on("init", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("init", onSelect);
    };
  }, [api]);

  // Jump to specific slide when bullet is clicked
  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <Carousel
      setApi={setApi}
      className="w-full"
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <div
              className={cn(
                "relative overflow-hidden w-full",
                slide.bg,
                "flex items-center px-6 md:px-12"
              )}
            >
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />

              {/* Left content */}
              <div className="relative z-10 max-w-lg">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-lg">
                  {slide.title}
                  <span className="block text-pink-300 mt-1">{slide.highlight}</span>
                </h2>

                <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/90 font-medium">
                  {slide.subtitle}
                </p>

                <Button
                  size="lg"
                  className="mt-8 bg-white hover:bg-gray-100 text-black text-lg px-10 py-6 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                >
                  Shop Now
                </Button>
              </div>

              {/* Right image */}
              <div className="absolute right-0 bottom-0 hidden md:block w-1/2 lg:w-5/12 pointer-events-none">
                <Image
                  src={slide.imageUrl}
                  alt="Shopping girl with bags"
                  width={700}
                  height={700}
                  className="object-contain drop-shadow-2xl scale-110 -mr-12 lg:-mr-20"
                  priority={index === 0}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Arrows */}
      <CarouselPrevious className="left-4 md:left-8 h-12 w-12 bg-white/80 hover:bg-white border-none text-black shadow-md" />
      <CarouselNext className="right-4 md:right-8 h-12 w-12 bg-white/80 hover:bg-white border-none text-black shadow-md" />

      {/* ─── Clickable Bullets (Dots) at bottom ─── */}
      <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-3 md:gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              "h-3.5 w-3.5 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50",
              current === index
                ? "bg-white w-3.5 shadow-md"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
}