export const TestimonialCard = ({ icon, paragraph, img, name, role }) => {
  
  
    return (
    <div className=" flex items-start flex-col gap-4 shadow-lg shadow-indigo-100/40 border-2 p-8 rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300">
      <img src={icon} />
      <p className="text-[#2A2C1F]">{paragraph}</p>
      <div className="flex gap-3">
        <img src={img} />
        <div className="flex flex-col">
          <span className="font-bold text-[#2A2C1F]">{name}</span>
          <span className="text-[#65665C]">{role}</span>
        </div>
      </div>
    </div>
  );
};
