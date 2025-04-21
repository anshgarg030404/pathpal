"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp"; // Ensure correct Firebase import
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

export default function UserAvatar() {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useState(false); // Manages hover state
  const router = useRouter();
  const isSignedIn = !!user;

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login"); // Redirect to login page after logout
  };

  const handleLogin = () => {
    router.push("/login"); // Redirect to login page when clicking login
  };

  return (
    <div className="flex items-center">
      {/* Mobile View - Show credentials directly */}
      <div className="md:hidden flex flex-col text-sm text-neutral-900 dark:text-white w-full  ">
        {isSignedIn ? (
          <div className="flex space-x-7 w-full justify-center h-full align-middle border-b-2">
          <Avatar className="size-16">
              <AvatarImage
                src={isSignedIn ? user?.photoURL || getRandomAvatar() : ""}
                alt="User Avatar"
                className="w-52"
              />
              <AvatarFallback>
                {isSignedIn ? user?.fullName?.charAt(0) || "U" : "CN"}
              </AvatarFallback>
            </Avatar>
            <div className="align-middle flex flex-col justify-center">
              <p className="font-semibold text-xl text-black">{user.fullName || "User"}</p>
              <p className="text-neutral-600 text-lg dark:text-neutral-400">{user.email}</p>
            </div>
            
          </div>
        ) : (
          <button
            onClick={handleLogin}
            className="cursor-pointer border border-black bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Login
          </button>
        )}
      </div>

      {/* Desktop View - Hover-based dropdown */}
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <div
            className="relative cursor-pointer hidden md:block"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <Avatar>
              <AvatarImage
                src={isSignedIn ? user?.photoURL || getRandomAvatar() : ""}
                alt="User Avatar"
              />
              <AvatarFallback>
                {isSignedIn ? user?.fullName?.charAt(0) || "U" : "CN"}
              </AvatarFallback>
            </Avatar>
          </div>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className="bg-white dark:bg-neutral-800 shadow-lg z-50 rounded-lg p-4 w-64 border border-neutral-200 dark:border-neutral-700 hidden md:block"
            side="bottom"
            align="center"
            onMouseEnter={() => setOpen(true)} // Keep open when hovering dropdown
            onMouseLeave={() => setOpen(false)} // Close when moving out
          >
            {isSignedIn ? (
              <div className="text-sm text-neutral-900 dark:text-white">
                <p className="font-semibold">{user.fullName || "User"}</p>
                <p className="text-neutral-600 dark:text-neutral-400">{user.email}</p>

                <button
                  onClick={handleLogout}
                  className="mt-4 cursor-pointer border border-black bg-red-500 text-white px-4 py-2 rounded w-full"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="text-center text-sm text-neutral-900 dark:text-white">
                <p className="text-neutral-600 dark:text-neutral-400 mb-2">Not signed in</p>
                
                <button
                  onClick={handleLogin}
                  className="cursor-pointer border border-black bg-blue-500 text-white px-4 py-2 rounded w-full"
                >
                  Login
                </button>
              </div>
            )}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  );
}

// Function to return a random avatar image
function getRandomAvatar() {
  return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmn4pWrDE1f07NiO_-ALAPW18mUchf6vj9oA&s"; // Default random avatar
}