import { TestimonialCard } from "./ui/TestimonialCard";

import StarsIcon from "../assets/realco.icons/stars.svg";
import MichaelImg from "../assets/realco.images/Michael.png";
import AmberImg from "../assets/realco.images/Amber.png";
import SarahImg from "../assets/realco.images/Sarah.png";

const testimonials = [
  {
    icon: StarsIcon,
    paragraph:
      "Aliquam erat volutpat. Nulla pretium nec urna et convallis. Ut varius mi lacus, nec molestie libero ultricies nec. Aenean lacinia dui elit, ut gravida quam.",
    img: MichaelImg,
    name: "Michael Webb",
    role: "Customer",
  },

  {
    icon: StarsIcon,
    paragraph:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi pretium iaculis ultricies. Aenean in leo vitae tortor.",
    img: AmberImg,
    name: "Amber Keene",
    role: "Customer",
  },
  {
    icon: StarsIcon,
    paragraph:
      "Condimentum viverra orci. Pellentesque suscipit odio nisl, non ultricies purus mattis eget. In placerat, lorem a sodales ullamcorper, eros nibh laoreet nisl.",
    img: SarahImg,
    name: "Sarah Tarleton",
    role: "Customer",
  },
];

export const ClientTestimonial = () => (
  <div className="container">
    <div className="my-[160px]">
      <div className="text-center pt-[128px] pb-[80px]">
        <h1 className="text-[48px] font-bold text-[#2A2C1F]">
          What customers say
        </h1>
        <p className="text-[#65665C] text-[18px]">
          Faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
      </div>

      <div>
        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((card, i) => (
            <TestimonialCard key={i} {...card} />
          ))}
        </div>
      </div>
    </div>
  </div>
);
