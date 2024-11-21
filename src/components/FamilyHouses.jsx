import { Badge } from "./Badge";
import FamilyHouses from "../assets/realco.images/FamilyHouses.png";
import { Button } from "./Button";

export const ComfortFamilyHouses = () => (
  <div className="container flex ">
    <div className="my-40">
      <Badge text="Comfort first" />
      <h1 className="text-[48px] font-bold text-[#2A2C1F]">
        The best houses for family comfort
      </h1>
      <p className=" text-[#65665C] text-[18px] w-[503px] pb-10">
        Ectus ipsum faucibus justo, et semper quam nisl in nibh. Proin
        sollicitudin, lorem non posuere blandit.
      </p>
      <Button
        text="Explore properties"
        className={"bg-[#FFF] text-gray-900 border-2"}
        style={{ fontSize: "16px" }}
      />
      <span className=" text-stone-700 ml-10">Contact agent > </span>
    </div>
    <div className="my-20">
      <img src={FamilyHouses} alt="FamilyHouses" />
    </div>
  </div>
);
