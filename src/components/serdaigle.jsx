import srdPic from "../assets/house/srd-picture.png";
import srd from "../assets/house/serdaigle.gif";
export default function Serdaigle() {
  return (
    /* h-screen sur desktop, min-h-screen sur mobile pour laisser respirer le contenu */
    <div className="min-h-screen md:h-screen w-full bg-[url(/house/bg-serdaigle.jpg)] bg-cover bg-center flex items-center justify-center p-4 md:p-12 font-serif overflow-x-hidden">
      {/* Overlay bleu profond pour l'aspect nocturne et érudit */}
      <div className="absolute inset-0 bg-blue-950/30 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl md:max-h-[85vh] bg-black/50 backdrop-blur-xl border border-blue-400/20 shadow-2xl rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* SECTION GAUCHE : Emblème & Sagesse */}
        <div className="p-6 md:p-8 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-white/10 bg-linear-to-b from-transparent to-blue-900/30">
          <div className="relative mb-4 md:mb-6">
            <div className="absolute inset-0 bg-blue-400/10 blur-3xl rounded-full scale-75"></div>
            <img
              src={srd}
              alt="Emblème de Serdaigle"
              className="relative h-32 md:h-40 lg:h-52 object-contain drop-shadow-[0_0_20px_rgba(96,165,250,0.4)]"
            />
          </div>

          <div className="flex flex-col items-center space-y-4 md:space-y-6">
            <div className="h-0.5 w-12 bg-gold mx-auto opacity-60"></div>
            <div className="w-full max-w-65 md:max-w-xs">
              <p className="text-white/80 text-xs md:text-sm lg:text-base leading-relaxed italic">
                "Les Serdaigle sont connus pour leur intelligence, leur
                curiosité et leur esprit critique."
              </p>
            </div>
            <p className="text-gold/90 text-[9px] md:text-[10px] lg:text-xs uppercase tracking-[0.3em] font-bold">
              Intelligence • Curiosité • Esprit Critique
            </p>
          </div>
        </div>

        {/* SECTION DROITE : Titre & Personnages */}
        <div className="p-6 md:p-8 flex flex-col items-center justify-between bg-linear-to-br from-transparent to-blue-950/60 min-h-80 md:min-h-0">
          <div className="text-center">
            <h2 className="text-white/50 uppercase tracking-[0.2em] text-[8px] md:text-[10px] mb-1">
              Résultat du Choixpeau
            </h2>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Maison <br />
              <span className="text-gold font-Cinzel text-3xl md:text-5xl lg:text-6xl drop-shadow-md">
                Serdaigle
              </span>
            </h1>
          </div>

          {/* Cho et Luna  */}
          <div className="relative mt-6 flex justify-center items-end h-38 md:h-48 lg:h-64">
            <img
              src={srdPic}
              alt="Cho et Luna"
              className="h-full w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
