"use client";
import React from "react";
import Working from "./ui/steps";
import Image from "next/image";

export default function Steps() {
  return (
    <div className="bg-white py-10">
      <h1 className="text-center font-bold text-5xl tracking-widest text-black">
        How to Use?
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 pt-10 mx-8 lg:mx-40">
        <div className="hidden md:block pt-9 h-screen">
          <Image src="/steps.gif" alt="gif" className="h-9/12 " />
        </div>
        <div className="md:p-5 flex flex-col ">
          <Working />
        </div>
      </div>
    </div>
  );
}
