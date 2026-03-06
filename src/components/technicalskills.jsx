import Skills from "./skill.jsx";
const TechnicalSkills = () => {
  return (
    <div className="bg-[#923cb5] dark:bg-black border-b border-gray-800">
      <div className="max-w-5xl mx-auto pb-16 p-4">
        <h2 className="text-4xl font-bold mb-4 mt-16 underline underline-offset-8 decoration-5 decoration-white dark:decoration-[#923cb5] text-white dark:text-[#923cb5]">
          Technical Skills
        </h2>
        <h2 className="text-2xl text-white dark:text-gray-400 mt-5 mb-5 font-bold">
          Frontend Development
        </h2>
        <div className="md:flex grid grid-cols-3 gap-4 text-white ">
          <Skills skill="HTML5" />
          <Skills skill="CSS3" />
          <Skills skill="JavaScript" />
          <Skills skill="TypeScript" />
          <Skills skill="React.Js" />
          <Skills skill="Bootstrap" />
          <Skills skill="Tailwind CSS" />
        </div>
        <h2 className="text-2xl text-white dark:text-gray-400 mt-5 mb-5 font-bold">
          Design & Tools
        </h2>
        <div className=" md:flex grid grid-cols-3 gap-4 text-white ">
          <Skills skill="Figma" />
          <Skills skill="GitHub" />
          <Skills skill="Lighthouse" />
          <Skills skill="Postman" />
          <Skills skill="Linux" />
          <Skills skill="Web DevTools" />
          <Skills skill="ChatGPT" />
          <Skills skill="Gemini" />
          <Skills skill="Copilot" />
          <Skills skill="Claude" />
        </div>
      </div>
    </div>
  );
};
export default TechnicalSkills;
