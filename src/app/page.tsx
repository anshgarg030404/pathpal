"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ContainerTextFlipDemo } from "@/components/container";
import Steps from "@/components/howToUse";
import { useRef } from "react";

import ContactUs from "@/components/contactus";

export default function Home() {
  const router = useRouter();

  return (
    <>
    <div
      className=" h-screen bg-cover bg-center "
      style={{ backgroundImage: "url('/bg-img.jpeg')" }}
    >
      <div className="bg-black opacity-50 min-h-screen w-full z-10 absolute"></div>
      <div className="z-20 flex flex-col space-y-5 relative justify-center items-center  h-screen">
        <ContainerTextFlipDemo />
        <Link
          href="/login"
          className="w-fit md:w-auto text-center bg-[#2F4858] hover:bg-[#1C3B4A] text-white px-6 py-3 rounded-md"
        >
          Get Started
        </Link>
      </div>
      
      

     
    </div>
    <Steps />
      <ContactUs/>
    </>
  );
}
