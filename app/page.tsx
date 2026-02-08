import CategorySidebar from "@/components/Banner/CategorySidebar";
import MainBanner from "@/components/Banner/MainBanner";
import ShopFromCategory from "@/components/ShopFromCategory";


export default function Home() {
  return (
    <div className="container mx-auto">


    <div className="flex">
     <div className="w-[237px]">
       <CategorySidebar/>
     </div>
        <MainBanner/>
    </div>

    <ShopFromCategory/>


    </div>
  );
}
