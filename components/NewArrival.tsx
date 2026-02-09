import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// images  
import image1 from '@/public/arival/1.jpg'
import image2 from '@/public/arival/2.jpg'
import image3 from '@/public/arival/3.jpg'

const NewArrival = () => {
    return (
        <div className='mt-10 px-3 md:px-0'>

            <div className='relative flex items-center justify-between gap-2'>
                <div>
                    <h2 className='text-xl md:text-3xl font-semibold'> New Arrival</h2>
                    <div className='w-full md:w-[170px] h-1 md:h-[11px] bg-[#1163CF] mt-1 md:mt-[15px]'></div>
                </div>

                {/* arrow  */}
                <div className='flex items-center justify-center gap-4'>
                    <span className='md:w-[46px] md:h-[46px] p-1 bg-[#F5F5F5] rounded-full flex items-center justify-center cursor-pointer'> <ChevronLeft className='w-5 h-5 font-semibold' /> </span>
                    <span className='md:w-[46px] md:h-[46px] p-1 bg-[#F5F5F5] rounded-full flex items-center justify-center cursor-pointer'> <ChevronRight className='w-5 h-5 font-semibold' /> </span>
                </div>

            </div>

            {/* New arival images  */}
            <div className='mt-10'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='w-full h-[647px]'>
                    <Image src={image1} className='w-full h-full object-cover' width={100} height={100} alt='image' />
                    </div>
                    <div className='w-full h-[647px]'>
                    <Image src={image2} className='w-full h-full'  width={100} height={100} alt='image' />
                    </div>
                </div>

                <div className='w-full mt-5 '>
               <Image src={image3} width={100} height={100} className='w-full' alt='image' />
                </div>

            </div>




        </div>
    )
}

export default NewArrival