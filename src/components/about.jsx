const aboutUs = () => {
  return (
    <div className="max-w-full">
      <div className="max-w-5xl flex flex-col items-center mx-auto mt-20 gap-10 px-4 md:flex-row">
        <div className="w-1/2 text-white">
          <h1 className="text-4xl font-bold mb-4 underline underline-offset-8 decoration-5 decoration-[#923cb5] text-[#923cb5]">
            About Me
          </h1>
          <p className="text-lg mb-6">
            I'm Abhinav Verma, a passionate web developer with expertise in
            crafting dynamic and responsive websites. With a strong foundation
            in HTML, CSS, JavaScript, and React, I specialize in creating
            seamless user experiences. My journey in web development is driven
            by a love for coding and a commitment to delivering high-quality
            digital solutions.
          </p>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
};
export default aboutUs;
