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
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  return (
    <nav className="bg-[var(--color-dark-blue)] h-[110px] flex flex-row justify-around items-center w-[100%]">
      <div className="logo flex justify-center items-center text-[24px] gap-[10px]">
        <a
          href="/"
          className="w-[75px] h-[75px] flex justify-center items-center"
        >
          <img src={logo} alt="" className="w-[70px] " />
        </a>
        Beginners
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
