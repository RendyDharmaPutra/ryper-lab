import { ArrowLeft } from "lucide-react";

export const BackBtn = () => {
  return (
    <button
      onClick={() => history.back()}
      className="back-button backdrop-blur-md cursor-pointer bg-white/10 px-6 py-3 rounded-2xl text-sm font-medium text-white hover:bg-white/20 flex items-center gap-2 shadow-lg"
    >
      <ArrowLeft className="w-4 h-4" />
      Kembali
    </button>
  );
};
