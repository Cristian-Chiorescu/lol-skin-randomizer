"use client";

import { use, useEffect, useState } from "react";
import ChampionSkinIcon from "./ChampionSkinIcon";
import Image from "next/image";
import RandomizeButton from "./RandomizeButton";

export default function ChampionPageClient({
  champion,
  championName,
}: {
  champion: any;
  championName: string;
}) {
  const { name, title, skins } = champion;
  const [currentSkin, setCurrentSkin] = useState(skins[0]);
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [isHighlighting, setIsHighlighting] = useState(false);

  const handleSkinSelect = (skin: any) => {
    setCurrentSkin(skin);
  };

  const handleRandomize = () => {
    setIsRandomizing(true);
  };

  useEffect(() => {
    if (isRandomizing) {
      const interval = setInterval(() => {
        let randomIndex = Math.floor(Math.random() * skins.length);
        setCurrentSkin(skins[randomIndex]);
      }, 200);

      const timeout = setTimeout(() => {
        clearInterval(interval);
        setIsRandomizing(false);

        const finalRandomIndex = Math.floor(Math.random() * skins.length);
        setCurrentSkin(skins[finalRandomIndex]);

        setIsHighlighting(true);
        const highlightingTimeout = setTimeout(() => {
          setIsHighlighting(false);
        }, 1000);

        return () => {
          clearTimeout(interval);
          clearTimeout(timeout);
          clearTimeout(highlightingTimeout);
        };
      }, 2000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [isRandomizing, skins]);

  return (
    <div>
      <div
        className={`transition relative w-full max-w-screen-2xl mx-auto h-[40vh] md:h-[60vh] overflow-hidden ${
          isHighlighting ? "highlight-result" : ""
        } ${isRandomizing ? "blur-sm brightness-50" : "blur-0 brightness-100"}`}
      >
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${currentSkin.num}.jpg`}
          alt={`Splash art of ${currentSkin.name}`}
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
            <h1 className="text-2xl md:text-4xl font-bold ">{name}</h1>
            <h3 className="text-md md:text-xl text-slate-500">{title}</h3>
          </div>
          <div className="text-center">
            <h2
              className={`text-xl md:text-2xl text-slate-300 font-semibold ${
                isRandomizing ? "blur-sm" : "blur-0"
              }`}
            >
              {currentSkin.name === "default" ? "Original" : currentSkin.name}
            </h2>
          </div>
          <RandomizeButton
            handleRandomize={handleRandomize}
            isRandomizing={isRandomizing}
          />
        </div>

        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-4">Available Skins</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 pb-6">
            {skins.map((skin: any) => (
              <ChampionSkinIcon
                key={skin.id}
                skin={skin}
                championName={championName}
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
