import React from "react";
import * as Icons from "../../assets/WebDevelopment/WebDevelopment";
import Typed from "typed.js";
import { ProjectsInfoWebDevelop } from "../../assets/Elements";

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
    <main className="ProjectsWebDevelopment">
      <div className="grid">
        {randomIcons.map((icon, index) => (
          <div className="image-div">
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
    </main>
  );
};

export default WebDevelopment;
