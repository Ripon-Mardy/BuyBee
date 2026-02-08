import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// images  
import image1 from '@/public/arival/1.jpg'
import image2 from '@/public/arival/2.jpg'
import image3 from '@/public/arival/3.jpg'

const NewArrival = () => {
    return (
        <div className='mt-10'>

            <div className='relative flex items-center justify-between gap-2'>
                <div>
                    <h2 className='text-3xl font-semibold'> New Arrival</h2>
                    <div className='w-[170px] h-[11px] bg-[#1163CF] mt-[15px]'></div>
                </div>

                {/* arrow  */}
                <div className='flex items-center justify-center gap-4'>
                    <span className='w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex items-center justify-center cursor-pointer'> <ChevronLeft className='w-5 h-5 font-semibold' /> </span>
                    <span className='w-[46px] h-[46px] bg-[#F5F5F5] rounded-full flex items-center justify-center cursor-pointer'> <ChevronRight className='w-5 h-5 font-semibold' /> </span>
                </div>

            </div>

            {/* New arival images  */}
            <div className='mt-10'>

                <div className='flex items-center justify-between gap-10 overflow-hidden'>
                    <div className='w-full w-[647px] h-[600px]'>
                    <Image src={image1} className='w-full' layout='responsive' width={100} height={100} alt='image' />
                    </div>
                    <div className='w-full h-[600px]'>
                    <Image src={image2} className='w-full' layout='responsive' width={100} height={100} alt='image' />
                    </div>
                </div>

                <div className='w-full mt-4 h-[600px]'>
               <Image src={image3} width={100} height={100} layout='responsive' className='w-full' alt='image' />
                </div>

            </div>




        </div>
    )
}

export default NewArrival