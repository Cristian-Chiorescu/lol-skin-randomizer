import Image from "next/image";
import Link from "next/link";

type ChampionSkinIconProps = {
  skin: { num: any; name: any };
  championName: string;
};

export default function ChampionSkinIcon({
  skin,
  championName,
}: ChampionSkinIconProps) {
  return (
    <Link
      className="relative rounded-xl overflow-hidden h-40"
      href={""}
      id={skin.num}
    >
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_${skin.num}.jpg`}
        alt={`Icon of ${skin.name}`}
        fill
        className="object-cover"
      />
    </Link>
  );
}
