import Link from "next/link";

export default function Page() {
  return (
    <div className="relative min-h-dvh flex items-center justify-center text-white overflow-hidden bg-[radial-gradient(60%_80%_at_50%_-10%,#0ea5e910,transparent_60%),linear-gradient(to_bottom,#0b1220,#0b1220)] font-inter">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="\videos\c-o-animated-pyke.mp4"
      ></video>
      <div className="absolute inset-0 bg-black/80 z-10"></div>
      <div className="relative z-20 text-center max-w-3xl mx-10 p-10 bg-black/10 backdrop-blur-lg rounded-4xl shadow-lg border border-white/10">
        <h1 className="text-4xl md:text-6xl tracking-tight leading-tight text-white drop-shadow-lg font-russo">
          LoL Skin Randomizer
        </h1>
        <p className="py-6 text-sm md:text-lg text-slate-300 drop-shadow">
          Stop debating | Start playing
        </p>
        <p></p>
        <Link
          href="/champions"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold
                     bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 rounded-2xl
                 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:cursor-pointer hover:scale-105  transition"
        >
          Choose Your Champion
        </Link>
      </div>
    </div>
  );
}
