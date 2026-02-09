import Image from "next/image";

import { products } from "@/src/data/products";

// images
import mackBook from "@/public/mackBook.jpg";
import star from "@/public/icons/star.png";
import stars from "@/public/icons/stars.png";
import star5 from "@/public/icons/5star.jpg";

import { Truck, Heart, Funnel, ShoppingCart, Star } from "lucide-react";

const page = () => {
  return (
    <div className="container mx-auto mt-[39px]">
      {/* path  */}
      <div>
        <h2 className="text-sm font-normal opacity-50">
          Account / Electronics / Apple MackBook Air
        </h2>
      </div>

      {/* details  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10">
        <div className="bg-[#FFFAFA] flex items-end justify-center">
          <div className="w-[446px] flex items-end justify-center">
            <Image
              src={mackBook}
              width={50}
              height={50}
              className="w-full"
              layout="responsive"
              quality={90}
              alt="mackbook"
            />
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-3">
            <h2 className="font-semibold text-2xl leading-6 text-black">
              Apple MackBook Air Early(2025){" "}
            </h2>
            <div className="flex items-center justify-start gap-5">
              <div className="flex items-center justify-start gap-2">
                <Image src={star} width={15} height={15} alt="star" />
                <Image src={star} width={15} height={15} alt="star" />
                <Image src={star} width={15} height={15} alt="star" />
                <Image src={star} width={15} height={15} alt="star" />
                <Image src={star} width={15} height={15} alt="star" />
                <span className="text-sm opacity-50"> (150 Reviews) </span>
              </div>
              <div>
                | <span className="text-[#00FF66] text-sm ml-2">In Stock</span>
              </div>
            </div>
            <h2 className="font-normal text-2xl leading-6">$ 849.00</h2>
          </div>

          <p className="text-sm font-normal w-93.25">
            Apple MacBook Air (Early 2025) Apple M3 13.6" Midnight Laptop Price
            . Brand: Apple.
          </p>

          <hr className="w-100" />

          <div className="w-[493px]">
            <h2 className="text-xl font-normal ">Key Specifications</h2>
            <ul className="pl-4 mt-2">
              <li className="list-disc opacity-50 text-[16px]">
                Display: 13.6-inch Liquid Retina display with True Tone
              </li>
              <li className="list-disc opacity-50 text-[16px]">
                Processor: Apple M3 chip with 8-core CPU and 8-core GPU
              </li>
              <li className="list-disc opacity-50 text-[16px]">
                Memory: 8GB unified memory
              </li>
              <li className="list-disc opacity-50 text-[16px]">
                Storage: 256GB SSD
              </li>
              <li className="list-disc opacity-50 text-[16px]">
                Color: Midnight
              </li>
              <li className="list-disc opacity-50 text-[16px]">
                Operating system: macOS Sonoma
              </li>
              <li className="list-disc opacity-50 text-[16px]">
                Other Features: Fanless design for slient operation, Touch ID,
                Magic Keyboard, and up to 18 hour of bettery life.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* select numbers  */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-10">
        {/* number  */}
        <div>
          <div className="flex items-center justify-center gap-10">
            <h2 className="font-medium text-xl leading-5">Quality</h2>

            <div className="inline-flex items-center border border-gray-300 bg-white">
              <button
                type="button"
                className="px-4 py-1 text-gray-600 font-medium text-lg"
              >
                −
              </button>
              <span className="px-5 py-1 text-gray-900 font-semibold text-lg border-x border-gray-300 text-center">
                2
              </span>
              <button
                type="button"
                className="px-4 py-1 bg-[#1163CF] text-white font-medium text-lg"
              >
                +
              </button>
            </div>

            <div className="flex items-center justify-center gap-4">
              <h2 className="font-normal text-xl"> Colours:</h2>
              <div className="flex items-center justify-center gap-3">
                <div className="w-5 h-5 border border-black rounded-full"></div>
                <div className="w-5 h-5 rounded-full bg-black"></div>
              </div>
            </div>
          </div>

          {/* buttons  */}
          <div className="flex items-center justify-center gap-5 mt-10">
            <button className="bg-[#1163CF] py-2.5 px-12 rounded font-medium text-[16px] text-white cursor-pointer">
              Buy Now
            </button>
            <button className="bg-[#1163CF] py-2.5 px-12 rounded font-medium text-[16px] text-white cursor-pointer">
              Add To Cart
            </button>
            <button className="border border-gray-200 p-2 rounded">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* delivery  */}
        <div className="flex items-center justify-start gap-3">
          <Truck />
          <div>
            <h2 className="font-medium text-[16px]">Free Delivery</h2>
            <p className="text-sm font-medium ">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
      </div>

      {/* rating and review  */}
      <div className="mt-10.5">
        <p className="bg-[#C2FFFA] h-[47px] flex items-center font-normal text-[16px] px-10">
          Ratings & Reviews of Apple MackBook
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          <div className="flex items-center justify-center flex-col gap-5">
            <h2 className="text-2xl">4.5/5</h2>
            <div className="w-[199px] h-[52px]">
              <Image
                src={stars}
                width={30}
                height={30}
                layout="responsive"
                className="w-full"
                alt="stars"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-start gap-10">
              <Image src={star} width={20} height={20} alt="star" />
              <div className="w-[380px]">
                <div className="w-[333px] h-[15px] rounded-md bg-[#F5C90A]"></div>
              </div>
              <span>92</span>
            </div>

            <div className="flex items-center justify-start gap-10">
              <Image src={star} width={20} height={20} alt="star" />
              <div className="w-[380px]">
                <div className="w-[275px] h-[15px] rounded-md bg-[#F5C90A]"></div>
              </div>
              <span>29</span>
            </div>

            <div className="flex items-center justify-start gap-10">
              <Image src={star} width={20} height={20} alt="star" />
              <div className="w-[380px]">
                <div className="w-[166px] h-[15px] rounded-md bg-[#F5C90A]"></div>
              </div>
              <span>18</span>
            </div>

            <div className="flex items-center justify-start gap-10">
              <Image src={star} width={20} height={20} alt="star" />
              <div className="w-[380px]">
                <div className="w-[101px] h-[15px] rounded-md bg-[#F5C90A]"></div>
              </div>
              <span>8</span>
            </div>

            <div className="flex items-center justify-start gap-10">
              <Image src={star} width={20} height={20} alt="star" />
              <div className="max-w-[380px]">
                <div className="w-[52px] h-[15px] rounded-md bg-[#F5C90A]"></div>
              </div>
              <span>4</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between gap-2 border border-[#0B0B0B] rounded px-4 h-14.5">
          <h2 className="font-normal">Product Reviews</h2>
          <div className="flex items-center justify-center gap-2">
            <Funnel className="w-5 h-5" />
            <span>Filter:All Status</span>
          </div>
        </div>

        <div className="mt-5 space-y-5">
          {/* review 1  */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="w-[116px]">
                <Image
                  src={star5}
                  width={10}
                  height={10}
                  layout="responsive"
                  className="w-full"
                  alt="5star"
                />
              </div>
              <span>6.10.1025</span>
            </div>
            <h2>Jennifer Jr. ✅</h2>
            <p>Best Quality Product!</p>
          </div>

          {/* review 2  */}
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-2">
              <div className="w-[116px]">
                <Image
                  src={star5}
                  width={10}
                  height={10}
                  layout="responsive"
                  className="w-full"
                  alt="5star"
                />
              </div>
              <span>10.8.1025</span>
            </div>
            <h2>Anna Lina. ✅</h2>
            <p>Worth It!</p>
          </div>

          <div>
            <h2 className="text-[#1163CF] text-sm">You May Also Like</h2>
            <div className="bg-[#1163CF] w-[134px] h-[9px] mt-2"></div>
          </div>
        </div>
      </div>

      {/* products  */}
      <div className="my-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {products?.slice(0,4).map((item, index) => (
            <div key={index} className="">
              <div className="relative  rounded">
                {/* discount  */}
                {item?.discount && (
                  <div className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs md:text-sm font-bold px-2.5 py-1 rounded">
                    {item?.discount}
                  </div>
                )}

                <div className=" aspect-square flex items-center justify-center flex-col bg-[#F5F5F5]">
                  <div className="w-[190px]">
                    <Image
                      src={item?.image}
                      width={100}
                      height={100}
                      layout="responsive"
                      className="w-full"
                      alt={item?.name}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 cursor-pointer text-white bg-[#1163CF] font-normal h-[41px] text-sm rounded-b">
                  <ShoppingCart className="w-5 h-5" />
                  <button> {item?.buttonText} </button>
                </div>

                <div className="mt-4 space-y-1">
                  <h2 className="text-[16px] font-medium"> {item?.name} </h2>
                  <div className="flex items-center gap-2">
                    <h2 className="text-[#DB4444] font-medium">
                      ${item?.discountedPrice}{" "}
                    </h2>
                    {item?.discountedPrice !== item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${item.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                {/* star  */}
                <div className="mt-2 flex items-center justify-start gap-2">
                  <div className="flex items-start justify-start gap-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    <Star className="w-3 h-3 text-yellow-500" />
                    <Star className="w-3 h-3 text-yellow-500" />
                    <Star className="w-3 h-3 text-yellow-500" />
                    <Star className="w-3 h-3 text-yellow-500" />
                  </div>
                  <span className="text-sm opacity-50"> (65) </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
