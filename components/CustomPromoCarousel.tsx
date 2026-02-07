// components/ui/CustomPromoCarousel.tsx
"use client";

import * as React from "react";
import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaEventType,
} from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // ← shadcn utils (or your own classNames helper)

// ────────────────────────────────────────────────
// Type for each slide (customize as you need)
type Slide = {
  title: string;
  subtitle: string;
  bgColor: string;
  image?: string; // optional background or hero image
};

// Example slides — replace with your content
const slides: Slide[] = [
  {
    title: "Up to 15% off Voucher",
    subtitle: "On all types of products",
    bgColor: "bg-cyan-600",
  },
  {
    title: "Summer Flash Sale",
    subtitle: "Up to 40% on selected items",
    bgColor: "bg-pink-600",
  },
  {
    title: "New Collection Arrived",
    subtitle: "Shop the latest trends now",
    bgColor: "bg-violet-600",
  },
];

export function CustomPromoCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = React.useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList());
  }, []);

  const onSelect = React.useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);

    emblaApi.on("init" as EmblaEventType, onInit);
    emblaApi.on("select" as EmblaEventType, onSelect);
    emblaApi.on("reInit" as EmblaEventType, onInit);

    return () => {
      emblaApi.off("init" as EmblaEventType, onInit);
      emblaApi.off("select" as EmblaEventType, onSelect);
      emblaApi.off("reInit" as EmblaEventType, onInit);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* ─── Viewport & Container ─── */}
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={cn(
                "min-w-0 flex-shrink-0 flex-grow-0 basis-full",
                "relative h-[380px] md:h-[420px] lg:h-[480px]",
                slide.bgColor
              )}
            >
              {/* Optional gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Content – center aligned */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6 text-white">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="mt-4 text-xl md:text-2xl font-medium opacity-90">
                  {slide.subtitle}
                </p>

                <Button
                  size="lg"
                  className="mt-8 bg-white text-black hover:bg-gray-100 px-10 py-6 text-lg font-semibold rounded-full shadow-lg transition-transform hover:scale-105"
                >
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Dots on TOP ─── */}
      <div className="absolute top-4 left-0 right-0 z-20 flex justify-center gap-3">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollTo(index)}
            className={cn(
              "h-3 w-3 rounded-full transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50",
              selectedIndex === index
                ? "w-3 bg-white shadow-lg"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}