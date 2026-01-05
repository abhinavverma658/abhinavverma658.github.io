import Abhinav from "../assets/abhinav.webp";
const heroSection = () => {
  return (
    <div className="max-w-5xl pt-42 mx-auto flex justify-center items-center  bg-amber">
      <div className="w-1/2 flex flex-col gap-4">
        <div className="max-w-[50%] rounded-full bg-[#121212] p-2 border-2 border-gray-800 flex items-center gap-3">
          <div className="bg-green-500 rounded-full p-1.5 w-2"> </div>
          <h1 className="text-white">Available For New Projects</h1>
        </div>
        <h1 className="text-white text-left text-6xl font-bold ">
          Frontend Developer with an{" "}
          <span className="underline underline-offset-8 decoration-10  decoration-[#923cb5]">
            eye for detail
          </span>
        </h1>
        <p className="text-gray-400 mt-3">
          I'm Abhinav Verma, a passionate frontend developer dedicated to
          crafting visually stunning and user-friendly web experiences. With a
          keen eye for detail and a commitment to excellence, I specialize in
          transforming ideas into engaging digital realities.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#923cb5] hover:bg-[#7a2fa3] text-white font-bold py-3 px-6 rounded-full mt-4">
            View Work
          </button>
          <a className="bg-[#121212] border-2 border-gray-800 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-full mt-4 flex items-center gap-1">
            <svg
              width="20px"
              height="20px"
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
                <g id="Interface / Download">
                  {" "}
                  <path
                    id="Vector"
                    d="M6 21H18M12 3V17M12 17L17 12M12 17L7 12"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
            Resume
          </a>
        </div>
      </div>
      <div className="w-1/2 flex justify-end items-center">
        <img
          src={Abhinav}
          alt="Abhinav Verma"
          className="w-96 h-96 rounded-full"
        />
        <div className="absolute top-130 right-72 w-36 h-20 flex justify-center gap-3 items-center rounded-full bg-[#121212] border-2 border-gray-800 ">
          <div>
            <svg
              width="34px"
              height="34px"
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
                  d="M8.5 12.5L10.5 14.5L15.5 9.5"
                  stroke="#923cb4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
                <path
                  d="M3.02907 13.0776C2.7032 12.3958 2.7032 11.6032 3.02907 10.9214C3.16997 10.6266 3.41023 10.3447 3.89076 9.78084C4.08201 9.55642 4.17764 9.44421 4.25796 9.32437C4.44209 9.04965 4.56988 8.74114 4.63393 8.41669C4.66188 8.27515 4.6736 8.12819 4.69706 7.83426C4.75599 7.09576 4.78546 6.72651 4.89427 6.41844C5.14594 5.70591 5.7064 5.14546 6.41893 4.89378C6.72699 4.78497 7.09625 4.7555 7.83475 4.69657C8.12868 4.67312 8.27564 4.66139 8.41718 4.63344C8.74163 4.56939 9.05014 4.4416 9.32485 4.25747C9.4447 4.17715 9.55691 4.08152 9.78133 3.89027C10.3452 3.40974 10.6271 3.16948 10.9219 3.02859C11.6037 2.70271 12.3963 2.70271 13.0781 3.02859C13.3729 3.16948 13.6548 3.40974 14.2187 3.89027C14.4431 4.08152 14.5553 4.17715 14.6752 4.25747C14.9499 4.4416 15.2584 4.56939 15.5828 4.63344C15.7244 4.66139 15.8713 4.67312 16.1653 4.69657C16.9038 4.7555 17.273 4.78497 17.5811 4.89378C18.2936 5.14546 18.8541 5.70591 19.1058 6.41844M4.89427 17.5806C5.14594 18.2931 5.7064 18.8536 6.41893 19.1053C6.72699 19.2141 7.09625 19.2435 7.83475 19.3025C8.12868 19.3259 8.27564 19.3377 8.41718 19.3656C8.74163 19.4297 9.05014 19.5574 9.32485 19.7416C9.44469 19.8219 9.55691 19.9175 9.78133 20.1088C10.3452 20.5893 10.6271 20.8296 10.9219 20.9705C11.6037 21.2963 12.3963 21.2963 13.0781 20.9705C13.3729 20.8296 13.6548 20.5893 14.2187 20.1088C14.4431 19.9175 14.5553 19.8219 14.6752 19.7416C14.9499 19.5574 15.2584 19.4297 15.5828 19.3656C15.7244 19.3377 15.8713 19.3259 16.1653 19.3025C16.9038 19.2435 17.273 19.2141 17.5811 19.1053C18.2936 18.8536 18.8541 18.2931 19.1058 17.5806C19.2146 17.2725 19.244 16.9033 19.303 16.1648C19.3264 15.8709 19.3381 15.7239 19.3661 15.5824C19.4301 15.2579 19.5579 14.9494 19.7421 14.6747C19.8224 14.5548 19.918 14.4426 20.1093 14.2182C20.5898 13.6543 20.8301 13.3724 20.971 13.0776C21.2968 12.3958 21.2968 11.6032 20.971 10.9214"
                  stroke="#923cb4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="text-md text-gray-400">
            <h6> Experience</h6>
            <h1 className="text-xl text-white">1+ Years</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default heroSection;
