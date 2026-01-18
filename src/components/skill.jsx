const Skill = (props) => {
  return (
    <div className="rounded-full bg-[#121212] px-4   py-2 text-sm font-medium text-white border  border-gray-800 hover:bg-gray-700 hover:text-white transition-colors duration-300">
      {props.skill}
    </div>
  );
};
export default Skill;
