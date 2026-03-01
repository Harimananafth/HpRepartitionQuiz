export default function Poufsouffle() {
  return (
    <div className="h-screen w-full bg-[url(/house/bg-poufsouffle.jpg)] bg-cover bg-center flex items-center justify-center p-6 md:p-12 font-serif overflow-hidden">
      <div className="absolute inset-0 bg-amber-950/20 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl max-h-[85vh] bg-black/40 backdrop-blur-md border border-gold/20 shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">
        <div className="p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/10 bg-gradient-to-b from-transparent to-amber-900/10">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gold/10 blur-2xl rounded-full scale-75"></div>
            <img
              src="/house/poufsouffle.gif"
              alt="Emblème de Poufsouffle"
              className="relative h-40 lg:h-52 object-contain drop-shadow-2xl"
            />
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="h-0.5 w-12 bg-gold mx-auto opacity-60"></div>
            <div className="w-full max-w-xs">
              <p className="text-white/80 text-sm lg:text-base leading-relaxed italic">
                "Les Poufsouffle sont connus pour leur loyauté, leur dévouement
                et leur esprit de camaraderie."
              </p>
            </div>
            <p className="text-gold/90 text-[10px] lg:text-xs uppercase tracking-[0.3em] font-bold">
              Loyauté • Dévouement • Camaraderie
            </p>
          </div>
        </div>

        <div className="p-8 flex flex-col items-center justify-between bg-gradient-to-br from-transparent to-amber-950/40">
          <div className="text-center">
            <h2 className="text-white/50 uppercase tracking-[0.2em] text-[10px] mb-1">
              Résultat du Choixpeau
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-none">
              Maison <br />
              <span className="text-gold font-Cinzel text-5xl lg:text-6xl drop-shadow-md">
                Poufsouffle
              </span>
            </h1>
          </div>

          <div className="relative mt-4 flex justify-center items-end h-48 lg:h-64">
            <img
              src="/house/psf-picture.png"
              alt="Cedric Diggory"
              className="h-full w-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
