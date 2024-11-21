import frameImage from "../assets/realco.images/Frame.png";

export const Media = () => (
  <div className="container flex  justify-between">
    <p className="w-[243px] text-[#2A2C1F] text-[18px] pt-10">
      As seen on the world`s best magazines and media
    </p>

    <img className=" pt-10" src={frameImage} />
  </div>
);

