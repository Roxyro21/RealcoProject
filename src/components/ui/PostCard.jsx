export const LatestPosts = ({
  img,
  badge,
  date,
  description,
  paragraph,
  label,
}) => (
  <div className="bg-[#fff] border-2 rounded-b-2xl hover:shadow-lg hover:scale-105 transition-transform duration-300">
    <img src={img} />
    <div className="p-5">
      <span className="flex gap-5 items-center">
        {badge} {date}
      </span>
      <h1 className="text-[24px] text-[#2A2C1F] font-bold">{description}</h1>
      <p className="text-[#65665C] line-clamp-2 pb-[24px]">{paragraph}</p>
      <div className="">
        <a
          href="#"
          className="line-clamp-2 text-stone-900 hover:text-stone-500 hover:underline"
        >
          {label}
        </a>
      </div>
    </div>
  </div>
);
