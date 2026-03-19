import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      label: "GitHub",
      icon: <FaGithub size={30} />,
      href: "https://github.com/Abhinav-Giri",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      label: "LinkedIn",
      icon: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/iamabhinavgiri/",
    },
    {
      id: 3,
      label: "WhatsApp",
      icon: <FaWhatsapp size={30} />,
      href: "https://wa.me/919599379011",
    },
    {
      id: 4,
      label: "Mail",
      icon: <HiOutlineMail size={30} />,
      href: "mailto:iamabhinavgiri@gmail.com",
    },
    {
      id: 5,
      label: "Resume",
      icon: <BsFillPersonLinesFill size={30} />,
      href: "/resume-abhinav-giri.pdf", // place in /public
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col fixed top-[35%] left-0 z-50">
      <ul>
        {links.map(({ id, label, icon, href, style = "", download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-44 h-14 px-4 
            translate-x-[-100px] hover:translate-x-[-10px] 
            hover:rounded-md duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              className="flex items-center justify-between w-full text-white"
              aria-label={label}
              target={download ? "_self" : "_blank"}
              rel="noreferrer"
              download={download || false}
            >
              <span>{label}</span>
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;