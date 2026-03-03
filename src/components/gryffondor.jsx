import HouseTemplate from "./houseTemplate";
import gfdPic from "../assets/house/gfd-picture.png";
import gfd from "../assets/house/gryffondor.gif";
import gfdBackground from "../assets/house/bg-gryffondor.jpg";

export default function Gryffondor() {
  return (
    <HouseTemplate
      name="Gryffondor"
      colorClass="red"
      bgImage={gfdBackground}
      emblemGif={gfd}
      charPic={gfdPic}
      quote="Les Gryffondor sont connus pour leur courage, leur bravoure et leur détermination."
      traits="Force • Noblesse • Courage"
    />
  );
}
