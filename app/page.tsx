import ProductCard from "@/components/ProductCard";
import { products } from "@/src/data/products";
import { Button } from "@/components/ui/button";
import { PromoCarousel } from "@/components/Carusel";
import { CustomPromoCarousel } from "@/components/CustomPromoCarousel";
import CategorySidebar from "@/components/Banner/CategorySidebar";
import HeroCarousel from "@/components/Banner/HeroCarusel";
import PromoSlider from "@/components/Banner/PromoSlider";
import MainBanner from "@/components/Banner/MainBanner";


export default function Home() {
  return (
    <div className="max-w-[1340px] mx-auto">
    <div className="flex">
     <div className="w-[237px]">
       <CategorySidebar/>
     </div>
        <MainBanner/>

    {/* <CustomPromoCarousel/> */}
    {/* <HeroCarousel/> */}
    {/* <PromoSlider/> */}
    </div>
    </div>
  );
}
