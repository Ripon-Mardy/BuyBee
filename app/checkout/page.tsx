import Image from "next/image"

// images 
import iphone from '@/public/cart/1.jpg'
import leptop from '@/public/cart/2.jpg'

import bkash from '@/public/payment-methods/bkash.png'
import visa from '@/public/payment-methods/visa.png'
import mastercard from '@/public/payment-methods/masterCard.png'
import nagod from '@/public/payment-methods/nagod.png'

const page = () => {
    return (
        <div className="container mx-auto px-4 md:px-0">

            {/* customer login  */}
            <div className="bg-[#ECFBFB] h-[68px] px-4 flex items-center justify-start gap-2 mt-10">
                <h2>Returning to customer ? </h2>
                <button className="text-[#0C15CD]">Click Here to Login</button>
            </div>

            {/* shipping infor form  */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-32 mt-5">

                <div>
                    <h2 className="font-medium text-[36px]">Shipping info form</h2>
                    <form className="mt-5 space-y-5">

                        <div className="flex items-start justify-start gap-6">
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-sm opacity-40">First Name*</label>
                                <input type="text" className="w-full outline-none border border-gray-400 py-1.5 px-2 rounded" />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-sm opacity-40">Last Name*</label>
                                <input type="text" className="w-full outline-none border border-gray-400 py-1.5 px-2 rounded" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-sm opacity-40">Town/City</label>
                            <input type="text" className="w-full outline-none border border-gray-400 py-1.5 px-2 rounded" />
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-sm opacity-40">Street Address*</label>
                            <input type="text" className="w-full outline-none border border-gray-400 py-1.5 px-2 rounded" />
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-sm opacity-40">Apartment, floor, etc. (optional)</label>
                            <input type="text" className="w-full outline-none border border-gray-400 py-1.5 px-2 rounded" />
                        </div>

                        <div className="flex items-start justify-start gap-6">
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-sm opacity-40">First Name*</label>
                                <input type="text" className="w-full outline-none border border-gray-400 py-1.5 px-2 rounded" />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                                <label className="text-sm opacity-40">Last Name*</label>
                                <input type="text" className="w-full outline-none border border-gray-400 py-1.5 px-2 rounded" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <label className="text-sm opacity-40" >Town/City</label>
                            <input type="text" className="w-full outline-none border border-gray-400 py-1.5 px-2 rounded" />
                        </div>

                        <div className="flex items-center justify-start gap-2">
                            <input type="checkbox" />
                            <p className="text-[16px] font-normal">Save this information for faster check-out next time</p>
                        </div>

                    </form>
                </div>

                <div className="space-y-6">

                    <div className="flex items-center justify-between gap-3" >
                        <div className="flex items-center justify-between gap-2">
                            <div className="w-[58px] h-[58px]">
                                <Image src={iphone} width={10} height={10} layout="responsive" alt="iphone" />
                            </div>
                            <h2 className="font-medium text-[16px]">iphone 17pro max</h2>
                        </div>
                        <h2 className="text-[16px] font-medium">$799</h2>
                    </div>

                    <div className="flex items-center justify-between gap-3" >
                        <div className="flex items-center justify-between gap-2">
                            <div className="w-[58px] h-[58px]">
                                <Image src={leptop} width={10} height={10} layout="responsive" alt="iphone" />
                            </div>
                            <h2 className="font-medium text-[16px]">HP Laptop</h2>
                        </div>
                        <h2 className="text-[16px] font-medium">$799</h2>
                    </div>

                    {/* subtotal  */}
                    <div className="space-y-3">

                        <div className="flex items-center justify-between gap-2 border-b border-gray-300 pb-3">
                            <h2 className="font-medium text-[16px] leading-6 text-black">Subtotal:</h2>
                            <span className="font-medium text-[16px] leading-6">$1899</span>
                        </div>

                        <div className="flex items-center justify-between gap-2 border-b border-gray-300 pb-3">
                            <h2 className="font-medium text-[16px] leading-6 text-black">Shipping:</h2>
                            <span className="font-medium text-[16px] leading-6">Free</span>
                        </div>

                        <div className="flex items-center justify-between gap-2">
                            <h2 className="font-medium text-[16px] leading-6 text-black">Total:</h2>
                            <span className="font-medium text-[16px] leading-6">$1750</span>
                        </div>

                    </div>

                    <h2 className="text-[16px] font-medium">Choose Payment Method</h2>

                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center justify-start gap-4">
                            <input type="checkbox" />
                            <span className="text-[16px] font-medium">Pay with Card</span>
                        </div>
                        <div className="flex items-center justify-center gap-3">
                            <div className="relative w-[42px] h-[42px]">
                                <Image src={bkash} alt="bkash" fill className="object-contain" />
                            </div>

                            <div className="relative w-[42px] h-[42px]">
                                <Image src={visa} alt="visa" fill className="object-contain" />
                            </div>

                            <div className="relative w-[42px] h-[42px]">
                                <Image src={mastercard} alt="mastercard" fill className="object-contain" />
                            </div>

                            <div className="relative w-[42px] h-[42px]">
                                <Image src={nagod} alt="nagod" fill className="object-contain" />
                            </div>
                        </div>

                    </div>


                    <div className="flex items-center justify-start gap-4">
                            <input type="checkbox" />
                            <span className="text-[16px] font-medium">Cash on delivery</span>
                        </div>

                    <h2 className="font-medium text-[16px]">Have Cupon /Voucher?</h2>


                    {/* voucher  */}
                    <div className="flex items-center justify-center gap-5 md:gap-10">
                        <input type="text" className="w-full border border-gray-400 py-3 outline-none rounded px-3" placeholder="Coupon Code" />
                        <button className="bg-[#1163CF] py-3 text-white rounded w-full cursor-pointer">Apply Coupon</button>
                    </div>

                    <button className="bg-[#1163CF] py-3 text-white rounded w-full cursor-pointer font-normal">Place Order</button>

                </div>

            </div>

        </div>
    )
}

export default page