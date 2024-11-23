export const Button = ({ text, className = "",}) => {
  return (
    <button
      className={`bg-[#CF6F49] text-white !text-base rounded-md px-3 py-2 h-42 shadow-xl shadow-black-500/50 
              hover:bg-[#B55839] hover:scale-105 hover:shadow-2xl transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
};
