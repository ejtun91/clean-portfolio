"use client";

import Image from "next/image";
import React, { useState } from "react";

const Projects = () => {
  const [slice, setSlice] = useState(3);
  const projects = [
    {
      id: 1,
      title: "IPTV Gen",
      desc: "Website where you can find your country and pick any channels you want.",
      stack: ["React", "Node", "Redux", "NextJS"],
      links: [
        "https://github.com/ejtun91/iptv-gen",
        "https://iptvgenerate.com/",
      ],
    },
    {
      id: 2,
      title: "Crypto Track",
      desc: "Cryptocoins fetched with 3rd party api, login, register and follow favourite coin.",
      stack: ["React", "Firebase", "Material UI", "ChartJS"],
      links: [
        "https://github.com/ejtun91/crypto-app",
        "https://cryptottracker.netlify.app/",
      ],
    },
    {
      id: 3,
      title: "Review A Movie",
      desc: "This was one of my first projects, where I used 3rd party api for fetching movies and created backend for login in and making posts and comments for any video you like.",
      stack: ["React", "Node", "Firebase", "MongoDB"],
      links: [
        "https://github.com/ejtun91/reviewamovie",
        "https://reviewamovie.com/",
      ],
    },

    {
      id: 4,
      title: "IT Web Stuff",
      desc: "Webshop for the tech industry",
      stack: ["Angular", "NGRX", "Node"],
      links: [
        "https://github.com/ejtun91/webshopng-client",
        "https://github.com/ejtun91/webshopng-client",
      ],
    },
    {
      id: 5,
      title: "Path2Nowhere",
      desc: "Blog App where I comment and make observations on the latest news in the world.",
      stack: ["React", "Node"],
      links: [
        "https://github.com/ejtun91/reviewamovie",
        "https://reviewamovie.com/",
      ],
    },
    {
      id: 6,
      title: "IPTV Daily",
      desc: "This app is being used by hundreds so far. People from all around the world leave their own lists and share to the world.",
      stack: ["React", "Node"],
      links: [
        "https://github.com/ejtun91/iptv-mern",
        "https://freeiptvdailylists.com/",
      ],
    },
  ];

  return (
    <section id="work" className="projects-container py-[100px]">
      <div className="projects-wrapper items-center flex flex-col gap-20 justify-center container mx-auto lg:px-56 px-4">
        <div
          className="top flex w-full"
          data-aos-easing="linear"
          data-aos="fade-up"
        >
          <div className="left md:w-[65%] w-full">
            <div className="subtitle flex gap-2  items-center">
              <span className="text-cyan-300 md:mr-2 mr-1 text-xl self-end">
                02.
              </span>
              <span className="whitespace-nowrap md:text-2xl text-xl font-semibold text-gray-200">
                Things Done in Spare Time
              </span>
              <div className="h-[1px] w-full bg-gray-700"></div>
            </div>
          </div>
        </div>
        <div className="bottom flex w-full items-center flex-col gap-10 md:gap-28">
          <div
            className="row flex w-full items-center gap-10"
            data-aos-easing="linear"
            data-aos="fade-up"
          >
            <div className="right relative z-20 flex-[35%] bg-[#0c1f33ef] w-full md:bg-transparent p-5 items-start md:items-start justify-between h-full flex flex-col">
              <span className="subtitle text-cyan-300 text-sm">
                Featured Project
              </span>
              <h3 className="text-2xl text-gray-200">NgTableSculpt</h3>
              <div className="desc  text-left text-gray-300 md:bg-[#112240] shadow-2xl md:text-base pl-0 md:pl-[inherit] text-sm p-4 rounded-md relative md:w-[140%] z-30 my-5">
                This is NgTableSculpt, an Angular component library for handling
                large amounts of data. I created this out of pure necessity, as
                I found myself using data tables frequently, and other libraries
                were too limited and difficult to customize. It&apos;s for this
                reason that I wanted to share it with the public.
              </div>
              <div className="stack flex gap-4 text-sm text-gray-300">
                <span>Angular</span>
                <span>Typescript</span>
                <span>Tailwind</span>
              </div>
              <div className="links flex gap-5 items-center mt-3">
                <a
                  target="_blank"
                  href="https://www.npmjs.com/package/ng-table-sculpt"
                  className="git hover:text-cyan-300 transition-all cursor-pointer text-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 9H3v20h20V18M18 4h10v10m0-10L14 18"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="left absolute z-10 mx-auto flex-[55%] md:h-[400px] h-[340px]  w-full md:relative">
              <div className="overlay rounded-md absolute left-0 right-0 bottom-0 top-0 bg-[#67e8f961] z-10 cursor-pointer transition-all hover:bg-[transparent]"></div>
              <Image
                style={{ objectFit: "cover", objectPosition: "right" }}
                src={"/ngtablesculpt.png"}
                fill={true}
                alt="Mini Trello Clone"
                className="rounded-md"
              />
            </div>
          </div>
          <div
            className="row flex w-full items-center gap-10"
            data-aos-easing="linear"
            data-aos="fade-up"
          >
            <div className="left absolute z-10 mx-auto flex-[55%] md:h-[400px] h-[340px]  w-full md:relative">
              <div className="overlay rounded-md absolute left-0 right-0 bottom-0 top-0 bg-[#67e8f961] z-10 cursor-pointer transition-all hover:bg-[transparent]"></div>
              <Image
                style={{ objectFit: "cover" }}
                src={"/proj1.png"}
                fill={true}
                alt="Mini Trello Clone"
                className="rounded-md"
              />
            </div>
            <div className="right relative z-20 flex-[35%] bg-[#0c1f33ef] w-full md:bg-transparent p-5 items-start md:items-end justify-between h-full flex flex-col">
              <span className="subtitle text-cyan-300 text-sm">
                Featured Project
              </span>
              <h3 className="text-2xl text-gray-200">Mini Trello Clone</h3>
              <div className="desc md:text-right text-left text-gray-300 md:bg-[#112240] shadow-2xl md:text-base pl-0 md:pl-[inherit] text-sm p-4 rounded-md relative md:w-[140%] z-30 my-5">
                This was the latest project I was building. As I am using Trello
                every day, I was always curious about the technology behind, how
                the real time update works, connecting with other people etc..
                So I created basic version of Trello and learned a lot.
              </div>
              <div className="stack flex gap-7 text-sm text-gray-300">
                <span>Angular</span>
                <span>TypeScript</span>
                <span>Node</span>
                <span>Socket.io</span>
              </div>
              <div className="links flex gap-5 items-center mt-3">
                <a
                  target="_blank"
                  href="https://github.com/ejtun91/mini-trello-clone-back"
                  className="git hover:text-cyan-300 transition-all cursor-pointer text-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5.884 18.653c-.3-.2-.558-.456-.86-.816a50.59 50.59 0 0 1-.466-.579c-.463-.575-.755-.841-1.056-.95a1 1 0 1 1 .675-1.882c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.588.196 1.15.14c.024-.382.094-.753.202-1.096c-2.968-.725-4.648-2.64-4.648-6.396c0-1.238.37-2.355 1.058-3.291c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.583c.081-.024.127-.034.208-.047c.803-.123 1.937.17 3.415 1.097a11.731 11.731 0 0 1 2.687-.308c.912 0 1.819.103 2.684.308c1.477-.933 2.614-1.227 3.422-1.097c.085.014.158.032.218.051a1 1 0 0 1 .616.58c.487 1.215.52 2.296.302 3.19c.691.936 1.058 2.045 1.058 3.292c0 3.758-1.674 5.666-4.642 6.393c.125.415.19.878.19 1.38c0 .664-.002 1.299-.007 2.01c0 .19-.002.394-.005.706a1 1 0 0 1-.018 1.957c-1.14.228-1.984-.532-1.984-1.524l.002-.447l.005-.705c.005-.707.008-1.338.008-1.997c0-.697-.184-1.152-.426-1.361c-.661-.57-.326-1.654.541-1.751c2.966-.334 4.336-1.483 4.336-4.66c0-.955-.312-1.745-.913-2.405a1 1 0 0 1-.189-1.044c.166-.415.236-.957.095-1.614l-.01.002c-.491.14-1.11.44-1.858.95a1 1 0 0 1-.833.135a9.626 9.626 0 0 0-2.592-.35c-.89 0-1.772.12-2.592.35a1 1 0 0 1-.829-.133c-.753-.507-1.374-.807-1.87-.947c-.143.653-.072 1.194.093 1.607a1 1 0 0 1-.189 1.044c-.597.656-.913 1.459-.913 2.404c0 3.172 1.371 4.33 4.322 4.66c.865.098 1.202 1.178.545 1.749c-.193.167-.43.732-.43 1.364v3.149c0 .986-.834 1.726-1.96 1.529a1 1 0 0 1-.04-1.963v-.99c-.91.062-1.661-.087-2.254-.484Z"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://mini-trello-clone-front-d4lfln0m1-ejtun91.vercel.app/"
                  className="git hover:text-cyan-300 transition-all cursor-pointer text-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 9H3v20h20V18M18 4h10v10m0-10L14 18"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            className="row flex w-full items-center gap-10"
            data-aos-easing="linear"
            data-aos="fade-up"
          >
            <div className="right relative z-20 flex-[35%] bg-[#0c1f33ef] w-full md:bg-transparent p-5 items-start md:items-start justify-between h-full flex flex-col">
              <span className="subtitle text-cyan-300 text-sm">
                Featured Project
              </span>
              <h3 className="text-2xl text-gray-200">Pottery Webshop</h3>
              <div className="desc  text-left text-gray-300 md:bg-[#112240] shadow-2xl md:text-base pl-0 md:pl-[inherit] text-sm p-4 rounded-md relative md:w-[140%] z-30 my-5">
                This is the ecommerce web app made with React. User can login
                and make an order and admin has dashboard to observe and
                maintain his products. This was really fun project where I
                connected nice design and logic.
              </div>
              <div className="stack flex gap-4 text-sm text-gray-300">
                <span>React</span>
                <span>ChartJS</span>
                <span>Node</span>
                <span>Redux</span>
                <span>Stripe</span>
              </div>
              <div className="links flex gap-5 items-center mt-3">
                <a
                  target="_blank"
                  href="https://github.com/ejtun91/webshopng-client"
                  className="git hover:text-cyan-300 transition-all cursor-pointer text-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5.884 18.653c-.3-.2-.558-.456-.86-.816a50.59 50.59 0 0 1-.466-.579c-.463-.575-.755-.841-1.056-.95a1 1 0 1 1 .675-1.882c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.588.196 1.15.14c.024-.382.094-.753.202-1.096c-2.968-.725-4.648-2.64-4.648-6.396c0-1.238.37-2.355 1.058-3.291c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.583c.081-.024.127-.034.208-.047c.803-.123 1.937.17 3.415 1.097a11.731 11.731 0 0 1 2.687-.308c.912 0 1.819.103 2.684.308c1.477-.933 2.614-1.227 3.422-1.097c.085.014.158.032.218.051a1 1 0 0 1 .616.58c.487 1.215.52 2.296.302 3.19c.691.936 1.058 2.045 1.058 3.292c0 3.758-1.674 5.666-4.642 6.393c.125.415.19.878.19 1.38c0 .664-.002 1.299-.007 2.01c0 .19-.002.394-.005.706a1 1 0 0 1-.018 1.957c-1.14.228-1.984-.532-1.984-1.524l.002-.447l.005-.705c.005-.707.008-1.338.008-1.997c0-.697-.184-1.152-.426-1.361c-.661-.57-.326-1.654.541-1.751c2.966-.334 4.336-1.483 4.336-4.66c0-.955-.312-1.745-.913-2.405a1 1 0 0 1-.189-1.044c.166-.415.236-.957.095-1.614l-.01.002c-.491.14-1.11.44-1.858.95a1 1 0 0 1-.833.135a9.626 9.626 0 0 0-2.592-.35c-.89 0-1.772.12-2.592.35a1 1 0 0 1-.829-.133c-.753-.507-1.374-.807-1.87-.947c-.143.653-.072 1.194.093 1.607a1 1 0 0 1-.189 1.044c-.597.656-.913 1.459-.913 2.404c0 3.172 1.371 4.33 4.322 4.66c.865.098 1.202 1.178.545 1.749c-.193.167-.43.732-.43 1.364v3.149c0 .986-.834 1.726-1.96 1.529a1 1 0 0 1-.04-1.963v-.99c-.91.062-1.661-.087-2.254-.484Z"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href="https://claypotteryshop.com/"
                  className="git hover:text-cyan-300 transition-all cursor-pointer text-gray-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 9H3v20h20V18M18 4h10v10m0-10L14 18"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="left absolute z-10 mx-auto flex-[55%] md:h-[400px] h-[340px]  w-full md:relative">
              <div className="overlay rounded-md absolute left-0 right-0 bottom-0 top-0 bg-[#67e8f961] z-10 cursor-pointer transition-all hover:bg-[transparent]"></div>
              <Image
                style={{ objectFit: "cover", objectPosition: "right" }}
                src={"/proj2.png"}
                fill={true}
                alt="Mini Trello Clone"
                className="rounded-md"
              />
            </div>
          </div>
          <div className="other w-full mt-10">
            <div
              data-aos-easing="linear"
              data-aos="fade-up"
              className="title text-center mb-3 text-2xl text-gray-300 font-semibold"
            >
              Other Noteworthy Projects
            </div>
            <span
              data-aos-easing="linear"
              data-aos="fade-up"
              className="subtitle text-center block text-cyan-300"
            >
              view the archive
            </span>
            <div className="folders mt-10 flex gap-4 md:flex-row flex-col flex-wrap">
              {projects.slice(0, slice).map((project) => (
                <div
                  key={project.id}
                  data-aos-easing="linear"
                  data-aos="fade-up"
                  data-aos-duration={`${project.id * 100}`}
                  className="folder rounded-md hover:-translate-y-3 cursor-pointer transition-all py-4 px-7 bg-[#112240] flex-[30%] flex flex-col gap-5"
                >
                  <div className="icon flex items-center justify-between">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M216 74h-85.51l-27.9-27.9a13.94 13.94 0 0 0-9.9-4.1H40a14 14 0 0 0-14 14v144.62A13.39 13.39 0 0 0 39.38 214h177.51A13.12 13.12 0 0 0 230 200.89V88a14 14 0 0 0-14-14ZM40 54h52.69a2 2 0 0 1 1.41.59L113.51 74H38V56a2 2 0 0 1 2-2Zm178 146.89a1.11 1.11 0 0 1-1.11 1.11H39.38a1.4 1.4 0 0 1-1.38-1.38V86h178a2 2 0 0 1 2 2Z"
                      />
                    </svg>
                    <div className="links flex gap-5 items-center mt-3">
                      <a
                        target="_blank"
                        href={project.links[0]}
                        className="git hover:text-cyan-300 transition-all cursor-pointer text-gray-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M5.884 18.653c-.3-.2-.558-.456-.86-.816a50.59 50.59 0 0 1-.466-.579c-.463-.575-.755-.841-1.056-.95a1 1 0 1 1 .675-1.882c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.588.196 1.15.14c.024-.382.094-.753.202-1.096c-2.968-.725-4.648-2.64-4.648-6.396c0-1.238.37-2.355 1.058-3.291c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.583c.081-.024.127-.034.208-.047c.803-.123 1.937.17 3.415 1.097a11.731 11.731 0 0 1 2.687-.308c.912 0 1.819.103 2.684.308c1.477-.933 2.614-1.227 3.422-1.097c.085.014.158.032.218.051a1 1 0 0 1 .616.58c.487 1.215.52 2.296.302 3.19c.691.936 1.058 2.045 1.058 3.292c0 3.758-1.674 5.666-4.642 6.393c.125.415.19.878.19 1.38c0 .664-.002 1.299-.007 2.01c0 .19-.002.394-.005.706a1 1 0 0 1-.018 1.957c-1.14.228-1.984-.532-1.984-1.524l.002-.447l.005-.705c.005-.707.008-1.338.008-1.997c0-.697-.184-1.152-.426-1.361c-.661-.57-.326-1.654.541-1.751c2.966-.334 4.336-1.483 4.336-4.66c0-.955-.312-1.745-.913-2.405a1 1 0 0 1-.189-1.044c.166-.415.236-.957.095-1.614l-.01.002c-.491.14-1.11.44-1.858.95a1 1 0 0 1-.833.135a9.626 9.626 0 0 0-2.592-.35c-.89 0-1.772.12-2.592.35a1 1 0 0 1-.829-.133c-.753-.507-1.374-.807-1.87-.947c-.143.653-.072 1.194.093 1.607a1 1 0 0 1-.189 1.044c-.597.656-.913 1.459-.913 2.404c0 3.172 1.371 4.33 4.322 4.66c.865.098 1.202 1.178.545 1.749c-.193.167-.43.732-.43 1.364v3.149c0 .986-.834 1.726-1.96 1.529a1 1 0 0 1-.04-1.963v-.99c-.91.062-1.661-.087-2.254-.484Z"
                          />
                        </svg>
                      </a>
                      <a
                        target="_blank"
                        href={project.links[1]}
                        className="git hover:text-cyan-300 transition-all cursor-pointer text-gray-300"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 32 32"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 9H3v20h20V18M18 4h10v10m0-10L14 18"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="title text-xl text-gray-200">
                    {project.title}
                  </div>
                  <p className="desc text-gray-300 text-sm">{project.desc}</p>
                  <div className="stack text-sm flex gap-4 text-gray-400">
                    {project.stack.map((st, index) => (
                      <span key={index}>{st}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="show-container relative mt-10 text-center">
              <a
                onClick={() =>
                  slice < projects.length
                    ? setSlice(projects.length)
                    : setSlice(3)
                }
                href="#_"
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
                <span className="relative">
                  {slice == projects.length ? "Show Less" : " Show More"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
