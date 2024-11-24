export const LocationsCards = ({description}) => (
    <div
        className="bg-[#fff] p-5 border-2 rounded-2xl hover:shadow-lg hover:scale-105 transition-transform duration-300">
        <h3 className="text-[20px] text-[#2A2C1F] font-bold">{description}</h3>
        <span className="text-stone-700">
        <span className="text-stone-700">View Properties > </span>
      </span>
    </div>
);
