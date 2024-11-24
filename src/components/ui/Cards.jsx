export const Card = ({icon, description, paragraph, className = ""}) => (
    <div
        className={`text-center flex items-center flex-col gap-4 shadow-lg shadow-indigo-100/40  border-2 p-8 rounded-lg ${className}`}
    >
        <img className="bg-[#FAE8E1] p-2 rounded-lg" src={icon} alt="Icon"/>
        <h1 className="text-[24px] text-[#2A2C1F] font-bold">{description}</h1>
        <p className="text-[#65665C]">{paragraph}</p>
    </div>
);
