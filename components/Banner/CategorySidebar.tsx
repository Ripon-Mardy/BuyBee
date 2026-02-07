'use client'
import { categories } from "@/src/data/categories"
import { useState } from 'react';
import Link from "next/link";

import { ChevronRight } from 'lucide-react';
import { CustomPromoCarousel } from "../CustomPromoCarousel";

const CategorySidebar = () => {
    const [openCategory, setOpenCategory] = useState<string | null>(null)

    const togglecategory = (name: string) => {
      setOpenCategory(openCategory === name ? null : name)
    }

  return (
    <div className="w-[229px]">

        <div className=" bg-white space-y-3 mt-2">

            {/* CATEGORY SIDEBAR  */}
            {categories.map((cate, index) => (
                <div key={index}>
                  <button onClick={() => cate?.hasSubmenu && togglecategory(cate?.name)} className="flex items-center justify-between gap-2 w-full cursor-pointer text-[16px]">
                    <span>{cate?.name}</span>
                    {cate?.subCategories && (
                      <ChevronRight className='flex w-4 h-4'/>  
                    )}
                </button>
                {/* // SUBMENU  */}

                <div>
                  {cate?.hasSubmenu && openCategory === cate?.name && (
                  <div>
                    {cate?.subCategories?.map((subCat, index) => (
                      <span key={index} className="flex flex-col py-1 ml-2 cursor-pointer"> {subCat?.name} </span>
                    ))}
                  </div>
                )}  
                </div>

                </div>

                
            ))}
        </div>

    </div>
  )
}

export default CategorySidebar