"use client";

import { useState } from "react";
import ChampionGridIcon from "./ChampionGridIcon";
import { useDebounce } from "@/hooks/useDebounce";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function ChampionGrid({
  championList,
}: {
  championList: string[];
}) {
  const [inputFilter, setInputFilter] = useState("");

  const debouncedInputFilter = useDebounce(inputFilter, 500);

  const filteredChampionList = championList.filter((championName) =>
    championName.toLowerCase().includes(debouncedInputFilter.toLowerCase())
  );

  const [animationParent] = useAutoAnimate();

  return (
    <div>
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Choose your champion
        </h1>
        <p className="text-slate-300/80 text-sm sm:text-base">
          Having trouble picking a skin? Select a champion, then we'll randomize
          one for you.
        </p>

        <div className="mt-6">
          <label htmlFor="champion-filter" className="sr-only">
            Filter champions...
          </label>
          <input
            id="champion-filter"
            type="text"
            placeholder="filter champions…"
            value={inputFilter}
            onChange={(e) => setInputFilter(e.target.value)}
            className="w-full max-w-md mx-auto block rounded-xl bg-white/5 ring-1 ring-white/10
                       focus:ring-2 focus:ring-teal-400/70 placeholder:text-slate-400/70
                       px-4 py-2.5 text-base backdrop-blur"
          />
          <p className="mt-2 text-xs text-slate-400">
            {filteredChampionList.length.toLocaleString()} result
            {filteredChampionList.length === 1 ? "" : "s"}
          </p>
        </div>
      </header>

      <main className="mt-8 flex justify-center">
        {filteredChampionList.length === 0 ? (
          <div className="mx-auto max-w-md rounded-2xl bg-white/5 border border-white/10 p-8 text-center">
            <p className="text-lg font-medium">
              no champions match your search
            </p>
            <p className="mt-2 text-slate-400">
              try a different name or clear the filter
            </p>
          </div>
        ) : (
          <ul
            ref={animationParent}
            className="grid gap-4 sm:gap-5 md:gap-6
                       grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
          >
            {filteredChampionList.map((championName) => (
              <li key={championName}>
                <ChampionGridIcon championName={championName} />
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
}
