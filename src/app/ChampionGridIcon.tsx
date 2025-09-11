type ChampionGridIconProps = {
  championName: string;
};

export default function ChampionGridIcon({
  championName,
}: ChampionGridIconProps) {
  return (
    <a>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`}
        alt={`Icon of ${championName}`}
      />
      <p className="flex justify-center font-bold">{championName}</p>
    </a>
  );
}
