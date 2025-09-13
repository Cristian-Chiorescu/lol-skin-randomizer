"use client";

export default function RandomizeButton({
  handleRandomize,
}: {
  handleRandomize: () => void;
}) {
  return (
    <div className="flex justify-center p-4">
      <button
        className="bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-semibold px-6 py-3 rounded-lg
                 hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:cursor-pointer transition duration-200"
        onClick={() => handleRandomize()}
      >
        Randomize
      </button>
    </div>
  );
}
