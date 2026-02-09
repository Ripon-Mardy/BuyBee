import Image from 'next/image'

// images 
import googlePlay from '@/public/google-play.png'
import appStore from '@/public/app-store.png'

const Footer = () => {
  return (
    <div className='bg-[#0F59B9] py-10 mt-20 px-3 md:px-0'>

       <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-12'>
         <div className='space-y-4'>
            <h2 className='text-white text-2xl font-bold leading-6'>BuyBee</h2>
            <p className='text-white text-sm font-normal'>BuyeBee is your one-stop destination for all electronics, fashion, and lifestyle products. We connect quality sellers with smart buyers — fast, secure, and reliable shopping.</p>
            <h2 className='text-xl font-bold leading-6 text-white'>Check Our App on</h2>
            <div className='flex items-center justify-start gap-3'>
                <div className='w-[116px]'>
                    <Image src={googlePlay} width={20} height={20} className='w-full' layout='responsive' alt='google-play' />
                </div>
                <div className='w-[90px]'>
                    <Image src={appStore} width={20} height={20} className='w-full' layout='responsive' alt='app-store' />
                </div>
            </div>
        </div>

        <div>
            <h2 className='text-white text-xl md:text-2xl font-bold'>Quick Links</h2>
            <ul className='pl-5 mt-5 space-y-1'>
                <li className='list-disc text-white text-[16px]'>Home</li>
                <li className='list-disc text-white text-[16px]'>Shop</li>
                <li className='list-disc text-white text-[16px]'>About Us</li>
                <li className='list-disc text-white text-[16px]'>Contact Us</li>
                <li className='list-disc text-white text-[16px]'>FAQ</li>
            </ul>
        </div>


        <div>
            <h2 className='text-white text-xl md:text-2xl font-bold'>Customer Support</h2>
            <ul className='pl-5 mt-5 space-y-1'>
                <li className='list-disc text-white text-[16px]'>Help Center</li>
                <li className='list-disc text-white text-[16px]'>Shipping Delivery</li>
                <li className='list-disc text-white text-[16px]'>Return and Refund Policy</li>
                <li className='list-disc text-white text-[16px]'>Privacy Policy</li>
                <li className='list-disc text-white text-[16px]'>Terms & Canditions</li>
            </ul>
        </div>

        <div>
            <h2 className='text-white text-xl md:text-2xl font-bold'> Contact & Follow Us</h2>
           <div className='mt-5 space-y-1'>
             <p className='text-white'>Email: support@buyebee.com</p>
            <p className='text-white'>Phone: +8801XXXXXXXXX</p>
            <p className='text-white'>Address: Dhaka, Bangladesh</p>
           </div>
        </div>


       </div>

       <p className='text-white text-sm font-normal text-center mt-10 md:mt-0'>© 2025 BuyBee. All rights reserved.</p>

    </div>
  )
}

export default Footer