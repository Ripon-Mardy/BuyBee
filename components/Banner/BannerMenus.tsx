import { Menu } from 'lucide-react';

import Link from 'next/link';

import { menus } from '@/src/data/menus';

const BannerMenus = () => {
  return (
   <div className='border border-gray-200 hidden xl:block'>
     <div className="max-w-[1340px] mx-auto">

      <div className='h-[38px] flex items-center justify-center'>

        <div className='bg-[#1163CF] w-[229px] flex items-center justify-center gap-3 text-white h-full'>
          <h2 className='text-lg font-normal leading-[18px]'>All Catagories</h2>
          <Menu className='h-6 w-6' />
        </div>

        {/* menu  */}
        <div className='max-w-[879px] mx-auto space-x-6'>
          {menus.map((item, index) => (
            <Link key={index} href={item?.path}> {item?.name} </Link>
          ))}
        </div>


      </div>


    </div>
   </div>
  )
}

export default BannerMenus