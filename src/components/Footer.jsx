import realcoIcon from "../assets/realco.icons/icon.svg";
import { Button } from "./ui/Button";
import { Input } from "./ui/InputButton";

const footerLinks = [
  {
    title: "Pages",
    links: ["Home", "About", "Blog", "Agents", "Contact", "FAQs", "Properties"],
  },
  {
    title: "CMS Pages",
    links: [
      "Property",
      "Property Single",
      "Blog Categories",
      "Blog Single",
      "Agent Single",
    ],
  },
  {
    title: "Utility Pages",
    links: [
      "Style Guide",
      "Changelog",
      "Licenses",
      "404",
      "Password",
      "Search",
    ],
  },
];

export const Footer = () => (
  <div className="container">
    <div className="flex gap-[64px] py-[64px]">
      <div>
        <img src={realcoIcon} alt="Realco" />
      </div>

      {footerLinks.map((section, index) => (
        <div key={index} className="flex flex-col gap-4 text-[14px]">
          <a className="text-[16px]" href="#">
            {section.title}
          </a>
          {section.links.map((link, idx) => (
            <a
              key={idx}
              href="#"
              className="text-gray-800 hover:text-orange-700 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      ))}
      <div className="flex flex-col gap-5 ml-[100px]">
        <span>Subscribe</span>
        <p className="text-[#65665C] w-[379px]">
          Join our newsletter to stay up to date on features and releases.
        </p>
        <div className="flex gap-2 ">
          <Input text={"Enter your email"} />
          <Button text={"Subscribe"} />
        </div>
        <p className="text-[#65665C] text-[12px]">
          By subscribing you agree to with our Privacy Policy
        </p>
      </div>
    </div>
  </div>
);
