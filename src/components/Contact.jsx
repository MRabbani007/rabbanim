import React, { useEffect } from "react";
// Import Aos
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    // Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      name="contact"
      className="pb-[7rem] dark:bg-zinc-900 bg-slate-200 dark:text-gray-300 text-zinc-900 duration-500"
    >
      <div className="section-container w-fit">
        <h2>Contact</h2>
        <form
          method="POST"
          action="https://getform.io/f/483d805c-1fff-47c8-8a66-a6e7375b4d11"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div
            className="pb-8"
            // data-aos="fade-up"
          >
            <p className=" py-4">
              Submit the form below or shoot me an email - mrabbani@outlook.com
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
            // data-aos="fade-left"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
            // data-aos="fade-left"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="10"
            placeholder="Message"
            // data-aos="fade-left"
          ></textarea>
          <button
            className="border-2 hover:bg-yellow-500 hover:border-yellow-500 px-4 py-3 my-8 mx-auto flex items-center"
            // data-aos="fade-left"
          >
            Let's Collaborate
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
