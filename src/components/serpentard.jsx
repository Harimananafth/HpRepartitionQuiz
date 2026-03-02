export default function Serpentard() {
  return (
    <div className="min-h-screen md:h-screen w-full bg-[url(/house/bg-serpentard.jpg)] bg-cover bg-center flex items-center justify-center p-4 md:p-12 font-serif overflow-x-hidden">
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl md:max-h-[85vh] bg-black/60 backdrop-blur-xl border border-slate-300/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* SECTION GAUCHE : Emblème & Ambition */}
        <div className="p-6 md:p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/10 bg-linear-to-b from-transparent to-emerald-950/40">
          <div className="relative mb-4 md:mb-6">
            <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full scale-75"></div>
            <img
              src="/house/serpentard.gif"
              alt="Emblème de Serpentard"
              className="relative h-32 md:h-40 lg:h-52 object-contain drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            />
          </div>

          <div className="space-y-4 md:space-y-6">
            <div className="h-0.5 w-12 bg-slate-300 mx-auto opacity-40"></div>
            <div className="w-full max-w-65 md:max-w-xs">
              <p className="text-slate-200/80 text-xs md:text-sm lg:text-base leading-relaxed italic">
                "Les Serpentards sont connus pour leur ruse, leur ambition et
                leur détermination."
              </p>
            </div>
            <p className="text-slate-300 text-[9px] md:text-[10px] lg:text-xs uppercase tracking-[0.3em] font-bold">
              Ruse • Ambition • Détermination
            </p>
          </div>
        </div>

        {/* SECTION DROITE : Titre & Draco/Tom */}
        <div className="p-6 md:p-8 flex flex-col items-center justify-between bg-linear-to-br from-transparent to-emerald-950/60 min-h-80 md:min-h-0">
          <div className="text-center">
            <h2 className="text-slate-400 uppercase tracking-[0.2em] text-[8px] md:text-[10px] mb-1">
              Résultat du Choixpeau
            </h2>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Maison <br />
              <span className="text-slate-200 font-Cinzel text-3xl md:text-5xl lg:text-6xl drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Serpentard
              </span>
            </h1>
          </div>

          {/* Image de Draco et Tom  */}
          <div className="relative mt-6 flex justify-center items-end h-36 md:h-48 lg:h-64">
            <img
              src="/house/spt-picture.png"
              alt="Draco et Tom"
              className="h-full w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
