const statsNumber = () => {
  return (
    <div className="max-w-full border-t border-b border-gray-800 mt-20">
      <div className="md:flex grid-cols-4 max-w-5xl py-10 justify-center mx-auto gap-10  ">
        <div className="text-white w-1/4 flex flex-col items-center">
          <h2 className="text-3xl">120+</h2>
          <h5 className="text-xl text-[#923cb5]">Projects Completed</h5>
        </div>
        <div className="text-white w-1/4 flex flex-col items-center">
          <h2 className="text-3xl">8.5k</h2>
          <h5 className="text-xl text-[#923cb5]">GitHub Contributions</h5>
        </div>
        <div className="text-white w-1/4 flex flex-col items-center">
          <h2 className="text-3xl">5k</h2>
          <h5 className="text-xl text-[#923cb5]">LinkedIn Followers</h5>
        </div>
        <div className="text-white w-1/4 flex flex-col items-center">
          <h2 className="text-3xl">6+</h2>
          <h5 className="text-xl text-[#923cb5]">Certifications</h5>
        </div>
      </div>
    </div>
  );
};
export default statsNumber;
