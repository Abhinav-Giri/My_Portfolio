import React from "react";
import contact from "../assets/portfolio/contact-manager.png";
import shaadiBio from "../assets/portfolio/shaadiBio.jpg";
import ev from "../assets/portfolio/electric-vechile.jpg";
import gamed from "../assets/portfolio/game-dashboard.jpg";
import search from "../assets/portfolio/movie-search.jpg";
import cdn from "../assets/portfolio/cdn_generator.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      desc: "1. Shaadi Bio",
      src: shaadiBio,
      website: "https://shaadibio-one.vercel.app/",
      github: "https://github.com/Abhinav-Giri/ShaadiBio_MERN-App",
    },
    {
      id: 2,
      desc: "2. Search_Movie",
      src: search,
      website: "https://searchmovie-rho.vercel.app/",
      github:
        "https://github.com/Abhinav-Giri/Search_Movie_Project--ReactJs-NodeJs",
    },
    {
      id: 3,
      desc: "3. Live Gaming Leadership Board",
      src: gamed,
      website: "https://game-leadership-board.vercel.app/",
      github: "https://github.com/Abhinav-Giri/Live-Leadership-Board-Gaming-",
    },

    {
      id: 4,
      desc: "4. Electric Vechile Dashboard",
      src: ev,
      website: "https://electric-vechile-assessment-dashboard-xs6p.vercel.app/",
      github:
        "https://github.com/Abhinav-Giri/Electric_Vechile_Dashboard--ReactJs",
    },

    {
      id: 5,
      desc: "5.Olive Webpage",
      src: contact,
      website: "https://olive-landing-web-page.vercel.app/",
      github: "https://github.com/Abhinav-Giri/olive_landing-WebPage",
    },
    {
      id: 6,
      desc: "6. cdn_generator",
      src: cdn,
      website: "https://chatbot-cdngenerator.vercel.app/",
      github:
        "https://github.com/Abhinav-Giri/Chatbot_Generator-cdn_integrator",
    },
    //  {
    //   id: 7,
    //   desc:"7. ",
    //   src: "",
    //   website: "",
    //   github: ""
    // },
  ];
  return (
    <div
      name="portfolio"
      className="w-full px-20 pt-20 text-white bg-gradient-to-b from-black to-gray-800 lg:px-0"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            Some Self Projects
          </p>
          <p className="pt-5 pb-5">Explore my projects:</p>
        </div>

        <div className="grid gap-8 px-12 lg:grid-cols-2 sm:px-0">
          {portfolios.map(({ id, src, desc, website, github }) => (
            <div key={id} className="rounded-lg shadow-md shadow-gray-600">
              <div>
                <p className="font-bold text-center">{desc}</p>
              </div>
              <div className="w-full h-[220px] overflow-hidden rounded-md">
                <img
                  src={src}
                  alt={desc}
                  className="object-cover w-full h-full duration-200 hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-center">
                {website && (
                  <a
                    href={website}
                    type="button"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 text-center duration-200 hover:scale-105"
                  >
                    Demo
                  </a>
                )}
                <a
                  href={github}
                  type="button"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 text-center duration-200 hover:scale-105"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
