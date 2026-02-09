

const page = () => {
  return (
    <div className="container mx-auto px-4 md:px-0">
        
        {/* log in  */}
        <div className="max-w-[643px] mx-auto bg-[#E2ECF9] p-10 flex items-start gap-8 flex-col mt-20">
            <div className="space-y-4">
                <h2 className="text-black text-4xl font-medium">Log in</h2>
                <h2 className="text-black text-[16px]">Enter your details below</h2>
            </div>
            <form className="w-full space-y-10">
                <input type="text" className="w-full outline-none border-b border-gray-300 py-2" placeholder="Email or Phone number" />
                <input type="password" className="w-full outline-none border-b border-gray-300 py-2" placeholder="Password" />
                <div className="flex flex-wrap gap-10">
                    <button className="bg-[#1163CF] py-4 text-white rounded w-52">Log in</button>
                    <button className="text-red-500">Forget password?</button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default page