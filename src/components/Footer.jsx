import React from "react";
import { logo } from "../assets/Elements";
import { Link } from "react-router-dom";

const Footer = () => {
  const links = [
    {
      name: "Web Development",
    },
    {
      name: "Web Design",
    },
    {
      name: "UX/UI Design",
    },
    {
      name: "App Development",
    },
  ];

  const privacy = [
    {
      name: "Privacy & Policy",
      href: "/privacy-policy",
    },
    {
      name: "Terms & Conditions",
      href: "/terms-and-conditions",
    },
    {
      name: "About Us",
      href: "/about-us",
    },
  ];

  return (
    <footer className="Footer bg-(--color-dark-gray) w-[100%] !pt-[70px] !pb-[50px]">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center items-center">
          <div className="logo flex justify-start items-center text-[30px] gap-[12px] font-bold">
            <a
              href="/"
              className="w-[75px] h-[75px] flex justify-center items-center "
            >
              <img src={logo} alt="" className="w-[70px] " />
            </a>
            Team Beginners
          </div>

          <p className="!mt-[10px] !ml-[5px] text-neutral-300 !font-(family-name:--font-primary)">
            Our expert team crafts high-quality, custom websites with <br />
            innovation and precision.
          </p>
        </div>

        <div className="w-[80%] flex justify-around">
          <div>
            <h2 className="text-[23px] text-neutral-400 !mb-[15px]">
              All Serveries
            </h2>
            <ul>
              {links.map((link) => (
                <li className="!mt-[7px] !mb-[7px]" key={link.name}>
                  <Link className="text-[17px] cursor-pointer hover:text-blue-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[23px] text-neutral-400 !mb-[15px] opacity-[0]">
              All Serveries
            </h2>
            <ul>
              {privacy.map((link) => (
                <li className="!mt-[7px] !mb-[7px]" key={link.name}>
                  <Link className="text-[17px] cursor-pointer hover:text-blue-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[23px] text-neutral-400 !mb-[15px]">
              All Serveries
            </h2>
            <ul>
              {privacy.map((link) => (
                <li className="!mt-[7px] !mb-[7px]" key={link.name}>
                  <Link
                    to={link.href}
                    className="text-[17px] cursor-pointer hover:text-blue-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="copy"></div>
    </footer>
  );
};

export default Footer;
