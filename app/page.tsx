import CategorySidebar from "@/components/Banner/CategorySidebar";
import MainBanner from "@/components/Banner/MainBanner";
import ElectoricBrands from "@/components/ElectoricBrands";
import ExploreProducts from "@/components/ExploreProducts";
import NewArrival from "@/components/NewArrival";
import Products from "@/components/Products";
import ShopFromCategory from "@/components/ShopFromCategory";


export default function Home() {
  return (
    <div className="container mx-auto">


    <div className="md:flex">
     <div className="w-[237px] hidden xl:block">
       <CategorySidebar/>
     </div>
        <MainBanner/>
    </div>

    <ShopFromCategory/>
    <ElectoricBrands/>
    <Products/>
    <NewArrival/>
    <ExploreProducts/>

    </div>
  );
}
