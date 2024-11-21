import FacebookIcon from "../assets/realco.icons/facebook.svg";
import IsntagramIcon from "../assets/realco.icons/instagram.svg";
import TwitterIcon from "../assets/realco.icons/twitter.svg";
import InIcon from "../assets/realco.icons/in.svg";

export const FooterInfo = () => (
  <div className="container bg-[#F5F5F2]">
    <div className="h-[72px] text-center pt-[25px]">
      <div className="inline-flex justify-between w-full items-center">
        <span>© Realco by Minimal Square.</span>
        <div className="flex gap-3">
          {[
            { src: FacebookIcon, alt: "Facebook" },
            { src: IsntagramIcon, alt: "Isntagram" },
            { src: TwitterIcon, alt: "Twitter" },
            { src: InIcon, alt: "InIcon" },
          ].map((icon, i) => (
            <img
              key={i}
              src={icon.src}
              alt={icon.alt}
              className="w-6 h-6 cursor-pointer transition-transform duration-200 transform hover:scale-110 hover:fill-orange-700"
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);
