import { getAllChampionIcons, getChampionData } from "@/lib/data";
import Image from "next/image";
import { ChampionDetail } from "@/lib/types";

import ChampionGrid from "@/components/ChampionGrid";

export default async function Page() {
  const championData = await getAllChampionIcons();
  const championListObject = championData.data;

  const championArray: ChampionDetail[] = Object.values(championListObject);

  return (
    <div className="min-h-dvh font-inter">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <ChampionGrid championArray={championArray} />
      </div>
    </div>
  );
}
