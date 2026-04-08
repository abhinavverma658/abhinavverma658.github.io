import Img1 from "../assets/img1.webp";
import Img2 from "../assets/img3.webp";
const aboutUs = () => {
  return (
    <div className="max-w-full border-b border-gray-800 pb-16 " id="about">
      <div className="max-w-5xl md:flex items-center mx-auto mt-20 gap-10 px-4 ">
        <div className="w-full md:w-1/2  dark:text-white text-left">
          <h2 className="text-4xl font-bold mb-4 underline underline-offset-8 decoration-5 decoration-[#923cb5] text-[#923cb5]">
            About Me
          </h2>
          <p className="text-lg mb-6 ">
            Frontend Developer from Bihar passionate about creating responsive,
            visually appealing, and user-friendly websites. I enjoy turning
            ideas into interactive web experiences and continuously learning new
            technologies to stay up-to-date.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex">
          <div className="w-1/2 p-3 pt-10">
            <img
              src={Img1}
              alt="tech"
              className="rounded-3xl hover:scale-105 hover:transition-all duration-500"
            />
          </div>
          <div className="w-1/2 p-3 ">
            <img
              src={Img2}
              alt="tech"
              className="rounded-3xl hover:scale-105 hover:transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default aboutUs;
