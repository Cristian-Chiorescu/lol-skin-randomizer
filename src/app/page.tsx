import { getAllChampionIcons } from "@/lib/data";
import ChampionGridIcon from "@/components/ChampionGridIcon";

export default async function Page() {
  const championData = await getAllChampionIcons();
  const championListObject = championData.data;
  let championList = [];

  for (const key in championListObject) {
    championList.push(key);
  }

  return (
    <div>
      <div className="bg-white h-10 flex justify-center">
        <input type="text" placeholder="filter champions..." />
      </div>
      <div className="min-h-screen grid grid-cols-6 bg-blue-200 gap-4">
        {championList.map((championName) => (
          <ChampionGridIcon key={championName} championName={championName} />
        ))}
      </div>
    </div>
  );
}
