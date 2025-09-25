"use client";

import { useEffect, useState } from "react";
import ChampionSkinIcon from "./ChampionSkinIcon";
import Image from "next/image";
import RandomizeButton from "./RandomizeButton";
import { FullChampionData, Skin } from "@/lib/types";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import next from "next";

export default function ChampionPageClient({
  champion,
  championName,
}: {
  champion: FullChampionData;
  championName: string;
}) {
  const { name, title, skins } = champion;
  const [currentSkin, setCurrentSkin] = useState(skins[0]);
  const [isRandomizing, setIsRandomizing] = useState(false);
  const [isHighlighting, setIsHighlighting] = useState(false);

  const handleSkinSelect = (skin: Skin) => {
    setCurrentSkin(skin);
  };

  const handleRandomize = () => {
    if (!isRandomizing) {
      setIsRandomizing(true);
    }
  };

  useEffect(() => {
    if (!isRandomizing) return;

    const timeoutId = setTimeout(() => {
      setIsRandomizing(false);

      let nextSkin;

      const randomIndex = Math.floor(Math.random() * skins.length);
      nextSkin = skins[randomIndex];

      setCurrentSkin(nextSkin);
      setIsHighlighting(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isRandomizing, skins]);

  useEffect(() => {
    if (!isHighlighting) return;

    const highlightTimeoutId = setTimeout(() => {
      setIsHighlighting(false);
    }, 1000);

    return () => clearTimeout(highlightTimeoutId);
  }, [isHighlighting]);

  return (
    <div>
      <div
        className={`transition relative w-full max-w-screen-2xl mx-auto h-[40vh] md:h-[60vh] overflow-hidden ${
          isHighlighting ? "highlight-result" : ""
        }`}
      >
        <div
          className={`absolute inset-0 z-20 flex justify-center ${
            isRandomizing ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-1/2 max-w-[250px] sm:max-w-[300px]">
            <DotLottieReact
              src="https://lottie.host/ccee6f2d-63f0-4695-bc02-b8e6b7ad2273/BUubHtR5Gi.lottie"
              autoplay
              loop
              className="w-full h-full"
            />
          </div>
        </div>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${currentSkin.num}.jpg`}
          alt={`Splash art of ${currentSkin.name}`}
          fill
          className={`object-cover object-top overflow-hidden ${
            isRandomizing && "blur-xl brightness-50"
          }`}
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
                isRandomizing ? "opacity-0 pointer-events-none" : "opacity-100"
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
            {skins.map((skin: Skin) => (
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
      {/* Preloading Images */}
      <div className="absolute w-px h-px overflow-hidden -z-10">
        {skins.map((skin: Skin) => (
          <Image
            key={skin.id}
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championName}_${skin.num}.jpg`}
            alt=""
            width={100}
            height={100}
            priority={false}
          ></Image>
        ))}
      </div>
    </div>
  );
}
