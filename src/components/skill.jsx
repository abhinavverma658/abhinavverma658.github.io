const Skill = (props) => {
  return (
    <div className="rounded-full dark:bg-[#121212] p-3 max-w-full text-center text-sm font-medium dark:text-white border  border-gray-800 hover:bg-gray-700 hover:text-white transition-colors duration-300">
      {props.skill}
    </div>
  );
};
export default Skill;
