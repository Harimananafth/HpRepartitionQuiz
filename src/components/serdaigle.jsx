export default function Serdaigle() {
  return (
    <div className="h-screen w-full bg-[url(/house/bg-serdaigle.jpg)] bg-cover bg-center flex items-center justify-center p-6 md:p-12 font-serif overflow-hidden">
      <div className="absolute inset-0 bg-blue-950/20 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl max-h-[85vh] bg-black/40 backdrop-blur-md border border-blue-400/20 shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">
        <div className="p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/10 bg-gradient-to-b from-transparent to-blue-900/20">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-blue-400/10 blur-2xl rounded-full scale-75"></div>
            <img
              src="/house/serdaigle.gif"
              alt="Emblème de Serdaigle"
              className="relative h-40 lg:h-52 object-contain drop-shadow-2xl"
            />
          </div>

          <div className="flex flex-col items-center space-y-6">
            <div className="h-0.5 w-12 bg-gold mx-auto opacity-60"></div>
            <div className="w-full max-w-xs">
              <p className="text-white/80 text-sm lg:text-base leading-relaxed italic">
                "Les Serdaigle sont connus pour leur intelligence, leur
                curiosité et leur esprit critique."
              </p>
            </div>
            <p className="text-gold/90 text-[10px] lg:text-xs uppercase tracking-[0.3em] font-bold">
              Intelligence • Curiosité • Esprit Critique
            </p>
          </div>
        </div>

        <div className="p-8 flex flex-col items-center justify-between bg-gradient-to-br from-transparent to-blue-950/50">
          <div className="text-center">
            <h2 className="text-white/50 uppercase tracking-[0.2em] text-[10px] mb-1">
              Résultat du Choixpeau
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-none">
              Maison <br />
              <span className="text-gold font-Cinzel text-5xl lg:text-6xl">
                Serdaigle
              </span>
            </h1>
          </div>

          <div className="relative mt-4 flex justify-center items-end h-48 lg:h-64">
            <img
              src="/house/srd-picture.png"
              alt="Cho et Luna"
              className="h-full w-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
