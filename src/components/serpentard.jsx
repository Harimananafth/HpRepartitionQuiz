import HouseTemplate from "./houseTemplate";
import sptPic from "../assets/house/spt-picture.png";
import spt from "../assets/house/serpentard.gif";
import sptBackground from "../assets/house/bg-serpentard.jpg";

export default function Serpentard() {
  return (
    <HouseTemplate
      name="Serpentard"
      colorClass="emerald"
      bgImage={sptBackground}
      emblemGif={spt}
      charPic={sptPic}
      quote="Les Serpentards sont connus pour leur ruse, leur ambition et leur détermination."
      traits="Ruse • Ambition • Détermination"
    />
  );
}
