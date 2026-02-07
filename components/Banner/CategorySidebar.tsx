import { Menu } from 'lucide-react';


const CategorySidebar = () => {
  return (
    <div className="max-w-[1340px] mx-auto">

        <div className="w-[229px] h-[44px] bg-white">
           
           <div className='bg-[#1163CF] flex items-center justify-center gap-5 text-white'>
            <h2 className='text-sm font-normal leading-[18px]'>All Catagories</h2>
            <Menu className='h-5 w-5'/>
           </div>

        </div>

    </div>
  )
}

export default CategorySidebar