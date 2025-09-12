"use client";

import { useState } from "react";
import ChampionGridIcon from "./ChampionGridIcon";
import { useDebounce } from "@/hooks/useDebounce";

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

  return (
    <div>
      <div className="bg-white h-10 flex justify-center">
        <input
          type="text"
          placeholder="filter champions..."
          value={inputFilter}
          onChange={(e) => {
            setInputFilter(e.target.value);
          }}
        />
      </div>
      <div className="min-h-screen grid grid-cols-6 bg-blue-200 gap-4">
        {filteredChampionList.map((championName) => (
          <ChampionGridIcon key={championName} championName={championName} />
        ))}
      </div>
    </div>
  );
}
