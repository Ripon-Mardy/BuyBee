'use client'

import Image, { StaticImageData } from "next/image";

// images
import image1 from '@/public/cart/1.jpg'
import image2 from '@/public/cart/2.jpg'
import image3 from '@/public/cart/3.jpg'

type CartItem = {
  id: number;
  name: string;
  image: StaticImageData;
  price: number;
  quantity: number;
};

const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Smartphone",
    image: image1,
    price: 799,
    quantity: 1,
  },
  {
    id: 2,
    name: "Laptop",
    image: image2,
    price: 500,
    quantity: 2,
  },
  {
    id: 3,
    name: "Headphone",
    image: image1,
    price: 250,
    quantity: 1,
  },
  {
    id: 4,
    name: "Monitor",
    image: image3,
    price: 600,
    quantity: 3,
  },
];

const Page = () => {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-4 py-10">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* CART ITEMS */}
        <div className="lg:col-span-2 space-y-4">

          <div className="grid grid-cols-4 font-semibold border-b pb-3 text-lg">
            <span>Product Details</span>
            <span className="text-center">Quantity</span>
            <span className="text-center">Price</span>
            <span className="text-right">Total</span>
          </div>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 items-center border p-4 rounded-md"
            >
              {/* Product */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.image}
                  width={60}
                  height={60}
                  alt={item.name}
                  className="rounded"
                />
                <p className="font-medium">{item.name}</p>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-center gap-3">
                <button className="px-2 border rounded">-</button>

                <span className="border px-3 py-1 rounded">
                  {item.quantity.toString().padStart(2, "0")}
                </span>

                <button className="px-2 border rounded">+</button>
              </div>

              {/* Price */}
              <p className="text-center">${item.price}</p>

              {/* Total */}
              <div className="flex justify-end items-center gap-4">
                <p>${item.price * item.quantity}</p>
                <button className="text-gray-400 hover:text-red-500">
                  ✕
                </button>
              </div>
            </div>
          ))}


        </div>

        {/* SUMMARY */}
       <div>
         <div className="border p-6 rounded-md h-fit mt-16">
          <h2 className="font-semibold text-lg mb-4">Total</h2>

          <div className="flex justify-between mb-2 border-b border-gray-200 pb-3">
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>Free</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-semibold mb-4">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>

          <button className="w-full bg-[#1163CF] text-white py-2 rounded">
            Proceed to checkout
          </button>
        </div>



       </div>

       

      </div>

      {/* buttons  */}
       <div className="flex items-center justify-between gap-2 w-full">
          <button  className="bg-[#1163CF] py-4 text-white rounded w-52 mt-10">Return to shop </button>
        <button  className="bg-[#1163CF] py-4 text-white rounded w-52 mt-10 mr-24">Update Cart </button>
       </div>


    </div>
  );
};

export default Page;
