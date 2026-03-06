import DotCard from "./dotCard";
const Experience = () => {
  return (
    <div className="bg-[#923cb5] dark:bg-black border-b border-gray-500">
      <div className="max-w-5xl mx-auto flex p-4 md:flex-row flex-col gap-10 pb-16">
        <div className="w-full md:w-1/2 text-left mt-16 mb-8">
          <div flex className="flex justify-start gap-4 items-center pb-4">
            <svg
              width="40px"
              height="40px"
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
                  d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20h29C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7h25M9 7V5C9 3.89543 9.89543 3 11 3h23C14.1046 3 15 3.89543 15 5V7M9 7h25"
                  stroke="#923cb5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <h2 className="text-white text-3xl font-semibold">
              Work Experience
            </h2>
          </div>
          <DotCard
            title="Frontend Developer"
            subtitle="Quantum IT Innovation | Oct 2024 - Present"
            description="Developed and maintained user interfaces using React.js, ensuring responsive design and optimal performance. Collaborated with cross-functional teams to define, design, and ship new features. Implemented best practices for code quality and participated in code reviews."
          />
          <DotCard
            title="IT & Web Development Intern"
            subtitle="BasketHunt Pvt. Ltd. | Nov 2023 - Jan 2024"
            description="Led a full-stack web project as Project Leader, earned promotion to Communication Executive for strong communication skills, and received recognition for proactive problem-solving and consistent milestone delivery."
          />
        </div>
        <div className="w-full md:w-1/2 mt-16 mb-8 text-left">
          <div flex className="flex justify-start gap-4 items-center pb-4">
            <svg
              width="40px"
              height="40px"
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
                  d="M22 9L12 4L2 9L6.73684 11.3684M22 9L17.2632 11.3684M22 9V17M22 9h22M6.73684 11.3684L6.12815 16.8466C6.05115 17.5396 6.4143 18.2072 7.03794 18.519C10.1616 20.0809 13.8384 20.0809 16.9621 18.519C17.5857 18.2072 17.9488 17.5396 17.8718 16.8466L17.2632 11.3684M6.73684 11.3684L12 14L17.2632 11.3684"
                  stroke="#923cb5"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
            <h2 className="text-white text-3xl font-semibold">Education</h2>
          </div>
          <DotCard
            title="B.Tech in Computer Science"
            subtitle="I.T.S Engineering College | Nov 2020 - June 2024"
            description="Led a full-stack web project as Project Leader, earned promotion to Communication Executive for strong communication skills, and received recognition for proactive problem-solving and consistent milestone delivery."
          />
          <DotCard
            title="Higher Secondary Education"
            subtitle="Mount Litera Zee School | March 2018 - March 2020"
            description="Led a full-stack web project as Project Leader, earned promotion to Communication Executive for strong communication skills, and received recognition for proactive problem-solving and consistent milestone delivery."
          />
        </div>
      </div>
    </div>
  );
};
export default Experience;
