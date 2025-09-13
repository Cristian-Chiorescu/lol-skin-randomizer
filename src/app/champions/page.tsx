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
    <div className="min-h-dvh bg-[radial-gradient(60%_80%_at_50%_-10%,#0ea5e910,transparent_60%),linear-gradient(to_bottom,#0b1220,#0b1220)] text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <ChampionGrid championList={championList} />
      </div>
    </div>
  );
}
