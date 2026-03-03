import srdPic from "../assets/house/srd-picture.png";
import srd from "../assets/house/serdaigle.gif";
import srdBackground from "../assets/house/bg-serdaigle.jpg"
import HouseTemplate from "./houseTemplate";

export default function Serdaigle() {
  return (
    <HouseTemplate
      name="Serdaigle"
      colorClass="blue"
      bgImage={srdBackground}
      emblemGif={srd}
      charPic={srdPic}
      quote="Les Serdaigle sont connus pour leur intelligence, leur curiosité et leur esprit critique."
      traits="Intelligence • Curiosité • Esprit Critique"
    />
  );
}