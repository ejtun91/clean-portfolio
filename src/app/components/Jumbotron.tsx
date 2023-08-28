import React from "react";

const Jumbotron = () => {
  return (
    <section className="jumbotron flex items-center justify-center h-[100vh] min-h-[100vh]">
      <div className="jumbotron-wrapper flex flex-col md:gap-6 gap-3 justify-center container mx-auto lg:px-64 px-4">
        <span
          data-aos-easing="linear"
          data-aos="fade-up"
          data-aos-duration="200"
          className="subtitle text-lg text-cyan-300"
        >
          Hi, my name is
        </span>
        <div className="title-group">
          <h1
            data-aos-easing="linear"
            data-aos="fade-up"
            data-aos-duration="300"
            className="md:text-6xl text-3xl text-gray-200"
          >
            Antonio Knezovic.
          </h1>
          <h1
            data-aos-easing="linear"
            data-aos="fade-up"
            data-aos-duration="400"
            className="md:text-6xl text-3xl text-gray-400"
          >
            Let's Build Web Stories Together.
          </h1>
        </div>
        <p
          data-aos-easing="linear"
          data-aos="fade-up"
          data-aos-duration="500"
          className="md:text-base text-sm text-gray-400 md:w-[65%] leading-[1.7em] tracking-wide"
        >
          I'm Fullstack developer with more focus on Frontend Engineering.
          Beyond pixels, I embrace continuous learning to stay at the forefront
          of evolving web technologies. My passion lies not only in lines of
          code but in the impact my work makes on enhancing user interactions
          and experiences, making me a dedicated developer of the digital realm.
        </p>
        <a
          data-aos-easing="linear"
          data-aos="fade-up"
          data-aos-duration="600"
          href="#contact"
          className="relative inline-flex items-center px-12 py-3 self-start overflow-hidden text-sm font-medium text-cyan-300 border-2 border-cyan-300 rounded-md hover:text-white group hover:bg-gray-50"
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
          <span className="relative">Message Me!</span>
        </a>
      </div>
    </section>
  );
};

export default Jumbotron;
