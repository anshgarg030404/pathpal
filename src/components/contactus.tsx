"use client";
import { toast } from "sonner";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "",
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY || ""
      )
      .then(
        () => {
          console.log("SUCCESS! Email sent.");
          toast.success("Message sent successfully!");
          form.current?.reset(); // Optional: reset the form after success
        },
        (error) => {
          console.error("FAILED...", error);
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-blue-50 text-black space-y-4">
      <h1 className="text-center font-bold text-5xl tracking-widest text-black py-3">Contact Us..</h1>
      <div className="flex justify-evenly md:py-10 py-5">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 p-4 md:text-md md:w-1/2 lg:w-1/3 w-full md:py-10 mx-5 border rounded-lg shadow-md"
        >
          <label className="font-semibold">Name</label>
          <input type="text" name="name" className="p-2 border rounded" required />
          <label className="font-semibold">Email</label>
          <input type="email" name="email" className="p-2 border rounded" required />
          <label className="font-semibold">Message</label>
          <textarea name="message" className="p-2 border rounded" required />
          <button
            type="submit"
            className="bg-[#2f4959] text-white w-full px-4 cursor-pointer py-2 rounded hover:bg-[#253b48]"
          >
            Send
          </button>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.792796776095!2d77.29840397520637!3d28.664867475647082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb2f69c2d037%3A0xd1e30b93ac412f25!2sUniversity%20School%20of%20Automation%20and%20Robotics%20(USAR)!5e1!3m2!1sen!2sin!4v1743570260095!5m2!1sen!2sin"
          loading="lazy"
          width="500"
          height="400"
          className="border rounded-lg shadow-md hidden lg:block"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
