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
    card?: any;
    index: number;
    hovered?: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-sm relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-48 lg:h-72 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "bg-black scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black z-10 flex transition-all items-end py-8 px-4  duration-300",
          hovered === index ? " bg-black/40" : "bg-black/95"
        )}
      >
        <div className="text-xl -z-40 md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200 flex items-center justify-center">
          <div className="flex flex-col items-center h-full w-full justify-center">
            <h1 className="font-black text-3xl text-start w-full flex items-center justify-between">{card.title} {hovered === index && <Link href={card.url} className="bg-white rounded-3xl px-5 text-base text-foreground font-medium capitalize">detail</Link>} </h1>
            {hovered === index ? <p className="text-sm">{card.desc}</p> : null}
          </div>
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title?: string;
  src?: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex lg:flex-row flex-col items-center justify-center gap-x-28 gap-y-5">
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
