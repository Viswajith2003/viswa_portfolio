import React from "react";

function Contacts() {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h1 className="font-bold text-6xl mt-20 w-full text-center mb-10">
          Get in touch..
        </h1>
        <div className="md:flex justify-between items-center ">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px] border-2 border-black rounded-lg">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25869.703228616378!2d75.84910382798228!3d11.088537940849525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6522474222987%3A0x2de01cb6b87aafe5!2sKoottumoochi!5e0!3m2!1sen!2sin!4v1708170014170!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full"
            ></iframe>
          </div>
          <div className="w-full nt-5 md:0 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <form className="w-full">
              <div className="mb-3">
                <input
                  type="text"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  rows={3}
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                  placeholder="Enter your message"
                />
              </div>
              <button className="w-full p-3 focus:outline-none rounded-[5px] bg-blue-700 text-white hover:bg-black text-center ease-linear duration-150">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
