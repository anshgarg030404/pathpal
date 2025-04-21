"use client"
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import UserAvatar from "./userAvatar";

export default function NavbarDemo({ className }: { className?: string }) {
  const [user] = useAuthState(auth);
  const isSignedIn = !!user;
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <div
      className={cn(
        `fixed inset-x-0 top-0 z-50 transition-all duration-200 bg-black/50 backdrop-blur`,
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex justify-between items-center w-full px-4 ">
          <Link href="/" className="cursor-pointer">
            <Image src={"/next.svg"} alt="Logo" width={100} height={100} />
          </Link>

          {/* Mobile Menu Button */}
          
          <button
            className="lg:hidden block text-gray-200 text-3xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex text-black justify-evenly font-bold my-auto w-[50%]">
            <MenuItem setActive={setActive} active={active} item="How it Works" />
            <MenuItem setActive={setActive} active={active} item="Features" />
            <Link href={"/about"}>
              <MenuItem setActive={setActive} active={active} item="About" />
            </Link>
            <Link href={'/contactus'}>
              <MenuItem setActive={setActive} active={active} item="Contact Us" />
            </Link>
            <Link href="/work" className="bg-blue-600 my-auto py-1 px-2 hover:bg-blue-800 duration-300 rounded-full text-gray-200">Connect to Trolley</Link>
            <UserAvatar />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden flex flex-col items-center bg-black py-4 w-full shadow-md absolute top-20 left-0 transition-all duration-700 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none "
          }`}
        >

          <UserAvatar />
          
          <MenuItem setActive={setActive} active={active} item="How it Works" />
            <MenuItem setActive={setActive} active={active} item="Features" />
            <Link href={"/about"}>
              <MenuItem setActive={setActive} active={active} item="About" />
            </Link>
            <Link href={'/contactus'}>
              <MenuItem setActive={setActive} active={active} item="Contact Us" />
            </Link>
            <Link href="/work" className="bg-blue-600 my-auto py-1 px-2 hover:bg-blue-800 duration-300 rounded-full text-gray-200">Connect to Trolley</Link>

          {isSignedIn && (
            <button
              onClick={handleLogout}
              className="mt-2 cursor-pointer border border-black bg-red-500 text-white px-4 py-2 rounded w-fit"
            >
              Logout
            </button>
          )}
        </div>
      </Menu>
    </div>
  );
}
