import React, { useState } from "react";
const Message = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8601b9e3-5ebc-45f0-9d01-584e4cb83236");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="border-b border-gray-500">
      <div className="max-w-5xl mx-auto p-4 mt-8 mb-8" id="contact">
        <h2 className="text-4xl font-bold mb-3 text-[#923cb5] underline underline-offset-4 text-center">
          Leave a Message
        </h2>
        <div className="mt-8 p-6 pt-8 rounded-2xl shadow-xl dark:shadow-md dark:border-gray-500 border border-gray-700">
          <form onSubmit={onSubmit}>
            <div className="md:flex justify-center gap-4">
              <div className="md:w-1/2 flex flex-col  ">
                <label className="dark:text-white pb-3">First Name</label>
                <input
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  className="rounded-2xl pb-3 mb-3 dark:text-white dark:border-amber-50 border placeholder:text-gray-400 placeholder:pl-2 pt-2 placeholder:vertical-center pl-3"
                />
                <label className="dark:text-white pb-3">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  className="rounded-2xl pb-3 mb-3 dark:text-white dark:border-amber-50 border placeholder:text-gray-400 placeholder:pl-2 pt-2 placeholder:vertical-center pl-3"
                />
                <label className="dark:text-white pb-3">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  className="rounded-2xl pb-3 mb-3 dark:text-white dark:border-amber-50 border placeholder:text-gray-400 placeholder:pl-2 pt-2 placeholder:vertical-center pl-3"
                />
              </div>
              <div className="md:w-1/2  flex flex-col">
                <label className="dark:text-white pb-3">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter Number"
                  name="phone"
                  className="rounded-2xl pb-3 mb-3 dark:text-white dark:border-amber-50 border placeholder:text-gray-400 placeholder:pl-2 pt-2 placeholder:vertical-center pl-3"
                />
                <label className="dark:text-white pb-3">Message</label>
                <textarea
                  rows="5"
                  placeholder="Enter Message"
                  name="message"
                  className="rounded-2xl pb-3 mb-3 dark:text-white dark:border-amber-50 border placeholder:text-gray-400 placeholder:pl-2 pt-2 placeholder:vertical-center pl-3"
                />
              </div>
            </div>
            <div className="mx-auto text-center">
              <button
                type="submit"
                className="bg-[#923cb5] text-white rounded-4xl px-4 py-2 mt-4 hover:bg-[#7a2fa3] transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
            <span className="text-green-500 flex justify-center mt-4 text-center mx-auto">
              {result}
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Message;
