import { getAllChampionIcons } from "@/lib/data";

import ChampionGrid from "@/components/ChampionGrid";

export default async function Page() {
  const championData = await getAllChampionIcons();
  const championListObject = championData.data;
  let championList = [];

  for (const key in championListObject) {
    championList.push(key);
  }

  return (
    <div>
      <ChampionGrid championList={championList} />
    </div>
  );
}
