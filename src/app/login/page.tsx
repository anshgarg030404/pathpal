"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../../firebase/clientApp";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "sonner";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      toast("✅ Login Successful");
      router.push("/"); // Redirect to home page
    } catch (error: any) {
      console.error("Error logging in:", error.message);
      toast("❌ Incorrect Credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 ">
      <div className="w-full max-w-md bg-white rounded-xl p-6 shadow-lg border-2">
        <h1 className="text-3xl font-bold text-center text-[#3A3A3A] mb-2">Welcome to PathPal</h1>
        <h2 className="text-2xl font-semibold text-center text-[#5F5F5F] mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 text-[#3A3A3A]">
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
              Login
            </button>
            <Link href="/signup" className="w-full sm:w-auto text-center bg-[#2F4858] hover:bg-[#1C3B4A] text-white px-6 py-3 rounded-md">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}