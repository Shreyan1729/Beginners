import React from "react";
import * as Icons from "../../assets/WebDevelopment/WebDevelopment";
import Typed from "typed.js";
import { ProjectDetails, ProjectsInfoWebDevelop } from "../../assets/Elements";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Helmet } from "react-helmet";

const shuffleArray = (array) => {
  const shuffled = [...array]; // Copy array to avoid mutation
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const WebDevelopment = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ProjectsInfoWebDevelop.map(
        ({ url, text }) =>
          `<a href='${url}' target='__blank' class="typed-link">${text}</a>`
      ),
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const iconList = Object.values(Icons);
  const randomIcons = shuffleArray([...iconList, ...iconList]); // Duplicate & shuffle

  return (
    <>
      <Helmet>
        <title>Team Beginners | Web Development Projects</title>
      </Helmet>

      <main className="ProjectsWebDevelopment">
        <div className="grid">
          {randomIcons.map((icon, index) => (
            <div className="image-div" key={index}>
              <img
                key={index}
                src={icon}
                alt={`WebDevelopmentIcon${index + 1}`}
                className="w-[60px]"
              />
            </div>
          ))}
          <div className="text">
            <h1>Web Development</h1>
            <p>
              <b> Projects Name :</b> <span ref={el} />
            </p>
          </div>
        </div>

        <section id="projects" className="flex items-center">
          <h1 className="text-[45px] font-bold">All of my Projects</h1>
          <p className="w-[80%] !mt-[20px] text-[17px] text-gray-200">
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p>

          <main style={{ "--quantity": ProjectDetails.length }}>
            {ProjectDetails.map((project, index) => (
              <div
                className="project bg-(--color-dark-green)"
                key={project.url}
              >
                <div className="img-div">
                  <a href={project.url} target="__blank">
                    <FaArrowLeft className="left" />
                  </a>
                  <a
                    className="github"
                    href={`https://github.com/Shreyan1729/`}
                    target="__blank"
                  >
                    <FaGithub />
                  </a>
                  <img src={project.img} alt="" />
                </div>
                <h2 className="text-[25px] font-bold">{project.name}</h2>
                <p className="text-left text-gray-300">{project.description}</p>
                <ul>
                  {project.frameWorks.map((frameWork) => (
                    <li key={frameWork} className={frameWork}>
                      {frameWork}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </main>
        </section>
      </main>
    </>
  );
};

export default WebDevelopment;
