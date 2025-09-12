"use client";

import { useState } from "react";
import ChampionSkinIcon from "./ChampionSkinIcon";
import Image from "next/image";

export default function ChampionPageGrid({
  name,
  skins,
}: {
  name: string;
  skins: any;
}) {
  const [currentSkinNumber, setCurrentSkinNumber] = useState("0");

  const handleClick = (skinNumber: string) => {
    setCurrentSkinNumber(skinNumber);
  };

  console.log(skins);
  console.log(skins.length);

  return (
    <div className="relative bg-blue-200 grid grid-cols-3 gap-4">
      <Image
        className="col-span-2"
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${currentSkinNumber}.jpg`}
        alt={`Default splash art of ${name}`}
        height={500}
        width={1000}
      />
      <div className="col-span-1 grid grid-cols-4 gap-4 items-center">
        {skins.map((skin: { num: any; name: any }) => (
          <ChampionSkinIcon
            key={skin.num}
            skin={skin}
            championName={name}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
