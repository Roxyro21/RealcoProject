import HomeImage from "../assets/realco.images/property.png";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { Input } from "./InputButton";

export const PropertySection = () => (
  <div className="container bg-[#F5F5F2] flex">
    <div className="py-20">
      <Badge text="Find your dream place" />
      <h1 className="text-[56px]">Find house for your family in minutes</h1>
      <p className="text-[20px] text-[#65665C] w-[503px] pb-4">
        Aenean sodales mauris quis tellus facilisis, vel mattis magna. Interdum
        curabitur eget aliquam elit in mauris purus.
      </p>
      <Input text={"Search"} />
      <Button text="Find Property" />
    </div>
    <div className="w-[720px]">
      <img src={HomeImage} />
    </div>
  </div>
);
