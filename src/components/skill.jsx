const Skill = (props) => {
  return (
    <div className="rounded-full lig dark:bg-[#121212] p-3 max-w-full text-center flex justify-center items-center align-middle text-wrap text-xs sm:text-sm font-medium dark:text-white border border-white dark:border-gray-800 hover:bg-gray-700 hover:text-white transition-colors duration-300 ">
      {props.skill}
    </div>
  );
};
export default Skill;
