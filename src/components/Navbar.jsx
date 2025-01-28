import React from "react";
import { logo } from "../assets/Elements";
import { Link } from "react-router-dom";

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
    <nav className="bg-[var(--color-dark-blue)] h-[110px] flex flex-row justify-around items-center">
      <div className="logo flex justify-center items-center text-[24px] gap-[10px]">
        <a
          href="/"
          className="w-[75px] h-[75px] rounded-[50%] border-teal-500 border-[2px] flex justify-center items-center"
        >
          <img src={logo} alt="" className="w-[70px]" />
        </a>
        Beginners
      </div>

      <ul className="flex">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className="!pt-[12px] !pb-[12px] !pr-[22px] !pl-[22px] hover:bg-[var(--color-dark-green)] text-[17px] duration-[0.2s] rounded-[10px]"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
