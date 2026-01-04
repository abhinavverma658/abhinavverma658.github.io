import Abhinav from "../assets/abhinav.webp";
const heroSection = () => {
  return (
    <div className="max-w-7xl pt-8 mx-auto flex justify-center items-center ">
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="text-white text-center text-4xl font-bold">
          Hi! 👋🏻 I'm a Frontend Developer Who ❤️ To
        </h1>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img
          src={Abhinav}
          alt="Abhinav Verma"
          className="w-80 h-80 rounded-full"
        />
      </div>
    </div>
  );
};
export default heroSection;
