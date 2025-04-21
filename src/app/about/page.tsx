"use client";

import { Team } from "@/components/team";

export default function About() {
  return (
    <div className="bg-white">
      <div className="w-full h-fit  text-black pt-20 flex justify-between">
        <div className="xl:mx-48 mx-10 lg:w-1/2 space-y-8">
          <h1 className="text-3xl font-semibold font-serif">
            About <span className="bg-blue-100 p-2">Pathpal</span>
          </h1>
          <p className="w-fit  font-sans text-lg ">
            <span className="font-bold text-xl">
              Reimagining the Way You Travel!{" "}
            </span>{" "}
            <br />
            Travel is already tiring — your luggage shouldn't make it harder.
            The <span className="p-1 font-semibold bg-blue-100">
              Pathpal
            </span>{" "}
            is an intelligent, self-driving companion designed to make movement
            through airports, malls, and large public spaces effortless and
            hands-free. <br /> No more dragging heavy bags, weaving through
            crowds, or juggling handles —{" "}
            <span className="font-semibold">
              just scan, walk, and let your trolley do the work.
            </span>
          </p>
          <ul className="hidden md:block font-sans text-lg">
            <span className="font-bold text-xl">What We Built?</span>
            <li className="font-semibold left-2 relative">
              A smart trolley that:
            </li>
            <li className=" left-4 relative">
              {" "}
              🚶‍♂️ Follows You autonomously with smooth motion{" "}
            </li>
            <li className=" left-4 relative">
              📱 Connects to Your Phone for remote control options{" "}
            </li>
            <li className=" left-4 relative">
              🧠 Detects Obstacles and stops safely when needed{" "}
            </li>
            <li className=" left-4 relative">
              🧳 Carries Multiple Bags with a strong, stable design{" "}
            </li>
            <li className=" left-4 relative">
              ⚡ Activates Instantly with a simple QR code scan
            </li>
          </ul>
          <p className="font-sans text-lg">
            <span className="font-bold text-xl">Our Vision</span> <br />
             We're building a future where mobility meets intelligence
            — and where luggage is no longer a burden. From busy airports to
            massive malls, our mission is to transform how people interact with
            their luggage in crowded, high-traffic spaces. By combining smart
            automation with intuitive design, we aim to create a world where
            carrying luggage is effortless, hands-free, and stress-free.
          </p>
        </div>
        <div className="w-1/2 hidden lg:block">
          <img
            src="https://media.istockphoto.com/id/454049847/photo/blank-billboard.jpg?b=1&s=612x612&w=0&k=20&c=29PusxAsNMcNASsXhgb47k0ImZf2cdEK-T79F4RP5hg="
            alt="white"
            className="size-full"
          />
        </div>
      </div>
      <div className="p-10 bg-blue-50 h-screen space-y-5 md:space-y-20  ">
        <h1 className="font-serif font-bold text-5xl tracking-widest text-black">
          Team
        </h1>

        <Team />
      </div>
    </div>
  );
}
