import React from "react";
import { logo } from "../assets/Elements";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Experiences",
      href: "/experiences",
    },
    // {
    //   name: "Pricing",
    //   href: "/pricing",
    // },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <nav className="bg-(--color-dark-blue) h-[100px] flex flex-row justify-around items-center w-[100%]">
      <div className="logo flex justify-center items-center text-[30px] gap-[12px]">
        <a
          href="/"
          className="w-[75px] h-[75px] flex justify-center items-center"
        >
          <img src={logo} alt="" className="w-[70px] " />
        </a>
        Team Beginners
      </div>

      <ul className="flex">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.href}
              className="!pt-[12px] !pb-[12px] !pr-[22px] !pl-[22px] text-[16.5px] "
            >
              {link.name}
              <div className="line"></div>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
