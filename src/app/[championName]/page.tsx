import { getChampionData } from "@/lib/data";
import Link from "next/link";
import ChampionPageGrid from "@/components/ChampionPageGrid";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: { championName: string };
}) {
  const championName = params.championName;
  const champion = await getChampionData(championName);
  const championData = champion.data;

  const { name, title, skins } = championData[championName];

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-6xl">{name}</h1>
        <h3 className="text-2xl">{title}</h3>
      </div>
      <ChampionPageGrid name={name} skins={skins} />
    </div>
  );
}
