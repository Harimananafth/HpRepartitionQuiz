import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="p-10 flex items-center justify-between z-2 px-25">
      <div className="flex flex-col justify-start w-3/5 gap-3 text-left animate-fade-in">
        <h2 className="text-xl font-Cinzel text-gold">
          La céremonie est sur le point de commencer
        </h2>
        <h1 className="text-6xl font-Cinzel font-bold magic-text">
          <span className="text-white">
            Laissez le Choixpeau décider de votre{" "}
          </span>
          <span className="uppercase text-gold">destin</span>
        </h1>
        <p className="text-white/75">
          Les quatre fondateurs ont laissé un héritage. Lequel coule dans vos
          veines ? La bravoure, la ruse, la sagesse ou la loyauté ?
        </p>
        <Link to="/quiz" className="btn-magic transition-all duration-500 font-Cinzel flex items-center justify-center font-bold w-3/4 h-15 text-lg bg-transparent border-gold border-2 text-gold mt-10 rounded-sm">
          Dans quelle maison suis-je ?
        </Link>
      </div>
      <div className="flex items-center justify-center animate-fade-in">
        <img src="/logo.png" alt="Logo de l'école poudlard" className="h-80" />
      </div>
    </main>
  );
}
