"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth, db } from "../../../firebase/clientApp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "sonner";
import Link from "next/link";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // Save additional user details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName: formData.fullName,
        mobile: formData.mobile,
        email: formData.email,
      });
      toast("✅ Sign Up Successful");

      router.push("/login"); // Redirect to login page
    } catch (error: any) {
      console.error("Error signing up:", error.message);
      toast("❌ " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center pt-10 items-center px-4 sm:px-6 lg:px-8 ">
      <div className="w-full max-w-md bg-white rounded-xl p-6 shadow-lg border-2">
        <h1 className="text-3xl font-bold text-center text-[#3A3A3A] mb-2">Welcome to PathPal</h1>
        <h2 className="text-2xl font-semibold text-center text-[#5F5F5F] mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-[#3A3A3A]">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="p-3 border border-[#C2C2B0] rounded-md bg-[#F8F1E7] w-full"
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="p-3 border border-[#C2C2B0] rounded-md bg-[#F8F1E7] w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border border-[#C2C2B0] rounded-md bg-[#F8F1E7] w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="p-3 border border-[#C2C2B0] rounded-md bg-[#F8F1E7] w-full"
          />
          <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4">
            <button type="submit" className="w-full sm:w-auto bg-[#546A47] hover:bg-[#45583A] text-white px-6 py-3 rounded-md">
              Sign Up
            </button>
            <Link href="/login" className="w-full sm:w-auto text-center bg-[#2F4858] hover:bg-[#1C3B4A] text-white px-6 py-3 rounded-md">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
