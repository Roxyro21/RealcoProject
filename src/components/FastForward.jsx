import FamilyHouses from "../assets/realco.images/FamilyHouses2.png";
import PaymentsIcon from "../assets/realco.icons/payments.svg";
import DescriptionIcon from "../assets/realco.icons/description.svg";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";
import { Card } from "./ui/Cards";

export const FastForward = () => (
  <div className="container flex gap-8 items-center">
    <div className=" my-[100px]">
      <img src={FamilyHouses} />
    </div>
    <div>
      <Badge text={"Quick and easy"} />
      <h1 className="text-[48px] font-bold text-[#2A2C1F] py-3">
        Fast forward process
      </h1>
      <p className="text-[#65665C] text-[18px] ">
        Ut vitae nisi eu nisi maximus condimentum ac id purus. Duis sit amet mi
        arcu praesent nec felis nisl.
      </p>
      <div className="flex">
        <Card
          className="border-none shadow-none w-[288px] text-[14px] text-start"
          icon={PaymentsIcon}
          description={"Affordable prices"}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros."
          }
        />
        <Card
          className="border-none shadow-none w-[288px] text-[14px] text-start"
          icon={DescriptionIcon}
          description={"Less paper work"}
          paragraph={
            "Curabitur porta luctus semper donec eget lobortis leo ac finibus nisi."
          }
        />
      </div>
      <div className="flex items-center gap-3 pl-[30px]">
        <Button
          text="Explore properties"
          className="bg-[#FFF] !text-gray-700 border-2"
        />
        <span className=" text-stone-700 ml-10">Contact agent > </span>
      </div>
    </div>
  </div>
);

