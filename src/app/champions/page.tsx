import { getAllChampionIcons, getChampionData } from "@/lib/data";
import Image from "next/image";

import ChampionGrid from "@/components/ChampionGrid";

export default async function Page() {
  const championData = await getAllChampionIcons();
  const championListObject = championData.data;
  let championList = [];
  let championProperNameObject = {};

  for (const key in championListObject) {
    championList.push(key);
  }

  return (
    <div className="min-h-dvh">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <ChampionGrid
          championList={championList}
          championListObject={championListObject}
        />
      </div>
    </div>
  );
}
