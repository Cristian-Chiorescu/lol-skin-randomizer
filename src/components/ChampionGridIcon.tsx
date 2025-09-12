import Image from "next/image";
import Link from "next/link";

type ChampionGridIconProps = {
  championName: string;
};

export default function ChampionGridIcon({
  championName,
}: ChampionGridIconProps) {
  return (
    <Link
      className="rounded-xl overflow-hidden brightness-75 hover:brightness-125 hover:cursor-pointer hover:-translate-y-2 transition"
      href={`/${championName}`}
    >
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`}
        alt={`Icon of ${championName}`}
        width={500}
        height={500}
      />
      <p className="flex justify-center font-bold">{championName}</p>
    </Link>
  );
}
