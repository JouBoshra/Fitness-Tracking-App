import React from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const NavBar = ({ links }) => (
  <nav className="bg-white">
    <ul className="space-y-3">
      {links.map(({ to, label, icon, isActive }) => (
        <li key={label} className="flex justify-center">
          <Link to={to}>
            <button
              className={`px-4 py-2 flex items-center space-x-3 rounded-full transition-all duration-300 transform ${
                isActive ? "bg-primary text-white" : "bg-gray-100 text-primary"
              } hover:scale-110 hover:shadow-lg`}
            >
              {icon && <Icon type={icon} />}
              <span>{label}</span>
            </button>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default NavBar;
