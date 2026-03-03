import pfsPic from "../assets/house/psf-picture.png";
import pfs from "../assets/house/poufsouffle.gif";
import pfsBackground from "../assets/house/bg-poufsouffle.jpg";
import HouseTemplate from "./houseTemplate";

export default function Poufsouffle() {
  return (
    <HouseTemplate
      name="Poufsouffle"
      colorClass="amber"
      bgImage={pfsBackground}
      emblemGif={pfs}
      charPic={pfsPic}
      quote="Les Poufsouffle sont connus pour leur loyauté, leur dévouement et leur esprit de camaraderie."
      traits="Loyauté • Dévouement • Camaraderie"
    />
  );
}
