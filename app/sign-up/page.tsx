
import Image from "next/image";

// images 
import google from '@/public/icons/google.png'

const page = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 mt-9.75">
      {/* path  */}
      <div>
        <h2 className="text-sm font-normal opacity-50">
          Account / Register
        </h2>
      </div>

      {/* create an acount  */}
      <div className="max-w-100 mt-[73px] mx-auto flex items-start justify-start flex-col gap-6">
        <h2 className="font-medium text-[36px] leading-10">Create an account</h2>
        <p className="font-normal text-[16px]">Enter your  information</p>
        <form className="flex flex-col gap-6 w-full">
            <input type="text" className="w-full border-b border-gray-300 outline-none py-2 text-[16px]" placeholder="Name" />
            <input type="email" className="w-full border-b border-gray-300 outline-none py-2 text-[16px]" placeholder="Email or Phone Number" />
            <input type="password" className="w-full border-b border-gray-300 outline-none py-2 text-[16px]" placeholder="Password" />
            <button className="bg-[#1163CF] py-4 flex items-center justify-center gap-4 text-white rounded">Create Account</button>
            {/* sign up with google  */}
            <button className=" py-4 flex items-center justify-center gap-4 rounded border border-[#00000066]">
                <Image src={google} width={24} height={24} alt="google" />
                <span className="font-medium text-[16px] leading-6">Sign up with Google</span>
            </button>
        </form>

      </div>
       {/* already have an account  */}
        <div className="flex items-center justify-center gap-2 mt-3 opacity-70 text-[16px]">
            <button className="cursor-pointer">Already have account?</button>
            <button className="underline cursor-pointer">Log in</button>
        </div>




    </div>
  );
};

export default page;
