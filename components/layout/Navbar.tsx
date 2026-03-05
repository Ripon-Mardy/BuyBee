"use client";

import { useState } from "react";

import {
  Search,
  User,
  ShoppingCart,
  Heart,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

import { categories } from "@/src/data/categories";
import { menus } from "@/src/data/menus";

const Navbar = () => {
  const [openMobileSidebar, setOpenMobileSidebar] = useState<boolean>(true);
  const [openSubmenuCategory, setOpenSubmenuCategory] = useState<string | null>(
    null,
  );
  const [openActiveMenu, setOpenActiveMenu] = useState<string | null>(
    "category",
  );

  const toggleMobileCategory = (name: string) => {
    setOpenSubmenuCategory(openSubmenuCategory === name ? null : name);
  };

  return (
    <div>
      <div className="container mx-auto px-3 xl:px-0 py-4">
        {/* mobile responsive  */}
        <div className="flex items-center justify-between gap-5 w-full xl:hidden">
          <Menu onClick={() => setOpenMobileSidebar(!openMobileSidebar)} />
          <Link
            href={"/"}
            className="text-[#1163CF] font-bold text-2xl leading-6"
          >
            BuyBee
          </Link>
          <Link href={"/cart"}>
            <ShoppingCart />
          </Link>
        </div>

        {/* desktop navbar  */}
        <div className="xl:flex items-center justify-center gap-2 w-full hidden">
          <Link
            href={"/"}
            className="text-[#1163CF] font-bold text-2xl leading-6 w-[229px]"
          >
            BuyBee
          </Link>

          <div className="flex items-center justify-between gap-5 w-full">
            <div className="w-[734px] bg-[#F0F8FF] rounded md:flex items-center justify-center gap-4 pr-5">
              <input
                type="text"
                className="w-full py-[9px] pr-6 text-sm  pl-5 outline-none"
                placeholder="Search items here..."
              />
              <Search className="w-5 h-5" />
            </div>

            <div className=" md:flex items-center justify-between gap-8">
              <div className="flex items-center justify-center gap-1">
                <User className="w-6 h-6" />
                <Link href={"/sign-up"}>sign up</Link>
                <span>/</span>
                <Link href={"/sign-in"}>Sign In</Link>
              </div>

              <div className="flex items-center justify-center gap-1">
                <ShoppingCart className="w-6 h-6" />
                <span>Cart</span>
              </div>

              <Heart className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* mobile responsive sidebar  */}
        {openMobileSidebar && (
          <div className="fixed inset-0 z-40 bg-black/50 xl:hidden">
            <div className="fixed left-0 top-0 h-full w-2/3 bg-white p-3">
              {/* crose  */}
              <div
                onClick={() => setOpenMobileSidebar(false)}
                className="absolute right-2 top-2 text-gray-400"
              >
                <X />
              </div>

              {/* search bar  */}
              <div className="flex items-center justify-between border border-gray200 rounded px-2 mt-8">
                <input
                  type="text"
                  className="w-full text-sm outline-none py-1"
                  placeholder="Search..."
                />
                <Search className="w-4 h-4 text-gray-400" />
              </div>

              {/* menu and category  */}
              <div className="my-2 mt-2 flex items-center justify-around rounded overflow-hidden">
                {/* menu  */}
                <button
                  onClick={() => setOpenActiveMenu("category")}
                  className={`w-full py-2 text-sm text-gray-500 ${openActiveMenu === "category" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} `}
                >
                  Category
                </button>
                <button
                  onClick={() => setOpenActiveMenu("menu")}
                  className={` w-full py-2 text-sm text-gray-500  ${openActiveMenu === "menu" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                >
                  Menu
                </button>
              </div>

              {/* categories  */}
              {openActiveMenu === "category" && (
                <div className="space-y-3 mt-2">
                  {categories?.map((cat, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between gap-2 border-b border-gray-100 py-1">
                        <button
                          onClick={() => toggleMobileCategory(cat?.name)}
                          className="text-sm"
                        >
                          {" "}
                          {cat?.name}{" "}
                        </button>
                        {cat?.hasSubmenu && (
                          <ChevronRight className="w-4 h-4 text-gray-700" />
                        )}
                      </div>

                      {/* submenu  */}
                      <div className="">
                        {cat?.hasSubmenu &&
                          openSubmenuCategory === cat?.name && (
                            <div className="flex flex-col gap-3 items-start pl-2 py-1 justify-start text-sm bg-gray-100 rounded border border-gray-200">
                              {cat?.subCategories?.map((subCat, index) => (
                                <button key={index}> {subCat?.name} </button>
                              ))}
                            </div>
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* menus  */}
              {openActiveMenu === "menu" && (
                <div>
                  {menus?.map((menu, key) => (
                    <div
                      key={key}
                      className="flex items-center justify-between gap-2 border-b border-gray-100 py-1"
                    >
                      <button className="text-sm"> {menu?.name} </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
