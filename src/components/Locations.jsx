import { LocationsCards } from "./LocationCards";
import { Button } from "./Button";

export const LocationInfo = () => (
  <div className="container bg-[#F5F5F2]">
    <div className="text-center">
      <h1 className="text-[48px] font-bold text-[#2A2C1F]">Locations</h1>
      <p className="text-[20px] text-[#65665C] pb-[64px]">
        Nunc mi ante, fringilla eget iaculis et, maximus vel purus integer lacus
        urna, aliquet non <br /> nisl sit amet.
      </p>
    </div>
    <div className="grid grid-cols-3 gap-5">
      <LocationsCards description={"San Francisco, CA"} />
      <LocationsCards description={"Los Angeles, CA"} />
      <LocationsCards description={"San Diego, CA"} />
      <LocationsCards description={"New York, NY"} />
      <LocationsCards description={"Las Vegas, NV"} />
      <LocationsCards description={"Miami, FL"} />
    </div>
    <div className="flex justify-center items-center gap-3 pt-[80px] pb-[128px]">
      <Button
        text="Explore properties"
        className="bg-[#FFF] !text-gray-700 border-2"
        style={{ fontSize: "16px" }}
      />
      <span className=" text-stone-700 ml-5">Contact agent > </span>
    </div>
  </div>
);
