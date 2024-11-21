import HomeIcon from "../assets/realco.icons/home.svg";
import NotesIcon from "../assets/realco.icons/notes.svg";
import KeyIcon from "../assets/realco.icons/key.svg";
import { Card } from "./Cards";

export const ProcessOverview = () => (
  <div className="container">
    <h1 className="text-[48px] font-bold text-[#2A2C1F] text-center pt-[125px] ">
      How it works
    </h1>
    <p className=" text-[#65665C] text-[18px] text-center pb-[64px]">
      Nunc laoreet consequat nunc at consequat. Praesent aliquam mi id efficitur
      pellentesque.
      <br /> Maecenas varius felis felis.
    </p>
    <div className="flex gap-10">
      <Card
        icon={HomeIcon}
        description={"Find property"}
        paragraph={
          "Odales mauris quis tellus facilisis, vel mattis magna interdum. Curabitur eget aliquam elit. In mauris purus, auctor a eleifend non."
        }
      />
      <Card
        icon={NotesIcon}
        description={"Make a deal"}
        paragraph={
          "Pellentesque suscipit mauris. Nam dictum, erat a volutpat varius, urna nisi sollicitudin orci, sagittis facilisis odio tortor ac mi."
        }
      />
      <Card
        icon={KeyIcon}
        description={"Get your keys"}
        paragraph={
          "Nulla vel bibendum purus. Etiam tempus quam vel pulvinar rutrum. Duis semper, metus vitae fermentum consequat."
        }
      />
    </div>
  </div>
);
