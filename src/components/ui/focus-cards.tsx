"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";


export const Card = React.memo(
  
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-700 ease-in-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0 "
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex flex-col justify-end py-8 px-4 transition-opacity duration-500",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl underline  font-semibold bg-clip-text  bg-gradient-to-b from-neutral-50 to-neutral-200 text-gray-300 ">
          {card.title}
        </div>
        <div className="text-md md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 text-justify">
          {card.content}
        </div>
        <div className="flex justify-normal gap-5 items-center w-full pt-3 align-middle">
          <Link href={card.linkedin} >
            <Image 
            src={"/linkedin.svg"}
            height={30}
            width={30}
            alt=""/>
          </Link>
          <Link href={card.mail}>
            <Image 
              src={"/mail.svg"}
              height={30}
              width={30}
              alt=""/>
            </Link>
          <Link href={card.phone}>
          <Image 
            src={"/phone.svg"}
            height={30}
            width={30}
            alt=""/>
          </Link>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 w-sm md:w-3xl mx-auto md:px-8 ">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
