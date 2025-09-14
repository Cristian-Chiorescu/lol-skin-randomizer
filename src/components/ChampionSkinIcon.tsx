import Image from "next/image";

type ChampionSkinIconProps = {
  skin: any;
  championName: string;
  handleClick: any;
  isSelected: boolean;
};

export default function ChampionSkinIcon({
  skin,
  championName,
  handleClick,
  isSelected,
}: ChampionSkinIconProps) {
  return (
    <button
      className={`relative rounded-xl overflow-hidden aspect-[308/560]
                  transition hover:-translate-y-2 hover:cursor-pointer ring-2 ${
                    isSelected ? "ring-cyan-400" : "ring-transparent"
                  }`}
      onClick={() => handleClick(skin)}
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
