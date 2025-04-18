import React, { useState } from "react";

const companies = [
  {
    name: "Comping",
    title: "Frontend Engineer",
    time: "Mar 2024 – Present (Croatia)",
    responsibilities: [
      "Working primarily as an Angular engineer, developing and maintaining scalable, high-performance web applications.",
      "Collaborating closely with UI/UX designers to implement pixel-perfect and responsive user interfaces.",
      "Contributing to code reviews, refactoring efforts, and performance optimization to improve overall code quality and maintainability.",
    ],
  },
  {
    name: "My Cloud PA",
    title: "Frontend Developer",
    time: "Jan 2021 – March 2024 (Dublin, Ireland)",
    responsibilities: [
      "Worked on various projects where Angular was heavily involved, creating robust applications for clients and maintaining the same.",
      "Collaborated with designers, managers, and other engineers to transform creative concepts into production realities for clients and stakeholders.",
    ],
  },
];

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState(0);

  return (
    <section id="experience" className="py-[100px]">
      <div className="experience-wrapper items-center flex md:flex-row !flex-col gap-20 justify-center container mx-auto lg:px-64 px-5">
        <div className="subtitle flex gap-2  items-center !w-[55%] justify-start !mr-auto">
          <span className="text-cyan-300 mr-2 text-xl self-end">01.</span>
          <span className="whitespace-nowrap text-2xl font-semibold text-gray-200">
            Where I've worked
          </span>
          <div className="h-[1px] w-full bg-gray-700"></div>
        </div>
        <div className="content flex 2xl:flex-row flex-col gap-6">
          <div className="w-full md:w-1/4 border-l border-gray-700 flex flex-col text-left">
            {companies.map((company, index) => (
              <button
                key={index}
                onClick={() => setSelectedCompany(index)}
                className={`pl-4 py-3 text-sm font-mono text-left border-l-2 ${
                  selectedCompany === index
                    ? "text-cyan-300 border-cyan-300 bg-[#112240]"
                    : "text-gray-400 border-transparent hover:text-cyan-300 transition-all duration-200 hover:bg-[#112240]"
                }`}
              >
                {company.name}
              </button>
            ))}
          </div>

          <div className="w-full md:w-3/4 text-gray-300 !transition-all opacity-0 animate-fadeIn">
            <h3 className="text-xl font-semibold text-white mb-1">
              {companies[selectedCompany].title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              {companies[selectedCompany].time}
            </p>
            <ul className="flex flex-col gap-4 list-none">
              {companies[selectedCompany].responsibilities.map((item, idx) => (
                <li
                  key={idx}
                  className="before:content-['▹'] before:mr-2 before:text-cyan-300 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
