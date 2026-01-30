const statsNumber = () => {
  return (
    <div className="border-b border-t border-gray-800 mt-10 p-3">
      <div className="max-w-5xl  md:flex justify-center gap-3 mx-auto">
        <div className="flex grid-cols-2  md:py-10 justify-center gap-4 md:gap-26 ">
          <div className="text-white w-1/2 md:w-1/4 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl">120+</h2>
            <h5 className="text-md md:text-xl text-[#923cb5]">
              Projects Completed
            </h5>
          </div>
          <div className="text-white w-1/2 md:w-1/4 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl">8.5k</h2>
            <h5 className="text-md md:text-xl text-[#923cb5]">
              GitHub Contributions
            </h5>
          </div>
        </div>
        <div className="flex grid-cols-2 md:py-10 justify-center gap-4 md:gap-26  ">
          <div className="text-white w-1/2 md:w-1/4 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl">5k</h2>
            <h5 className="text-md md:text-xl text-[#923cb5]">
              LinkedIn Followers
            </h5>
          </div>
          <div className="text-white w-1/2  md:w-1/4 flex flex-col items-center text-center">
            <h2 className="text-2xl md:text-3xl">6+</h2>
            <h5 className="text-md md:text-xl text-[#923cb5]">
              Certifications
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default statsNumber;
