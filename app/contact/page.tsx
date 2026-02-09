

const page = () => {
  return (
    <div className="container mx-auto px-3 md:px-0 mt-13.75">

      {/* contact information  */}
      <div className="max-w-[853px] bg-[#E2ECF9] py-10 px-5 md:px-20 rounded-[15px] mx-auto">
        <h2 className="text-center text-xl md:text-3xl font-normal">Enter Your Personal Information</h2>
       
       <form className="flex flex-col gap-6 mt-5">
         <input type="text" className="w-full py-2 outline-none rounded px-2 bg-gray-50 text-[16px]" placeholder="Your Name" />
        <input type="email" className="w-full py-2 outline-none rounded px-2 bg-gray-50 text-[16px]" placeholder="Your Email" />
        <input type="text" className="w-full py-2 outline-none rounded px-2 bg-gray-50 text-[16px]" placeholder="Your Phone" />
        <textarea name="" rows={6} id="" className="w-full py-2 outline-none rounded px-2 bg-gray-50 text-[16px]" placeholder="Your Message"></textarea>
        <div className="flex items-center justify-center">
          <button className="bg-[#1163CF] py-4 text-white rounded text-center px-10 text-[16px] cursor-pointer">Send Message </button>
        </div>
       </form>

      </div>

    </div>
  )
}

export default page