import React from "react";

const Contact = () => {
  return (
    <section
      className="contact-container my-[100px]"
      id="contact"
      data-aos-easing="linear"
      data-aos="fade-up"
    >
      <div className="contact-wrapper  items-center flex flex-col justify-center container mx-auto lg:px-72 px-5">
        <div className="span subtitle text-cyan-300 mb-3">
          03. What&apos;s Next?
        </div>
        <h2 className="mb-6 text-5xl font-semibold text-gray-300">
          Get In Touch
        </h2>
        <p className="desc text-center text-gray-400 md:w-[70%]">
          If you have any questions, don&apos;t hesitate to ask. I&apos;ve been
          very busy lately and I can&apos;t promise to answer you right away,
          but I&apos;ll do my best!
        </p>
        <div className="message-container relative mt-10 text-center">
          <a
            href="mailto:antonio.knezovic1991@gmail.com"
            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-sm font-medium text-cyan-300 border-2 border-cyan-300 rounded-md hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-cyan-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">Say Hello</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
