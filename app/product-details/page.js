import Image from "next/image";

// images
import mackBook from "@/public/mackBook.jpg";
import star from "@/public/icons/star.png";

import { Truck } from 'lucide-react';

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
      <div className="grid grid-cols-2 gap-10 my-10">
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
      <div className="grid grid-cols-2 gap-10">

            {/* number  */}
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

        {/* delivery  */}
        <div className="flex items-center justify-start gap-3">
            <Truck/>
            <div>
                <h2 className="font-medium text-[16px]">Free Delivery</h2>
                <p className="text-sm font-medium ">Enter your postal code for Delivery Availability</p>
            </div>
        </div>

      </div>


    </div>
  );
};

export default page;
