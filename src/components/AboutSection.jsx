import React from "react";

const AboutSection = () => {
  // Skills data
  const skills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 70 },
    { name: "Git/GitHub", level: 70 },
    { name: "UI/UX Design", level: 50 },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Profile */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Frontend Developer & AI Enthusiast
            </h3>

            <p className="text-gray-300 leading-relaxed">Hi, I’m Saumya!</p>

            <p className="text-gray-300 leading-relaxed">
              I have a Bachelor's in Computer Science and a Master's in Computer
              Applications. As a passionate front-end developer, I specialize in
              React, Redux, Tailwind CSS, and JavaScript, crafting seamless and
              responsive user experiences.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Currently, I’m expanding my expertise into back-end development to
              become a well-rounded full-stack developer. My goal is to build
              scalable and efficient products from the ground up, blending
              creativity with functionality.
              <br />
              <br />
              Let’s connect and build something amazing!
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {/* Experience cards */}
              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-500 flex-1 min-w-[200px]">
                <h4 className="text-white text-lg font-semibold mb-1">1</h4>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-purple-500 flex-1 min-w-[200px]">
                <h4 className="text-white text-lg font-semibold mb-1">3</h4>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>

              {/* Future work */}

              {/* <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-blue-400 flex-1 min-w-[200px]">
                <h4 className="text-white text-lg font-semibold mb-1">30+</h4>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div> */}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right column - Skills */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-xl border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-6">
              Skills & Expertise
            </h3>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional skills */}
            <div className="mt-8">
              <h4 className="text-white text-lg mb-3">Additional Skills</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Redux",
                  "Bootstrap",
                  "Prompt Engineering",
                  "Figma",
                  "Public Speaking",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute right-0 w-1/3 h-64 bg-gradient-to-l from-blue-600/10 to-transparent" />
    </section>
  );
};

export default AboutSection;
