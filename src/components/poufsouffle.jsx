export default function Poufsouffle() {
  return (
    <div className="min-h-screen md:h-screen w-full bg-[url(/house/bg-poufsouffle.jpg)] bg-cover bg-center flex items-center justify-center p-4 md:p-12 font-serif overflow-x-hidden">
      <div className="absolute inset-0 bg-amber-950/30 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl md:max-h-[85vh] bg-black/50 backdrop-blur-xl border border-gold/20 shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* SECTION GAUCHE : Emblème & Valeurs */}
        <div className="p-6 md:p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/10 bg-linear-to-b from-transparent to-amber-900/20">
          <div className="relative mb-4 md:mb-6">
            <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-full scale-75"></div>
            <img
              src="/house/poufsouffle.gif"
              alt="Emblème de Poufsouffle"
              className="relative h-32 md:h-40 lg:h-52 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            />
          </div>

          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <div className="h-0.5 w-12 bg-gold mx-auto opacity-60"></div>
            <div className="w-full max-w-65 md:max-w-xs">
              <p className="text-white/80 text-xs md:text-sm lg:text-base leading-relaxed italic">
                "Les Poufsouffle sont connus pour leur loyauté, leur dévouement
                et leur esprit de camaraderie."
              </p>
            </div>
            <p className="text-gold/90 text-[9px] md:text-[10px] lg:text-xs uppercase tracking-[0.3em] font-bold">
              Loyauté • Dévouement • Camaraderie
            </p>
          </div>
        </div>

        {/* SECTION DROITE : Titre & Cédric Diggory */}
        <div className="p-6 md:p-8 flex flex-col items-center justify-between bg-linear-to-br from-transparent to-amber-950/50 min-h-80 md:min-h-0">
          <div className="text-center">
            <h2 className="text-white/50 uppercase tracking-[0.2em] text-[8px] md:text-[10px] mb-1">
              Résultat du Choixpeau
            </h2>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Maison <br />
              <span className="text-gold font-Cinzel text-3xl md:text-5xl lg:text-6xl drop-shadow-md">
                Poufsouffle
              </span>
            </h1>
          </div>

          {/* Image de Cédric  */}
          <div className="relative mt-6 flex justify-center items-end h-36 md:h-48 lg:h-64">
            <img
              src="/house/psf-picture.png"
              alt="Cedric Diggory"
              className="h-full w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
