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
      className="relative overflow-hidden hover:cursor-pointer hover: transition group"
      href={`${championName}`}
    >
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`}
        alt={`Icon of ${championName}`}
        width={500}
        height={500}
        className="rounded-2xl transition brightness-75 group-hover:brightness-125"
      />
      <div className="rounded-b-2xl absolute bottom-0 w-full p-4 pt-10 text-center bg-gradient-to-t from-black to-transparent transition">
        <p className="font-bold text-gray-400 group-hover:text-white transition">
          {championName}
        </p>
      </div>
    </Link>
  );
}
