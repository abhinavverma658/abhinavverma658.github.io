const Message = () => {
  return (
    <div className="border-b border-gray-500">
      <div className="max-w-5xl mx-auto p-4 mt-8 mb-8" id="contact">
        <h2 className="text-4xl font-bold mb-3 text-[#923cb5] underline underline-offset-4 text-center">
          Leave a Message
        </h2>
        <div className=" p-6 pt-8 rounded-lg shadow-md">
          <form action="">
            <div className="flex justify-center gap-4">
              <div className="w-1/2 flex flex-col  ">
                <label className="text-white pb-3">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="rounded-2xl pb-3 mb-3 text-white border-amber-50 border-2 placeholder:text-gray-400 placeholder:pl-5 pt-2 placeholder:vertical-center pl-3"
                />
                <label className="text-white pb-3">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="rounded-2xl pb-3 mb-3 text-white border-amber-50 border-2 placeholder:text-gray-400 placeholder:pl-5 pt-2 placeholder:vertical-center pl-3"
                />
              </div>
              <div className="w-1/2  flex flex-col">
                <label className="text-white pb-3">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  className="rounded-2xl pb-3 mb-3 text-white border-amber-50 border-2 placeholder:text-gray-400 placeholder:pl-5 pt-2 placeholder:vertical-center pl-3"
                />
                <label className="text-white pb-3">Message</label>
                <textarea
                  rows="1"
                  placeholder="Enter your message"
                  className="rounded-2xl pb-3 mb-3 text-white border-amber-50 border-2 placeholder:text-gray-400 placeholder:pl-5 pt-2 placeholder:vertical-center pl-3"
                />
              </div>
            </div>
            <div className="mx-auto text-center">
              <button
                type="submit"
                className="bg-purple text-white rounded-4xl px-4 py-2 mt-4 hover:bg-purple-800 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Message;
