"use client";

export default function RandomizeButton({
  handleRandomize,
  isRandomizing,
}: {
  handleRandomize: () => void;
  isRandomizing: boolean;
}) {
  return (
    <div className="flex justify-center p-4">
      <button
        className="bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold px-6 py-3 rounded-lg
                 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:cursor-pointer transition hover:scale-105"
        onClick={() => handleRandomize()}
        disabled={isRandomizing}
      >
        {isRandomizing ? "Randomizing..." : "Randomize Skin"}
      </button>
    </div>
  );
}
