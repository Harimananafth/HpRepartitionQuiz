import gfdPic from "../assets/house/gfd-picture.png";
import gfd from "../assets/house/gryffondor.gif";
export default function Gryffondor() {
  return (
    <div className="h-screen w-full bg-[url(/house/bg-gryffondor.jpg)] bg-cover bg-center flex items-center justify-center p-6 md:p-12 font-serif overflow-hidden">
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl max-h-[85vh] bg-black/40 backdrop-blur-md border border-gold/20 shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2">
        <div className="p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/10 bg-linear-to-b from-transparent to-black/20">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gold/10 blur-2xl rounded-full scale-75"></div>
            <img
              src={gfd}
              alt="Emblème de Gryffondor"
              className="relative h-40 lg:h-52 object-contain drop-shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <div className="h-0.5 w-12 bg-gold mx-auto opacity-60"></div>
            <p className="text-white/80 text-sm lg:text-base leading-relaxed max-w-xs italic">
              "Les Gryffondor sont connus pour leur courage, leur bravoure et
              leur détermination."
            </p>
            <p className="text-gold/90 text-[10px] lg:text-xs uppercase tracking-[0.3em] font-bold">
              Force • Noblesse • Courage
            </p>
          </div>
        </div>

        <div className="p-8 flex flex-col items-center justify-between bg-linear-to-br from-transparent to-red-950/40">
          <div className="text-center">
            <h2 className="text-white/50 uppercase tracking-[0.2em] text-[10px] mb-1">
              Résultat du Choixpeau
            </h2>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-none">
              Maison <br />
              <span className="text-gold font-Cinzel text-5xl lg:text-6xl">
                Gryffondor
              </span>
            </h1>
          </div>

          <div className="relative mt-4 flex justify-center items-end h-48 lg:h-64">
            <img
              src={gfdPic}
              alt="Harry, Ron et Hermione"
              className="h-full w-auto object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
