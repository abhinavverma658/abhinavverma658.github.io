const DotCard = (props) => {
  return (
    <div className="flex gap-4 relative">
      <div className="flex flex-col items-center">
        <div className="w-2 h-2 rounded-full bg-[#923cb5]"></div>
        <div className="w-0.5 h-full bg-gray-700 mt-1 mb-1"></div>
      </div>

      <div className="flex-1 pb-8 pl-8">
        <h2 className="text-2xl font-bold text-white mb-2">{props.title}</h2>
        <h3 className="text-[#923cb5] text-lg font-semibold mb-4">
          {props.subtitle}
        </h3>
        <p className="text-gray-300 leading-relaxed">{props.description}</p>
      </div>
    </div>
  );
};
export default DotCard;
