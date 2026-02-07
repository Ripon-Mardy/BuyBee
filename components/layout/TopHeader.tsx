

import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const TopHeader = () => {
  return (
    <div className="bg-[#1163CF]">

       <div className="max-w-[1340px] mx-auto ">

           <div className="py-2 flex items-center justify-between h-[57px]">
             <h2 className="text-[16px] text-[#FFFFFF] leading-6 font-normal">✉️ Email: support@ buybee.com</h2>


        <div className="flex items-center justify-center gap-6">
            <Facebook className="text-white w-5 h-[18px] cursor-pointer"/>
            <Twitter className="text-white w-5 h-[18px] cursor-pointer"/>
             <Instagram className="text-white w-5 h-[18px] cursor-pointer"/>
            <Linkedin className="text-white w-5 h-[18px] cursor-pointer"/>
        </div>
           </div>


       </div>

    </div>
  )
}

export default TopHeader