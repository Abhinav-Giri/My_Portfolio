import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full px-6 pt-20 text-white bg-gradient-to-b from-gray-800 to-black md:px-12 lg:px-0"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        
        {/* Heading */}
        <div className="pb-8">
          <p className="inline text-4xl font-bold border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6 text-lg leading-relaxed md:text-xl">
          <p>
            Hi, I’m <span className="font-semibold text-cyan-400">Abhinav Giri</span>, a 
            Software Engineer with 3+ years of experience building scalable and user-friendly web applications.
          </p>

          <p>
            I specialize in <span className="font-medium">React.js, JavaScript, and TypeScript</span>, 
            and have hands-on experience with the MERN stack, MySQL, Git, and Docker. 
            I enjoy creating clean, efficient, and maintainable solutions while focusing on performance and user experience.
          </p>

          <p>
            I am passionate about continuous learning and always strive to stay updated with modern technologies. 
            I’m currently looking for opportunities where I can contribute, grow, and build impactful products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;