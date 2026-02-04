import ProjectImg1 from "../assets/resumailer.webp";
import ProjectImg2 from "../assets/resumailerpu.webp";
import Card from "./projectCard.jsx";
const Project = () => {
  return (
    <div className="border-b border-gray-800 pb-8 pt-16">
      <div className="max-w-5xl mx-auto p-4">
        <h2 className="text-4xl font-bold mb-4  underline underline-offset-8 decoration-5 decoration-[#923cb5] text-[#923cb5]">
          Featured Projects
        </h2>
        <div className="md:grid grid-cols-2 gap-2">
          <Card
            projectName="ResuMailer Chrome Extension"
            cardImg={ProjectImg1}
            projectDescription="A Comprehensive Chrome extension for managing resumes."
          />
          <Card projectName="Slice Link NPM Package" cardImg={ProjectImg2} />
          <Card projectName="Slice Link NPM Package" cardImg={ProjectImg2} />
          <Card projectName="Slice Link NPM Package" cardImg={ProjectImg2} />
        </div>
        <div className="text-center mt-8 mb-8 flex items-center justify-center">
          <div className="flex justify-between gap-2">
            <a
              className="text-white underline underline-offset-4 decoration-1 decoration-gray-400 transition-colors duration-300 font-bold"
              href="https://github.com/abhinavverma658?tab=repositories"
              target="_blank"
            >
              View GitHub Repositories
            </a>
            <svg
              width="22px"
              height="22px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M20 4L12 12M20 4V8.5M20 4h25.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5h21.5"
                  stroke="#ffffff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Project;
