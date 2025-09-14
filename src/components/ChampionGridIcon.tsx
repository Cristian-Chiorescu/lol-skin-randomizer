import Image from "next/image";
import Link from "next/link";

type ChampionGridIconProps = {
  championName: string;
  championProperName: string;
};

export default function ChampionGridIcon({
  championName,
  championProperName,
}: ChampionGridIconProps) {
  return (
    <Link
      className="relative block rounded-2xl overflow-hidden hover:cursor-pointer hover:-translate-y-1 transition group ring-2 ring-transparent hover:ring-cyan-500"
      href={`${championName}`}
    >
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`}
        alt={`Icon of ${championProperName}`}
        width={500}
        height={500}
        className="object-cover object-top transition brightness-70 group-hover:brightness-110 aspect-2/3"
      />
      <div className="rounded-b-2xl absolute bottom-0 w-full p-4 pt-30 text-center bg-gradient-to-t from-black to-transparent transition">
        <p className="absolute bottom-4 font-bold text-slate-300 group-hover:text-white transition">
          {championProperName}
        </p>
      </div>
    </Link>
  );
}
