import LocationIcon from "../../assets/realco.icons/location.svg";
import BathtubIcon from "../../assets/realco.icons/bathtab.svg";
import BadIcon from "../../assets/realco.icons/bad.svg";
import SquareIcon from "../../assets/realco.icons/square.svg";

export const LabelCard = ({
  img,
  description,
  price,
  location,
  bathCount,
  bedCount,
  area,
}) => (
  <div className="bg-[#fff] border-2 rounded-b-lg hover:shadow-lg hover:scale-105 transition-transform duration-300">
    <img src={img} />
    <div className="p-5">
      <h3 className="text-[24px] text-[#2A2C1F] font-bold">{description}</h3>
      <h4 className="text-[18px] text-[#2A2C1F] font-bold pb-2">{price}</h4>

      <div className="flex gap-2 pb-3">
        <img src={LocationIcon} />
        <span className="text-[#65665C] ">{location}</span>
      </div>

      <div className="flex gap-2">
        <img src={BathtubIcon} />
        <span className="text-[#65665C]">{bathCount}</span>
        <img src={BadIcon} />
        <span className="text-[#65665C]">{bedCount}</span>
        <img src={SquareIcon} />
        <span className="text-[#65665C]">{area}</span>
      </div>
    </div>
  </div>
);
