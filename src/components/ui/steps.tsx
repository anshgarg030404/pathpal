"use client";
import React from "react";
import { Download, MapPin, QrCode, Bike, Flag } from "lucide-react";

const steps = [
  {
    icon: <Download className=" text-gray-900 size-7" />, // Light blue color
    title: "Download PathPal app",
    description: "Download the PathPal app from the Appstore or the Playstore",
    highlight: "hover:text-blue-400 text-gray-900 font-semibold", // Highlight title
  },
  {
    icon: <MapPin className="text-gray-900 size-8" />, // Black icon
    title: "Locate a PathPal",
    description:
      "Use the PathPal app to find the closest trolley to you or look out for a PathPal Zone around you.",
    highlight: "text-gray-900 hover:text-blue-400 font-semibold", // Bold title
  },
  {
    icon: <QrCode className="text-gray-900  size-8" />,
    title: "Scan the QR code",
    description:
      "To unlock the trolley, simply scan the QR code located on the panel.",
    highlight: "text-gray-900 hover:text-blue-400 font-semibold",
  },
  {
    icon: <Bike className="text-gray-900  size-8" />,
    title: "Use Safely",
    description:
      "Enjoy the PathPal trip.",
    highlight: "text-gray-900 hover:text-blue-400 font-semibold",
  },
  {
    icon: <Flag className="text-gray-900  size-8" />,
    title: "End your Trip",
    description:
      "To end your ride, park the vehicle at a PathPal Zone and click on the End button on your app.",
    highlight: "text-gray-900 font-semibold text-gray-900 hover:text-blue-400",
    container: "text-gray-900 p-4 hover:text-blue-400 rounded-lg", // White container for last item
  },
];

export default function Working() {
  return (
    <div className="space-y-3 bg-blue-50 md:p-4 max-w-lg mx-auto ">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex items-start gap-4 hover:shadow-2xl duration-500 cursor-pointer rounded-2xl p-3 ${step.container || ""}`}
        >
          {step.icon}
          <div className="">
            <h3 className={`${step.highlight} text-lg`}>{step.title}</h3>
            <p className="text-gray-700 text-sm">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}