import { Badge } from "./Badge";
import { Button } from "./Button";
import { LabelCard } from "./LabelCard";

import CozyHome from "../assets/realco.images/Cozy.png";
import TinyHome from "../assets/realco.images/Tiny.png";
import CrownHome from "../assets/realco.images/Crown.png";
import FamilyHome from "../assets/realco.images/Family.png";
import StudioHome from "../assets/realco.images/Studio.png";
import SanHome from "../assets/realco.images/San.png";

const apartments = [
  {
    img: CozyHome,
    description: "Cozy studio in Los Angeles",
    price: "$ 1,200.00 USD",
    location: "2263 Southlea, Los Angeles",
    bathCount: "2",
    bedCount: "2",
    area: "840 sqft",
  },
  {
    img: TinyHome,
    description: "Tiny home in San Diego",
    price: "$ 740,000.00 USD",
    location: "2569 El Segundo, San Diego",
    bathCount: "1",
    bedCount: "2",
    area: "400 sqft",
  },
  {
    img: CrownHome,
    description: "Crown house in New York",
    price: "$ 980,000.00 USD",
    location: "4489 Smity Fielda, New York",
    bathCount: "2",
    bedCount: "4",
    area: "3200 sqft",
  },
  {
    img: FamilyHome,
    description: "Family house in Los Angeles",
    price: "$ 4,200.00 USD",
    location: "2263 Southlea, Los Angeles",
    bathCount: "2",
    bedCount: "3",
    area: "1400 sqft",
  },
  {
    img: StudioHome,
    description: "Studio in Las Vegas",
    price: "$ 820,000.00 USD",
    location: "2569 Halls Corner, Las Vegas",
    bathCount: "2",
    bedCount: "3",
    area: "2400 sqft",
  },
  {
    img: SanHome,
    description: "San Diego story",
    price: "$ 3,700.00 USD",
    location: "2569 El Segundo, San Diego",
    bathCount: "1",
    bedCount: "2",
    area: "650 sqft",
  },
];

export const ApartmentList = () => (
  <div className="container bg-[#F5F5F2]">
    <div className="text-center pt-[128px] pb-[80px]">
      <Badge text="Properties" />
      <h1 className="text-[48px] font-bold text-[#2A2C1F]">
        Houses in your favorite area
      </h1>
    </div>

    <div className="grid grid-cols-3 gap-8">
      {apartments.map((apartments, index) => (
        <LabelCard key={index} {...apartments} />
      ))}
    </div>
    <div className="flex justify-center items-center gap-3 pt-[80px] pb-[160px]">
      <Button
        text="Explore properties"
        className="bg-[#FFF] !text-gray-700 border-2"
        style={{ fontSize: "16px" }}
      />
      <span className="text-stone-700 ml-5">Contact agent &gt;</span>
    </div>
  </div>
);
