import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
require("bootstrap");

export default function NavBar() {
  const stylenav =
    "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-white";

  const activeStyleNav = "text-red-1999 bg-red-700";

  const socialIconsStyle = { height: 35, width: 35 };

  return (
    <header className="bg-black">
      <div className="container mx-auto flex justify-between">
        <NavLink
          to="/"
          exact
          className="inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-white text-4xl font-bold cursive tracking-widest"
        >
          Andre Silva
        </NavLink>
        <nav className="flex ml-auto">
          <NavLink to="/post" className={stylenav}>
            Blog Posts
          </NavLink>
          <NavLink to="/project" className={stylenav}>
            Projects
          </NavLink>
          <NavLink to="/about" className={stylenav}>
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/drethesilvaa"
            className="mr-4"
            target={"_blank"}
            fgColor="#fff"
            style={socialIconsStyle}
          ></SocialIcon>
          <SocialIcon
            url="https://www.linkedin.com/in/andréssilva/"
            className="mr-4"
            target={"_blank"}
            fgColor="#fff"
            style={socialIconsStyle}
          ></SocialIcon>
        </div>
      </div>
    </header>
  );
}
