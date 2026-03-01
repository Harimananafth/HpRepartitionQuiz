export default function Serpentard() {
  return (
    <div className="h-screen w-full bg-[url(/house/bg-serpentard.jpg)] bg-cover bg-center flex items-center justify-center p-6 md:p-12 font-serif overflow-hidden">
      <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl max-h-[85vh] bg-black/50 backdrop-blur-md border border-slate-300/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-3xl overflow-hidden grid md:grid-cols-2">
        
        <div className="p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/10 bg-gradient-to-b from-transparent to-emerald-950/30">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-emerald-500/10 blur-2xl rounded-full scale-75"></div>
            <img
              src="/house/serpentard.gif"
              alt="Emblème de Serpentard"
              className="relative h-40 lg:h-52 object-contain drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            />
          </div>

          <div className="space-y-6">
            <div className="h-0.5 w-12 bg-slate-300 mx-auto opacity-40"></div>
            <p className="text-slate-200/80 text-sm lg:text-base leading-relaxed max-w-xs italic">
              "Les Serpentards sont connus pour leur ruse, leur ambition et leur détermination."
            </p>
            <p className="text-slate-300 text-[10px] lg:text-xs uppercase tracking-[0.3em] font-bold shadow-sm">
              Ruse • Ambition • Détermination
            </p>
          </div>
        </div>

        <div className="p-8 flex flex-col items-center justify-between bg-gradient-to-br from-transparent to-emerald-950/50">
          <div className="text-center">
            <h2 className="text-slate-400 uppercase tracking-[0.2em] text-[10px] mb-1">
              Résultat du Choixpeau
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-none">
              Maison <br />
              <span className="text-slate-200 font-Cinzel text-5xl lg:text-6xl drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Serpentard
              </span>
            </h1>
          </div>

          <div className="relative mt-4 flex justify-center items-end h-48 lg:h-64">
            <img
              src="/house/spt-picture.png"
              alt="Draco et Tom"
              className="h-full w-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}