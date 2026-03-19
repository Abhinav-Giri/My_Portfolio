import React from "react";

// Assets
import reactLogo from "../assets/react.png";
import mysqlLogo from "../assets/mysql.png";
import tailwindLogo from "../assets/tailwind.png";
import nodeLogo from "../assets/nodes.png";
import htmlLogo from "../assets/html5.png";
import typescriptLogo from "../assets/typescript.png";
import nextjsLogo from "../assets/nextjs.png";
import javascriptLogo from "../assets/javascript.png";
import expressLogo from "../assets/expressjs.png";
import mongodbLogo from "../assets/mongodb.png";
import githubLogo from "../assets/github.png";
import dockerLogo from "../assets/docker.jpeg";
import genAILogo from "../assets/genAI.jpeg";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: javascriptLogo,
      title: "JavaScript",
      style: "shadow-yellow-400",
    },
    {
      id: 2,
      src: typescriptLogo,
      title: "TypeScript",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: htmlLogo,
      title: "HTML5 & CSS3",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: reactLogo,
      title: "React",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      src: nextjsLogo,
      title: "Next.js",
      style: "shadow-gray-400",
    },
    {
      id: 6,
      src: tailwindLogo,
      title: "Tailwind CSS & Material UI",
      style: "shadow-cyan-500",
    },
    {
      id: 7,
      src: nodeLogo,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: expressLogo,
      title: "Express.js",
      style: "shadow-gray-500",
    },
    {
      id: 9,
      src: mongodbLogo,
      title: "MongoDB & Mongoose",
      style: "shadow-green-700",
    },
    {
      id: 10,
      src: mysqlLogo,
      title: "MySQL",
      style: "shadow-blue-700",
    },
    {
      id: 11,
      src: githubLogo,
      title: "Git & GitHub",
      style: "shadow-gray-300",
    },
    {
      id: 12,
      src: dockerLogo,
      title: "Docker",
      style: "shadow-blue-400",
    },
    {
      id: 13,
      src: genAILogo,
      title: "GenAI",
      style: "shadow-purple-500",
    },
  ];

  return (
    <div
      name="experience"
      className="w-full px-6 pt-20 text-white bg-gradient-to-b from-gray-800 to-black md:px-12 lg:px-0"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        
        {/* Heading */}
        <div>
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6 text-gray-300">
            Technologies I’ve worked with
          </p>
        </div>

        {/* Grid */}
        <div className="grid w-full grid-cols-2 gap-8 py-8 text-center sm:grid-cols-3 md:grid-cols-4">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-300 py-4 rounded-xl ${style}`}
            >
              <img
                src={src}
                alt={title}
                loading="lazy"
                className="object-contain w-16 h-16 mx-auto md:w-20 md:h-20"
              />
              <p className="mt-4 text-sm md:text-base">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;