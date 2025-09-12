import { getChampionData } from "@/lib/data";
import Link from "next/link";
import ChampionSkinIcon from "@/components/ChampionSkinIcon";
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

  console.log(skins);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-6xl">{name}</h1>
        <h3 className="text-2xl">{title}</h3>
      </div>
      <div className="relative bg-blue-200 grid grid-cols-3 gap-4">
        <Image
          className="col-span-2"
          src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`}
          alt={`Default splash art of ${name}`}
          height={500}
          width={1000}
        />
        <div className="col-span-1 grid grid-cols-4 gap-4 items-center">
          {skins.map((skin: { num: any; name: any }) => (
            <ChampionSkinIcon key={skin.num} skin={skin} championName={name} />
          ))}
        </div>
      </div>
    </div>
  );
}
