import FamilyIcon from "../assets/realco.icons/family.svg";
import { Button } from "./Button";

export const FamilyPriority = () => (
  <div className="bg-[#F5F5F2]">
    <div className="container bg-[#F5F5F2] h-[233px]">
      <div className=" bg-[#65665C]  h-[465px] rounded-2xl py-[96px] px-[256px]">
        <div className="flex-col-reverse text-center">
          <span className="flex justify-center">
            <img
              className=" bg-white w-[48px] h-[48px] rounded-lg p-2"
              src={FamilyIcon}
            />
          </span>

          <h1 className="text-[48px] text-[#FFF] font-bold">
            Families are our priority
          </h1>
          <p className="text-[18px] text-[#FFF] h-[54px] my-8">
            Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non,
            placerat vel arcu. In non consectetur lorem. Morbi non varius sapien
            suscipit mauri.
          </p>
          <Button text="Get started" className="w-[137px] h-[50px]" />
        </div>
      </div>
    </div>
  </div>
);
