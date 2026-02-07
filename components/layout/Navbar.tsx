import { Search, User, ShoppingCart , Heart   } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="max-w-[1340px] mx-auto py-5">
      <div className='flex items-center gap-2'>

        <h2 className='text-[#1163CF] font-bold text-2xl leading-6 w-[229px]'>BuyBee</h2>

        <div className='w-[734px] bg-[#F0F8FF] rounded flex items-center justify-center gap-4'>
            <input type="text" className='w-full py-[7px] pr-6 text-sm  pl-5 outline-none' placeholder='Search items here...' />
            <Search className='w-6 h-6'/>
        </div>

        <div className='flex items-center justify-end gap-8'>

          <div className='flex items-center justify-center gap-1'>
            <User className='w-6 h-6' />
            <Link href={'#'}>sign up</Link>
            <span>/</span>
            <Link href={'#'}>Sign In</Link>
          </div>

          <div className='flex items-center justify-center gap-1'>
            <ShoppingCart className='w-6 h-6' />
            <span>Cart</span>
          </div>

          <Heart className='w-6 h-6'/>
            
        </div>

    </div>
    </div>
  )
}

export default Navbar