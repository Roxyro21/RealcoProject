export const Badge = ({text, className = ""}) => (
    <span className={`rounded-[32px] bg-[#E7E8E3] text-[14px] py-1 px-3 text-[#2A2C1F] ${className}`}>
      {text}
    </span>
);
