import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="about-container  py-[100px]"
      data-aos-easing="linear"
      data-aos="fade-up"
    >
      <div className="about-wrapper items-center flex md:flex-row flex-col gap-20 justify-center container mx-auto lg:px-64 px-5">
        <div className="left flex-[60%] flex flex-col gap-10">
          <div className="subtitle flex gap-2  items-center">
            <span className="text-cyan-300 mr-2 text-xl self-end">01.</span>
            <span className="whitespace-nowrap text-2xl font-semibold text-gray-200">
              About Me
            </span>
            <div className="h-[1px] w-full bg-gray-700"></div>
          </div>
          <div className="desc flex flex-col gap-4 text-gray-400">
            <p>
              Hello there! My name is Antonio. Since secondary school, I have
              always been fascinated by computers and technology. My journey
              began when I wrote my first static website as I was about to go to
              university.
            </p>
            <p>
              Long story short, I am currently working as a Frontend Developer
              for a company based in Dublin, and what I really like about this
              role is creating meaningful connections between users and the
              digital products they rely on.
            </p>
            <p>
              Some technologies I&apos;ve been working with for quite a while
              now:
            </p>
          </div>
          <div className="stack text-gray-400 text-sm flex w-full items-center gap-32">
            <ul className="flex flex-col gap-3">
              <li className="before:content-['▹'] before:absolute before:left-0 before:text-cyan-300 relative pl-[20px]">
                TypeScript
              </li>
              <li className="before:content-['▹'] before:absolute before:left-0 before:text-cyan-300 relative pl-[20px]">
                Angular
              </li>
              <li className="before:content-['▹'] before:absolute before:left-0 before:text-cyan-300 relative pl-[20px]">
                React
              </li>
            </ul>
            <ul className="flex flex-col gap-3">
              <li className="before:content-['▹'] before:absolute before:left-0 before:text-cyan-300 relative pl-[20px]">
                Node
              </li>
              <li className="before:content-['▹'] before:absolute before:left-0 before:text-cyan-300 relative pl-[20px]">
                Redux
              </li>
              <li className="before:content-['▹'] before:absolute before:left-0 before:text-cyan-300 relative pl-[20px]">
                NGRX
              </li>
            </ul>
          </div>
        </div>
        <div className="right flex-[40%] w-full h-full">
          <div className="image-wrapper relative min-h-[300px] left-2 md:left-0 h-[1px] flex items-stretch">
            <div className="overlay rounded-md bg-center hover:border-[4px] border-cyan-300 relative right-4 bottom-4 hover:right-0 hover:bottom-0 z-10 bg-cover bg-[linear-gradient(#67e8f961,#67e8f961),url('/profile.jpg')] cursor-pointer hover:bg-[linear-gradient(transparent,transparent),url('/profile.jpg')] w-full h-full transition-all"></div>
            <div className="square rounded-md absolute top-0 bottom-0 right-0 left-0 border-solid border-[#58C8DB] border-[4px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
