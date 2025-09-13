"use client";

import { useState } from "react";
import ChampionSkinIcon from "./ChampionSkinIcon";
import Image from "next/image";
import RandomizeButton from "./RandomizeButton";

export default function ChampionPageClient({ champion }: { champion: any }) {
  const { name, title, skins } = champion;
  const [currentSkin, setCurrentSkin] = useState(skins[0]);

  const handleSkinSelect = (skin: any) => {
    setCurrentSkin(skin);
  };

  const handleRandomize = () => {
    let randomIndex = Math.floor(Math.random() * skins.length);
    setCurrentSkin(skins[randomIndex]);
  };

  return (
    <div>
      <div className="relative w-full max-w-screen-2xl mx-auto h-[40vh] md:h-[60vh] overflow-hidden">
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${currentSkin.num}.jpg`}
          alt={`Default splash art of ${currentSkin.name}`}
          fill
          className="object-cover object-top overflow-hidden"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] to-transparent"></div>
      </div>

      <main className="container mx-auto px-10 -mt-16 md:-mt-24 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold">{name}</h1>
            <h3 className="text-md md:text-xl text-slate-500">{title}</h3>
          </div>
          <div className="text-center">
            <h2 className="text-xl md:text-2xl text-slate-300 font-semibold">
              {currentSkin.name === "default" ? "Original" : currentSkin.name}
            </h2>
          </div>
          <RandomizeButton handleRandomize={handleRandomize} />
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-4">Available Skins</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {skins.map((skin: any) => (
              <ChampionSkinIcon
                key={skin.id}
                skin={skin}
                championName={name}
                handleClick={handleSkinSelect}
                isSelected={skin.id === currentSkin.id}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
