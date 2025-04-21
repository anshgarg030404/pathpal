import Image from 'next/image';
import Link from 'next/link';

export default function Custom404() {
  return (
    <main className="min-h-screen flex items-center justify-center  px-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-5xl w-full flex flex-col md:flex-row  justify-center overflow-hidden">
        {/* Left Section (Desktop View) */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 p-10">
          <div className="text-[180px] font-bold text-[#2F4858] leading-none relative">
            404
            <div className="absolute top-3.5 left-7/12 -translate-x-1/2">
              <Image 
                src="/image.png"
                alt="Character"
                width={800}
                height={1000}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-xl font-semibold mt-4">Page Not Found</p>
          <p className="text-sm text-gray-500 mb-6">This page doesn&apos;t exist or was removed!<br />We suggest you go back to home</p>

            <Link href="/">
              <button className="px-6 py-2 bg-[#2F4858] text-white font-semibold cursor-pointer rounded-full">Back to Home</button>
            </Link>
            

        </div>

        {/* Right Section (Mobile & Tablet View) */}
        <div className="flex flex-col items-center justify-center w-full md:hidden p-8">
          <div className="text-[120px] font-bold text-[#2F4858] leading-none relative">
            404
            <div className="absolute top-2 left-7/12 -translate-x-1/2">
              <Image 
                src="/image.png"
                alt="Character"
                width={150}
                height={150}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-xl font-semibold mt-6">Page Not Found</p>
          <p className="text-sm text-gray-500 mb-6 text-center">This page doesn&apos;t exist or was removed!<br />We suggest you back to home</p>

            <Link href="/">
              <button className="px-5 py-2 bg-[#2F4858] text-white rounded-full">Back to Home</button>
            </Link>
            
        </div>
      </div>
    </main>
  );
}
