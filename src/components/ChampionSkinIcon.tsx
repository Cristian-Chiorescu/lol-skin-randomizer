import Image from "next/image";

type ChampionSkinIconProps = {
  skin: { num: any; name: any };
  championName: string;
  handleClick: any;
};

export default function ChampionSkinIcon({
  skin,
  championName,
  handleClick,
}: ChampionSkinIconProps) {
  return (
    <button
      className="relative rounded-xl overflow-hidden h-40 brightness-75 hover:brightness-125 hover:cursor-pointer hover:-translate-y-2 transition"
      id={skin.num}
      onClick={() => handleClick(skin.num)}
    >
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_${skin.num}.jpg`}
        alt={`Icon of ${skin.name}`}
        fill
        className="object-cover"
      />
    </button>
  );
}
