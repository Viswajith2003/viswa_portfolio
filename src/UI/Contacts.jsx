import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Contacts() {
  return (
    <section id="contact" className="pb-16 container mx-auto">
      <div className="container">
        <h1 className="font-bold text-6xl mt-20 w-full text-center mb-10">
          Get in touch..
        </h1>
        <div className="md:flex justify-between items-center ">
          <div className="card p-3 border-2 border-[#000000] rounded-lg w-80 md:w-[350px] h-[450px] bg-[#e6e8eb] text-black space-y-4">
            <div className="space-y-6 mt-8">
              <input
                type="text"
                placeholder="Name :"
                className="border-2 border-black p-3 rounded-md h-12 w-full"
              />
              <input
                type="email"
                placeholder="Email :"
                className="border-2 border-black p-3 rounded-md h-12 w-full"
              />
              <textarea
                name="message"
                placeholder="Message :"
                className="border-2 border-black p-3 rounded-md h-40 w-full"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-5 mt-3">
                <BsGithub className="w-8 h-8  hover:scale-95" />
                <BsInstagram className="w-8 h-8 hover:scale-95" />
                <FaLinkedin className="w-8 h-8 hover:scale-95" />
              </div>

              <button className="p-2 w-36 mt-2 font-bold text-white rounded-lg bg-blue-600 hover:scale-95">
                Submit
              </button>
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
}

export default Contacts;
