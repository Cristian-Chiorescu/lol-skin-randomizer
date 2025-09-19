"use client";

import { useState } from "react";
import ChampionGridIcon from "./ChampionGridIcon";
import { useDebounce } from "@/hooks/useDebounce";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ChampionDetail } from "@/lib/types";

export default function ChampionGrid({
  championArray,
}: {
  championArray: ChampionDetail[];
}) {
  const [inputFilter, setInputFilter] = useState("");
  const [selectedClass, setSelectedClass] = useState("All");

  const debouncedInputFilter = useDebounce(inputFilter, 500);

  const filteredChampionList = championArray
    .filter((champion) => {
      if (selectedClass === "All") {
        return true;
      }
      return champion.tags.includes(selectedClass);
    })
    .filter((champion) => {
      return champion.name
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase()
        .includes(debouncedInputFilter.toLowerCase());
    });

  const championClasses = [
    "All",
    "Fighter",
    "Mage",
    "Assassin",
    "Tank",
    "Marksman",
    "Support",
  ];

  const [animationParent] = useAutoAnimate();

  const handleClick = (className: string) => {
    setSelectedClass(className);
  };

  console.log(filteredChampionList);

  return (
    <div>
      <div className="md:mt-10 rounded-2xl bg-black/10 border border-white/10 p-6 sm:p-8 backdrop-blur-lg">
        <header className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl tracking-tight font-russo">
            Choose Your Champion
          </h1>
          <p className="text-slate-300/80 text-sm sm:text-base">
            Let the Randomizer choose your League of Legends skin
          </p>

          <div className="mt-6">
            <label htmlFor="champion-filter" className="sr-only"></label>
            <input
              id="champion-filter"
              type="text"
              placeholder="Filter Champions…"
              value={inputFilter}
              onChange={(e) => setInputFilter(e.target.value)}
              className="w-full max-w-md mx-auto block bg-cyan-500/10 border border-cyan-400/30 text-white rounded-2xl hover:bg-cyan-500/20 hover:border-cyan-400/50 placeholder:text-slate-500/70 px-4 py-2.5 text-base"
            />
          </div>

          <div className="flex justify-center flex-wrap gap-2 my-6">
            {championClasses.map((className) => (
              <button
                key={className}
                onClick={() => handleClick(className)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition font-inter hover:cursor-pointer ${
                  selectedClass === className
                    ? "bg-cyan-500 text-slate-900"
                    : "bg-white/5 hover:bg-white/10 text-slate-300"
                }`}
              >
                {className}
              </button>
            ))}
          </div>
        </header>
      </div>

      <main className="mt-8 flex justify-center">
        {filteredChampionList.length === 0 ? (
          <div className="mx-auto max-w-md rounded-2xl bg-black/10 border border-white/10 p-8 text-center backdrop-blur-lg">
            <p className="text-lg font-medium">
              No champions match your search
            </p>
            <p className="mt-2 text-slate-400">
              Try a different name or clear the filter
            </p>
          </div>
        ) : (
          <ul
            ref={animationParent}
            className="grid gap-4 sm:gap-5 md:gap-6
                       grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
          >
            {filteredChampionList.map((champion) => (
              <li key={champion.name}>
                <ChampionGridIcon
                  championName={champion.id}
                  championProperName={champion.name}
                />
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
