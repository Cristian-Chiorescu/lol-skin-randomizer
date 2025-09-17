import { getChampionData } from "@/lib/data";
import Link from "next/link";
import ChampionPageClient from "@/components/ChampionPageClient";
import Image from "next/image";

export default async function Page({
  params,
}: {
  params: { championName: string };
}) {
  const championName = params.championName;
  const champion = await getChampionData(championName);
  const championData = champion.data[championName];

  return (
    <div className="min-h-dvh bg-[radial-gradient(60%_80%_at_50%_-10%,#0ea5e910,transparent_60%),linear-gradient(to_bottom,#0b1220,#0b1220)] text-slate-100 font-inter">
      <ChampionPageClient champion={championData} championName={championName} />
    </div>
  );
}
